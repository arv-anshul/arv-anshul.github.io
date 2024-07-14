---
date: 2024-04-19
title: Learn Stuff
icon: fontawesome/solid/brain
---

# :simple-musicbrainz: Learn Stuff from Tutorials

I am sharing those resources which I've used to learn below listed things like **Docker**, **Pydantic**, **FastAPI** and
more. I generally learn from YouTube or Blogs.

{% for topic in learn_stuff.topics|sort(attribute="header") %}

## :{{ topic.icon }}:&nbsp; **{{ topic.header }}** { .{{ topic.icon | replace("simple-", "") }} }

    {% for item in topic.tutorials %}

- [{{ item.title }}]({{ item.url }}){ target="_blank" }

    {% endfor %}

{% endfor %}
