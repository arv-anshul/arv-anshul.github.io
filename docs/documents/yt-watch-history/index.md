# YouTube Watch History

{% for project in projects_index %}
{% if project.title == "YouTube Watch History" %}

<figure markdown width=500px>

| 😉 | 🤗 |
| ---: | :--- |
| **Project Status** | :{{ project.status }}:{ .hover-icon title="Project Status" } &nbsp; &nbsp; {% if project.completed_on %} :material-calendar-check:{ .hover-icon .success title="Completed on: {{ project.completed_on }}" } {% else %} :material-calendar-clock:{ .hover-icon .warning title="Currently Working" } {% endif %}|
| **Project on Socials** | {% for type, url in project.urls.items()|sort(attribute=0) %} [:simple-{{ type }}:{ .{{ type }} .hover-icon-bounce }]({{ url }}){ title="{{ type|title }}" } &nbsp; &nbsp; {% endfor %}|
| **Tech Stack** | {% for tag in project.tags|sort %} :simple-{{ tag }}:{ .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}|

{% endif %}
{% endfor %}

</figure>

## 🎉 Features

- [x] Build ctt prediction System.
- [x] API with FastAPI.
- [x] Channel Reccommender System with video `#!py "title"` and `#!py "tags"`.
