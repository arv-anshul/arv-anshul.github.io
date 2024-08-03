---
hide:
  - navigation
  - feedback
  - toc
search:
  exclude: true
icon: material/account-box
---

# I'm Anshul Raj Verma

<style>
  @media (min-width: 900px) {
    main > div > div.md-content {
      max-width: 75%;
      margin: auto;
    }
  }
  article > h1 { display: none; }
  #my-projects-index { display: none; }
</style>

<p style="text-align: center; margin: 0px;" markdown>
  <img src="https://avatars.githubusercontent.com/u/111767754?v=4" alt="arv-anshul" style="width: 300px; border-radius: 50%;" />
  <p class="light" style="text-align: center; font-size: 25px; margin: 0px;"><strong>Anshul Raj Verma</strong></p>
</p>

<p style="text-align: justify;" markdown>

Currently, I am in 12th standard but dedicated to mastering Data Science and ML for the past two years.
I've built a very good knowledge in Python and Data Science libraries.
I've developed a solid foundation and applied it to various projects.
Notably, I showcase my expertise in web scraping, demonstrated through projects like [ecommerce-scrapper-api].
Continuously expanding my technological horizons, I have successfully completed multiple ML projects, such as [yt-watch-history], [campusx-real-estate].

</p>

[yt-watch-history]: https://github.com/arv-anshul/yt-watch-history
[campusx-real-estate]: https://github.com/arv-anshul/campusx-real-estate
[ecommerce-scrapper-api]: https://github.com/arv-anshul/ecommerce-scrapper-api

---

<p align="center" markdown>
{% for social in about.socials|sort(attribute="title") %}
<a href="{{ social.url }}" title="{{ social.title }}" > :{{ social.icon }}:{ .lg .light } </a>&nbsp; &nbsp;
{% endfor %}
</p>

---

<h2 class="light" align="center"><strong>Experiences</strong></h2>

{% for exp in about.experiences %}

<div class="grid cards" markdown>

  - **{{ exp.title }}**<br>
    <small>{{ exp.company }} **•** {{ exp.period }}</small>

    ---

    {% for point in exp.points %}
    - :{{ point.icon }}: {{ point.desc }}
    {% endfor %}

</div>

{% endfor %}

<h2 class="light" align="center"><strong>Projects</strong></h2>

{% for project in about.projects %}
<div class="grid cards" markdown>
  - :{{ project.icon }}:&nbsp; **{{ project.title }}**

    <p style="text-align: justify;" markdown>
    {{ project.description }}
    </p>

    ---

    <p align=center>
    {% for link in project.links %} [:{{ link.icon }}:{ .light .secondary-hover }]({{ link.url }} "{{ link.title }}"){ target=blank_ } &nbsp; &nbsp; {% endfor %}
    </p>
</div>
{% endfor %}

<p align="center" markdown>[==All Projects==](../project/index.md)</p>

---

<h2 class="light" align="center"><strong>Tech Stacks</strong></h2>

<div class="grid cards" markdown>
{% for stack, techs in about.tech_stack.items()|sort(attribute=0) %}
  - **{{ stack }}**
  {: align=center style="margin-bottom: 0;" }

    <hr style="margin-top: 0.3em; margin-bottom: 0.8em;">

    <p align="center" style="margin: 0;">
    {% for tech in techs|sort(attribute='title') %}:{{ tech.icon }}:{ .lg .hover-icon-bounce .{{ tech.icon|replace("simple-", "") }} title="{{ tech.title }}" } &nbsp; {% endfor %}
    </p>
{% endfor %}
</div>

---

<p align="center" markdown>
[:fontawesome-solid-paper-plane:{ .bounce }&nbsp; Download Resume](https://github.com/arv-anshul/arv-anshul/raw/main/resume_arv-anshul.pdf){ .md-button .md-button--primary }
</p>
