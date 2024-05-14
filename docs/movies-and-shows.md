---
date: 2024-05-14
title: Movies & Shows
slug: movies
icon: material/movie-open
hide:
  - feedback
  - navigation
  - toc
---

# :material-movie-open: Movies & Shows List { align="center" }

<div class="grid cards" markdown>

{% for movie in recommendations.movies %}

  - <p align="center">![poster]({{ movie.poster }}){ width=200px .base-border-radius }</p>

    <p align="center">**{{ movie.title }}** • <span class="secondary">{{ movie.type }}</span></p>

    <p align="justify">{{ movie.thoughts }}</p>

{% endfor %}

</div>
