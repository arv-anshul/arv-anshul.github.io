---
date:
  created: 2024-06-07
  updated: 2024-06-07
title: Rye
description: My way of using rye for my python projects and some tricks.
slug: rye
icon: simple/rye
---

# :simple-rye: Rye

!!! failure "Do not use Rye!"

    There's a **new and better tool for the same** called [`uv`](https://docs.astral.sh/uv).

## :fontawesome-solid-gears: Important settings for Rye

1. Use `UV` internally in Rye. Enable `uv` with below command:

    ```bash
    rye config --set-bool behavior.use-uv=true
    ```

## :simple-scikitlearn: How to setup a Data Science project using `rye`?

```bash
rye init --virtual --no-readme
```

Above command will create below file structure.

```tree
./
├── .gitignore
├── .python-version
└── pyproject.toml
```

Now you can proceed by adding deps into the project with `rye add` command.

> I use this way to setup my data science project.

## :material-package: Global packages with `rye`

[![Rye](https://img.shields.io/badge/Rye-Docs-000000?logo=rye&logoColor=fff)](https://rye.astral.sh/guide/tools/)

I generally install `ruff`, `uv` and `pytest` (see [`rye test`](https://rye.astral.sh/guide/commands/test/)) in global.

## :material-laptop: How to setup a `rye` managed project in local?

**Just run `rye sync --no-dev`** which will install all deps required for project and then you can follow further
instructions to setup the project.

> `--no-dev` flag will prevent you to install **dev** deps. Remove it to install **dev** deps.
