---
date: 2025-01-05
title: Finetune Transformers
description: References to finetune Transformers from HuggingFace using Pytorch or TensorFlow.
slug: finetune-transformers
icon: simple/huggingface
---

# :simple-huggingface: Finetune Transformers

Learning how to **finetune a BERT model using PyTorch/TensorFlow from HuggingFace** for your usecase is a art in itself
because there are so many ways and methods to do it that you will not able to figure out which is the best for my
usecase. BTW, you can always refer to [HuggingFace documentation](https://huggingface.co/docs/transformers/training).

??? info "For example!"

    1. Choose between :simple-pytorch: PyTorch and :simple-tensorflow: TensorFlow. _(let choose :simple-pytorch:)_{: .secondary }
    2. If you are importing your dataset with `pandas` or `polars` then need to create a custom class by inheriting
       `torch.utils.data.Dataset` class.
    3. Then need to tokenize the data and need to use `DataLoader` and Data Collator.
    4. Then use a for-loop to train and validate the model.

    > But there is a easy way to finetune, by using objects like
    > [`transformers.TrainingArguments`](https://huggingface.co/docs/transformers/v4.47.1/en/main_classes/trainer#transformers.TrainingArguments)
    > and [`transformers.Trainer`](https://huggingface.co/docs/transformers/main_classes/trainer) which reduces the
    > manual looping complexity.

## Finetune Process

### Load Data

Import dataset your method such as `pandas`, `polars` or other ways.

### Preprocess Data

Precess the data and check the `labels`.

!!! abstract "Related Docs"
    - [:simple-huggingface:{: .huggingface } Preprocess Data](https://huggingface.co/docs/transformers/v4.47.1/en/preprocessing)

### Train-Val-Test Dataset

Split the data into train, validation and test data. Before doing this you have consider many things like:

- How to tokenize the data with certain `padding`, `truncation`, `max_length`, `return_tensors`, etc.?
- Do you need to shuffle the data? (Only shuffle train dataset)
- Which object you will use to store the data? (`datsets.Dataset` or `torch.utils.data.DataLoader`)
- Representation or data type of **labels** column? This will be different for different type of problems you have to
  make sure that the data is in correct format.
- Is DataCollator required?

### Tokenize Data

You need to tokenize the data before sending it to model to trained on. _It is done using  respective model's tokenizer._
You can tokenize the data separately or in batch _(recommended)_.

!!! abstract "Related Docs"
    - [:simple-huggingface:{: .huggingface } Padding and Truncation](https://huggingface.co/docs/transformers/v4.47.1/en/pad_truncation)

### Batch Creation

You have to cast the dataset into a object which supports the batching.

!!! abstract "Related Docs"
    - :star: [`datasets.Dataset`](https://huggingface.co/docs/datasets/en/quickstart)
    - [`torch.utils.data.Dataset`](https://pytorch.org/docs/stable/data.html)
    - [`torch.utils.data.DataLoader`](https://pytorch.org/docs/stable/data.html)

### Data Collator

Data collators are objects that will form a batch by using a list of dataset elements as input.

!!! abstract "Related Docs"
    - [:simple-huggingface:{: .huggingface } Data Collator](https://huggingface.co/docs/transformers/main_classes/data_collator)
    - [`transformers.DataCollatorWithPadding`](https://huggingface.co/docs/transformers/main_classes/data_collator#transformers.DataCollatorWithPadding)

### Load Tokenizer

**A tokenizer is in charge of preparing the inputs for a model.** The library contains tokenizers for all the models. Most
of the tokenizers are available in two flavors: a full python implementation and a “Fast” implementation based on the
Rust library :simple-huggingface: Tokenizers.

!!! abstract "Related Docs"
    - [:simple-huggingface:{: .huggingface } Tokenzier](https://huggingface.co/docs/transformers/main_classes/tokenizer)
    - [:simple-huggingface:{: .huggingface } AutoTokenzier](https://huggingface.co/docs/transformers/v4.47.1/en/autoclass_tutorial#autotokenizer)

### Load Model

A pre-trained model which we are going to finetune using our custom dataset.

!!! abstract "Related Docs"
    - [:simple-huggingface:{: .huggingface } Auto Classes](https://huggingface.co/docs/transformers/model_doc/auto)
    - [:simple-huggingface:{: .huggingface } Model Configuration](https://huggingface.co/docs/transformers/main_classes/configuration)
    - [`transformers.AutoModel`](https://huggingface.co/docs/transformers/v4.47.1/en/autoclass_tutorial#automodel)
    - [`transformers.BERTModel`](https://huggingface.co/docs/transformers/model_doc/bert)

#### BERT Model

!!! abstract "Related Docs"
    - [`transformers.BERTModel`](https://huggingface.co/docs/transformers/model_doc/bert)
    - [`transformers.BERTConfig`](https://huggingface.co/docs/transformers/model_doc/bert#transformers.BertConfig)
    - [`transformers.BertForSequenceClassification`](https://huggingface.co/docs/transformers/model_doc/bert#transformers.BertForSequenceClassification)

### Model Training/Finetuning

!!! abstract "Related Docs"
    - [:simple-huggingface:{: .huggingface } Optimization Strategies](https://huggingface.co/docs/transformers/main_classes/optimizer_schedules)
    - [`transformers.Trainer`](https://huggingface.co/docs/transformers/v4.47.1/en/main_classes/trainer#trainer)
    - [:simple-youtube:{: .youtube } Better Fine Tuning by Matt Williams](https://www.youtube.com/watch?v=W2QuK9TwYXs)

#### PEFT Methods

PEFT offers parameter-efficient methods for finetuning large pretrained models by training a smaller number of
parameters using a reparametrization method like [**LoRA**](https://huggingface.co/docs/peft/package_reference/lora) and
more.

!!! abstract "Related Docs"
    - [:simple-huggingface:{: .huggingface } PEFT Quicktour](https://huggingface.co/docs/peft/quicktour)
    - [LoRA](https://huggingface.co/docs/peft/developer_guides/lora)
    - [LoRA Methods](https://huggingface.co/docs/peft/task_guides/lora_based_methods)
    - [Quantization](https://huggingface.co/docs/peft/developer_guides/quantization)

### Evaluate Model

!!! abstract "Related Docs"
    - [:simple-huggingface:{: .huggingface } Evaluate Library](https://huggingface.co/docs/evaluate/index)
    - [Evalute a TextClassification Model](https://huggingface.co/docs/transformers/v4.47.1/en/tasks/sequence_classification#evaluate)

### Model Prediction/Inference

!!! abstract "Related Docs"
    - [:simple-huggingface:{: .huggingface } Model Outputs](https://huggingface.co/docs/transformers/main_classes/output)
    - [`transformers.modeling_outputs.SequenceClassifierOutput`](https://huggingface.co/docs/transformers/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput)

## :simple-pytorch: Training with Pytorch

You can either finetune a pretrained model in native PyTorch or with
[`transformers.Trainer`](https://huggingface.co/docs/transformers/v4.47.1/en/main_classes/trainer#trainer) class
_(recommended)_.

Read this documentation by :simple-huggingface: HuggingFace
[**"Fine-tune a pre-trained model"**](https://huggingface.co/docs/transformers/training) where they explain how to
finetune a pre-trained model using both the methods separately.

Also refer to this tutorial by same team for
[**"Text Classification"**](https://huggingface.co/docs/transformers/v4.47.1/en/tasks/sequence_classification).
