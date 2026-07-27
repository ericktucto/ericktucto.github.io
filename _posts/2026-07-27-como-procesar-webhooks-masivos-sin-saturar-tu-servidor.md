---
layout: post
title: 'Cómo procesar webhooks masivos sin saturar tu servidor'
categories: ['backend', 'arquitectura']
image: /assets/img/posts/post-3.webp
alt_image: 'Ilustración vectorial donde un gran volumen de correos electrónicos y mensajes ingresan a un servidor central, se organizan en una cola de procesamiento y llegan uno a uno a la computadora de una persona.'
dateModified: '2026-07-27'
activedLink: history
excerpt_separator: <!--more-->
---
Diez webhooks los procesa cualquiera. **¿Pero 50 mil llegando de golpe?** Ahí
 es donde tu servidor se cae. Te muestro **el patrón para recibirlos todos sin**
 perder ninguno.
<!--more-->

Hay una diferencia enorme entre un endpoint que funciona y uno que aguanta. El
 primero procesa diez webhooks sin despeinarse. El segundo sobrevive cuando
 llegan 50 mil en minutos.

La mayoría de nosotros construimos el primero sin darnos cuenta, hasta que un
 pico de carga real nos enseña la diferencia por las malas. Así que vale la pena
 preguntarse antes de que pase: **¿qué tiene que hacer tu servidor para recibir una
 avalancha de webhooks sin saturarse ni perder eventos?**

## Escenario

Tu aplicación se integra con una API de mensajería —digamos WhatsApp Business—
 y lanzas una campaña de 50 mil mensajes. Hasta aquí, todo bien.

El problema empieza después. Por cada mensaje, WhatsApp necesita avisarte qué
 pasó: si se envió, se entregó, se leyó o falló. ¿Y cómo te avisa? Llamando a tu
 servidor, una petición por cada cambio de estado.

Haz la cuenta: 50 mil mensajes, cada uno pasando por varios estados, todos
 llegando en cuestión de minutos. Son cientos de miles de peticiones golpeando un
 endpoint que probablemente escribiste pensando en recibir una a la vez. En
 desarrollo, con un mensaje de prueba, funcionaba perfecto. Pero producción no
 es desarrollo: producción es la avalancha.

## ¿Qué es un webhook?

Hagamos una pausa rápida por si el término no te es familiar. Eso que acabo de
 describir —que WhatsApp llame a tu servidor para avisarte algo— es un **webhook**:
 un endpoint tuyo que un servicio externo invoca cuando ocurre un evento, para
 notificártelo.

La alternativa sería que tú preguntaras: llamar a WhatsApp cada pocos segundos
 para ver si hay novedades (lo que se conoce como *polling*). El webhook invierte
 eso —en lugar de que tú preguntes, te avisan cuando pasa algo—. Es más eficiente
 y más inmediato.

El detalle es que esa comodidad tiene un costo cuando los avisos no llegan de a
 uno, sino por miles.

## El primer error: procesar en el momento

La forma intuitiva de resolver esto es la más directa: llega el webhook, lo
 proceso ahí mismo y respondo. Procesarlo significa hacer el trabajo real —guardar
 en la base de datos, actualizar el estado del mensaje, quizás notificar a otro
 sistema— y recién entonces devolver la respuesta.

Con pocos avisos, funciona sin problema. El drama aparece bajo carga. Si cada
 procesamiento tarda aunque sea un poco, y de golpe llegan miles de peticiones a
 la vez, tu servidor se satura: las peticiones se acumulan esperando su turno y
 los tiempos de respuesta se disparan.

Y aquí está el detalle que lo empeora todo: el proveedor espera una respuesta
 rápida. Si tardas demasiado, asume que la entrega falló y te reenvía el mismo
 webhook. Ahora tienes las peticiones nuevas más las reintentadas, alimentando una
 avalancha que crece sola.

El error de fondo es hacer demasiado trabajo antes de responder. La solución
 empieza por separar dos cosas que parecían una.

## Recibir no es procesar

Aquí está el cambio de mentalidad que lo resuelve todo: recibir un webhook y
 procesarlo son dos responsabilidades distintas, y no tienen por qué ocurrir al
 mismo tiempo.

Tu endpoint debería hacer solo lo mínimo indispensable: comprobar por encima que
 el webhook es legítimo, guardarlo tal cual llegó, y responder de inmediato. Nada
 más. Esa respuesta rápida es todo lo que el proveedor necesita para quedarse
 tranquilo y no reintentar.

El trabajo pesado —interpretar el evento, actualizar el estado, notificar a otros
 sistemas— se hace después, por detrás, sin que el proveedor tenga que esperar a
 que termines. Recibir es instantáneo; procesar va a su propio ritmo.

¿Pero cómo se procesa "después"? Ahí entran dos piezas: la cola y el worker.

## La cola y el worker

El truco está en dividir el trabajo en dos programas separados. El endpoint recibe
 el webhook, lo deja en una **cola** y responde de inmediato. Por otro lado, un
 **worker** —un proceso que corre aparte— va sacando los eventos de la cola y
 procesándolos a su propio ritmo.

Piénsalo como un buzón. El cartero deja las cartas rápido y se va; no espera a que
 las leas. Tú las abres y atiendes después, sin prisa. La cola es el buzón; el
 worker eres tú leyendo. El endpoint deja el evento y responde; el worker hace el
 trabajo pesado por detrás.

Así el endpoint queda libre en milisegundos. Aunque lleguen cincuenta mil de
 golpe, los absorbe rápido y los apila en la cola; el worker marca el ritmo real de
 procesamiento. A esa capacidad de amortiguar el pico se le llama **backpressure**.

Así se vería el endpoint, reducido a lo esencial:

```php
public function handle(Request $request)
{
    // 1. Validación superficial (¿el webhook es legítimo?)
    // ... verificar firma/token ...

    // 2. Dejar el evento en la cola, sin procesarlo aún
    ProcessWebhook::dispatch($request->all());

    // 3. Responder de inmediato
    return response()->json(['received' => true], 202);
}
```

El `202 Accepted` es la respuesta correcta aquí: le dice al proveedor "lo recibí y
 lo procesaré", sin afirmar que ya terminé. Todo el trabajo real vive dentro de
 `ProcessWebhook`, que el worker ejecutará por su cuenta.

Esto se implementa con una cola dedicada como RabbitMQ o SQS, o con Redis para algo
 más simple. Y si un worker no da abasto, levantas más en paralelo, repartiéndose la
 misma cola.

Con esto ya no pierdes por saturación. Pero aparece un problema nuevo y sutil.

## Los detalles que lo hacen confiable

Con cola y worker ya no te satura el pico. Pero quedan dos enemigos sutiles que
 aparecen justo cuando el sistema está en producción.

**El primero: los duplicados.** Los proveedores a veces mandan el mismo webhook
 más de una vez —por sus reintentos, por reintentos de red, por diseño—. Si no lo
 controlas, registras el mismo estado dos veces o, peor, ejecutas una acción doble:
 notificar dos veces, cobrar dos veces, contar doble.

La solución es la **idempotencia**: diseñar el procesamiento para que recibir el
 mismo evento dos veces produzca el mismo resultado que recibirlo una. La forma más
 común es apoyarse en el ID único que trae cada evento:

```php
public function process(array $event)
{
    // ¿Ya procesé este evento antes?
    if (WebhookEvent::where('event_id', $event['id'])->exists()) {
        return; // Duplicado: lo ignoro
    }

    WebhookEvent::create(['event_id' => $event['id']]);
    // ... procesar el evento ...
}
```

**El segundo: perder eventos cuando algo se cae.** ¿Qué pasa si tu worker muere a
 mitad de procesar? Aquí entran varias garantías que no tienes que construir desde
 cero —las buenas herramientas de colas ya las traen—:

- **Persistir antes de procesar:** si el evento se guardó, no se pierde aunque el
  worker caiga.
- **Colas durables:** sobreviven a un reinicio del servidor; no viven solo en
  memoria.
- **Acuse (ack):** el worker confirma "ya lo procesé" y solo entonces el evento se
  elimina de la cola. Si no confirma —porque se cayó—, el evento vuelve a estar
  disponible para que otro worker lo tome.
- **Dead Letter Queue:** los eventos que fallan una y otra vez se apartan en una
  cola especial para revisarlos, en vez de reintentar para siempre y trabar todo.

Con estas garantías, el sistema absorbe el pico *y* aguanta caídas sin perder
 eventos. Juntemos todo.

## El patrón completo

Recapitulemos el recorrido en una sola imagen. Cuando llega un webhook:

1. **Recibes rápido** y validas por encima que es legítimo.
2. **Guardas y encolas** el evento, sin procesarlo aún.
3. **Respondes de inmediato** con un `202`, para que el proveedor no reintente.
4. **Procesas por detrás**, con uno o varios workers a su propio ritmo.
5. **Descartas duplicados** con idempotencia, apoyándote en el ID del evento.
6. **No pierdes nada** gracias a la durabilidad, el ack y los reintentos.

Ninguna de estas piezas es complicada por sí sola. Lo que las vuelve valiosas es
 que juntas resuelven el problema de raíz: separar el *recibir* del *procesar*.

Y eso es, al final, lo que separa un endpoint que funciona en las pruebas con diez
 llamadas de uno que aguanta producción real con cientos de miles. No es cuestión
 de un servidor más potente, sino de un diseño que absorbe el pico en lugar de
 pelear contra él.

En un próximo artículo veremos cómo implementar este patrón en concreto.

<br>

Gracias por quedarte hasta el final y leer este post. Espero que este artículo te
 ayude mucho, y que sigas programando y estructurando tus aplicaciones web de forma
 robusta, sin morir en el intento.

Sígueme en mi canal de YouTube [@ericktucto](https://www.youtube.com/@ericktucto),
 en mi LinkedIn [@ericktucto](https://www.linkedin.com/in/ericktucto/) y tiktok
 [@erickenelcodigo](https://www.tiktok.com/@erickenelcodigo).
