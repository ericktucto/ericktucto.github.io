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
tener que aprender el lenguaje de programación de [#Rust]({{ site }}/categories/rust)
tiene su curva, pero una vez que agarras el ritmo llegas a comprender como construir
mediante este lenguaje.

Antes de seguir, ten invito a que veas el video que hice sobre esta app

{% include templates/youtube-player.html id=page.videoId %}

Como se observa en el video, la aplicación resulta sencilla de usar, solo dando
click en el boton QR, sin embargo no fue facil de construirla. Tenia problemas
al compilar, la consola arrojaba salidas a cada rato sobre: _las estructuras no
estan siendo correctamente implementadas, permisos de usuarios, problemas de
dependencias_, poco a poco fui resolviendo dichos errores. Algo que me ayudó
mucho fue usar [Cambalache](https://gitlab.gnome.org/jpu/cambalache) una muy
util herramienta para crear interfaces graficas de GTK-4.

### ¿Cómo se obtiene los codigos QR y las contraseñas?
