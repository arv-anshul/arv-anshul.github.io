---
pubDate: 2024-06-10
categories: [deep-learning]
title: Intro to Deep Learning
description: List of some related concepts of Deep Learning like Perceptron and MLP; including notations, coding
  examples.
icon: simple-icons:pytorch
---

## Machine Learning VS Deep Learning

1. As the shape of data increases the ML models cannot able to capture its underlying patterns but deep learning
   algorithms capture the complex relationship very well.
2. ML algorithms uses different techniques to learn patterns from data like linear line, spliting criteria, etc. but
   Perceptron is the building block of DL algorithms which helps to capture almost every patterns of the data.

## Perceptron

**Perceptron the building block of Deep Learning.**

![perceptron](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Rosenblattperceptron.png/640px-Rosenblattperceptron.png)

```math
\sum = w_1x_1 + w_2x_2 + ... + w_nx_n + b
```

Now after calculating the `#!math \sum` you will use a activation function `#!math \varphi` which is applied to the
weighted sum to introduce non-linearity.

> For example, `#!math \varphi` can be a step function whose output is either 0 or 1.

### Important Points on Perceptron

- Perceptron split the data in two classes.
- Perceptron creates a lines in 2D, plane in 3D and hyperplane in 4D onwards.
- Perceptron's geometric intuition is very similar to Linear Regression algorithm.
- Perceptron is limited to classify only linearly (or sort of linear) separable classes.

### Limitation

Perceptron only works on linear data it doesn't learn non-linear data because perceptron is a linear model which draws a
line/plane/hyperplane on datasets.

## Multi-Layer Perceptron (MLP)

A **Multi-Layer Perceptron (MLP)** is a class of feedforward artificial neural networks that consist of multiple layers
of nodes in a directed graph. Each node, except for the input nodes, represents a neuron that uses a non-linear
activation function. MLPs are capable of learning complex patterns in data, including non-linear relationships, making
them widely used in machine learning tasks like classification, regression, and feature extraction.

By using a single perceptron, we are limited to learning only linear decision boundaries. This restricts its ability to
model more complex datasets with inherent non-linear relationships. To overcome this limitation, we can add more
perceptrons in a structured way to create a **Multi-Layer Perceptron**.

### Why Don’t We Use Only One Layer Instead?

A single-layer perceptron can only model linearly separable data. For example, tasks like distinguishing between two
classes in XOR logic cannot be achieved by a single-layer perceptron, as its decision boundary is inherently linear.
However, real-world datasets are often non-linear in nature.

Adding hidden layers in an MLP allows the network to transform input features through non-linear activation functions,
enabling it to create complex decision boundaries. These hidden layers progressively learn higher-order features, making
MLP a universal approximator of functions, as proven by the Universal Approximation Theorem.

### How Does MLP Capture Non-Linearity?

MLPs capture non-linearity through two primary mechanisms:

1. **Non-Linear Activation Functions:** Non-linear activation functions like ReLU, Sigmoid, or Tanh introduce the
   ability to model complex patterns in the data. Without these functions, the MLP would behave like a linear model,
   regardless of the number of layers.

2. **Layered Structure:** Each hidden layer processes inputs to extract increasingly abstract features. These features,
   when passed through activation functions, enable the network to learn representations that are non-linear
   transformations of the original data.

By stacking layers, the network learns a hierarchy of features, where lower layers might capture simple patterns (like
edges in an image), and deeper layers capture more abstract representations (like shapes or objects).

### Forward Pass in MLP

The **forward pass** is the process of passing input data through the network to compute the output predictions. It
involves the following steps:

1. **Input Layer:** The input data is fed into the network as feature vectors.

2. **Hidden Layers:** Each hidden layer applies a weighted sum of inputs followed by a bias term and an activation
   function. Mathematically, for a hidden layer \( l \):

#### Hidden Layers in Notation

```math
h^{l} = f(W^{l}h^{(l-1)} + b^{l})
```

where:

- `#!math W^{l}` is the weight matrix for layer `#!math l`.
- `#!math b^{l}` is the bias vector for layer `#!math l`.
- `#!math f` is the activation function (e.g., ReLU).
- `#!math h^{(l-1)}` is the output from the previous layer.

3. **Output Layer:** The final layer produces predictions, often applying a specific activation function (e.g., softmax
   for classification or linear activation for regression).

```python title="Example using Keras"
from keras import Sequential
from keras.layers import Dense

# Define a simple MLP model
model = Sequential([
    Dense(16, activation='relu', input_shape=(4,)),  # Input layer
    Dense(8, activation='relu'),                     # Hidden layer
    Dense(1, activation='sigmoid')                  # Output layer
])

model.summary()
```

> The forward pass results in the computation of predictions based on the current weights and biases.

### Backward Propagation in MLP

The **backward propagation** algorithm is used to train the MLP by adjusting weights and biases to minimize the error
between predicted and actual outputs. It works in the following steps:

1. **Compute Loss:** A loss function (e.g., Mean Squared Error for regression or Cross-Entropy Loss for classification)
   measures the error between the predicted output and the true labels.

2. **Backpropagation of Errors:** The error is propagated backward through the network using the chain rule of calculus
   to compute the gradient of the loss function with respect to each weight and bias. The gradients for each parameter
   are computed layer by layer in reverse order.

3. **Update Weights and Biases:** Using the computed gradients, the weights and biases are updated using an optimization
   algorithm like Gradient Descent or its variants (e.g., Adam, RMSprop):

#### Backward Propagation with Notation

```math
W^{l} = W^{l} - \eta \frac{\partial \mathcal{L}}{\partial W^{l}}
```

```math
b^{l} = b^{l} - \eta \frac{\partial \mathcal{L}}{\partial b^{l}}
```

where:

- `#!math \eta` is the learning rate.
- `#!math \mathcal{L}` is the loss function.

```python title="Example using PyTorch"
import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple MLP model
class SimpleMLP(nn.Module):
    def __init__(self):
        super(SimpleMLP, self).__init__()
        self.fc1 = nn.Linear(4, 16)  # Input to hidden layer
        self.fc2 = nn.Linear(16, 8) # Hidden to hidden layer
        self.fc3 = nn.Linear(8, 1)  # Hidden to output layer

    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        x = torch.sigmoid(self.fc3(x))
        return x

# Instantiate the model, loss function, and optimizer
model = SimpleMLP()
criterion = nn.BCELoss()  # Binary Cross Entropy Loss
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Dummy data for training
inputs = torch.randn(10, 4)  # Batch of 10 samples, 4 features each
targets = torch.randint(0, 2, (10, 1)).float()  # Binary targets

# Training loop
for epoch in range(10):
    # Forward pass
    outputs = model(inputs)
    loss = criterion(outputs, targets)

    # Backward pass
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    if (epoch + 1) % 10 == 0:
        print(f"Epoch [{epoch+1}/10], Loss: {loss.item():.4f}")
```

> [!IMPORTANT]
> By iteratively performing forward and backward passes over multiple epochs, the network learns the optimal parameters
> to minimize the loss and generalize to unseen data.

### Importance of MLP

By combining these techniques, MLPs become powerful tools for modeling both linear and non-linear patterns in data. They
form the foundation of many advanced deep learning architectures, such as **Convolutional Neural Networks (CNNs)** and
**Recurrent Neural Networks (RNNs)**.
