---
layout: home
activedLink: history
---

<div id="presentation">
  <img
    class="shadow"
    src="{{ '/assets/img/profile.jpg' | relative_url }} "
    alt="una foto de @ericktucto sosteniendo unos cubos rubik"
  />
  <div>
    <h3>Hola, soy <strong>Erick Tucto</strong></h3>
    <p>Soy programador y desarrollador web.</p>
    <p>Aqui encontraras mis proyectos y publicaciones.</p>
    <p>Lo que encuentres aqui te será útil</p>
  </div>
</div>
<div class="br-bg"></div>

<div class="super-title">
  <h1>Publicaciones</h1>
</div>

<div id="history" class="grid-12 narrow col-12 items-center">
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
