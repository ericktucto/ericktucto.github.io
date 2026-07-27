#!/usr/bin/env bash
#
# newpost.sh — Crea un post de Jekyll con la estructura inicial lista para llenar.
#
# Uso:
#   ./newpost.sh "Título de mi post"
#   ./newpost.sh "Título de mi post" categoria1 categoria2
#
# Genera un archivo en _posts/ con el nombre YYYY-MM-DD-titulo-del-post.md
# y el front matter precargado.

set -euo pipefail

# --- Verificar que se pasó un título ---
if [ $# -eq 0 ]; then
  echo "Error: falta el título."
  echo "Uso: ./newpost.sh \"Título de mi post\" [categoria1 categoria2 ...]"
  exit 1
fi

# --- Carpeta donde viven los posts ---
POSTS_DIR="_posts"

# --- Datos de entrada ---
TITLE="$1"
shift  # descarta el título; lo que quede son las categorías

# Categorías: si no pasas ninguna, usa 'general' por defecto
if [ $# -gt 0 ]; then
  # arma el formato ['cat1', 'cat2'] uniendo cada categoría con ', '
  SEP=""
  CAT_LIST=""
  for cat in "$@"; do
    CAT_LIST="${CAT_LIST}${SEP}'${cat}'"
    SEP=", "
  done
  CATEGORIES="[${CAT_LIST}]"
else
  CATEGORIES="['general']"
fi

# --- Fecha de hoy ---
DATE=$(date +%Y-%m-%d)

# --- Generar el slug (título -> titulo-del-post) ---
# 1) pasa a minúsculas
# 2) reemplaza tildes y ñ por su equivalente ascii (explícito, no depende de iconv)
# 3) reemplaza todo lo que no sea letra/número por guiones
# 4) recorta guiones sobrantes al inicio/final
SLUG=$(echo "$TITLE" \
  | tr '[:upper:]' '[:lower:]' \
  | sed -E '
      s/á/a/g; s/é/e/g; s/í/i/g; s/ó/o/g; s/ú/u/g; s/ü/u/g; s/ñ/n/g;
    ' \
  | sed -E 's/[^a-z0-9]+/-/g' \
  | sed -E 's/^-+|-+$//g')

# --- Nombre y ruta final del archivo ---
FILENAME="${DATE}-${SLUG}.md"
FILEPATH="${POSTS_DIR}/${FILENAME}"

# --- Crear la carpeta _posts si no existe ---
mkdir -p "$POSTS_DIR"

# --- Evitar sobrescribir un post existente ---
if [ -f "$FILEPATH" ]; then
  echo "Error: ya existe un post con ese nombre: $FILEPATH"
  exit 1
fi

# --- Escribir el archivo con la estructura inicial ---
cat > "$FILEPATH" <<EOF
---
layout: post
title: '${TITLE}'
categories: ${CATEGORIES}
image:
alt_image: ''
dateModified: '${DATE}'
activedLink: history
excerpt_separator: <!--more-->
---
**[DESCRIPCION CORTA]**
<!--more-->

[INTRODUCCIÓN — un párrafo.]

### [Primera sección]

[Contenido de la primera sección.]

### [Segunda sección]

[Contenido de la segunda sección.]

### [Cierre]

[Cierre del post. Puedes agregar tus enlaces:]
Sígueme en mi canal de YouTube [@ericktucto](https://www.youtube.com/@ericktucto)
y en mi LinkedIn [@ericktucto](https://www.linkedin.com/in/ericktucto/).
EOF

# --- Mensaje de confirmación ---
echo "✓ Post creado: $FILEPATH"
echo "  Título:     $TITLE"
echo "  Categorías: $CATEGORIES"
echo "  Fecha:      $DATE"
