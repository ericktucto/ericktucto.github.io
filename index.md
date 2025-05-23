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
    <div class="card__container shadow">
      <div class="card__image">
        <img src="{{ post.image  }}"/>
      </div>
      <div class="card__data">
        <div class="card__date">{{ post.date | date: "%-d %B %Y" }}</div>
        <div class="card__title">
          <span>{{ post.title }}</span>
        </div>
        <div class="card__description">
          <div class="description__sms">{{ post.excerpt | remove: '<strong> | remove: '</strong> }}</div>
          <div class="description__readmore">
            <a class="btn-primary" href="{{ post.url }}">LEER MÁS</a>
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
