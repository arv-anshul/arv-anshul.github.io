---
date:
  created: 2024-06-10
  updated: 2024-06-10
title: Deep Learning
description: |
  List of all the related concepts of deep learning.
  Notes of "100 Days of DL" by CampusX.
slug: deep-learning
icon: simple/python
---

# :simple-tensorflow: Deep Learning

!!! info "Note"

    I am following CampusX's **"100 Days of Deep Learning"** [YouTube Playlist](https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn).

## Machine Learning VS Deep Learning

1. As the shape of data increases the ML models cannot able to capture its underlying patterns but deep learning
   algorithms capture the complex relationship very well.
2. ML algorithms uses different techniques to learn patterns from data like linear line, spliting criteria, etc. but
   Perceptron is the building block of DL algorithms which helps to capture almost every patterns of the data.

## :simple-n8n: Perceptron

**Perceptron the building block of Deep Learning.**

<figure markdown>

![perceptron](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Rosenblattperceptron.png/640px-Rosenblattperceptron.png){: .base-border-radius width="90%" style="filter: invert(100%); box-shadow: 2px #aaa" }

</figure>

$$
\sum = w_1x_1 + w_2x_2 + ... + w_nx_n + b
$$

Now after calculating the $\sum$ you will use a activation function $\varphi$ which is applied to the weighted sum to
introduce non-linearity.

> For example, $\varphi$ can be a step function whose output is either 0 or 1.

### Important Points on Perceptron

- Perceptron split the data in two classes.
- Perceptron creates a lines in 2D, plane in 3D and hyperplane in 4D onwards.
- Perceptron's geometric intuition is very similar to Linear Regression algorithm.
- Perceptron is limited to classify only linearly (or sort of linear) separable classes.

**Limitation**{ .danger }

Perceptron only works on linear data it doesn't learn non-linear data because perceptron is a linear model which draws a
line/plane/hyperplane on dataset.

<div class="grid" markdown>

:simple-youtube:
[Problem with Perceptron](https://www.youtube.com/watch?v=Jp44b27VnOg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn&index=7)

</div>

### Perceptron Resources

<div class="grid" markdown>

:simple-youtube:{ .youtube }
[What is a Perceptron? Perceptron Vs Neuron | Perceptron Geometric Intuition](https://youtu.be/X7iIKPoZ0Sw)
:simple-youtube:{ .youtube }
[Perceptron Trick | How to train a Perceptron | Perceptron Part 2 | Deep Learning Full Course](https://youtu.be/Lu2bruOHN6g)

</div>

## Multi-Layer Perceptron
