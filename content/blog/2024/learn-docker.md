---
pubDate: 2024-03-17
categories: [mlops]
title: Learn Docker
description: Learn Docker, Dockerfile, .dockerignore
icon: simple-icons:docker
---

Docker is a platform designed to simplify the process of creating, deploying, and managing applications using
containers. Containers enable developers to package an application with all its dependencies into a standardized unit
for seamless deployment across different environments.

## :hammer_and_wrench: Components of Docker

1. [Dockerfile](#dockerfile)
2. [.dockerignore](#dockerignore)
3. docker-compose.yaml

## `Dockerfile`

A `Dockerfile` serves as a blueprint for building Docker images, which are the executable packages containing everything
needed to run an application - code, runtime, system tools, libraries, and settings. Let's break down the components of
a `Dockerfile` and its significance in the context of Docker:

### Context on Dockerfile

1. **Foundation of Image Creation:** A `Dockerfile` specifies a sequence of instructions to assemble an image. It starts
   with a base image (e.g., Ubuntu, Alpine Linux, Python) and then layers additional configurations and dependencies on
   top of it.

2. **Clear and Reproducible Build Process:** Each instruction in the `Dockerfile` represents a step in the
   image-building process. These steps are executed in order, and Docker caches intermediate layers, facilitating faster
   subsequent builds and ensuring consistency across environments.

3. **Key Components of a Dockerfile:**
   - **Base Image:** Specifies the starting point for the image.
   - **Environment Setup:** Includes commands to install packages, set environment variables, copy files into the image,
     etc.
   - **Application Configuration:** Defines how the application should be configured inside the container.
   - **Startup Commands:** Specifies the command to execute when the container starts.

### Comprehensive Description of a Dockerfile

A typical `Dockerfile` consists of several sections:

1. **FROM:** Defines the base image. It's the starting point for the image build and often references an official or
   custom base image from a registry (e.g., `FROM python:3.11-slim`).
2. **WORKDIR:** Sets the working directory inside the container where subsequent commands will be executed.
3. **COPY/ADD:** Copies files or directories from the host machine into the container's filesystem. This includes
   application code, configuration files, etc.
4. **RUN:** Executes commands during the image build process. Typically used for installing dependencies, setting up the
   environment, and other preparatory tasks.
5. **ENV:** Sets environment variables within the container. These can define runtime configurations or paths.
6. **EXPOSE:** Informs Docker that the container listens on specific network ports at runtime.
7. **CMD/ENTRYPOINT:** Specifies the command that should be run when the container starts. `CMD` is used to provide
   default arguments for the `ENTRYPOINT` command, while `ENTRYPOINT` sets the primary command.

#### An Example Dockerfile of a Python Project

```dockerfile title="Dockerfile"
# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory to /app
WORKDIR /app

# Copy the required files and directory into the container at /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Run main.py when the container launches
CMD ["python", "main.py"]
```

```bash
# Build docker container
docker build -t my_python_container .

# Run docker image
docker run -it my_python_container
```

### Importance and Benefits

- **Portability:** Dockerfiles enable developers to create consistent environments, ensuring that applications run
  identically across various systems and environments.

- **Reproducibility:** By capturing all dependencies and configurations in the Dockerfile, developers can replicate the
  same environment for development, testing, and production.

- **Scalability and Efficiency:** Docker's containerization allows for quick scaling and resource efficiency, enabling
  applications to be deployed and managed easily.

> A `Dockerfile` is the backbone of Docker-based applications, providing a clear, reproducible, and scalable approach to
> building containerized applications. It defines the entire setup and configuration needed to run an application within
> a container, promoting consistency and ease of deployment across different environments.

### Resources to Learn Docker

**PiyushGarg YouTube**

- [Docker - Hindi YouTube Playlist | PiyushGarg](https://www.youtube.com/playlist?list=PLinedj3B30sDvBfeK9EPz9pcJNlM0f3ph)
- [Docker In One Shot - Part 1](https://www.youtube.com/watch?v=31k6AtW-b3Y)
- [Docker For Open Source Contributors - Part 2](https://www.youtube.com/watch?v=xPT8mXa-sJg)
- [Deploying Docker Containers on AWS Elastic Container Service (ECS) | Container Orchestration](https://www.youtube.com/watch?v=AiiFbsAlLaI)

**Visual Studio Code - Docs**

- [Working with containers in Visual Studio Code](https://code.visualstudio.com/remote/advancedcontainers/overview)
- [Build and run a Python app in a container | VSCode](https://code.visualstudio.com/docs/containers/quickstart-python)

## `docker`

### 1. `docker run`

- **Description:** Starts a new container from an image.
- **Example:**

  ```bash
  docker run -it --name my_container ubuntu:latest
  ```

  - `-it`: Starts an interactive terminal within the container.
  - `--name my_container`: Names the container as "my_container".
  - `ubuntu:latest`: Specifies the image to use (latest Ubuntu image).

#### 2. `docker ps`

- **Description:** Lists running containers.
- **Example:**

  ```bash
  docker ps
  ```

  This command shows the containers' IDs, names, status, ports, and images.

#### 3. `docker images`

- **Description:** Lists available images.
- **Example:**

  ```bash
  docker images
  ```

  Displays a list of all downloaded Docker images along with their tags and sizes.

#### 4. `docker build`

- **Description:** Builds an image from a Dockerfile.
- **Example:**

  ```bash
  docker build -t my_image:latest .
  ```

  - `-t my_image:latest`: Tags the image as "my_image" with the "latest" tag.
  - `.`: Specifies the build context (current directory) containing the Dockerfile.

#### 5. `docker stop`

- **Description:** Stops a running container.
- **Example:**

  ```bash
  docker stop my_container
  ```

  Stops the container named "my_container".

#### 6. `docker start`

- **Description:** Starts a stopped container.
- **Example:**

  ```bash
  docker start my_container
  ```

  Starts the container named "my_container" that was stopped.

#### 7. `docker rm`

- **Description:** Removes one or more containers.
- **Example:**

  ```bash
  docker rm my_container
  ```

  Deletes the container named "my_container".

#### 8. `docker rmi`

- **Description:** Removes one or more images.
- **Example:**

  ```bash
  docker rmi my_image:latest
  ```

  Removes the image "my_image" with the "latest" tag.

#### 9. `docker exec`

- **Description:** Executes a command within a running container.
- **Example:**

  ```bash
  docker exec -it my_container bash
  ```

  Executes the Bash shell (`bash`) in the running container named "my_container" interactively (`-it`).

#### 10. `docker logs`

- **Description:** Retrieves logs from a container.
- **Example:**

  ```bash
  docker logs my_container
  ```

  Fetches the logs of the container named "my_container".

These commands form the core of Docker usage for managing containers, images, building, starting/stopping containers,
and interacting with containerized applications. They're essential for everyday Docker workflows in development,
testing, and deployment scenarios.

## `.dockerignore`

`.dockerignore` is a file used to specify which files and directories to exclude when building a Docker image. It works
similarly to `.gitignore` but for Docker. When building an image, Docker uses this file to determine which files should
not be included in the context sent to the Docker daemon, thus reducing the image size and build time.

### Example

An `.dockerignore` file might contain entries like `node_modules`, `*.log`, or any other files/directories that are not
necessary for the image build process.

```bash title=".dockerignore"
# Byte-compiled files
__pycache__
*.pyc
*.pyo
*.pyd

# Virtual environments
venv/
env/
.venv/

# Editor/IDE specific files
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Logs and temp files
*.log
logs/
*.tmp

# Miscellaneous
.DS_Store
node_modules/
.cache/

# My custom files for practicing
*.arv
arv.*
```

### Differences between `.gitignore` and `.dockerignore`

|            Aspect | `.gitignore`                     | `.dockerignore`                                   |
| ----------------: | -------------------------------- | ------------------------------------------------- |
|           Purpose | Specifies files to ignore in Git | Specifies files to exclude in Docker image builds |
|   Associated tool | Git                              | Docker                                            |
|     File behavior | Excludes files in Git operations | Excludes files during image build                 |
|            Impact | Affects version control only     | Affects image build process                       |
|          Use case | Manages repository content       | Manages files in Docker context                   |
| Ignoring patterns | Glob patterns, file names        | Glob patterns, file names                         |

`.gitignore` and `.dockerignore` serve different purposes despite their similar naming conventions. While both control
what files should be ignored/excluded, `.gitignore` operates within version control systems, allowing certain files not
to be tracked. Conversely, `.dockerignore` is used during image building to exclude unnecessary files from the Docker
context sent to the daemon, optimizing the image build process.

> Both files use similar syntax (like glob patterns) to specify what should be ignored, but their impact and contexts in
> which they're utilized differ significantly.

## Doubts

1. How to write `Dockerfile` efficiently?
2. How to use `.dockerignore`?
3. How to run two apps with one `Dockerfile`?
4. How to integrate Environment Variables in Docker and Python project?
5. Learn about Python images present on Docker like `slim`, `alpine`, `bookworm`, etc.
6. How to run multiple apps like FastAPI and Streamlit in one go?
7. How do I integrate MongoDB image in my Python project?
