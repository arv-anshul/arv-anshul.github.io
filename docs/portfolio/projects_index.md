---
hide:
  - feedback
---

# My Projects Index

{% for project in projects_index %}

## {% if project.completed_on %} :material-book-check:{ .hover-icon-bounce .success-hover title="{{ project.completed_on }}" } {% else %} :material-book-sync:{ .hover-icon-bounce .warning-hover title="Currently Working" } {% endif %} **{{ project.title }}**

{% for tag in project.tags|sort %} :simple-{{ tag }}:{ .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}

{{ project.description }}

{% for point in project.extra_desc %}
- {{ point }}
{% endfor %}

{% for type, url in project.urls.items()|sort(attribute=0) %} <a href="{{ url }}" target="blank_"> :simple-{{ type }}: {{ type|title }} </a> &nbsp; &nbsp; {% endfor %}

---

{% endfor %}
