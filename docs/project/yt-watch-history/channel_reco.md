---
icon: simple/scikitlearn
---

# Channel Recommender System

I've built `contentType` prediction pipeline using videos titles. Now, I am thinking that what if I can recommend similar channels on the basis of their subscribed channels. I can recommend channels using channel's videos titles and videos tags.

## Training Pipeline

### Data Ingestion and Preprocessing

- System import data from two types of sources `#!py "db"` (database) and `#!py "file"` (local file).
- Next, I validate the data on the basis of columns present in the data.
- Then data goes for preprocessing step, during this step data is being clean and all the required feature has been extracted from it using [:simple-polars:{ title="Polars" }](https://pola.rs){ target=blank_ } library.

### Model Overview

As you know I am working with videos title and tags which are are textual data so I've used `TfidfVectorizer` (for text to vector conversion). I've used two `TfidfVectorizer` for each column (`title` and `tags`) and then used `ColumnTransformer` to create a (sort of) chain transformation step.

``` { .python .no-copy title="channel_reco/steps/model.py" }
def get_vectorizer() -> ColumnTransformer:
    title_transformer = TfidfVectorizer(
        max_features=7000,
        ngram_range=(1, 2),
        preprocessor=preprocess_title,# (1)!
        stop_words="english",
    )
    tags_transformer = TfidfVectorizer(
        max_features=5000,
        ngram_range=(1, 2),
        preprocessor=preprocess_tags,# (2)!
        stop_words="english",
    )
    transformer = ColumnTransformer(
        [
            ("title_trf", title_transformer, "title"),
            ("tags_trf", tags_transformer, "tags"),
        ]
    )
    return transformer
```

1. Function to preprocess texts of `#!py "title"` column.
2. Function to preprocess texts of `#!py "tags"` column.

### Data to Export

Now, I've successfully built the pipeline and trained the system but there comes a question that how to reccommend a channel and for that I've to export some essential data like **the vectorized array** (vectorized videos titles and tags) with its metadata like `channelId` and `channelTitle`.
To tackle this thing I've combine these data and created a `pl.DataFrame` and then export it as **`parquet`** format.

``` { .python .no-copy title="channel_reco/steps/training.py" hl_lines="10-13 16 17" }
def training(
    input_data: Literal["db", "file"],
):
    # Extra code hidden...

    df = preprocess_data(df)
    transformer = get_vectorizer()
    transformed_data = transformer.fit_transform(df.to_pandas())

    # Combine transformed_data, channelId, channelTitle as DataFrame
    title_tags_trf_df = df.select("channelId", "channelTitle").with_columns(
        pl.lit(transformed_data.toarray()).alias("transformed_data")  # type: ignore
    )

    dump_object(transformer, CH_RECO_TRANSFORMER_PATH) # (1)!
    # Export dataframe as parquet format for lesser size
    title_tags_trf_df.write_parquet(CH_RECO_TRANSFORMER_DATA_PATH)
```

1. 👀 Here, I'm exporting `ColumnTransformer` object.

!!! info "What is `parquet` format?"

    Parquet is a columnar storage format that provides compression benefits and is particularly suitable for analytical queries.

## Prediction Pipeline

> I'm calling this step as **Prediction Pipeline** 🙂 because it doesn't feels good to call **Reccommendation Pipeline** 😞.

Here, I've to get any channel's data (videos titles and tags) to transform using stored `ColumnTransformer` object.
After, transforming the data I've calculated `cosine_similarity` between new channel's vector and vector which I have stored on training step and from that whichever channel has greater similarity value is being reccommended to the user 🤩.

``` { .python .no-copy title="channel_reco/steps/pipeline.py" hl_lines="8-11" }
def prediction(data: pl.DataFrame):
    # Extra code hidden...

    transformer: ColumnTransformer = load_object(CH_RECO_TRANSFORMER_PATH)
    transformer_data = pl.read_parquet(CH_RECO_TRANSFORMER_DATA_PATH)

    transformed_data = transformer.transform(data.to_pandas())
    similarity = cosine_similarity(
        np.array(transformer_data["transformed_data"].to_list()),
        transformed_data.toarray(),  # type: ignore
    )
    return transformer_data.select("channelId", "channelTitle").with_columns(
        pl.lit(np.ravel(similarity)).alias("similarity"),
    )
```

## Extra

!!! abstract "Reccommendation System Summary"
    - Ingesting data from database or local file. I had made API endpoint to fetch data from datbase.
    - Using [:simple-polars:{ .light .hover-icon }](https://pola.rs) Polars library for data manipulation.
    - This recommender system trained on **Youtube Channel's Videos titles and tags** which means it recommend on the basis of the channel's videos contents like title and tags.
    - Used `TfidfVectorizer` for text-to-vec conversion.

### Provide Weights to Vectorizer

Previously, I thought that I can add a functionality to provide weights to each vectorizer (`TfidfVectorizer`) to make the system more robust and I had achieved it ([See Notebook](https://github.com/arv-anshul/notebooks/blob/main/yt-watch-history/1.0_ChannelRecoSys.ipynb)) but not feels good while actual implementation because it creates so much objects to store and makes the prediction (recommendation) step complex.

I have to store each vectorizer, vectorized data (title and tags) and the metadata (`channelId` and `channelTitle`) too which this pipeline complex and hard to keep track of objects.

### Adding More Features

I have tried to add more features like `categoryName` (channel owner provide category of the video while uploading) and `contentTypePred` (a feature I have predicted using ML) but I found it difficult to implement and it doesn't show much effect while reccommending. That's why I thought a different idea to implement this.

I can filter the reccommended channels on the basis of `categoryName` and `contentTypePred` in the frontend part (yeah this not the right way of doing this but I'll think about it later).

---

<div class="grid cards" markdown>

- [:simple-github:{ .lg .light } &nbsp; **Code on GitHub**{ .light }](https://github.com/arv-anshul/yt-watch-history/blob/main/backend/ml/channel_reco){ target=blank_ }
- [:simple-jupyter:{ .lg .light } &nbsp; **Pipeline in Notebook**{ .light }](https://github.com/arv-anshul/notebooks/blob/main/yt-watch-history/1.1_ChannelRecoSys.ipynb){ target=blank_ }

</div>

**🙏 Thank You for reading this. I am [Anshul Raj Verma](https://github.com/arv-anshul){ title="Go To Github Profile" } and I am a Data Scientist.**
