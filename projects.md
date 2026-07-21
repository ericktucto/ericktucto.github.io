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
</div>
