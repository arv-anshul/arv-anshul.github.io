---
pubDate: 2024-03-17
icon: simple-icons:fastapi
categories: [others]
title: Learn FastAPI
description: Learn FastAPI framework from basic to advance with free tutorials and official docs.
---

_A better framework than Flask_. Get production-ready code and API. With automatic interactive documentation. Based on
(and fully compatible with) the open standards for APIs: [OpenAPI](https://github.com/OAI/OpenAPI-Specification)
(previously known as Swagger) and [JSON Schema](https://json-schema.org/).

## Features

1. **Automatic docs:** Generate documentation for your API automatically.
   - **Swagger UI:** Interactive exploration, call and test your API directly from the browser.

   ```sh
   http://localhost:8000/docs
   ```

   - **Redoc:** Read only documentation. You can also download this doc.

   ```sh
   http://localhost:8000/redoc
   ```

2. **Response Validation:** Use [pydantic](https://pydantic-docs.helpmanual.io/) `BaseModel` as TypeHint in Python which
   automatically validate your responses.
3. **Starlette Features:** `FastAPI` is actually a sub-class of `Starlette`.With **FastAPI** you get all of
   **Starlette**'s features (as FastAPI is just Starlette on steroids):
   - Seriously impressive performance. It is
     [one of the fastest Python frameworks available, on par with **NodeJS** and **Go**](https://github.com/encode/starlette#performance).
   - **WebSocket** support.
   - In-process background tasks.
   - Startup and shutdown events.
   - Test client built on HTTPX.
   - **CORS**, GZip, Static Files, Streaming responses.
   - **Session and Cookie** support.
   - 100% test coverage.
   - 100% type annotated codebase.
4. Supports Asynchronous programming.

### Important Links To Learn FastAPI

**FastAPI Tutorials**

- [Amigoscode](https://www.youtube.com/watch?v=GN6ICac3OXY)
- [ArjanCodes](https://www.youtube.com/watch?v=SORiTsvnU28)
- [Bitfumes](https://www.youtube.com/watch?v=7t2alSnE2-I)
- [CodeWithHarry](https://www.youtube.com/watch?v=52c7Kxp_14E)
- [CodeWithHarry - Tutorial Uses Some of the Classes](https://www.youtube.com/watch?v=52c7Kxp_14E)

**Asynchronous Programming Tutorials**

- [ArjanCode - 1](https://www.youtube.com/watch?v=GpqAQxH1Afc)
- [ArjanCode - 2](https://www.youtube.com/watch?v=2IW-ZEui4h4)
- [NeuralNine](https://www.youtube.com/watch?v=6RbJYN7SoRs)
- [NeuralNine - Requests Library](https://www.youtube.com/watch?v=mrtsk9B9_Ho)

## Some Advice On FastAPI

- Use `fastapi.APIRouter` to separate out different API paths. See mine
  [@arv-anshul/ecommerce-scrapper-api](https://github.com/arv-anshul/ecommerce-scrapper-api/tree/main/ecommerce/api/routes)
  project for example.
- If you don't know, check the _"In a hurry?"_ section about
  [`async` and `await` in the docs](https://fastapi.tiangolo.com/async/#in-a-hurry).
- Learn _builtin_ `asyncio` module in python to do Asynchronous Programming in python. See mine
  [@arv-anshul/yt-watch-history](https://github.com/arv-anshul/yt-watch-history/tree/main/backend/api/routes) project
  for example.
- Use [pydantic](https://docs.pydantic.dev/latest/) with FastAPI for data handling of APIs. See this
  [docs section](https://fastapi.tiangolo.com/features/?h=pydantic#pydantic-features) to know more about Pydantic and
  FastAPI compatiblity.
- You can use the [`fastapi.testclient.TestClient`](https://fastapi.tiangolo.com/reference/testclient/) class to test
  FastAPI applications without creating an actual HTTP and socket connection, just communicating directly with the
  FastAPI code. Read more about it in the
  [FastAPI docs for Testing - Tutorial](https://fastapi.tiangolo.com/tutorial/testing/).
- There are many other advance concepts in API world and some of them are Middleware, Dependency Injection, CORS, etc.
  For that see the [FastAPI docs](https://fastapi.tiangolo.com/tutorial/).

### Extra Links around FastAPI

- [What are the best practices for structuring a FastAPI project? - Stack Overflow](https://stackoverflow.com/questions/64943693/what-are-the-best-practices-for-structuring-a-fastapi-project)
- [Advanced User Guide - FastAPI](https://fastapi.tiangolo.com/advanced/)
- [Custom Response - HTML, Stream, File, others - FastAPI](https://fastapi.tiangolo.com/advanced/custom-response/)
