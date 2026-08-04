---
layout: default
activedLink: projects
---

<div class="max-w-[900px] mx-auto px-7 pb-30">
  <div class="grid w-full text-center my-8 gap-4">
    <h1 class="font-bold text-5xl">Lista de proyectos</h1>
    <p class="text-base text-bg-300">Ideas, aprendizajes y experiencias sobre desarrollo de software.</p>
  </div>

  <div class="pack__cards">
  {% for project in site.projects %}
    {% assign short_description = project.excerpt | remove: '<strong>' | remove: '</strong>' %}
    {% assign img_slug = project.slug_image | default: project.slug %}
    {% assign card_image = site.cdn_image | append: '/projects/' | append: img_slug | append: '/cover-16x9.webp' %}
    {% capture url %}/projects/{{ project.slug }}/{% endcapture %}
    {% include templates/card.html
      title=project.title
      image=card_image
      alt_image=project.alt_image
      date=project.release
      categories=project.categories
      short_description=short_description
      url=url
    %}
  {% endfor %}
  </div>
</div>
