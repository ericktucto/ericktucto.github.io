---
layout: home
activedLink: history
---

<div id="presentation" class="relative md:h-[800px] grid place-items-center">
  <img src="{{ '/assets/img/waves.svg' | relative_url }}" alt="" class="hero-bg hidden min-[800px]:block" aria-hidden="true" fetchpriority="high" />
  <div class="relative flex justify-center w-full">
    <div class="grid grid-cols-1 min-[800px]:grid-cols-[300px_auto] min-[800px]:px-0 gap-5 max-w-[800px]">
      <div class="relative flex justify-center items-center">
        <img
          class="z-10 border-primary-300 border-4 size-[300px] animate-(--profile-morph) rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
          src="{{ '/assets/img/perfil_300x300.webp' | relative_url }} "
          alt="una foto de @ericktucto sosteniendo unos cubos rubik"
        />
        <img src="{{ '/assets/img/waves.svg' | relative_url }}" alt="" class="block min-[800px]:hidden hero-bg" aria-hidden="true" fetchpriority="high" />
      </div>
      <div class="mx-8 min-[800px]:mx-0 px-4 rounded-lg hero-content">
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
  </div>
</div>

<div class="grid justify-center mb-8">
  <div id="technologies">
    <div class="marquee">
      <span class="x-icon" data-size="92px" data-icon="laravel"></span>
      <span class="x-icon" data-size="92px" data-icon="vue"></span>
      <span class="x-icon" data-size="92px" data-icon="python"></span>
      <span class="x-icon" data-size="92px" data-icon="react"></span>
      <span class="x-icon" data-size="92px" data-icon="typescript"></span>
      <span class="x-icon" data-size="92px" data-icon="nodejs"></span>
      <span class="x-icon" data-size="92px" data-icon="javascript"></span>
      <span class="x-icon" data-size="92px" data-icon="symfony"></span>
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
        alt_image=post.alt_image
        date=post_date
        categories=post.categories
        short_description=short_description
        url=post.url
      %}
    {% endfor %}
  </div>
</div>
