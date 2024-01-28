---
title: YouTube Watch History
icon: simple/youtube
date: 2024-01-21
---

# :simple-youtube:{ title="2024-01-21" } YouTube Watch History

<p align="center" markdown>

{% for project in projects_index %}
{% if project.title == "YouTube Watch History" %}

{% for type, url in project.urls.items()|sort(attribute=0) %} [:simple-{{ type }}:{ .lg .hover-icon }]({{ url }}){ title="{{ type|title }}" } &nbsp; {% endfor %} • &nbsp;
{% for tag in project.tags|sort %} :simple-{{ tag }}:{ .lg .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}

{% endif %}
{% endfor %}

</p>

## :octicons-log-16: Features

- [x] &nbsp; :simple-mlflow: &nbsp; Used MLFlow for model monitoring.
- [x] &nbsp; :simple-docker: &nbsp; Setup the project using Docker Compose.
- [x] &nbsp; :simple-scikitlearn: &nbsp; **Channel Reccommendation** using channel's videos' `#!py "title"` and `#!py "tags"`.
- [x] &nbsp; :simple-scikitlearn: &nbsp; Built **Content Type Tagging of videos** prediction system.
- [x] &nbsp; :simple-fastapi: &nbsp; Backend APIs with FastAPI.
- [x] &nbsp; :simple-youtube: &nbsp; Fetch data of YouTube videos from **YouTube Data API v3**.
- [x] &nbsp; :simple-streamlit: &nbsp; Caption for each plots and graphs which describe them.
- [x] &nbsp; :simple-plotly: &nbsp; Beautiful plots and graphs to showcase the insights about User's watching patterns.

## :fontawesome-solid-tags: Releases

### [**`v0.0.1`**](https://github.com/arv-anshul/yt-watch-history/releases/tag/v0.0.1)

- Containerise `backend` and `frontend` using Docker Compose.
- APIs to make prediction using ML models.
- Tag youtube videos with their **Content Type** using machine learning.
- APIs to interact with **MongoDB** database.
- APIs to fetch data from **YouTube Data API v3**.
- Plots to show user's watch time insights.
