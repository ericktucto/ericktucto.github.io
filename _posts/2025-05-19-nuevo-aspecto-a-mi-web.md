---
layout: post
title: 'Nuevo aspecto a mi web'
categories: ['changelog']
videoId: '8KCEQpg65aw'
image: https://i.postimg.cc/J0383Xdc/web.jpg
dateModified: '2025-05-19'
activedLink: history
excerpt_separator: <!--more-->
---

**Despues de mucho tiempo, tiene un nuevo aspecto. Ahora trato simplificar el
codigo de mi web.**


<!--more-->
Hola en esta ocasión me he dedicado a arreglar mi pagina web. Cuesta mucho,
porque lo he dejado abandonado mas de 5 años, pero veo la oportunidad para poner
en practica mis habilidades para factorizar sitios webs, ademas que puedo
iniciar mi blog que tanto quise hacer.

### Cambios y objectivos

Hay varias cosas que tuve que cambiar de mi sitio web y objetivos que tengo para
mi sitio web.

#### Cambios

  - **Nueva UI:** Hora estará menos cargada de imagenes y mas ligera.
  - **Sidebar accessible:** Esto hace referencia a la usabilidad en smartphones
  no es fácil apretar botones que estan en la parte superior de la pantalla, si
  usas una mano. Por lo que se movió de lugar ([1be7ddf](https://github.com/ericktucto/ericktucto.github.io/commit/1be7ddfe782aee37329c8e57bbfb28502ae03dc2))
  - **Compartir post:** Ahora puedes compartir el post que te guste ([0ae3afe](https://github.com/ericktucto/ericktucto.github.io/commit/0ae3afef00c45cff8b85274ac19cf2e2cd9fe002))
  - **Copiar codigo inline:** Los codigos que encuentras en inline podras copiarlos ([abea159](https://github.com/ericktucto/ericktucto.github.io/commit/abea159a2c6c055dddb52c98c2432d8c23e1fab9))
  - **Boton subir:** Subir al principio de la página.
  - **Uso de typescript:** Este no es como tal una aplicacion web, no creo que
  sea necesario usar typescript, pero lo incluyo mas por costumbre ([ffd7c71](https://github.com/ericktucto/ericktucto.github.io/commit/ffd7c71b8f50514404446bfb702df2d24a39800b))

#### Objectivos

  - Crear contenido útil y consejos, estos los compartiré en mi Linkedin
  [@ericktucto](https://www.linkedin.com/in/ericktucto/) y canal de Youtube
  [@ericktucto](https://www.youtube.com/@ericktucto).
  - Colocar caracteristicas para hacer cómoda la lectura de mi blog, como:
  darkmode, guardar post, etc.

### Travesía al editar el sitio web

Editar el sitio web tuvo cierta demora, Jekyll no había tocado un tiempo, durante
este tiempo cambiaron las cosas como Github Pages usa Jekyll para crear sitios
estáticos, por ejemplo, ahora debo usar la dependencia de github-pages en lugar
de jekyll en mi Gemfile. Recuerdo editar la pagina web, y al subir el código,
dejó de funcionar, pero esa ya fue corregido.

Antes tenia un proyecto llamada Stix Grid que consistía en usar la nueva display
grid, algo asi como un framework para css tipo Bootstrap, pero ahora lo he dado
de baja, por que no avance y ya han pasado muchos años, como esta ahora mismo css
solo es necesario usar css puro en mi sitio web, ademas creo que usar tailwind css
esta mejor.

Tambien tuve que actualizar las depencias de javascript, uso webpack para transpilar
mi codigo javascript a un codigo mas legible para el navegador, sin embargo opte
por pasar a typescript. Que puedo decir, amo el tipado.

Buscar diseños, fuentes, y recursos fue algo que tomo cierto tiempo. Hay cosas
sobre diseño que me falta terminar, por que veo que esta el tamaño de la fuente
sea correcta, tambien la posicion de los objectos falta afinar. Enrealidad, estoy
en modo edición fast para terminar la pagina web, luego dare algunos detalles más.

Mi deseo que los articulos les lleguen a servir. Esto ha sido un resumen de mis
cambios hechos hasta ahora. Siganme en mi canal de youtube [@ericktucto](https://www.youtube.com/@ericktucto)
y en mi linkedin [@ericktucto](https://www.linkedin.com/in/ericktucto/), estaré
subiendo contenido.
