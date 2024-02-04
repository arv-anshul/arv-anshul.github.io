---
title: YouTube Watch History
icon: simple/youtube
date: 2024-01-21
---

# :simple-youtube:{ title="2024-01-21" } YouTube Watch History

<p align="center" markdown>

{% for project in projects_index %}
{% if project.title == "YouTube Watch History" %}

{% for type, url in project.urls.items()|sort(attribute=0) %} [:simple-{{ type }}:{ .lg .hover-icon }]({{ url }}){ title="{{ type|title }}" } &nbsp; {% endfor %} :material-slash-forward:{ .lg } &nbsp;
{% for tag in project.tags|sort %} :simple-{{ tag }}:{ .lg .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}

{% endif %}
{% endfor %}

</p>

This project can analyse your YouTube Watch History and shows some beautiful plots which depict how your watching patterns are changes over daytime and months.

Uses machine learning to tag youtube videos with the required **Content Type**. And then using content type this app show some insights.

!!! example "Channel Reccommendation System"

    You have to upload your subscribed channels list for this then, try to analyse channels to recommend you some similar channels which make similar contents.

!!! danger "Demo Video of the APP"

    I will record a video where I will show how to use this app to get insights about you watching patterns.

## :octicons-log-16: Features

- [x] &nbsp; :simple-scikitlearn: &nbsp; **Channel Reccommendation** in `frontend`.
- [x] &nbsp; :simple-mlflow: &nbsp; Used MLFlow for model monitoring.
- [x] &nbsp; :simple-docker: &nbsp; Setup the project using Docker Compose.
- [x] &nbsp; :simple-scikitlearn: &nbsp; **Channel Reccommendation** using channel's videos' `#!py "title"` and `#!py "tags"`.
- [x] &nbsp; :simple-scikitlearn: &nbsp; Built **Content Type Tagging of videos** prediction system.
- [x] &nbsp; :simple-fastapi: &nbsp; Backend APIs with FastAPI.
- [x] &nbsp; :simple-youtube: &nbsp; Fetch data of YouTube videos from **YouTube Data API v3**.
- [x] &nbsp; :simple-streamlit: &nbsp; Caption for each plots and graphs which describe them.
- [x] &nbsp; :simple-plotly: &nbsp; Beautiful plots and graphs to showcase the insights about User's watching patterns.

## :people_hugging: Discussions

<div class="grid cards" markdown>

  - ### **Error while importing model**

    ---

    > _This is my 3<sup>rd</sup> iteration on this improvement/refactoring approach._

    I am facing problems while designing the ML systems of this project. I am not able to figure out where to train the model and then how to make the predition from it. Because I am getting error while importing the model using `dill`, `pickle` and `joblib` all.

    I am only figure out that if you change your module structure then it the model importing trow `ModuleNotFoundError`. But when I export and import the model in a constraint environment (means the path of exporting and importing are same) then model works fine.

    So whatever I was doing in these 2 weeks is not fully correct from the point of view of ML systems. Because this approach is not feasible for model to import and make prediction.

    **To solve this** I have to rethink about the structure of the project maybe I should stick with the previous path.

</div>

## :fontawesome-solid-tags: Releases

### [**`v0.1.0`**](https://github.com/arv-anshul/yt-watch-history/releases/tag/v0.1.0)

- Refactor `ml` model training and prediction pipeline.
- One docker volume for both app as data.
- Add `channel_reco` in `frontend`.

### [**`v0.0.1`**](https://github.com/arv-anshul/yt-watch-history/releases/tag/v0.0.1)

- Containerise `backend` and `frontend` using Docker Compose.
- APIs to make prediction using ML models.
- Tag youtube videos with their **Content Type** using machine learning.
- APIs to interact with **MongoDB** database.
- APIs to fetch data from **YouTube Data API v3**.
- Plots to show user's watch time insights.
