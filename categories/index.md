---
layout: category
activedLink: categories
---

<h1>Categorias</h1>

{% for category in site.categories %}
  <div class="category">
    <h3 id="{{ category[0] }}">{{ category[0] }}</h3>
    <ul>
      {% for post in category[1] %}
        <li class="paragraph"><span class="list__date" data-datees='{{ post.date | date: "%-d %B %Y" }}'>{{ post.date | date: "%-d %B %Y" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
    <br>
  </div>
{% endfor %}

