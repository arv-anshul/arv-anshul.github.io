---
title: Other Projects
description: My small projects, which you may either find useful or see to learn new concepts.
icon: octicons/repo-16
date: 2024-01-28
hide:
  - feedback
  - toc
---

# :octicons-repo-16:{ title="2024-01-28" } Other Projects

{{ page.meta.description }}

<div class="grid cards" markdown>

{% for project in other_projects.projects %}

  {% set color_class = project.icon.removeprefix("simple-") %}

  - :{{ project.icon }}:{: .lg .{{ color_class }} } &nbsp; [**{{ project.title }}**{: .{{ color_class }} }]({{ project.url }})

    ---

    {{ project.description }}

{% endfor %}

</div>
