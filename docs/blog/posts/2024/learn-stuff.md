---
date: 2024-04-19
authors: [arv-anshul]
categories: [others]
title: Learn Stuff
description: Some resources from where I have learned techs, concepts and more. Just a small collection.
slug: learn-stuff
icon: fontawesome/solid/brain
---

<style>
  .md-typeset ul:has(.topic-li) {
    list-style-type: none;
  }
</style>

# :simple-musicbrainz: Learn Stuff from Tutorials

Shared some resources which I have used to learn these technologies. Enjoy!!

<!-- more -->

!!! danger "Need to refactor this page and make it more verbose."

{% for topic in learn_stuff.topics|sort(attribute="header") %}

## :{{ topic.icon }}:&nbsp; **{{ topic.header }}** { .{{ topic.icon | replace("simple-", "") }} }

    {% for item in topic.tutorials %}

- :{{ item.type }}: [{{ item.title }}]({{ item.url }}){ target="_blank" }
{: .topic-li }

    {% endfor %}

{% endfor %}
