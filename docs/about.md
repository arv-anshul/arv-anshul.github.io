---
hide:
  - navigation
  - feedback
  - toc
search:
  exclude: true
---

# I'm Anshul Raj Verma

<style>
  .md-content__inner { margin: 0 10rem 1.2rem; }
  article > h1 { display: none; }
  #my-projects-index { display: none; }
  .md-typeset .grid.cards>ul>li {
    border-radius: 0.8rem;
    padding-bottom: 0.5rem;
  }
  .md-typeset .grid.cards>ul>li:hover { box-shadow: 0 0 0.2rem #ffffff40 }
</style>

<p style="text-align: center; margin: 0px;" markdown>
  <img src="https://avatars.githubusercontent.com/u/111767754?v=4" alt="arv-anshul" style="width: 300px; border-radius: 50%;" />
  <p class="light" style="text-align: center; font-size: 25px; margin: 0px;"><strong>Anshul Raj Verma</strong></p>
</p>

<p align="center" markdown>
As a student based in Bihar, India; my aspiration is to become a proficient data scientist who seamlessly integrates machine learning models in cloud. Actively exploring diverse facets of data science, including ML, NLP, and MLOps, I have honed my skills in Python, mastering essential concepts like OOPs, and Type Hinting. My proficiency extends to REST API creation, with hands-on experience in FastAPI framework. Notably, I showcase my expertise in web scraping, demonstrated through projects like [ecommerce-scrapper-api](https://github.com/arv-anshul/ecommerce-scrapper-api). Continuously expanding my technological horizons, I have successfully completed multiple ML projects, such as [yt-watch-history](https://github.com/arv-anshul/yt-watch-history), [campusx-real-estate](https://github.com/arv-anshul/campusx-real-estate).
</p>

---

<p align="center" markdown>
{% for social in about.socials|sort(attribute="title") %}
<a href="{{ social.url }}" title="{{ social.title }}" > :{{ social.icon }}:{ .lg .light } </a>&nbsp; &nbsp;
{% endfor %}
</p>

---

<h2 class="light" align="center"><strong>Projects</strong></h2>

{% for project in about.projects %}
<div class="grid cards" markdown>
  - :{{ project.icon }}:&nbsp; **{{ project.title }}**

    {{ project.description }}

    ---

    <p align=center>
    {% for link in project.links %} [:{{ link.icon }}:{ .light .secondary-hover }]({{ link.url }} "{{ link.title }}"){ target=blank_ } &nbsp; &nbsp; {% endfor %}
    </p>
</div>
{% endfor %}

<p align="center" markdown>[All Projects](/projects)</p>

---

<h2 class="light" align="center"><strong>Tech Stacks</strong></h2>

<div class="grid cards" markdown>
{% for stack, techs in about.tech_stack.items()|sort(attribute=0) %}
  - **{{ stack }}**

    ---

    <p align="center" style="margin: 0;">
    {% for tech in techs|sort(attribute='title') %}:{{ tech.icon }}:{ .lg .hover-icon-bounce .{{ tech.icon|replace("simple-", "") }} title="{{ tech.title }}" } &nbsp; {% endfor %}
    </p>
{% endfor %}
</div>

---

<p align="center" markdown>
[:fontawesome-solid-paper-plane:{ .bounce }&nbsp; Download Resume](#){ .md-button .md-button--primary }
</p>
