---
date:
  created: 2024-12-27
  updated: 2024-12-27
authors:
  - arv-anshul
categories:
  - python
  - docker
  - fastapi
description: Dockerize your FastAPI app which is managed with uv easily.
title: Dockerize - FastAPI - UV
slug: docker-fastapi-uv
icon: simple/docker
---

# :simple-docker:{: title="2024-12-27" } Dockerize - FastAPI - UV

Let's dockerize my [`yt-comment-sentiment`][yt-comment-sentiment] project which is a FastAPI app managed via UV.

## Official Docs

- :simple-fastapi:{: .fastapi } FastAPI [docs for Dockerization](https://fastapi.tiangolo.com/deployment/docker/)
- :simple-uv:{: .uv } UV [docs for Dockerization](https://docs.astral.sh/uv/guides/integration/docker/)
- :simple-uv:{: .uv } UV-FastAPI example [docs for Dockerization](https://docs.astral.sh/uv/guides/integration/fastapi/)

## :thinking: Then, Why this?

I also consider above docs to fulfill my requirements but this includes:

<!-- more -->

- Multistage build to reduce final image size.
- Best and Flexible practices to use `uv` in Docker.
- Solution of some problems which I have encountered.

## `Dockerfile`

I am taking reference of my [`yt-comment-sentiment`][yt-comment-sentiment] which I have developed and recently and
continuously improving it.

```dockerfile
FROM python:3.11-slim AS builder
# (1)!
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/

# Install gcc for wordcloud
# (2)!
RUN apt-get update && apt-get install -y gcc && apt-get clean

WORKDIR /app

# (3)!
ADD pyproject.toml uv.lock /app
# Install dependencies with `--extra=backend` dependencies
RUN uv sync --extra=backend --frozen --compile-bytecode --no-install-project

# (4)!
# Copy only necessary files/folders to reduce image size
COPY params.yaml /app
COPY backend /app/backend
COPY ml /app/ml

# (5)!
RUN uv sync --extra=backend --locked

# Final stage
# (6)!
FROM python:3.11-slim AS final
# (7)!
COPY --from=builder /app /app

WORKDIR /app

# Run backend using fastapi-cli
# (8)!
CMD [".venv/bin/fastapi", "run", "--host", "0.0.0.0", "--port", "8000", "backend/app.py"]
```

1. See official docs by [`uv`](https://docs.astral.sh/uv/guides/integration/docker/#available-images).
2. I am using `wordcloud` in backend and it require `gcc` package to build wheels to work in python.
3. Add to install dependencies of project. But there is
    [more in docs](https://docs.astral.sh/uv/guides/integration/docker/#intermediate-layers).
4. You can also use `.dockerignore` to do this.
5. Re-sync project, [view in docs](https://docs.astral.sh/uv/guides/integration/docker/#intermediate-layers).
6. Use multistage builds to reduce image size.
7. Here we import only required files from `builder` stage (which is `/app` directory) because it contains `.venv/`
    directory (where all project deps were installed) and project files.

8. Finally, use `fastapi-cli` to run you app.
    [See FastAPI docs](https://fastapi.tiangolo.com/deployment/docker/#dockerfile).

> If you get any other problem please refer to [official docs](#official-docs).

[yt-comment-sentiment]: https://github.com/arv-anshul/yt-comment-sentiment
