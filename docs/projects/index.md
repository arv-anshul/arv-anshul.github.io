# My Projects Index

<style>
  #my-projects-index {
    display: none;
  }
  .md-typeset .grid.cards>ul>li {
    border-radius: 0.8rem;
    border-width: 2px;
    padding-bottom: 0.5rem;
  }
  .md-typeset .grid.cards>ul>li:hover {
    box-shadow: 0 0 0.3rem #ffffff40
  }
</style>

{% for project in projects_index.projects %}

<div class="grid cards" markdown >

  - ## {% if project.completed_on %} :material-book-check:{ .hover-icon-bounce .success-hover title="{{ project.completed_on }}" } {% else %} :material-book-sync:{ .hover-icon-bounce .warning-hover title="Currently Working" } {% endif %} **{{ project.title }}**

    {{ project.description }}{ style="text-align: justify;" }

    {% for point in project.extra_desc %}
    - {{ point }}
    {% endfor %}

    ---

    <p align=center markdown>
    {% for url in project.urls %}[:{{ url.icon }}:{ .light .secondary-hover }]({{ url.url }}){ target=blank_ title="{{ url.title }}" } &nbsp; &nbsp; {% endfor %}
    :material-slash-forward: &nbsp; &nbsp;
    {% for tag in project.tags|sort %} :simple-{{ tag }}:{ .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}
    </p>

</div>

{% endfor %}
