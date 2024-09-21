---
icon: material/notebook-multiple
---

# My Projects Index

<style>
  #my-projects-index {
    display: none;
  }
</style>

{% for project_id, project in projects_index.projects.items() %}

    {% set icon = ":material-book-sync:" %}
    {% set hover_classes = ".hover-icon-bounce .warning-hover" %}
    {% set title = "Currently Working" %}

    {% if project.completed_on %}
        {% set icon = ":material-book-check:" %}
        {% set hover_classes = ".hover-icon-bounce .success-hover" %}
        {% set title = project.completed_on %}
    {% endif %}

    {% set project_hover_icon = icon + "{: " + hover_classes + " title='" + title + "'}" %}

<div class="grid cards" markdown >

  - ## {{ project_hover_icon }} [**{{ project.title }}**]({{ project_id }}){: style="color: var(--md-typeset-color);" }

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

<p align=center markdown>
[:octicons-repo-16: Other Projects](others.md){ .md-button .md-button--primary .slim-button }
</p>
