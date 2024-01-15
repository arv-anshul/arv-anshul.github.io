# My Projects Index

{% for project in projects_index %}

## **{{ project.title }}**

:{{ project.status }}:{ title="Project Status" }
{% if project.completed_on %} :material-calendar-check:{ title="Completed on: {{ project.completed_on }}" } {% else %} :material-calendar-clock:{ title="Currently Working" } {% endif %} &nbsp; • &nbsp;
{% for tag in project.tags|sort %} :simple-{{ tag }}:{ title="{{ tag|title }}"} &nbsp; {% endfor %}

{{ project.description }}

{% for point in project.extra_desc %}
- {{ point }}
{% endfor %}

{% for type, url in project.urls.items()|sort(attribute=0) %} <a href="{{ url }}" target="blank_"> :simple-{{ type }}: {{ type|title }} </a> &nbsp; &nbsp; {% endfor %}

---

{% endfor %}
