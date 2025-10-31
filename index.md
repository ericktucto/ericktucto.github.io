---
layout: home
activedLink: history
---


<div id="presentation">
  <img
    class="shadow"
    src="{{ '/assets/img/perfil.jpg' | relative_url }} "
    alt="una foto de @ericktucto sosteniendo unos cubos rubik"
  />
  <div class="mt-[20px]">
    <h3><strong>Erick Tucto</strong></h3>
    <p><em>Full Stack Developer · PHP · JavaScript · Linux · Docker</em></p>
    <br>
    <p>Soy <strong>Erick Tucto</strong>, programador y desarrollador web.</p>
    <p>Me apasiona crear proyectos útiles, explorar nuevas tecnologías y compartir lo que aprendo.</p>
    <p>Aquí encontrarás mis publicaciones y desarrollos — hechos con dedicación y enfocados en resolver problemas reales.</p>
    <p markdown="1" class="grid justify-start mt-[20px]">
      [Contactar](/contacto){: .btn-primary}
    </p>
  </div>
</div>
<div class="br-bg"></div>

<div class="super-title">
  <h1>Publicaciones</h1>
</div>

<div id="history">
  {% for post in site.posts %}
    {% assign short_description = post.excerpt | remove: '<strong>' | remove: '</strong>' %}
    {% assign post_date = post.date | date: "%-d %B %Y" %}
    {% include templates/card.html
      title=post.title
      image=post.image
      date=post_date
      categories=post.categories
      short_description=short_description
      url=post.url
    %}
  {% endfor %}
</div>
