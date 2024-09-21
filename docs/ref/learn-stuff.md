---
date: 2024-04-19
title: Learn Stuff
icon: fontawesome/solid/brain
---

# :simple-musicbrainz: Learn Stuff from Tutorials

Shared some resources which I have used to learn these technologies. Enjoy!!

!!! danger "Need to refactor this page and make it more verbose."

{% for topic in learn_stuff.topics|sort(attribute="header") %}

## :{{ topic.icon }}:&nbsp; **{{ topic.header }}** { .{{ topic.icon | replace("simple-", "") }} }

    {% for item in topic.tutorials %}

- [{{ item.title }}]({{ item.url }}){ target="_blank" }

    {% endfor %}

{% endfor %}
