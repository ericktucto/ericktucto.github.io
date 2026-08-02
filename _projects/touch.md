---
layout: projects
name: Touch
featured: true
order: 2
github: https://github.com/ericktucto/touch
title: "Conoce Touch: microframework PHP sobre estándares PSR"
slug: touch
release: "alpha-1"
categories: ["php", "framework", "project", "backend"]
image: https://i.postimg.cc/J0383Xdc/web.jpg
imageDescription: 'Una ventana generica'
activedLink: projects
excerpt_separator: <!--more-->
---

PHP carga con mala fama, pero pocas veces merecida. **¿Y si no necesitas Laravel**
 **para tener un backend sólido?** Te presento Touch, un microframework que existe
 para demostrar justo eso.
<!--more-->

Hay una idea muy extendida de que hacer un backend serio en PHP significa,
 obligatoriamente, montar Laravel o Symfony. Y no es cierto. PHP es un lenguaje
 que permite construir aplicaciones web sólidas apoyándose en unos cuantos
 componentes bien elegidos, sin arrastrar un framework completo cuando no lo
 necesitas.

Touch nace precisamente para demostrar esa idea: que con PHP y las piezas
 correctas, crear un backend es más sencillo de lo que parece.

## Los dos extremos, y por qué Touch está en medio

Recuerdo esa época en la que muchos hacían su propio framework desde cero:
 routing, contenedor de dependencias, capa de base de datos, todo a mano. Para mí
 eso siempre fue engorroso y difícil de mantener. Terminabas reinventando
 problemas que ya estaban resueltos, y probados, por otra gente.

El otro extremo es tomar Laravel o Symfony para cualquier proyecto —por pequeño
 que sea— y aceptar todas sus convenciones sin cuestionarlas.

Touch busca un punto intermedio. En lugar de escribir todo a mano, se apoya en
 paquetes maduros del ecosistema PHP, instalados con Composer. No reinventa la
 rueda, pero tampoco te obliga a cargar con un framework enorme cuando tu proyecto
 no lo pide.

## ¿Qué es Touch?

Touch es un microframework para desarrollar aplicaciones web en PHP. Es sencillo
 de usar y sigue una filosofía distinta: **tú decides dónde va cada cosa.**

No te sujeta a convenciones rígidas. No te dice "los controladores van aquí" o
 "los modelos van allá". En cambio, te invita a entender un principio de diseño:
 para extender la funcionalidad, dependes de interfaces y abstracciones, no de
 implementaciones concretas. Te da las piezas base y confía en que estructures tu
 proyecto según tus necesidades.

## Los paquetes que componen Touch

Touch no reinventa nada. Orquesta componentes maduros, cada uno resolviendo una
 parte del problema:

- **PHP-DI** como contenedor de inyección de dependencias. Es el corazón de
  Touch: gestiona cómo se construyen y conectan tus clases, apoyándose en
  autowiring para que no tengas que cablear todo a mano.
- **Componentes de Symfony** para las piezas que no vale la pena escribir desde
  cero, como el manejo de peticiones y respuestas HTTP.
- **Estándares PSR** como columna vertebral de todo el diseño.

La idea es simple: cada pieza hace una cosa bien, y Touch las coordina. Si mañana
 necesitas algo que Touch no trae, lo instalas con Composer y lo integras. No hay
 un "modo Touch" de hacer las cosas que te encierre.

## Construido sobre PSR: un framework para usar el estándar

Esta es la decisión de diseño más importante de Touch. En lugar de inventar sus
 propias interfaces, Touch se adhiere a los estándares **PSR** (PHP Standards
 Recommendations) definidos por el PHP-FIG.

¿Por qué importa? Porque PSR define contratos comunes que muchísimos paquetes de
 PHP ya cumplen. Al programar contra esas interfaces —y no contra implementaciones
 concretas— Touch te da algo muy valioso: **libertad de elección.** ¿No te gusta
 el logger que viene por defecto? Cualquier logger que cumpla el estándar encaja.
 ¿Prefieres otro cliente HTTP o middleware? Si respeta el PSR correspondiente,
 funciona sin fricción.

Esto conecta directo con la filosofía de Touch: dependes de interfaces y
 abstracciones, no de implementaciones. PSR es exactamente eso, pero elevado a
 estándar de toda la comunidad. Touch no es un framework que te pide adoptar *su*
 forma de hacer las cosas, sino uno que te permite usar el estándar de PHP y
 elegir las piezas que quieras encima.

## Ejemplo: un "hola mundo" en Touch

Toda esta teoría se entiende mejor con código. Así se ve una aplicación mínima
 en Touch, de principio a fin:

```php
<?php
require __DIR__ . '/../vendor/autoload.php';

use Touch\Application;
use Touch\Core\Kernel;
use Touch\Http\Response;

$app = Application::create(new Kernel());

$app->route()->get("/", fn() => Response::html("Hello world!!!"));

$app->run();
```

Eso es todo lo necesario para tener un backend respondiendo. Creas la aplicación
 a partir del kernel, defines una ruta que devuelve una respuesta, y la pones a
 correr. Sin estructura de carpetas impuesta, sin configuración obligatoria de por
 medio: solo las piezas que necesitas para empezar.

Fíjate en el detalle: `Response::html(...)` es una respuesta concreta, pero por
 debajo Touch trabaja contra las abstracciones de las que hablábamos. A medida que
 tu aplicación crece, esa misma ruta puede recibir dependencias inyectadas por
 PHP-DI, pasar por middlewares PSR, o devolver otros tipos de respuesta, sin que la
 base cambie.

## ¿Por qué existe Touch?

Touch existe porque PHP permite construir muchas cosas por sí solo. PHP no es un
 lenguaje completo, tiene sus límites. Pero si tu proyecto no tiene requerimientos
 especiales, avanzar sobre componentes ya hechos y testeados te puede ir muy bien.

Es también un ejercicio de aprendizaje. Construir Touch me obligó a entender cómo
 funcionan por dentro las piezas que la mayoría da por sentadas: el contenedor de
 inyección de dependencias, el ciclo de una petición HTTP, el enrutamiento. Si
 alguna vez te preguntaste qué hace realmente un framework debajo del capó,
 escribir uno pequeño es la mejor forma de descubrirlo.

## ¿Por qué usar Touch frente a otros frameworks?

Esta pregunta no siempre necesita respuesta. Es como preguntar ¿React o Vue? ¿Go
 o Rust? ¿Django o Flask? A veces la elección es cuestión de contexto, de gustos,
 o de lo que quieres aprender en el camino.

Touch no pretende reemplazar a Laravel ni competir con Symfony. Es una
 herramienta para quien quiere un backend ligero, control total sobre la
 estructura, y entender de verdad las bases sobre las que se apoyan los frameworks
 grandes.

Y esa, al final, es la invitación: si te da curiosidad lo que hay debajo del
 capó, clona el repositorio, ábrelo, y mira cómo unas pocas piezas bien elegidas
 bastan para levantar un backend en PHP.

<br>

Gracias por quedarte hasta el final y leer este post. Espero que te sirva y que
 sigas construyendo tus aplicaciones web con criterio, eligiendo cada pieza con
 intención, sin morir en el intento.

Sígueme en mi canal de YouTube [@ericktucto](https://www.youtube.com/@ericktucto),
 en mi LinkedIn [@ericktucto](https://www.linkedin.com/in/ericktucto/) y tiktok
 [@erickenelcodigo](https://www.tiktok.com/@erickenelcodigo).
