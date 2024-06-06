---
date: 2024-02-16
icon: octicons/feed-repo-16
title: CampusX Resources
hide:
  - toc
---

# :octicons-feed-repo-16:{ title="2024-02-16" } CampusX Resources

{% for project in projects_index.projects %}

{% if project.title == "CampusX Resources" %}

<hr>
<p align=center markdown>
{% for url in project.urls %}[:{{ url.icon }}:{ .light .secondary-hover }]({{ url.url }}){ target=blank_ title="{{ url.title }}" } &nbsp; &nbsp; {% endfor %}
:material-slash-forward: &nbsp; &nbsp;
{% for tag in project.tags|sort %} :simple-{{ tag }}:{ .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}
</p>
<hr>

{% endif %}

{% endfor %}

<figure markdown>
  <a href="https://arv-anshul.github.io/campusx">
    <img src="https://github.com/arv-anshul/campusx-dsmp/raw/main/docs/data/assets/home.png" title="Website Home Page" class="base-border-radius" style="border: 0.1rem solid var(--md-typeset-a-color)">
  </a>
  <figcaption markdown>Get all the resources like Notes and Notebooks provided in CampusX Courses.</figcaption>
</figure>

## Praise by Nitish Sir

<figure markdown>
  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7162317353244905472?compact=1" height="399" width="710" frameborder="0" allowfullscreen=""></iframe>
</figure>

## Links to Resources

- [:material-database: Downloaded Resources](https://github.com/arv-anshul/campusx/tree/main/resources/DSMP){ title="Resources downloaded as files on GitHub" }: Resources are uploaded in my GitHub repo as files. You can get all the course's resources like `.pdf`, `.ipynb`, `.docx`, `.pptx`, `.xlsx` and `.py` files.
- [:material-book-open-page-variant: See Resources](https://arv-anshul.github.io/campusx/dsmp2){ title="Resources links listed on webpage" }: Resources are listed on a webpage where you can access the content descriptions for all sessions, with the teacher providing helpful links to enhance your understanding of each session.
