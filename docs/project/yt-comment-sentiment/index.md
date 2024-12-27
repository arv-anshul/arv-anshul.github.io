---
title: YouTube Comment Sentiment
icon: simple/youtube
date: 2024-12-27
description: |
  End-to-End machine learning project from backend using FastAPI to frontend using VueJs.
  #end-to-end #machine-learning #backend #fastapi #frontend #vuejs
hide:
  - toc
---

# :simple-youtube:{ title="2024-12-27" } YouTube Comment Sentiment - End-to-End Project

<p align="center" markdown>

{% set project = projects_index.projects["yt-comment-sentiment/index.md"] %}

<hr>
<p align=center markdown>
{% for url in project.urls %}[:{{ url.icon }}:{ .light .secondary-hover }]({{ url.url }}){ target=blank_ title="{{ url.title }}" } &nbsp; &nbsp; {% endfor %}
:material-slash-forward: &nbsp; &nbsp;
{% for tag in project.tags|sort %} :simple-{{ tag }}:{ .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}
</p>
<hr>

You can read about this project's each segments in details in their respective pages at [ML Side](./ml.md),
[Backend Side](./backend.md) and [Frontend Side](./frontend.md).

After reading above pages you'll get to know about:

- What had I used?
- How did I done?
- I have also shared some common mistakes you could encounter while building this.

## Frontend Screenshots

![screenshot](https://github.com/arv-anshul/yt-comment-sentiment/raw/main/frontend/assets/screenshot-2024-12-25.png)
