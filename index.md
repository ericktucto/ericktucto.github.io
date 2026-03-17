---
layout: home
activedLink: history
---


<div id="presentation">
  <img
    class="shadow"
    src="{{ '/assets/img/perfil.png' | relative_url }} "
    alt="una foto de @ericktucto sosteniendo unos cubos rubik"
  />
  <div class="mt-[20px]">
    <h1>
      <span>Erick Tucto</span>
      <p><em>Full Stack Developer · PHP · JavaScript · Linux · Docker</em></p>
    </h1>
    <br>
    <p>Soy <strong>Erick Tucto</strong>, programador y desarrollador web.</p>
    <p>
      Llevo 9+ años construyendo software escalables y eficientes para las empresas.
      Especializado en backend, integración con API, Testing automatizado y despliegues
      con Docker en entornos Linux.
    </p>
    <p>
      Mi trabajo es enfocado a código limpio, mantenible y orientado a rendimiento.
      Resolviendo problemas complejos y optimizando procesos.
    </p>
    <p>Aquí encontrarás mis publicaciones y desarrollos — hechos con dedicación y enfocados en resolver problemas reales.</p>
    <!--<p markdown="1" class="grid justify-start mt-[20px]">
      [Contactar](/contacto){: .btn-primary}
    </p>-->
  </div>
</div>

<div class="br-bg"></div>

<div class="super-title">
  <h2 class="subtitle">Publicaciones</h2>
</div>

<p>
  Lista de publicaciones, busca la que mas te guste y disfruta de la lectura.
</p>

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
