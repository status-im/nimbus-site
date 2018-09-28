<li class="plugin on">
  <img src="/wip/thumbnails/{{ wip.thumbnail }}" style="display: block; width: 200px; height: 200px; margin-bottom: 20px;" />
  <a href="{{ wip.link }}" class="plugin-name" target="_blank">{{ wip.name }}</a>
  <p class="plugin-desc">{{ wip.description }}</p>
  <div class="plugin-tag-list">
    {% for tag in wip.tags %}
      <a href="#{{ tag }}" class="plugin-tag">{{ tag }}</a>
    {% endfor %}
  </div>
</li>
