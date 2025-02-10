---
date: 2024-01-24
authors: [arv-anshul]
categories: [mlops]
description: My doubts around creating and working ML Systems.
links:
  - projects/yt-watch-history/index.md
  - https://github.com/arv-anshul/yt-watch-history/
---

# ML Systems Dobuts

I've been working on a **project of Machine Learning** where I am using :simple-docker: Docker to containerise my applications (frontend and backend). But I'm facing difficulties while using ML models in the containers.

!!! question
    1. How to train the model and also use :simple-mlflow: MLFlow for model monitoring?
    2. I don't know how to integrate the ML models in the containers.
        1. Should I deploy my models in cloud and from there I can fetch the models for prediction?
        2. Should I add the models into the container from which I can easily make prediction?

## MLFlow

<!-- more -->

In my project [:material-book:{ .secondary }](https://github.com/arv-anshulyt-watch-history "Project on GitHub") `yt-watch-history`, I am using MLFlow (but not using it also) means I have written code to train the model with MLFlow but I can also train without it (and I always use this only).

!!! question
    1. Should I train the model using MLFLow or just do the model monitoring while Hyper-parameter Tuning?

## Containers

### What I am doing right now?

I am training the models before starting the container and after, training the models and starting I do predictions using those models by mounting the directories (where models are stored).

### What should I have to do?

1. I can train the model locally and deploy it on the cloud and then fetch and _store\*_ the model while prediction.
2. I can containerise the model too with the codes which makes it easy to use and locate. But comes with many disadvantages like scalability, container's size, model availability/redundancy and more.

## Databases

I have been using this as **optional** step because I never use database model training purpose. I prefer to fetch the data from database and store them into local files and then use them for all the steps.

!!! question "How should I use them for model training?"
    1. Should I always fetch data from databases for training?
    2. Should I fetch the data once and do all the required steps like data preprocessing, data transformation, features selection, model training and all? :material-tooltip-question:{ title="I think this is a better approach." }
