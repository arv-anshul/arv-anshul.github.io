# My Projects Index

{% for project in projects_index %}

## {% if project.completed_on %} :material-book-check:{ .hover-icon-bounce .success-hover title="{{ project.completed_on }}" } {% else %} :material-book-sync:{ .hover-icon-bounce .warning-hover title="Currently Working" } {% endif %} **{{ project.title }}**

{{ project.description }}

{% for point in project.extra_desc %}
- {{ point }}
{% endfor %}

{% for type, url in project.urls.items()|sort(attribute=0) %} [:simple-{{ type }}:{ .light .secondary-hover }]({{ url }}){ target=blank_ } &nbsp; &nbsp; {% endfor %} :material-slash-forward: &nbsp; &nbsp;
{% for tag in project.tags|sort %} :simple-{{ tag }}:{ .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}

---

{% endfor %}
