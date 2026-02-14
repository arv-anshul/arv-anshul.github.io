---
pubDate: 2024-12-27
icon: simple-icons:fastapi
title: YT Comment Sentiment - Backend Side
description: Built backend of project using FastAPI and YouTube API in Python and hosted on Render.com.
categories: [project, ml, fastapi]
---

|                                                                                                     Technology | Description                                                                     |
| -------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------- |
| ![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?logo=scikitlearn&logoColor=fff&style=square) | A Python library for building and training machine learning models.             |
|              ![DagsHub Badge](https://img.shields.io/badge/DagsHub-34567C?logo=pug&logoColor=fff&style=square) | A collaboration platform for machine learning, hosting data and MLflow models.  |
|                   ![MLflow](https://img.shields.io/badge/MLflow-0194E2?logo=mlflow&logoColor=fff&style=square) | A platform to manage the ML lifecycle, including model tracking and deployment. |
|                ![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=fff&style=square) | A modern web framework for building APIs with Python, known for its speed.      |
|             ![Pydantic](https://img.shields.io/badge/Pydantic-E92063?logo=pydantic&logoColor=fff&style=square) | A Python library for data validation. Used to validate API data.                |
|             ![Pytest Badge](https://img.shields.io/badge/Pytest-0A9EDC?logo=pytest&logoColor=fff&style=square) | A testing framework for Python, used to test the FastAPI application.           |
|                ![YouTube](https://img.shields.io/badge/YouTube-FF0000?logo=youtube&logoColor=fff&style=square) | An API to access and manage YouTube video data, including comments.             |
|                   ![Render](https://img.shields.io/badge/Render-000000?logo=render&logoColor=fff&style=square) | A cloud platform for hosting APIs, websites, and applications.                  |

## What ~~I Followed~~ to Know?

> [!IMPORTANT]
>
> 1. As I am learning Python, Data Science and Machine Learning for more than 3 years. I don't have to look around to
>    learn new things to build this. _This part is kind of easy for me._
> 2. But as I said earlier, the documentations and ChatGPT is most important resources you can onto. :wink:

- Need to **get an API key from Google Developer Console** to interact with YouTube Data API.
- Need to create an account on DagsHub to store/track MLFlow experiments and models.
- Created a DVC pipeline to run the MLFlow experiments seemlessly using `dvc repro` command.
- After creating the FastAPI app, I've used `pytest` to test it and also setup a `pre-commit` for it.
- Deployment on [render.com](https://render.com).

## What Type of Problems I Have Faced?

### Render.com

- As I have used `uv` to manage my project but render.com doesn't support `uv` out-of-the-box so I have used `pip` to
  use `uv` for dependencies installation.

  ```bash
  pip install uv && uv sync --extra=backend --compile-bytecode
  ```

- Also, render.com only serve apps on port under `$PORT` env (which `10000` most of the times) so make sure to
  explicitly provide while running app through `uvicorn` or `fastapi-cli` CLI.

  ```bash
  # For uvicorn
  uvicorn run --host 0.0.0.0 --port $PORT backend.app:app

  # For fastapi-cli
  fastapi run --host 0.0.0.0 --port $PORT backend/app.py
  ```

### Docker

- I am using `wordcloud` to create a plot in a FastAPI route. While building docker image FROM `python:3.11-slim` image,
  I am getting error because `wordcloud` package needs `gcc` package to build wheels. So you need to explicitly install
  `gcc` before install `wordcloud` as python package.

  ```dockerfile
  # Install gcc for wordcloud
  RUN apt-get update && apt-get install -y gcc && apt-get clean

  # Now install project dependencies including wordcloud
  # ...
  ```

- Also use multistage builds in `Dockerfile` to reduce the image size.
  [See `uv` docs](https://docs.astral.sh/uv/guides/integration/docker/).
