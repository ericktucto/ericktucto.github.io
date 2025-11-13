---
layout: projects
name: WifiQR-GTK
github: https://github.com/ericktucto/wifiqr-gtk
title: "Comparte tus redes wifi de tu pc con WiFiQR-GTK"
slug: wifiqr-gtk
release: "v1"
categories: ["rust", "gtk", "qr", "application"]
image: https://i.ytimg.com/vi/zdUhljHZVvo/sddefault.jpg
imageDescription: 'Ejemplo de uso de WiFiQR-GTK, esta la app abierta mostrando un QR para acceder'
excerpt_separator: <!--more-->
---

**Aplicación para compartir tus redes wifi mediante QR. Este proyecto esta hecho
con rust y gtk. Soporta NetworkManager y Connman**
<!--more-->

¿Puedes compartir tu red wifi? Algunos entornos como KDE o GNOME tienen una funcionalidad
para compartir tu red wifi, creo imaginar, no encontré ninguna. Como quise aprender
rust y gtk cree esta aplicación donde puedes compartir tu red wifi, pero tiene
limitaciones.


### ¿Que es WiFiQR?

Es un proyecto de rust que genera un qr con la informacion de tu red wifi, como
puedes observar en la imagen principal de este articulo, bastará con usar la
camará de tu celular para exceder a el, tambien puede tomarle una captura de
pantalla a este QR, imprimirlo y dejarlo disponible cerca para que alguien pueda
escanearlo y utilizar tu red wifi.

### ¿Que limitaciones presenta?

Por ahora solo funciona para NetworkManager y Connman, y en redes wifi donde
tienen una seguridad de contraseña y nombre, como WEP o WPA2. Recuerdo estar en
una edificacion donde para acceder es necesario tener usuario y contraseña
basado en un registro. No se como explicarlo, pero bueno, en fin. No se podia,
¿como se comparte es con un QR? un poco imposible.
