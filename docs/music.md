---
date: 2024-05-14
title: Music
slug: music
icon: material/music-box
hide:
  - feedback
  - navigation
  - toc
---

<style>
    .md-typeset .grid {
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr));
    }
</style>

# :material-music-note: Movies & Shows List { align="center" }

<div class="grid cards" markdown>

{% for music in recommendations.musics %}

  - <p align="center">[![poster]({{ music.poster }}){ width=200px .base-border-radius }]({{ music.link }})</p>

    <p align="center">**{{ music.title }}** • <span class="secondary">{{ music.type }}</span></p>

{% endfor %}

</div>
