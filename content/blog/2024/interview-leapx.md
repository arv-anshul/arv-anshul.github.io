---
pubDate: 2024-06-14T17:00
title: LeapX - Interview
description: My first interview call from a real-estate startup LeapX on 14 June, 2024.
icon: mdi:microsoft-teams
categories: [interview, project, internship, thoughts]
---

[Week 24 Journal](../../journal/2024/06.md#week-24-journal)

Aditya reached me > conducted a meeting on Microsoft Teams > ask questions related to projects, education > other two
co-founder joined the meeting > ask to solve a problem in Real Estate domain

---

## Problem Statement

- On what parameters we can classify a city with different expensive/affluent region?
- How can we cluster/classify expensive region of a city?
- How can we bound/decide a region as an affluent region?

### Points for Explanation

1. We can consider city's mean area (sq ft.), mean price, mean price (per sq ft), BHK, properties count.
2. An area become expensive due to the availability of some commodity in those areas like hospitals, banks, luxury
   restaurants, gym, airport, hotels, and more. These commodities increases the price of those areas very high.
3. If the area has some major development project (by government or private) going to take place.
4. We can consider point number 2 and 3 but if you want to gather those type of data then it is very difficult.
   - **For example,** if you want the data of luxurious restaurants then you have to decide a threshold which defines
     luxurious restaurants and what about data availability of all restaurants present in city. This thing hard to
     gather for other commodities as well like airport, pubs, banks, and more.
5. **For extreme cases,** we can consider crime rate, transportation, highway, medical facilities, political
   intervention/advantage, community tension, etc.
6. We can also check current affairs of those which we are going recommend after the classification of Model because if
   the current situation in those is not good then we must not consider those areas.
7. As we can see above parameters are hard to gather for a ML Model but we can build a clustering algorithm which can
   cluster similar properties and from that

### Apply Clustering

- If we apply clustering on properties we can say that **"This property in this area is similar to that property in that
  area"**.

### Apply Classification

- We have not much parameters through which we can classify areas.
- We have to take many majors to evaluate the model because we don't have enough parameters to classify them.

---

> [!NOTE] Aditya's Thought on Above Explanation
>
> This is good thought process, I'd further like you to emphasize on how you would benchmark certain landmarks, high-end
> cafes, high street markets, expensive residential societies etc. that represent affluent and wealthy
> localities/radius.
>
> I'd like you to think of a methodology, and basis that, represent those radius on a map.
>
> We can take Gurgaon for an example.

## Decide Affluent Region

1. We should first gather data about those landmarks which are considered as luxurious/expensive in Gurgaon.
2. Then calculate distance between them and societies (we are considering to cluster/classify as affluent).
3. Then assign a benchmark/luxury value (between 1 to 10) to those landmarks which create a _sort of_ association
   between societies and landmarks.
4. ~~Then create a function which aggregate "distance between societies and landmarks" and "benchmark values".~~
5. Then gather comprehensive data about these societies like property prices, rental prices, people annual income, etc.
   which tells us about societies current value among other societies. These parameters create distinction among
   societies itself.
6. Then apply K-Means Clustering on the whole gathered data and then plot the clustering metrics like `silhouette_score`
   to determine the model's wellness.
7. **:ADDITIONAL PARAMETERS:** We can extract societies and landmark rankings and ratings from different real-estate
   websites which further enhance our model's performance.

This process help us to cluster similar luxurious societies and then we can **infer or bound affluent area** in the
given city.

> landmark > lat long > radius (2 km) > localities > sort on price (per sq ft) localities (lat long) > landmarks >

---

## Decide on the Basis of Sector

1. I have all properties data.
2. Cluster affluent properties.
3. Group by on localities/sector.
4. Now you know how many affluent properties are there in each localities.
5. Why localities/sector; not a certain radius of area because whole city is divided into localities/sector which means
   > If you want to mark an area as affluent then that are must be in any sector which means that sector is affluent.
6. If any sector has many expensive properties and or that sector is around luxurious landmarks then we can declare that
   sector as affluent area.
7. We can create two clustering model one for properties and another for landmarks (this also help us to identify).
8. how can we

## Decide with DBSCAN

After applying DBSCAN all the propeties were clustered as noise data point.

> Ultra luxury (lat long) > find closest property > find both's average >
