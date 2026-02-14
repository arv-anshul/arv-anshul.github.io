---
pubDate: 2024-12-27
icon: simple-icons:vuedotjs
title: Frontend Side
description: Built frontend of project using VueJs + Vite and hosted on GitHub Pages.
categories: [project, frontend]
---

# YT Comment Sentiment - Frontend Side

|                                                                                                      Technology | Description                                                                                    |
| --------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------- |
|                          ![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff&style=square) | A fast and efficient package manager for JavaScript projects, known for its disk space usage.  |
|          ![shadcn/vue](https://img.shields.io/badge/shadcn/vue-000000?logo=shadcnui&logoColor=fff&style=square) | A customizable component library for building elegant UIs in modern web applications.          |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=square) | A utility-first CSS framework for creating custom designs quickly and efficiently.             |
|                          ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=square) | A next-generation frontend build tool for blazing-fast development and hot module replacement. |
|                  ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=square) | A progressive JavaScript framework for building user interfaces and single-page applications.  |

## What I followed?

> [!IMPORTANT]
>
> 1. Documentation is the most important resource for your learning and I followed it thoroughly.
> 2. Took help of ChatGPT to solve bugs and asked questions related to these frameworks/tools.

- Followed [only one YouTube video](https://youtu.be/VeNfHj6MhgA) to learn VueJs.
- Used [shadcn/vue](https://shadcn-vue.com) as components library. _Just followed the docs._
- Whole `build_frontend.yaml` Github Action workflow written by ChatGPT, isn't it amazing :exploding_head:.

Although, I didn't have much knowledge of Vue, Vite and ShadCN like frameworks/tools but their documentation and ChatGPT
helped me so much that I am able to **learn, build, diagnose and deploy** the frontend in almost 2-3 days.

Yes, some credits goes my past knowledge of programming because that's why I able to figure out how do things works and
how to handle them by doing right things.

## What Type of Problems I Have Faced?

> **हे भगवान!** While learning and working on this frontend project, sometime I get messed up with very silly typo
> mistakes in JavaScript.

The things you are building happily in local will totally change when you are trying to deploy it and I have faced this
too :cry:.

### VueJs

- How to emit data from Child component to Parent component in VueJs?
  - [GFG Article](https://www.geeksforgeeks.org/how-to-update-parent-data-from-child-component-in-vuejs/)
  - [Vue School Article](https://vueschool.io/articles/vuejs-tutorials/techniques-for-sharing-data-between-vue-js-components/)
  - Also take a look into official docs to know best practices for this.
- How to create and work with forms?
- How to use [`v-model`](https://vuejs.org/guide/components/v-model.html)?

### Vite

- While deciding how to setup proxy in Docker because I've setup it using Vite and it works like charm in local but
  while writing `Dockerfile` I am able to figure out the solution.
  - Proxy is used in [VueJs YouTube video](https://youtu.be/VeNfHj6MhgA) and thats why I have followed it.
  - [See this docs](https://vite.dev/config/server-options.html#server-proxy)
- While
  [handle environment variables in `nginx.conf`](https://www.baeldung.com/linux/nginx-config-environment-variables#3-docker-compose)
  file in Docker environment. I have used ChatGPT read articles but didn't get to solution.
- How to work with [different `.env` files in Vite](https://vite.dev/guide/env-and-mode.html).
