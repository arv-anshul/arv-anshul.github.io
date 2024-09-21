---
title: YouTube Watch History
icon: simple/youtube
date: 2024-01-21
hide:
  - toc
---

# :simple-youtube:{ title="2024-01-21" } YouTube Watch History

<p align="center" markdown>

{% set project = projects_index.projects["yt-watch-history/index.md"] %}

<hr>
<p align=center markdown>
{% for url in project.urls %}[:{{ url.icon }}:{ .light .secondary-hover }]({{ url.url }}){ target=blank_ title="{{ url.title }}" } &nbsp; &nbsp; {% endfor %}
:material-slash-forward: &nbsp; &nbsp;
{% for tag in project.tags|sort %} :simple-{{ tag }}:{ .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}
</p>
<hr>

## Overview

<p align="justify" markdown>{{ project.description }}</p>

</p>

## Explanation

1. **Project Introduction**: Hello, I am Anshul Raj Verma and I am exited to share my end-to-end Machine Learning
   project where I've used **FastAPI, Streamlit, MongoDB and Docker** as tech stack. Also **this is version 2 of the
   project** because the **version 1 got very complicated** and its hard to modify and refactor the codes there that's
   why created new version 2 where I am trying keep better attention on project architecture.

2. **Project Overview**: This project consists a streamlit app where you can upload your **YouTube Watch History Data**
   to see insights on your viewing pattern. Your data will go through a ML Model which predicts the **ContentType** of
   each uploaded video. The app fetches more details of each video through **YouTube API**. There is also a **Channel
   Recommender System** in project which recommend you similar channels on the basis of channel's videos title and tags
   they had used.

3. **Components of Project**: The project is divided into three major components **Backend API**, **ML** & **Frontend**.

    - **Backend API**: This is a FastAPI app which interacts with MongoDB database where YouTube videos details were
      stored and it also fetches YouTube videos details from official **YouTube Data API** (for this you requires the
      `API_KEY`).
    - **ML**: Here the code for ML Model were present through they will get trained and do predcitions on user's
      uploaded data after some preprocessing. The ML Models get served as API through a FastAPI app.
    - **Frontend**: Here all the above components meets and work together to show awesome insights on user's uploaded
      data. This is a streamlit web app where users can upload their watch history data and see insights. Here above API
      services were called to fetch videos details from official YouTube API, to store data in database, to make
      predcitions using ML Models, to recommend channels and etc.

4. **Project Architecture**: I have created some diagrams to showcase the project's architecture and for that created a
   [dedicated page](v2-architecture.md).

5. **Containerization with Docker**: All the three components (**Backend API**, **ML** & **Frontend**) of project were
   containerized using docker and used `docker compose` to wrap all three images in a container.
   [`uv`](https://astral.sh/uv) is used to install packages in docker images. `mongodb` image is used as database for
   the project.

6. **More in Project**: As I am learning MLOps concepts I am trying to implement them in this project because planning
   to add DVC and MLFlow into the project.
