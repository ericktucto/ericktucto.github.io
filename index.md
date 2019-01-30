---
layout: home
---
<div id="history" class="grid-12 narrow col-12 items-center">
  {% for post in site.posts %}
    <div class="grid-1 narrow col-4-from-desktop card__container">
      <div class="card__date grid-1 narrow col-1">
        <div class="col-1 card__day">
          {{ post.date | date: "%d" }}
        </div>
        <div class="col-1 card__month">
          {{ post.date | date: "%b" | date_es }}
        </div>
        <div class="col-1 card__year">
          {{ post.date | date: "%Y" }}
        </div>
      </div>
      <div class="card__image">
        <img src="{{ post.image }}" width="426px" height="240px" alt="Ups!">
      </div>
      <div class="card__data">
        <div class="data_contain">
          <div class="card__title">
            {{ post.title }}
          </div>
          <div class="card__description">
            {{ post.excerpt | remove: '<p>' | remove: '</p>' }}
          </div>
        </div>
      </div>
    </div>
    {% comment %}
    <div class="grid-8">
        <div class="grid-1 narrow col-1-from-tablet date col-8-until-tablet">
            <div>
                {{ post.date | date: "%d" }}
            </div>
        </div>
        <div class="col-8-until-tablet col-7-from-tablet post">
            <div class="title"><a href="{{ post.url }}">{{ post.title }}</a></div>
            <div class="info">
                <div class="data">
                    <i class="fas fa-user"></i> Autor: {{ site.author }}
                </div>
                <div class="data">
                    <i class="fas fa-calendar-alt"></i> Publicado: {{ post.date | date: "%m-%d-%Y"}}
                </div>
                <div class="data">
                    <i class="fas fa-calendar-alt"></i> Actualizado: {{ post.dateModified }}
                </div>
                {% if post.videoId != 'coming-soon' %}
                <div class="data">
                    <a href="https://www.youtube.com/watch?v={{ post.videoId }}" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
                {% endif %}
            </div>
            <div class="description">{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</div>
        </div>
    </div>
    {% endcomment %}
  {% endfor %}
</div>
