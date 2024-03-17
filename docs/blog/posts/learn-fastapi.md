---
date:
  created: 2024-03-17
  updated: 2024-03-17
authors:
  - arv-anshul
description: |
  Learn FastAPI framework from basic to advance with free tutorials and official docs.
categories:
  - others
slug: learn-fastapi
title: Learn FastAPI
hide:
  - toc
---

# :simple-fastapi:{ .fastapi title="2024-03-17" } Learn FastAPI

[![FastAPI Logo](https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png)](https://fastapi.tiangolo.com/)

_A better framework than Flask_{ .secondary title="My Opinion" }. Get production-ready code and API. With automatic interactive documentation. Based on (and fully compatible with) the open standards for APIs: [OpenAPI](https://github.com/OAI/OpenAPI-Specification) (previously known as Swagger) and [JSON Schema](https://json-schema.org/).

### Features

1. **Automatic docs:** Generate documentation for your API automatically.
    - **Swagger UI:** Interactive exploration, call and test your API directly from the browser.
    ```sh
    http://localhost:8000/docs
    ```
    - **Redoc:** Read only documentation. You can also download this doc.
    ```sh
    http://localhost:8000/redoc
    ```
2. **Response Validation:** Use [pydantic](https://pydantic-docs.helpmanual.io/) `BaseModel` as TypeHint in Python which automatically validate your responses.
3. **Starlette Features:** `FastAPI` is actually a sub-class of `Starlette`.With **FastAPI** you get all of **Starlette**'s features (as FastAPI is just Starlette on steroids):
    - Seriously impressive performance. It is [one of the fastest Python frameworks available, on par with **NodeJS** and **Go**](https://github.com/encode/starlette#performance).
    - **WebSocket** support.
    - In-process background tasks.
    - Startup and shutdown events.
    - Test client built on HTTPX.
    - **CORS**, GZip, Static Files, Streaming responses.
    - **Session and Cookie** support.
    - 100% test coverage.
    - 100% type annotated codebase.
4. Supports Asynchronous programming.

???+ abstract "Important Links To Learn FastAPI"

    **FastAPI Tutorials**{ .success }

    - :simple-youtube:{ .youtube }&nbsp; [Amigoscode](https://www.youtube.com/watch?v=GN6ICac3OXY)
    - :simple-youtube:{ .youtube }&nbsp; [ArjanCodes](https://www.youtube.com/watch?v=SORiTsvnU28)
    - :simple-youtube:{ .youtube }&nbsp; [Bitfumes](https://www.youtube.com/watch?v=7t2alSnE2-I)
    - :simple-youtube:{ .youtube }&nbsp; [CodeWithHarry](https://www.youtube.com/watch?v=52c7Kxp_14E)
    - :simple-youtube:{ .youtube }&nbsp; [CodeWithHarry - Tutorial Uses Some of the Classes](https://www.youtube.com/watch?v=52c7Kxp_14E)

    **Asynchronous Programming Tutorials**{ .success }

    - :simple-youtube:{ .youtube }&nbsp; [ArjanCode - 1](https://www.youtube.com/watch?v=GpqAQxH1Afc)
    - :simple-youtube:{ .youtube }&nbsp; [ArjanCode - 2](https://www.youtube.com/watch?v=2IW-ZEui4h4)
    - :simple-youtube:{ .youtube }&nbsp; [NeuralNine](https://www.youtube.com/watch?v=6RbJYN7SoRs)
    - :simple-youtube:{ .youtube }&nbsp; [NeuralNine - Requests Library](https://www.youtube.com/watch?v=mrtsk9B9_Ho)

## :octicons-info-16:{ title="From my Experience" } Some Advice On FastAPI

- Use `fastapi.APIRouter` to separate out different API paths. See mine [@arv-anshul/ecommerce-scrapper-api](https://github.com/arv-anshul/ecommerce-scrapper-api/tree/main/ecommerce/api/routes) project for example.
- If you don't know, check the *"In a hurry?"* section about [`async` and `await` in the docs](https://fastapi.tiangolo.com/async/#in-a-hurry).
- Learn _builtin_ `asyncio` module in python to do Asynchronous Programming in python. See mine [@arv-anshul/yt-watch-history](https://github.com/arv-anshul/yt-watch-history/tree/main/backend/api/routes) project for example.
- Use :simple-pydantic:{ .pydantic } [pydantic](https://docs.pydantic.dev/latest/) with FastAPI for data handling of APIs. See this [docs section](https://fastapi.tiangolo.com/features/?h=pydantic#pydantic-features) to know more about :simple-pydantic: Pydantic and :simple-fastapi: FastAPI compatiblity.
- You can use the [`fastapi.testclient.TestClient`](https://fastapi.tiangolo.com/reference/testclient/) class to test FastAPI applications without creating an actual HTTP and socket connection, just communicating directly with the FastAPI code. Read more about it in the [FastAPI docs for Testing - Tutorial](https://fastapi.tiangolo.com/tutorial/testing/).
- There are many other advance concepts in API world and some of them are Middleware, Dependency Injection, CORS, etc. For that see the [FastAPI docs](https://fastapi.tiangolo.com/tutorial/).

???+ example "Extra Links around FastAPI"

    - :simple-stackoverflow:{ .stackoverflow }&nbsp; [What are the best practices for structuring a FastAPI project? - Stack Overflow](https://stackoverflow.com/questions/64943693/what-are-the-best-practices-for-structuring-a-fastapi-project)
    - :simple-fastapi:{ .fastapi }&nbsp; [Advanced User Guide - FastAPI](https://fastapi.tiangolo.com/advanced/)
    - :simple-fastapi:{ .fastapi }&nbsp; [Custom Response - HTML, Stream, File, others - FastAPI](https://fastapi.tiangolo.com/advanced/custom-response/)
