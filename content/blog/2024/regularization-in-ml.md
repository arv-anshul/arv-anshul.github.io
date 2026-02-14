---
pubDate: 2024-03-17
icon: mdi:calendar
categories: [ml]
title: Regularization in ML
description: Regularization in ML essentially Lasso, Ridge and ElasticNet.
---

Regularization is used to solve the problem of overfitting caused while training a ML model. In regularization, the
model is penalized for overfitting on train data means whenever model tries to predict on training data it add some
penalty to the loss function in term of coefficients of the model.

> [!WARNING] What is Overfitting?
>
> A ML model is said to be **"overfitting"** when it performs well on training dataset, but the performance is
> comparatively poor on the test/unseen dataset.

> [!WARNING] What is Underfitting?
>
> An ML model is said to **"Underfitting"** when it does not performs well on both the train as well as test dataset.

## Types of Regularization

There are three main type of regularization in ML:

1. [L1 Regularization (Lasso)](#l1-regularization-lasso)
2. [L2 Regularization (Ridge)](#l2-regularization-ridge)
3. [L1 + L2 Regularization (ElasticNet)](#elasticnet)

### L2 Regularization (Ridge)

Ridge Regression is a technique used in regression analysis to tackle the problem of overfitting, particularly when
dealing with multiple correlated predictors or features. The L2 regularization technique, also known as Ridge
Regression, adds a penalty term to the standard linear regression equation, which helps to mitigate the effects of
multi-collinearity.

The objective function for Ridge Regression is given by:

```math
\text{minimize}\left( \sum_{i=1}^{n} \left( y_i - \beta_0 - \sum_{j=1}^{p} x_{ij}\beta_j \right)^2 + \lambda \sum_{j=1}^{p} \beta_j^2 \right)
```

Where:

- `#!math (n)` represents the number of data points.
- `#!math (p)` represents the number of predictors or features.
- `#!math (x_{ij})` denotes the value of the `#!math (j^{th})` feature for the `#!math (i^{th})` data point.
- `#!math (y_i)` represents the observed output for the `#!math (i^{th})` data point.
- `#!math (\beta_0, \beta_1, \beta_2, \dots, \beta_p)` are the regression coefficients.
- `#!math (\lambda)` is the hyperparameter that controls the regularization strength.

The first part of the equation is the **standard least squares regression term**, which aims to minimize the squared
difference between the predicted and actual output. The second part is the penalty term, which is the sum of squares of
the coefficients `#!math (\beta)` multiplied by the regularization parameter `#!math (\lambda)`.

The hyperparameter `#!math (\lambda)` controls the trade-off between fitting the model to the training data and
preventing overfitting by keeping the coefficients small. A larger `#!math (\lambda)` leads to a stronger penalty,
effectively shrinking the coefficients toward zero. This helps to reduce the model's complexity, making it less
sensitive to the noise in the data.

Ridge Regression is a powerful tool in situations where multi-collinearity among predictors exists. By adding this
penalty term, it stabilizes the coefficients and reduces their variance, thus improving the model's generalization and
robustness when dealing with new, unseen data.

Implementing Ridge Regression involves finding the optimal values for the coefficients by minimizing the combined error
and penalty term. Various optimization algorithms such as gradient descent or closed-form solutions can be employed for
this purpose.

In conclusion, Ridge Regression with L2 regularization offers a balance between fitting the data and preventing
overfitting, making it a valuable technique in the realm of regression analysis.

### L1 Regularization (Lasso)

Lasso Regression, short for "Least Absolute Shrinkage and Selection Operator," is a method used in regression analysis
to handle overfitting and perform feature selection by adding a penalty term to the standard linear regression equation.
The L1 regularization technique in Lasso Regression introduces sparsity by imposing a penalty based on the absolute
values of the regression coefficients.

The objective function for Lasso Regression is given by:

```math
\text{minimize}\left( \sum_{i=1}^{n} \left( y_i - \beta_0 - \sum_{j=1}^{p} x_{ij}\beta_j \right)^2 + \lambda \sum_{j=1}^{p} |\beta_j| \right)
```

Where:

- `#!math (n)` represents the number of data points.
- `#!math (p)` represents the number of predictors or features.
- `#!math (x_{ij})` denotes the value of the `#!math (j^{th})` feature for the `#!math (i^{th})` data point.
- `#!math (y_i)` represents the observed output for the `#!math (i^{th})` data point.
- `#!math (\beta_0, \beta_1, \beta_2, \dots, \beta_p)` are the regression coefficients.
- `#!math (\lambda)` is the hyperparameter that controls the regularization strength.

The first part of the equation is the standard least squares regression term that minimizes the squared difference
between the predicted and actual output. The second part is the penalty term, which is the sum of the absolute values of
the coefficients `#!math (\beta)` multiplied by the regularization parameter `#!math (\lambda)`.

The hyperparameter `#!math (\lambda)` controls the trade-off between fitting the model to the training data and keeping
the coefficients small. In Lasso Regression, the absolute value of the coefficients' sum is used as the penalty. This
has the effect of forcing some coefficients to be exactly zero, effectively performing variable selection by eliminating
less influential features. The sparsity induced by L1 regularization makes Lasso Regression particularly useful when
dealing with datasets with a large number of features, as it can automatically perform feature selection.

Implementing Lasso Regression involves finding the optimal values for the coefficients by minimizing the combined error
and penalty term. Various optimization techniques like coordinate descent or sub-gradient methods can be employed to
achieve this.

In conclusion, Lasso Regression with L1 regularization is a valuable tool for not only preventing overfitting but also
performing automatic feature selection by shrinking certain coefficients to zero. This makes it a popular choice when
dealing with high-dimensional datasets and seeking a more interpretable and sparse model.

### ElasticNet

This is the combination of both L1 and L2 regularization.

```math
\text{minimize}\left( \sum_{i=1}^{n} \left( y_i - \beta_0 - \sum_{j=1}^{p} x_{ij}\beta_j \right)^2 + \lambda_1 \sum_{j=1}^{p} |\beta_j| + \lambda_2 \sum_{j=1}^{p} \beta_j^2 \right)
```

### Resources

- [Regularization Techniques](https://medium.com/analytics-vidhya/regularisation-techniques-in-machine-learning-and-deep-learning-8102312e1ef3)
- [CampusX YouTube](https://youtube.com/@campusx-official)
