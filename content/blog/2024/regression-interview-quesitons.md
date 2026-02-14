---
pubDate: 2024-03-12
categories: [ml, interview-questions]
title: Regression Interview Questions
description: Some important Interview Questions on Regression Algorithms.
icon: mdi:chart-line
---

In an interview, questions around regression model is very prominent. So, let's study some interview questions around
it.

![assumptions-of-linear-regression](https://media.geeksforgeeks.org/wp-content/uploads/20241025105428904464/Assumptions-of-Linear-Regression.webp)

## Assumptions of Linear Regression?

There are about 5 main assumption while training a Linear Regression Model which are:

### 1. Linear Relationship Between Input And Output Data

Relationship of every input feature must be **linear** with output feature.

### 2. Multi-Collinearity

> [!WARNING] What is Multi-Collinearity?
>
> Multicollinearity is a phenomena where two or more independent variables are highly correlated. In other words, one
> predictor variable can be used to predict the value of another. This creates redundant information, skewing the
> results in a regression model.

Input data must not correalate with each other, they must be independent of each other. One can use **VIF**{
title="Variance Inflation Factor" } or correlation matrices to know whether their input data is correlated.

See [this section](#why-multi-collinearity-is-a-problem) for better explanation.

### 3. Normally Distributed Residuals

> [!WARNING] What are Residuals?
>
> Represent the vertical distance between a data point and the regression line. They are the errors of the model which
> the model can't able to capture while training.

The distribution of the residuals must be normally distributed. One can analyse this using **KDE** (Kernel Density
Estimator Function) or [QQ-Plot](https://library.virginia.edu/data/articles/understanding-q-q-plots).

### 4. Homoscedacity

**Homoscedasticity** refers to constant variance in a regression model's residuals. _Cons_ include potential bias and
inefficiency. Visualize homoscedasticity using scatter plots — residuals vs. predicted values should show an even
spread, indicating consistent variance. In Python, seaborn or matplotlib can create such plots for regression
diagnostics.

### 5. No Auto-Correlation Of Error

**Autocorrelation of errors** in regression models refers to the correlation between the error terms at different time
points or observations. Positive autocorrelation indicates that errors in one period are correlated with errors in
previous periods. This violates the assumption of independence, impacting model reliability. Diagnostic plots or
statistical tests, like the Durbin-Watson test, can assess autocorrelation in regression residuals.

> [!INFO] Resources
>
> 1. [What are the main Assumptions of Linear Regression? | Top 5 Assumptions of Linear Regression](https://www.youtube.com/watch?v=EmSNAtcHLm8)
> 2. [Presented all 5 assumptions in Notebook](https://github.com/campusx-official/linear-regression-assumptions)

## Why multi-collinearity is a problem?

**Multicollinearity** occurs when two or more independent variables in a regression model are highly correlated. ^^It is
bad^^ because it inflates standard errors, leading to unstable and unreliable coefficients. This makes it difficult to
isolate the individual effect of each variable, reducing the model's interpretability and predictive accuracy.

**Detection**: Use correlation matrices or variance inflation factor (VIF). High correlation coefficients or VIF values
(>5) indicate multicollinearity.

**Removal**: Options include excluding one of the correlated variables, combining them, or using regularization
techniques like Ridge/Lasso regression that penalize large coefficients.

> [!INFO] Resources
>
> 1. [Why Multicollinearity is Bad? What is Multicollinearity? How to detect and remove Multicollinearity](https://www.youtube.com/watch?v=sVJW5UXe84s)

## Difference b/w "Person Correlation" and Multi-collinearity.

The main difference between Pearson Correlation and Multicollinearity lies in their applications within regression
analysis.

**Pearson Correlation** is a measure of the linear relationship between two numerical variables, ranging from -1 to 1,
where 0 indicates no correlation and values close to 1 or -1 indicate a strong linear relationship

On the other hand, **Multicollinearity** refers to a situation where independent variables in a regression model are
highly correlated with each other, which can lead to issues such as inflated coefficients and weakened statistical
measures like p-values

While ^^Pearson Correlation focuses on the relationship between two variables, Multicollinearity deals with the
interplay among multiple independent variables in a regression context^^, impacting the model's interpretability and
reliability.

## What is VIF? Why VIF > 5?

**VIF** _(Variance Inflation Factor)_ is a measure that quantifies how much the variance of an estimated regression
coefficient increases if your predictors are correlated. A VIF greater than 5 or 10 is often considered indicative of
multicollinearity.

**VIF > 5** suggests that the variance of the coefficient estimate is 5 times higher due to multicollinearity, making
the estimate less reliable and harder to interpret.

Use VIF in python as `from statsmodels.stats.outliers_influence import variance_inflation_factor`.

## What is R-squared (R²/R2) score?

R-Squared (R²) is a statistical measure used to determine the proportion of variance in a dependent variable that can be
predicted or explained by an independent variable.

In other words, R-Squared shows how well a regression model (independent variable) predicts the outcome of observed data
(dependent variable).

R-Squared is also commonly known as the coefficient of determination. It is a goodness of fit model for linear
regression analysis. [Copied From](https://www.freecodecamp.org/news/what-is-r-squared-r2-value-meaning-and-definition/)

### What Does an R Squared Value Mean?

A R-Squared value shows how well the model predicts the outcome of the dependent variable. R-Squared values range from 0
to 1.

An R-Squared **value of 0 means that the model explains or predicts 0% of the relationship** between the dependent and
independent variables. And a **value of 1 indicates that the model predicts 100% of the relationship**, and a **value of
0.5 indicates that the model predicts 50%**, and so on.

### Formula for R Squared

```math
\text{R}^2 = 1 - \frac{\text{RSS}}{\text{TSS}}
```

|              Symbol | Description                  |
| ------------------: | :--------------------------- |
| `#!math \text{R}^2` | Coefficient of determination |
| `#!math \text{RSS}` | Sum of squares of residuals  |
| `#!math \text{TSS}` | Total sum of squares         |

> [!INFO] Resources
>
> - [What is R Squared? R2 Value Meaning and Definition](https://www.freecodecamp.org/news/what-is-r-squared-r2-value-meaning-and-definition/)

## How is Adjusted R2 score is different from R2 score?

Adjusted R2 score is different from R2 score in the way they handle the addition of new predictors to a multiple
regression model.

While R2 score increases or remains the same as new predictors are added to the model, even if the newly added
predictors are independent of the target variable and don't add any value to the predicting power of the model.

On the other hand, **Adjusted R2 score only increases if the newly added predictor improves the model's predicting
power**. It helps determine the goodness of fit for a multiple regression model by considering the number of predictors
and the sample size. **Adjusted R2 penalizes the model for useless variables, while R2 does not**, making Adjusted R2 a
more reliable measure of goodness of fit for multiple regression problems.

> [!INFO] Resources
>
> - [Demystifying R-Squared and Adjusted R-Squared](https://builtin.com/data-science/adjusted-r-squared)

## What-if there is one feature related to another then, what should we do with them?

1. Keep any one of them after checking the correlation with target feature `#!math (y)` whichever has low correlation;
   drop them and keep only one.
2. Use [`sklearn.decomposition.PCA`](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html)
   (with
   [`sklearn.compose.ColumnTransformer`](https://scikit-learn.org/stable/modules/generated/sklearn.compose.ColumnTransformer.html))
   to combine them as one and use that transformed column.

## What is Regularization? - Why to use Regularization? - What happen in Regularization?

You can use regularization to penalize the model while trining when mode is trying to overfit with training data.
Generally, there are three main types of regularization is used L1 (Lasso), L2 (Ridge) and (L1 + L2) ElasticNet.

[My blog on Regularization](regression-interview-quesitons.md)
