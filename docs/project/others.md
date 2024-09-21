---
title: Other Projects
icon: octicons/repo-16
date: 2024-01-28
hide:
  - feedback
  - toc
---

# :octicons-repo-16:{ title="2024-01-28" } Other Projects

<div class="grid cards" markdown>

{% for project in other_projects.projects %}

  {% set color_class = project.icon.removeprefix("simple-") %}

  - :{{ project.icon }}:{: .lg .{{ color_class }} } &nbsp; [**{{ project.title }}**{: .{{ color_class }} }]({{ project.url }})

    ---

    {{ project.description }}

{% endfor %}

</div>
