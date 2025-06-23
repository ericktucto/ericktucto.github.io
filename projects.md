---
layout: projects
---

<h1>Lista de proyectos</h1>

<div class="pack__cards">
{% for project in site.projects %}
  {% assign short_description = project.excerpt | remove: '<strong>' | remove: '</strong>' %}
  {% capture url %}/projects/{{ project.slug }}{% endcapture %}
  {% include templates/card.html
    title=project.title
    image=project.image
    date=project.release
    categories=project.categories
    short_description=short_description
    url=url
  %}
{% endfor %}
</div>
