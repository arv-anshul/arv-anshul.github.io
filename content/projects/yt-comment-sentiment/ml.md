---
pubDate: 2024-11-04
icon: simple-icons:mlflow
title: YT Comment Sentiment - ML Side
description: YouTube comment sentiment analyzer/predictor using ML model.
categories: [project, ml, sentiment-analysis]
---

## Data Handling Steps

### Data Gathering

For comment's sentiment prediction we need a data which has **Comments** and its corresponding **Sentiment**. And for
that we have used
[dataset used in the course](https://kaggle.com/datasets/cosmos98/twitter-and-reddit-sentimental-analysis-dataset).

### Data Preprocessing

- Preprocess by lowercasing the words.
- Cleaned the texts by removing stopwords and punctuations.
- Applied lemmetization using [**`WordNetLemmatizer`**](https://www.nltk.org/api/nltk.stem.wordnet.html).
- Then, stemming using [**`PorterStemmer`**](https://www.nltk.org/api/nltk.stem.porter.html).

### EDA

- Checked **target** column's distribution.
- Performed intensive EDA by creating many additional features using comment's chars, words and sentences.
- Generated wordcloud to see different sentiment's frequent words.

[**EDA Notebook**](#)

## Model Building Steps

- **Comment Vectorization**
  - Before transforming performed some basic preprocessing steps on comments like lowercasing, lemmetization and
    stemming to make vectors more consistent.
  - Evaluated multiple vectorization methods like BOW and TF-IDF.
  - Also, performed hyperparameter tuning on vectorization methods by tuning parameters like `n_gram` and
    `max_features`.
  - Chosen **TF-IDF Vectorizer** model to transform comment texts into vectors which passes into ML Model.

- **Feature Engineering**
  - Created multiple new features using comments' texts like word count, etc. which help the model to learn the
    comments' sentiment better.

- **Hyperparameter Tuning**
  - Used **Bayesian Optimization Technique** to perform hyperparameter tuning on models.
  - Tuned models on their most important parameters.
  - Logged best parameter of each models with MLFlow to evaluate further.

- **Evaluation**
  - Used **MLFlow UI** to check which model is performing well on the dataset.
  - Evaluated on:
    1. Overall `accuracy_score`
    2. Different sentiment's `r1_score`, `precision` and `f1_score` value.
