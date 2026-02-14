---
pubDate: 2024-12-27
categories: [python, docker, fastapi]
description: Dockerize your FastAPI app which is managed with uv easily.
title: Dockerize - FastAPI - UV
icon: simple-icons:docker
---

Let's dockerize my [`yt-comment-sentiment`][yt-comment-sentiment] project which is a FastAPI app managed via UV.

## Official Docs

- FastAPI [docs for Dockerization](https://fastapi.tiangolo.com/deployment/docker/)
- UV [docs for Dockerization](https://docs.astral.sh/uv/guides/integration/docker/)
- UV-FastAPI example [docs for Dockerization](https://docs.astral.sh/uv/guides/integration/fastapi/)

## :thinking: Then, Why this?

I also consider above docs to fulfill my requirements but this includes:

- Multistage build to reduce final image size.
- Best and Flexible practices to use `uv` in Docker.
- Solution of some problems which I have encountered.

## `Dockerfile`

I am taking reference of my [`yt-comment-sentiment`][yt-comment-sentiment] which I have developed and recently and
continuously improving it.

```dockerfile
FROM python:3.11-slim AS builder
# See official docs at https://docs.astral.sh/uv/guides/integration/docker/#available-images
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/

# Install gcc for wordcloud
# Using `wordcloud` in backend and it require `gcc` package to build wheels to work in python.
RUN apt-get update && apt-get install -y gcc && apt-get clean

WORKDIR /app

ADD pyproject.toml uv.lock /app
# Install dependencies with `--extra=backend` dependencies
RUN uv sync --extra=backend --frozen --compile-bytecode --no-install-project

# Copy only necessary files/folders to reduce image size
COPY params.yaml /app
COPY backend /app/backend
COPY ml /app/ml

RUN uv sync --extra=backend --locked

# Final stage
# Use multistage build to reduce the image size.
FROM python:3.11-slim AS final
COPY --from=builder /app /app

WORKDIR /app

# Run backend using fastapi-cli
CMD [".venv/bin/fastapi", "run", "--host", "0.0.0.0", "--port", "8000", "backend/app.py"]
```

> If you get any other problem please refer to [official docs](#official-docs).

[yt-comment-sentiment]: https://github.com/arv-anshul/yt-comment-sentiment
