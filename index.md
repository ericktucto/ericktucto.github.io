---
layout: home
---
<div id="history" class="grid-12 narrow col-12 items-center">
  {% for post in site.posts %}
    <div class="col-4 card__container" style="background-image: url({{ post.image  }});">
      <div class="grid-1 narrow col-1 me-left card__date">
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
      <div class="grid-1 narrow me-down card__data">
          <div class="col-1 card__title">
            {{ post.title }}
          </div>
          <div class="col-1 narrow card__description">
            <div class="description__sms">
              {{ post.excerpt | remove: '<p>' | remove: '</p>' | str_255 }}
            </div>
            <a href="{{ post.url }}" class="grid-1 me-center items-between description__readmore">LEER MÁS</a>
          </div>
      </div>
    </div>
  {% endfor %}
</div>
