---
layout: home
activedLink: home
---

<div id="presentation">
  <div class="relative w-full gap-8">
      <img src="{{ '/assets/img/waves.svg' | relative_url }}" alt="ondas azules usadas de fondo" class="hero-bg" aria-hidden="true" fetchpriority="high" />
      <div class="grid md:grid-cols-2 items-center justify-items-between pt-4 md:pt-16 pb-16 min-h-[calc(100vh-54px)] mx-auto max-w-[1200px] md:min-w-[600px] gap-20 md:px-8 px-4">
        <div class="bg-100">
          <h1 class="mb-4">
            <span class="block text-4xl md:text-7xl font-extrabold leading-none">
              Erick Tucto
            </span>
            <span class="text-primary-200 text-xl italic">Desarrollador Senior Full Stack en Perú</span>
          </h1>
          <p class="text-md leading-10">
            Soy <strong>Erick Tucto</strong>, programador y desarrollador web con
            más de 10 años construyendo software escalable y eficiente.
            Especializado en backend, integración con APIs, testing
            automatizado y despliegues con Docker en entornos Linux.
            Mi trabajo se enfoca en código limpio, mantenible y orientado
            a rendimiento. Resuelvo problemas complejos y optimizo
            procesos para generar impacto real.
          </p>
          <div class="flex gap-4 mt-[20px]">
            <a href="/assets/cv.pdf" class="btn-primary flex items-center gap-2" download>
              <span class="x-icon fill-white" data-size="20px" data-icon="download-file"></span> Descargar CV
            </a>
            <a href="#contacto" class="btn-outline flex items-center gap-2 text-primary-300 hover:text-white" data-scroll="true">
              <span class="x-icon" data-size="20px" data-icon="mail"></span> Contactar
            </a>
          </div>
        </div>
        <img
          class="relative border-primary-300 border-4 md:size-[360px] lg:size-[400px] size-[300px] animate-(--profile-morph) rounded-[30%_70%_70%_30%/30%_30%_70%_70%] justify-self-center md:justify-self-end"
          src="{{ '/assets/img/perfil_600x600.webp' | relative_url }}"
          alt="Erick Tucto, desarrllador full stack"
          fetchpriority="high"
          decoding="async"
        />
      </div>
  </div>
</div>

<section id="experiencia" class="bg-(--bg-100) py-20 px-6">
  <div class="mx-auto max-w-6xl">
    <header class="mb-16 flex items-start gap-4">
      <svg class="mt-1 h-9 w-9 shrink-0 text-primary-300" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
      <div>
        <h2 class="text-4xl font-bold leading-tight text-(--text-300)">
          Experiencia Profesional
        </h2>
        <p class="mt-1 text-base text-primary-100">
          Más de 10 años construyendo soluciones robustas y escalables
        </p>
      </div>
    </header>
    <ol class="relative">
      <div class="absolute top-4 bottom-4 left-[112px] hidden w-px bg-(--bg-300) md:block" aria-hidden="true"></div>
      {% for job in site.data.experiencia %}
      <li class="relative flex flex-col gap-5 pb-14 last:pb-0 md:flex-row md:gap-0">
        <div class="flex shrink-0 md:items-start md:w-24 md:justify-end">
          <span class="rounded-md bg-primary-300 px-3 py-1.5 text-(length:--small-size)
                       font-semibold whitespace-nowrap text-(--text-100)">
            {{ job.badge }}
          </span>
        </div>
        <div class="hidden w-8 shrink-0 justify-center pt-1.5 md:flex">
          <span class="relative z-10 h-3.5 w-3.5 rounded-full bg-primary-200 ring-4 ring-(--bg-100)"></span>
        </div>
        <div class="flex min-w-0 flex-1 flex-col gap-6 lg:flex-row">
          <div class="min-w-0 flex-1">
            <h3 class="text-(length:--middle-text-size) font-bold text-primary-300">
              {{ job.cargo }}{% if job.stack %} <span class="font-normal italic">({{ job.stack }})</span>{% endif %}
            </h3>
            <p class="mt-1 text-(length:--small-size) text-primary-100">
              {{ job.empresa }} · {{ job.periodo }}
            </p>
            <p class="mt-3 text-base leading-relaxed text-(--text-400)">
              {{ job.descripcion }}
            </p>
          </div>
          <ul class="shrink-0 space-y-2.5 rounded-lg bg-(--bg-200) p-5 lg:w-80">
            {% for logro in job.logros %}
            <li class="flex gap-2.5 text-(length:--small-size) text-(--text-400)">
              <svg class="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-100" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>{{ logro }}</span>
            </li>
            {% endfor %}
          </ul>
        </div>
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section id="proyectos" class="bg-(--bg-100) py-20 px-6">
  <div class="mx-auto max-w-6xl">
    <header class="mb-12 flex items-start gap-4">
      <span data-size="36px" data-icon="lightbulb" class="x-icon text-primary-300 mt-1"></span>
      <div>
        <h2 class="text-4xl font-bold leading-tight text-(--text-300)">
          Proyectos Destacados
        </h2>
        <p class="mt-1 text-base text-primary-100">
          Algunas soluciones que he diseñado y desarrollado
        </p>
      </div>
    </header>
    {% assign proyectos = site.projects | where: "featured", true | sort: "order" %}
    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {% for project in proyectos %}
      <li class="flex flex-col overflow-hidden rounded-xl border border-(--bg-300) bg-(--bg-200)
                 transition hover:-translate-y-1 hover:shadow-lg">
        <img src="{{ project.image }}" alt="{{ project.imageDescription }}"
             loading="lazy" class="aspect-video w-full object-cover" decoding="async">
        <div class="flex min-w-0 flex-1 flex-col p-5">
          <div class="flex items-center justify-between gap-2">
            <h3 class="text-(length:--middle-text-size) font-bold text-(--text-300) mt-0!">
              {{ project.name }}
            </h3>
            {% if project.release %}
            <span class="shrink-0 rounded bg-accent-200 px-2 py-0.5
                         text-(length:--small-size) font-semibold text-(--text-400)">
              {{ project.release }}
            </span>
            {% endif %}
          </div>
          <p class="mt-1 text-(length:--small-size) text-(--text-muted) mb-0!">
            {{ project.title }}
          </p>
          <ul class="mt-3 flex flex-wrap gap-x-2 gap-y-1">
            {% for category in project.categories %}
            <li class="rounded border border-primary-100/30 px-2 py-0.5
                       text-(length:--small-size) text-primary-100">
              {{ category }}
            </li>
            {% endfor %}
          </ul>
          <p class="mt-4 mb-6 text-base leading-relaxed text-(--text-400)">
            {{ project.excerpt | strip_html | strip_newlines | truncate: 160 }}
          </p>
          <div class="mt-auto flex gap-2">
            <a href="{{ project.url | relative_url }}"
               class="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-300
                      px-4 py-2.5 text-(length:--small-size) font-semibold text-(--text-100)
                      transition hover:bg-primary-200">
              <span>Conocer proyecto</span>
              <span class="x-icon" data-size="16px" data-icon="open-go"></span>
            </a>
            {% if project.github %}
            <a href="{{ project.github }}" target="_blank" rel="noopener noreferrer"
               aria-label="Ver {{ project.name }} en GitHub"
               class="flex items-center justify-center rounded-lg border border-(--bg-300)
                      bg-(--bg-100) px-3 py-2.5 text-(--text-400) transition
                      hover:border-primary-300 hover:text-primary-300">
              <span class="x-icon flex! justify-center" data-size="18px" data-icon="github"></span>
            </a>
            {% endif %}
          </div>
        </div>
      </li>
      {% endfor %}
    </ul>
    <div class="mt-10 text-center">
      <a href="/projects"
         class="inline-flex items-center gap-2 rounded-lg border-2 border-primary-300 px-6 py-3
                text-base font-semibold text-primary-300 transition
                hover:bg-primary-300 hover:text-(--text-100)">
        <span>Ver todos los proyectos</span>
        <span class="x-icon" data-size="16px" data-icon="open-go"></span>
      </a>
    </div>
  </div>
</section>

<section id="stack" class="bg-(--bg-100) py-20 px-6">
  <div class="mx-auto max-w-6xl">
    <header class="mb-12 flex items-start gap-4">
      <span class="x-icon shrink-0 text-primary-300 mt-1" data-size="36px" data-icon="layers"></span>
      <div>
        <h2 class="text-4xl font-bold leading-tight text-(--text-300)">
          Stack Tecnológico
        </h2>
        <p class="mt-1 text-base text-primary-100">
          Herramientas y tecnologías que uso para construir soluciones de calidad
        </p>
      </div>
    </header>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {% for grupo in site.data.tecnologias %}
      <article class="rounded-xl border border-(--bg-300) bg-(--bg-200) p-6">
        <h3 class="mb-6 flex items-center gap-2.5 text-(length:--middle-text-size)
                   font-bold text-(--text-300)">
          <span class="x-icon shrink-0 text-primary-300" data-icon="{{ grupo.icon }}" data-size="28px"></span>
          <span>{{ grupo.categoria }}</span>
        </h3>
        <ul class="grid grid-cols-3 gap-x-4 gap-y-6">
          {% for tech in grupo.items %}
          <li class="flex flex-col items-center gap-2 text-center">
            <!-- PLACEHOLDER: reemplazar por el icono real de {{ tech.slug }} -->
            {% if tech.color %}
              <span class="x-icon w-auto!" data-size="54px" data-icon="{{ tech.slug }}" style="color: {{ tech.color }};"></span>
            {% else %}
              <img src="{{ tech.slug }}" width="54px" height="54px" />
            {% endif %}
            <span class="text-(length:--small-size) leading-tight text-(--text-400)">
              {{ tech.nombre }}
            </span>
          </li>
          {% endfor %}
        </ul>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<!--<div class="grid justify-center mb-8">
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
  </div>-->

  <div class="border-b-1 border-(--bg-300) my-8"></div>

<section id="blog" class="bg-(--bg-100) py-20 px-6">
  <div class="mx-auto max-w-6xl">
    <header class="mb-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex items-start gap-4">
        <span class="x-icon shrink-0 text-primary-300 mt-1" data-size="36px" data-icon="book"></span>
        <div>
          <h2 class="text-4xl font-bold leading-tight text-(--text-300)">
            Publicaciones Recientes
          </h2>
          <p class="mt-1 text-base text-primary-100">
            Compartiendo conocimiento y experiencias de desarrollo
          </p>
        </div>
      </div>
      <a href="/blog"
         class="flex shrink-0 items-center gap-2 text-(length:--small-size) font-semibold
                text-(--text-400) transition hover:text-primary-300 sm:mt-2">
        <span>Ver todas las publicaciones</span>
        <span class="x-icon" data-size="16px" data-icon="open-go"></span>
      </a>
    </header>
    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {% for post in site.posts limit:3 %}
        {% assign short_description = post.excerpt | remove: '<strong>' | remove: '</strong>' %}
        {% assign post_date = post.date | date: "%-d %B %Y" %}
        <li>
          {% include templates/card.html
            title=post.title
            image=post.image
            alt_image=post.alt_image
            date=post_date
            categories=post.categories
            short_description=short_description
            url=post.url
          %}
        </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section id="contacto" class="bg-(--bg-100) py-20 px-6">
  <div class="mx-auto max-w-6xl">
    <header class="mb-12 flex items-start gap-4">
      <span class="x-icon shrink-0 text-primary-300 mt-1" data-size="36px" data-icon="send"></span>
      <div>
        <h2 class="text-4xl font-bold leading-tight text-(--text-300)">
          Hablemos
        </h2>
        <p class="mt-1 text-base text-primary-100">
          ¿Tienes un proyecto en mente? Escríbeme y te respondo en menos de 24 horas
        </p>
      </div>
    </header>
    <div class="grid gap-8 lg:grid-cols-[1fr_360px]">
      <!-- Formulario -->
      <form action="" method="POST"
            class="rounded-xl border border-(--bg-300) bg-(--bg-200) p-6 sm:p-8">
        <div class="grid gap-5 sm:grid-cols-2">
          <div class="flex flex-col gap-1.5">
            <label for="nombre" class="text-(length:--small-size) font-semibold text-(--text-300)">
              Nombre <span class="text-accent-100">*</span>
            </label>
            <input type="text" id="nombre" name="nombre" required autocomplete="name"
                   placeholder="Tu nombre"
                   class="rounded-lg border border-(--bg-300) bg-(--bg-100) px-4 py-2.5
                          text-base text-(--text-300)
                          placeholder:text-(--text-muted) transition
                          focus:border-primary-300 focus:outline-none
                          focus:ring-2 focus:ring-primary-100/30"/>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-(length:--small-size) font-semibold text-(--text-300)">
              Correo electrónico <span class="text-accent-100">*</span>
            </label>
            <input type="email" id="email" name="email" required autocomplete="email"
                   placeholder="tu@correo.com"
                   class="rounded-lg border border-(--bg-300) bg-(--bg-100) px-4 py-2.5
                          text-base text-(--text-300)
                          placeholder:text-(--text-muted) transition
                          focus:border-primary-300 focus:outline-none
                          focus:ring-2 focus:ring-primary-100/30"/>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="empresa" class="text-(length:--small-size) font-semibold text-(--text-300)">
              Empresa <span class="font-normal text-(--text-muted)">(opcional)</span>
            </label>
            <input type="text" id="empresa" name="empresa" autocomplete="organization"
                   placeholder="Nombre de tu empresa"
                   class="rounded-lg border border-(--bg-300) bg-(--bg-100) px-4 py-2.5
                          text-base text-(--text-300)
                          placeholder:text-(--text-muted) transition
                          focus:border-primary-300 focus:outline-none
                          focus:ring-2 focus:ring-primary-100/30"/>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="tipo" class="text-(length:--small-size) font-semibold text-(--text-300)">
              Tipo de consulta
            </label>
            <select id="tipo" name="tipo"
                    class="rounded-lg border border-(--bg-300) bg-(--bg-100) px-4 py-2.5
                           text-base text-(--text-300) transition
                           focus:border-primary-300 focus:outline-none
                           focus:ring-2 focus:ring-primary-100/30">
              <option value="proyecto">Proyecto freelance</option>
              <option value="empleo">Oportunidad laboral</option>
              <option value="consultoria">Consultoría técnica</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div class="flex flex-col gap-1.5 sm:col-span-2">
            <label for="asunto" class="text-(length:--small-size) font-semibold text-(--text-300)">
              Asunto <span class="text-accent-100">*</span>
            </label>
            <input type="text" id="asunto" name="_subject" required
                   placeholder="¿De qué se trata?"
                   class="rounded-lg border border-(--bg-300) bg-(--bg-100) px-4 py-2.5
                          text-base text-(--text-300)
                          placeholder:text-(--text-muted) transition
                          focus:border-primary-300 focus:outline-none
                          focus:ring-2 focus:ring-primary-100/30"/>
          </div>
          <div class="flex flex-col gap-1.5 sm:col-span-2">
            <label for="mensaje" class="text-(length:--small-size) font-semibold text-(--text-300)">
              Mensaje <span class="text-accent-100">*</span>
            </label>
            <textarea id="mensaje" name="mensaje" required rows="5"
                      placeholder="Cuéntame sobre tu proyecto, plazos y presupuesto estimado…"
                      class="resize-y rounded-lg border border-(--bg-300) bg-(--bg-100) px-4 py-2.5
                             text-base leading-relaxed text-(--text-300)
                             placeholder:text-(--text-muted) transition
                             focus:border-primary-300 focus:outline-none
                             focus:ring-2 focus:ring-primary-100/30"></textarea>
          </div>
        </div>
        <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-(length:--small-size) text-(--text-muted)">
            <span class="text-accent-100">*</span> Campos obligatorios
          </p>
          <button type="submit"
                  class="flex items-center justify-center rounded-lg bg-primary-300 px-6 py-3
                         text-base font-semibold text-(--text-100) transition
                         hover:bg-primary-200 focus:outline-none focus:ring-2
                         focus:ring-primary-100/50 focus:ring-offset-2 focus:ring-offset-(--bg-200)">
            <span>Enviar mensaje</span>
            <span class="x-icon" data-size="16px" data-icon="send"></span>
          </button>
        </div>
      </form>
      <!-- Aside de contacto directo -->
      <div class="flex flex-col gap-4">
        <div class="rounded-xl border border-(--bg-300) bg-(--bg-200) p-6">
          <h3 class="mb-4 text-(length:--middle-text-size) font-bold text-(--text-300)">
            Contacto directo
          </h3>
          <ul class="flex flex-col gap-3">
            <li>
              <a href="mailto:erick@ericktucto.com"
                 class="flex items-center gap-3 text-base text-(--text-400)
                        transition hover:text-primary-300">
                <span class="x-icon text-primary-300" data-size="20px" data-icon="mail"></span>
                <span>erick@ericktucto.com</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/ericktucto" target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-3 text-base text-(--text-400)
                        transition hover:text-primary-300">
                <span class="x-icon text-primary-300" data-size="20px" data-icon="github"></span>
                <span>github.com/ericktucto</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/ericktucto" target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-3 text-base text-(--text-400)
                        transition hover:text-primary-300">
                <span class="x-icon text-primary-300" data-size="20px" data-icon="linkedin"></span>
                <span>linkedin.com/in/ericktucto</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="rounded-xl border border-(--bg-300) bg-(--bg-200) p-6">
          <div class="mb-3 flex items-center gap-2">
            <span class="relative flex h-2.5 w-2.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full
                           bg-green-500 opacity-75"></span>
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600"></span>
            </span>
            <span class="text-(length:--small-size) font-semibold text-(--text-300)">
              Disponible para proyectos
            </span>
          </div>
          <p class="text-(length:--small-size) leading-relaxed text-(--text-400)">
            Trabajo con clientes de forma remota desde Perú (GMT-5).
            Respondo correos en menos de 24 horas hábiles.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
