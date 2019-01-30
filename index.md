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
      <div class="grid-1 narrow card__data">
        <div class="grid-1 col-1 data_contain">
          <div class="col-1 card__title">
            {{ post.title }}
          </div>
          <div class="col-1 narrow card__description">
            <div class="description__sms">
              {{ post.excerpt | remove: '<p>' | remove: '</p>' | str_255 }}
            </div>
            <a href="{{ post.url }}" class="grid-1 items-center description__readmore">LEER MÁS</a>
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
