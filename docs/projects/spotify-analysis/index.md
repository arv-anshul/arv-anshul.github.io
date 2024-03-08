---
created-on: 2024-02-22
icon: simple/spotify
title: Spotify Analysis
slug: spotify-analysis
---

# :simple-spotify:{ .spotify title="2024-02-22" } Spotify Analysis


{% for project in projects_index %}

{% if project.title == "Spotify Analysis" %}

<hr>
<p align="center" markdown>
{% for type, url in project.urls.items()|sort(attribute=0) %} [:simple-{{ type }}:{ .lg .hover-icon }]({{ url }}){ title="{{ type|title }}" } &nbsp; {% endfor %} :material-slash-forward:{ .lg } &nbsp;
{% for tag in project.tags|sort %} :simple-{{ tag }}:{ .lg .{{ tag }} .hover-icon-bounce title="{{ tag|title }}"} &nbsp; {% endfor %}
</p>
<hr>

<p style="text-align: justify;">{{ project.description }}</p>
{% endif %}

{% endfor %}


!!! question "How to get my Spotify data?"

    You can request your Spotify data from [official website](https://www.spotify.com/us/account/privacy/).

    Know more about your personal data on [Spotify](https://support.spotify.com/us/article/data-rights-and-privacy-settings/).

??? abstract "Spotify data file structure"

    ```bash
    spotify-data
    ├── Read_Me_First.pdf         # Introductory document
    ├── Follow.json               # Data about user's followers
    ├── Identifiers.json          # Identification information (🙅 Do Not Share!)
    ├── Identity.json             # User identity details (🙅 Do Not Share!)
    ├── Inferences.json           # Inferred data from user activity
    ├── Marquee.json              # Marquee-related information
    ├── Payments.json             # Payment details (🙅 Do Not Share!)
    ├── Playlist1.json            # Details about a specific playlist
    ├── SearchQueries.json        # User's search queries
    ├── StreamingHistory0.json    # User's Streaming history part 1
    ├── StreamingHistory1.json    # User's Streaming history part 2
    ├── Userdata.json             # General user data (🙅 Do Not Share!)
    └── YourLibrary.json          # User's Spotify library details like likes, albums, artists, etc.
    ```

## Philosophy

I want to analyse my Spotify's Streaming History in a way from which I can know my listening pattern over the time.
The way Spotify give the **Spotify Wrapped** at the end of every year.

### The Dashboard

!!! failure "Currently not developed!"

    If you want to join for this contact me on my socials [:fontawesome-brands-linkedin:{ .primary }](https://www.linkedin.com/in/arv-anshul "LinkedIn") [:material-email:{ .primary }](mailto:arv.anshul.1864@gmail.com "E-Mail")

There has been a dashboard (using [:simple-streamlit:{ .streamlit }](https://streamlit.io) Streamlit) where other users can upload their `StreamingHistory.json` files to see analysis on their history.

## Some Awesome Insights

To gather insights from `json` files I've used :simple-polars: [`polars`](https://pola.rs) and their builtin `.plot` accessor which uses [`hvplot`](https://hvplot.holoviz.org/) library under-the-hood.

:simple-jupyter:{ .lg .middle title="Jupyter Notebooks" } See the [Jupyter Notebooks](https://github.com/arv-anshul/notebooks/tree/main/spotify-analysis) to see all the insights.

??? abstract "Reference"

    <figure markdown>

    | ShortCode | Description       |
    | :-------: | ----------------- |
    |  **T/A**  | Track/Artist      |
    | **T/As**  | Track/Artist(s)   |
    |  **P/A**  | Playlist/Album    |
    | **P/As**  | Playlist/Album(s) |

    <figcaption>These shortcodes used below for better readability.</figcaption>
    </figure>

### Using `StreamingHistory.json`

!!! quote "File Info"

    Contains **User's Streaming History** with `trackName`{ title="Streaming Track Name" }, `artistName`{ title="Streaming Artist Name" }, `msPlayed`{ title="Milliseconds Played" } and `endTime`{ title="When the track ends (as datetime)" }. &nbsp; :octicons-info-16:{ .primary .bounce title="Hover to see description of features name." }

- [x] Top T/As in whole dataset.
- [x] Top T/As in each month.
- [x] Monthly most listend Tracks and Artists.
- [x] First day when T/A was played.
- [x] No.of distinct T/As listened in each month/year.
- [x] A T/A streaming in barplot (which shows how you stream that during time-to-time).
- [x] Which daytime user listen most and whom.
- [x] Tracks which have listened most times in a day.
- [x] Tracks streaming streak (by day/week).
- [x] T/As which only played once
- [x] Dates when user does not played any track

### Using `Playlist.json`

!!! quote "File Info"

    Contains **User's Created Playlist Data** with all the tracks added in the playlist.

- [x] No. of T/As and Albums in each Playlist
- [x] Playlist MinutesPlayed
- [x] Most streamed P/As
- [x] Check any Track present in multiple Playlists
- [x] Streaming timline of P/As (with `plot.line()`)
- [x] Playlist-wise top T/As

### Using `YourLibrary.json`

!!! warning "Currently Working!"

### Using `Marquee.json`

!!! warning "Currently Working!"
