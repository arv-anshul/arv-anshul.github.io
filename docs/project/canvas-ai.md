---
date: 2024-09-15
icon: simple/googlegemini
title: Canvas AI
hide:
  - toc
---

# :simple-googlegemini:{: title="Inspired by '1GbJQ7fHgqo'" } Canvas AI

{% for project in projects_index.projects %}

{% if project.title == "Canvas AI" %}

<hr>
<p align=center markdown>
{% for url in project.urls %}[:{{ url.icon }}:{ .light .secondary-hover }]({{ url.url }}){ target=blank_ title="{{ url.title }}" } &nbsp; &nbsp; {% endfor %}
:material-slash-forward: &nbsp; &nbsp;
{% for tag in project.tags|sort %} :simple-{{ tag }}:{ .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}
</p>
<hr>

{{ project.description }}

{% endif %}

{% endfor %}

## Prompt Examples

These are some samples which I have used to verify my AI and be sure that it is working fine. You can see the images and
their respective structured responses _(responses are written inside code-blocks, just below each image)_.

### Example 1

<figure markdown>

![expr.png](https://raw.githubusercontent.com/arv-anshul/canvas-ai/main/images/expr.png){: .base-border-radius }

</figure>

```json
{
  "expression": "x=3;y=4;x+y=?",
  "result": "7",
  "explanation": "The sum of x and y is 7"
}
```

### Example 2

<figure markdown>

![expr-new.png](https://raw.githubusercontent.com/arv-anshul/canvas-ai/main/images/expr-new.png){: width="300px" .base-border-radius }

</figure>

```json
{
  "expression": "(x + y)^2",
  "result": "225",
  "explanation": "Substitute the values of x and y in the expression and simplify using BODMAS."
}
```

### Example 3

<figure markdown>

![car-tree.png](https://raw.githubusercontent.com/arv-anshul/canvas-ai/main/images/car-tree.png){: .base-border-radius }

</figure>

```json
{
  "expression": "10 km/hr * (50 meters / 1000 meters/km) * (3600 seconds / 1 hour)",
  "result": "18 seconds",
  "explanation": "The car is travelling at 10 km/hr and it has to cover 50 meters, so we can calculate the time it takes to cover the distance."
}
```

```json
{
  "expression": "10 km/hr * 50 meters",
  "result": "13.89 seconds",
  "explanation": "First convert 10 km/hr to meters/second, then divide 50 meters by the speed to get time."
}
```

### Example 4

<figure markdown>

![square-diagonal.png](https://raw.githubusercontent.com/arv-anshul/canvas-ai/main/images/square-diagonal.png){: width="300px" .base-border-radius }

</figure>

```json
{
  "expression": "√(10² + 10²)",
  "result": "14.14 m",
  "explanation": "The diagonal of a square forms a right-angled triangle with two sides of the square. Using Pythagoras theorem, we can calculate the diagonal."
}
```

### Example 5

<figure markdown>

![water-tank.png](https://raw.githubusercontent.com/arv-anshul/canvas-ai/main/images/water-tank.png){: width="300px" .base-border-radius }

</figure>

```json
{
  "expression": "pi*3^2*12, pi*3^2*5",
  "result": "360pi m^3, 45pi m^3",
  "explanation": "The tank is a cylinder with radius 3m and height 12m. The volume of a cylinder is pi*r^2*h. The filled water is also cylindrical with radius 3m and height 5m."
}
```
