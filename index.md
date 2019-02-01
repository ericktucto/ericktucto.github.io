---
layout: home
---
<div id="history" class="grid-12 narrow col-12 items-center">
  {% for post in site.posts %}
    <div class="grid-1 narrow col-12-until-tablet col-6-until-desktop col-4-from-widescreen card__container">
      <div class="grid-1 narrow col-all items-center card__date">
          {{ post.date | date: "%d" }} {{ post.date | date: "%B" | date_es }} {{ post.date | date: "%Y" }}
      </div>
      <div class="grid-1 col-all card__image" style="background-image: url({{ post.image  }});">
      </div>
      <div class="grid-1 card__data">
        <div class="col-all me-up card__title">
          {{ post.title }}
        </div>
        <div class="col-all me-up grid-1 narrow card__description">
          <div class="col-all description__sms">
            {{ post.excerpt | remove: '<p>' | remove: '</p>' | str_255 }}
          </div>
          <a href="{{ post.url }}" class="col-all grid-1 me-center items-between description__readmore">LEER MÁS</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
