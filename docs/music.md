---
date: 2024-05-14
title: Music
slug: music
icon: material/music-box
search:
  exclude: true
hide:
  - feedback
  - navigation
  - toc
---

# :material-music-note: Music :material-music-note: { align="center" }

<p align="center" markdown>

[:simple-spotify: &nbsp;My Spotify Profile](https://open.spotify.com/user/wk6gxe954mv4qbttc4tnvyw8t){ .md-button .slim-button align="center" }

</p>

<div class="grid cards" markdown>

{% for music in recommendations.musics | sort(attribute="title") %}

  <iframe style="border-radius:12px" src="{{ music.link | replace('.com/', '.com/embed/') }}?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

{% endfor %}

</div>
