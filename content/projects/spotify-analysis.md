---
pubDate: 2024-02-22
icon: simple-icons:spotify
title: Spotify Analysis
description: Analyze your Spotify Streaming data and get some insights from it like whom & when you listen your favorite
  Tracks, Artists, Playlists or Albums.
categories: [project, eda]
---

> [!NOTE] **How to get your Spotify data?**
>
> You can request your Spotify data from [official website](https://www.spotify.com/us/account/privacy/).
>
> Know more about your personal data on
> [Spotify](https://support.spotify.com/us/article/data-rights-and-privacy-settings/).

<details>
<summary>Spotify data file structure</summary>

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

</details>

## Philosophy

I want to analyze my Spotify's Streaming History in a way from which I can know my listening pattern over the time. The
way Spotify give the **Spotify Wrapped** at the end of every year.

### The Dashboard

> [!CAUTION] Currently not developed!
>
> If you want to join for this contact me on my socials [LinkedIn](https://www.linkedin.com/in/arv-anshul)
> [E-Mail](mailto:arv.anshul.1864@gmail.com)

There has been a dashboard (using [Streamlit](https://streamlit.io)) where other users can upload their
`StreamingHistory.json` files to see analysis on their history.

## Some Awesome Insights

To gather insights from `json` files I've used [`polars`](https://pola.rs) and their builtin `.plot` accessor which uses
[`hvplot`](https://hvplot.holoviz.org/) library under-the-hood.

See the [Jupyter Notebooks](https://github.com/arv-anshul/notebooks/tree/main/spotify-analysis) to see all the insights.

<details>
<summary>Reference</summary>

| Short Code | Description       |
| :--------: | ----------------- |
|  **T/A**   | Track/Artist      |
|  **T/As**  | Track/Artist(s)   |
|  **P/A**   | Playlist/Album    |
|  **P/As**  | Playlist/Album(s) |

These shortcodes used below for better readability.

</details>

### Using `StreamingHistory.json`

Contains **User's Streaming History** with `trackName` (Streaming Track Name), `artistName` (Streaming Artist Name),
`msPlayed` (Milliseconds Played) and `endTime` (When the track ends (as datetime)).

- [x] Top T/As in whole dataset.
- [x] Top T/As in each month.
- [x] Monthly most listened Tracks and Artists.
- [x] First day when T/A was played.
- [x] No. of distinct T/As listened in each month/year.
- [x] A T/A streaming in bar plot (which shows how you stream that during time-to-time).
- [x] Which daytime user listen most and whom.
- [x] Tracks which have listened most times in a day.
- [x] Tracks streaming streak (by day/week).
- [x] T/As which only played once
- [x] Dates when user does not played any track

### Using `Playlist.json`

Contains **User's Created Playlist Data** with all the tracks added in the playlist.

- [x] No. of T/As and Albums in each Playlist
- [x] Playlist `MinutesPlayed`
- [x] Most streamed P/As
- [x] Check any Track present in multiple Playlists
- [x] Streaming timeline of P/As (with `plot.line()`)
- [x] Playlist-wise top T/As

### Using `YourLibrary.json`

> [!WARNING] Currently Working!

### Using `Marquee.json`

> [!WARNING] Currently Working!
