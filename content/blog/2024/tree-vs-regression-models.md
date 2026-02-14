---
pubDate: 2024-03-21
categories: [ml, interview-questions]
title: Tree VS Regression Models
description: Major difference between Tree based models and Regression models.
icon: mdi:family-tree
---

> From CampusX Trail Session

Tree based models and Regression models are widely used Machine Learning models. So more you know about them is better
for you. Also, many concepts from these models are borrowed by advance Machine Learning models like Gradient Boosting,
XGBoost, etc.

These models are also great choice for interviewers so from these models they ask many interview questions. This blog
mainly focuses on tree based models.

| Aspect              | Decision Trees                                                                                                                                   | Regression Models                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Type                | Can be used for classification and regression                                                                                                    | Used for predictive modeling, predicting continuous values                            |
| Decision Boundaries | Bisect the space into smaller regions, fitting lines to divide the space exactly                                                                 | Focuses on predicting outcomes based on previous data or trends                       |
| Interpretability    | Easy to understand and interpret due to their flowchart-like structure                                                                           | Interpretability varies based on the complexity of the model                          |
| Advantages          | Easy to interpret, visualize, and require minimal data preparation                                                                               | Effective in predicting continuous values based on historical data                    |
| Disadvantages       | Prone to overfitting noisy data, especially with deeper trees                                                                                    | May struggle with capturing complex relationships in the data                         |
| How They Work       | Split the dataset based on data homogeneity, using measures like entropy for classification trees and Sum of Squared Errors for regression trees | Focuses on fitting a curve or surface to the data points to predict continuous values |

## 1. What Are the Main Differences Between Tree Based Models and Regression Models?

| Aspect                       | Tree Based Models                                                                                                                                                                                   | Linear Models                                                                                                                                                                                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Approach**                 | Tree based models **uses Divide & Conquer approach** to learn the data essence by making cut into data space to create small spaces which segregate the homogenous data.                            | Regression models tries to create/fit a line in-between the data space, to get the essence of the data and tries to keep the value of loss function minimum as possible.                                                                                              |
| **Non-Linearity**            | Tree models can handle both linear and non-linear data.                                                                                                                                             | Regression models performs better with linearly separable data but it fails to capture the essence of non-linear data.                                                                                                                                                |
| **Computational Complexity** | Tree models are more complex than linear models, especially training complexity of Ensemble techniques as it finds optimal solution iteratively.                                                    | Regression models has an upper edge here because it requires find the optimal co-efficient which minimizes the loss function and for that it uses Gradient Descent techniques.                                                                                        |
| **Effects of Outliers**      | Tree models are generally robust to [outliers] because they creates multiple decision boundaries which separates the outliers easily and model doesn't affect much from it.                         | Regression models are highly sensitive to [outliers] because when the data has outliers the best fit line will try to fit the outliers values to reduce the loss function. **To reduce this sensitivity we have [Regularization](regularization-in-ml.md) concepts**. |
| **Handling Null Values**     | Some tree based algorithms/models can handle null values like **XGBoost**.                                                                                                                          | Linear model can't handle null values at all. Preprocess the data before training linear models.                                                                                                                                                                      |
| **Interpretable**            | Only Decision Trees are interpretable but libraries like [SHAP](https://shap.readthedocs.io/en/latest/) can explain ensemble tree models. **RandomForest can be used to calc features importance.** | Linear models are very interpretable because it calculates the features co-efficient with target feature.                                                                                                                                                             |

## 2. Can You Describe a Real-World Application Where You Would Prefer to Use a RandomForest over a Logistic Regression Model?

We can preffer RandomForest over Logistic Regression in the many scenarios like:

1. When data has [outliers].
2. When data is hight dimensional.
3. When data is non-lineear.
4. When data is imbalanced.
5. RandomForest algorithm is robust to overfitting while training.
6. Also, RandomForest can handle categorical features better than logistic regression because you can use
   `OrdinalEncoder` to encode categorical feature instead of `OneHotEncoder`.
7. By the way, you can use libraries like
   [`h2o`](https://docs.h2o.ai/h2o/latest-stable/h2o-py/docs/modeling.html#h2orandomforestestimator) which can handle
   null values too.

## 3. What Is the Impact of Outliers on Decision Tree?

Decision Trees can handle Outliers easily because it segregate them using decision boundaries in the initial steps.
However, if the Decision Tree becomes overfitted to a training dataset, it can become more sensitive to outliers,
potentially affecting the model's performance. Also, you can Regularization methods to tackle outliers.

Mainly outliers can affect Decision Trees while working with regression problems (only in those leaf-nodes where
outliers are present/classified/calculated). Prediction of model is affected in those leaf-nodes where outliers are
calculated (this is proven) but this is not the case in classification problems.

## 4. What Is the Role of Pruning in Decision Tree, What Is post-Pruning and pre-Pruning?

### Role of Pruning in Decision Trees

1. Pruning in Decision Trees is crucial to prevent overfitting and enhance the model's ability to generalize by
   simplifying the tree structure.
1. It involves removing parts of the tree that do not contribute significantly to predictive power, making the model
   more interpretable and effective.

### Pre-Pruning

1. Pre-pruning involves stopping the tree's growth before it fits the entire training set.
2. It focuses on setting hyperparameters to control the tree's size during construction, preventing overfitting by
   limiting its complexity.

### Post-Pruning

1. Post-pruning allows the tree to grow fully and then removes nodes that do not add substantial predictive power.
2. Techniques like cost-complexity pruning are commonly used in post-pruning to simplify the tree by selecting the
   subtree with the smallest cost based on a complexity parameter and the number of leaf nodes.

> [!NOTE]
>
> 1. **Pre-pruning**: Penalize (by cutting the nodes) the model while training.
> 2. **Post-pruning**: First fully train the model then after penalize the model by cutting down the nodes.

### Cost Complexity Function in Decision Tree

The cost complexity function in decision trees is a crucial concept related to pruning techniques. It involves a
tradeoff between error (cost) and tree size (complexity) to find an optimal tree. The cost complexity of a tree, denoted
as `#!math R_{c_p}(T)`, is the sum of its risk (error) and a "cost complexity" factor `#!math c_p` multiplied by the
tree size `#!math T`. This function is used in cost complexity pruning to minimize the cross-validated prediction error
and prevent overfitting. By adjusting the cost complexity parameter `#!math c_p`, decision trees can be pruned
effectively to improve generalization to test data.

[`plot_cost_complexity_pruning`](https://scikit-learn.org/stable/auto_examples/tree/plot_cost_complexity_pruning.html)

## 5. How Missing Values Are Handled in Tree Based Algorithms like XGBoost?

> XGBoost only handle missing values present in Input features. It doesn't handle null values present in Output/Target
> feature. You have to preprocess or remove the null values of Output feature.

Not completed!

## 6. What Is the Difference Between ID3, C4.5, and CART Algorithms?

| Algorithm                          | ID3                                   | C4.5                                       | CART                                                                             |
| ---------------------------------- | ------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------- |
| **Type**                           | Iterative Dichotomiser 3              | Iterative algorithm, extension of ID3      | Classification and Regression Trees                                              |
| **Handling of Numeric Attributes** | Less effective for numeric attributes | Handles numeric and categorical attributes | Handles numeric and categorical attributes                                       |
| **Splitting Criteria**             | Information Gain                      | Gain Ratio                                 | Gini diversity index for classification tests                                    |
| **Pruning**                        | Does not handle pruning               | Prunes trees to avoid overfitting          | Prunes trees using a complex model with parameters estimated by cross-validation |
| **Binary Tests**                   | Always binary tests                   | Allows two or more outcomes                | Binary tests                                                                     |

## 7. How Would You Approach a Situation Where Your Tree-Based Model Is Overfitting?

I can apply pruning techniques which penalize the model if it tries to overfit while training. We have many
hyperparameters in DecisionTree, RandomForest classes apply pre-pruning on models.

1. **`max_depth`**: The maximum depth of the tree. Prevent the tree to grow after specified depth.
2. **`min_samples_split`**: The minimum number of samples required to split an internal node.
3. **`min_samples_leaf`**: The minimum number of samples required to be at a leaf node. A split point at any depth will
   only be considered if it leaves at least min_samples_leaf training samples in each of the left and right branches.
   This may have the effect of smoothing the model, especially in regression.
4. **`min_weight_fraction_leaf`**: The minimum weighted fraction of the sum total of weights (of all the input samples)
   required to be at a leaf node. Samples have equal weight when sample_weight is not provided.
5. **`max_features`**: The number of features to consider when looking for the best split.
6. **`max_leaf_nodes`**: Grow a tree with max_leaf_nodes in best-first fashion. Best nodes are defined as relative
   reduction in impurity. If `None` then unlimited number of leaf nodes.
7. **`min_impurity_decrease`**: _(Best parameter for pruning)_ A node will be split if this split induces a decrease of
   the impurity greater than or equal to this value.
8. **`class_weight`**: Weights associated with classes in the form `{class_label: weight}`. If `None`, all classes are
   supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the
   columns of y.
9. **`ccp_alpha`**: Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost
   complexity that is smaller than ccp_alpha will be chosen. By default, no pruning is performed.

[`sklearn.tree.DecisionTreeClassifier`](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier)

## 8. Discuss the Role of Shrinkage (Learning Rate) in Boosting Algorithms. How Does It Contribute to Model Performance and Robustness?

- The learning rate, also known as shrinkage, plays a crucial role in boosting algorithms by determining how fast or
  slow a model updates its weights based on the gradient of the loss function.
- **A fixed learning rate** can lead to challenges such as overshooting the optimal point with a high value or slow
  convergence with a low value, highlighting the importance of dynamic adjustments during training.
- **Adaptive learning rate** schedules, like decay learning rates, gradually reduce the learning rate as training
  progresses, helping to avoid overshooting the minimum and fine-tune model parameters more precisely.
- **Decay learning rates** can be implemented using various methods like fixed or exponential decay rates, step or
  inverse decay functions, and are essential for efficient and effective model training, especially in complex and
  non-convex problems.
- **By adjusting the learning rate dynamically**, decay learning rates ensure that the model progresses effectively
  towards the optimal solution, balancing the size of steps taken during training to enhance model optimization and
  robustness.

> This question comes under Boosting algorithms which is advance topic.

## 9. Discuss the Computational Complexity of Training a Decision Tree and How It Scales with the Size of the Dataset.

- The computational complexity of training a Decision Tree is influenced by the size of the dataset and the number of
  dimensions in the feature space.
- Heuristic algorithms are commonly used to compute Decision Trees from training data, aiming to minimize the size of
  the resulting tree, which impacts the computational complexity of the process.
- Understanding the computational complexity of training Decision Trees is essential for optimizing algorithms and
  improving efficiency in machine learning tasks, especially when dealing with large datasets and high-dimensional
  feature spaces.

## 10. How Do Tree-Based Algorithms Handle Imbalanced Datasets, and What Are the Implications for Model Performance and Interpretation?

There is a hyperparameter in DecisionTree class called `class_weigth` where you can assign weights to each class label
or you can provide `"balanced"` which will automatically assign weights to each class labels.

### How Do You Manually Assign Weights?

It depends on your domain knowledge or you can use hit & try method.

### How Do `"balanced"` Value Assign Weights?

It assigns `#!math \frac{1}{n}` weight value to each class labels where `#!math n` is the count of data points present
the following class.

---

## Similar Blogs

- [Decision Tree](./decision-tree)
- [Regression Interview Questions](./regression-interview-quesitons)
- [Regularization in ML](./regularization-in-ml)

[outliers]: outlier-univariate.md
