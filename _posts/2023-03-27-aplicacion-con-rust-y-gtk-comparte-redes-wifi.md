---
layout: post
title: 'Cree una aplicación con Rust y GTK para compartir redes wifi'
categories: ['rust', 'gtk']
videoId: 'zdUhljHZVvo'
image: https://i.ytimg.com/vi/zdUhljHZVvo/sddefault.jpg
dateModified: '2025-05-22'
activedLink: history
excerpt_separator: <!--more-->
---

**Un pequeña aplicación con Rust y GTK para compartir redes wifi mediante QR.
Ayuda a comprender el uso de Rust y GTK para la crearcion de aplicaciones nativas.**
<!--more-->

Seré sincero, programar esta aplicación tuvo su curva de aprendizaje pronunciada
tener que aprender el lenguaje de programación de [#Rust][rust] tiene su curva,
pero una vez que agarras el ritmo llegas a comprender como construir mediante
este lenguaje.

Antes de seguir, ten invito a que veas el video que hice sobre esta app

{% include templates/youtube-player.html id=page.videoId %}

Como se observa en el video, la aplicación resulta sencilla de usar, solo dando
click en el boton QR, sin embargo no fue facil de construirla. Tenia problemas
al compilar, la consola arrojaba salidas a cada rato sobre: _las estructuras no
estan siendo correctamente implementadas, permisos de usuarios, problemas de
dependencias_, poco a poco fui resolviendo dichos errores. Algo que me ayudó
mucho fue usar [Cambalache][cambalache] una muy util herramienta para crear
interfaces graficas de GTK-4.

### ¿Cómo se obtiene los codigos QR y las contraseñas?

Para obtener el codigo QR se hace busqueda a los directorios `/var/lib/connman`
y a `/etc/NetworkManager/system-connections` y se extraen los datos de la red
wifi, como estos directorios tienen permisos de root, por ello es necesario que
ingreses la contrasena de tu usuario. Por este motivo esta app solo esta
disponible para linux. Para construir la imagen QR se usa [QRCode][qrencode]

### ¿Por que el uso se esta aplicacion?

Esta pregunta puede que algunos se hagan por que entornos de escritorio como
Plasma o Gnome hacen dichas cosas, pero esta aplicacion va dirido mas que nada
a entornos o tiling managers que no tienen esta caracteristica. Por ejemplo,
xfce,lxde, i3wm, bspwm, dwm, spectrwm, qtile, ywm, herbstluftwm, openbox, etc.
Actualmente esta distribuido para lpkg, el manejador de paquetes de [Loc-OS][locos].
No llegue colocarlos para otras distribuciones pero se pueden hacer, pero no
creo hacerlo por ahora.

Espero que te guste la aplicacion y al auditar el repositorio te ayude a como
crear aplicaciones con Rust y GTK.

[rust]: {{ site.baseurl }}/categories#rust
[cambalache]: https://gitlab.gnome.org/jpu/cambalache
[qrencode]: https://crates.io/crates/qrcode
[locos]: https://loc-os.com/
