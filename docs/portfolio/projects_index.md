# My Projects Index

{% for project in projects_index %}

## **{{ project.title }}**

{% for tag in project.tags %} `{{ tag|replace(" ", "-") }}` {% endfor %}

{{ project.description }}

{% for type, url in project.urls.items() %} <a href="{{ url }}"> :fontawesome-brands-{{ type }}: {{ type|title }} </a> &nbsp; &nbsp; {% endfor %}

---

{% endfor %}
