---
title: Other Projects
icon: octicons/repo-16
date: 2024-01-28
hide:
  - feedback
  - toc
---

# :octicons-repo-16:{ title="2024-01-28" } Other Projects

<style>
.md-typeset .grid.cards>ul>li {
    border-radius: 0.8rem;
}
.md-typeset .grid.cards>ul>li:hover {
  box-shadow: 0 0 0.3rem #ffffff40
}
</style>

<div class="grid cards" markdown>

{% for project in other_projects %}

  - :simple-{{ project.icon }}:{ .lg .{{ project.icon }} title="Status: {{ project.status|title }}" } &nbsp; **{{ project.name }}**{ title="Status: {{ project.status|title }}" }

    ---

    {{ project.description }}

    [:octicons-arrow-right-24: GitHub]({{ project.github }})

{% endfor %}

</div>
