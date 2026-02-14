---
pubDate: 2024-04-08T11:02
title: Friends on Website
description: Dedicate a page on website for your friends.
icon: mdi:users-group
categories: [thoughts, friends, website, person]
---

I decided to create a page where I put my friends information like their name, description, and social links which helps
others (who visit my website) to connect with them.

## Planning

1. Define a JSON schema for `friends.yaml` file. See the
   [json-schema](https://github.com/arv-anshul/arv-anshul.github.io/tree/main/schemas/friends-schema.json).
2. Use builtin [**Grids**](https://squidfunk.github.io/mkdocs-material/reference/grids/) to showcase the friend's
   information. See some experimental [layouts](#layouts).
3. Friends' description must be between 50-70 words. If they fail to maintain them **then use ChatGPT to reduce the
   size**.

### How Do each Friend's Section Looks?

More certainly they look similar to one another because the web pages is being gets rendered from a `yaml` file to
maintain the certainty.

> [!question] Why render from `yaml` format?
>
> Because I am going to define a schema for that which follows a certain format and using that format the webpage is being rendered using [`mkdocs-markdownextradata-plugin`](https://pypi.org/project/mkdocs-markdownextradata-plugin/).

### How to Add Friends?

I can manually asks their infos and add into yaml files.

I can open a discussion where my friends provide their infos and request me to add them on
the web page.

My friends can open a PULL REQUEST into the repo which will automatically add them on webpage.

## Layouts

These are my rough ideas which I prefer to replicate on my website's page to display the friends' information.

<!-- rumdl-disable MD005 MD033 MD035 MD007 MD013 -->

### :material-numeric-1-box:{ .lg } Layout 1

<div class="grid cards" markdown>

- [![avatar]{ .twemoji .xxl .middle .round }][primary-url] &nbsp; **Anshul Raj Verma**

---

    <p align=justify>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Adipiscing enim eu turpis egestas. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sapien pellentesque habitant morbi tristique senectus et. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
    </p>

---

    <p align=center>
    [:simple-github:{ .lg }](https://linkedin.com/in/arv-anshul) &nbsp;
    [:simple-linkedin:{ .lg }](https://github.com/arv-anshul) &nbsp;
    </p>

</div>

<div class="grid cards" markdown>

  - <p align=center>[![avatar]{ .twemoji .xxl .middle .round }][primary-url] &nbsp; **Anshul Raj Verma**</p>

---

    <p align=justify>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Adipiscing enim eu turpis egestas. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sapien pellentesque habitant morbi tristique senectus et. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
    </p>

---

    <p align=center>
    [:simple-github:{ .lg }](https://linkedin.com/in/arv-anshul) &nbsp;
    [:simple-linkedin:{ .lg }](https://github.com/arv-anshul) &nbsp;
    </p>

</div>

### :material-numeric-2-box:{ .lg } Layout 2

<div class="grid cards" markdown>

  - [![avatar]{ .twemoji .xxl .middle .round }][primary-url] &nbsp; **Anshul Raj Verma**

---

    <p align=justify>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Adipiscing enim eu turpis egestas. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sapien pellentesque habitant morbi tristique senectus et. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
    </p>

---

    <p align=center>
    [:simple-github:{ .lg }](https://linkedin.com/in/arv-anshul) &nbsp;
    [:simple-linkedin:{ .lg }](https://github.com/arv-anshul) &nbsp;
    </p>

  - <p align=center>[![avatar]{ .twemoji .xxl .middle .round }][primary-url] &nbsp; **Anshul Raj Verma**</p>

---

    <p align=justify>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Adipiscing enim eu turpis egestas. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sapien pellentesque habitant morbi tristique senectus et. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
    </p>

---

    <p align=center>
    [:simple-github:{ .lg }](https://linkedin.com/in/arv-anshul) &nbsp;
    [:simple-linkedin:{ .lg }](https://github.com/arv-anshul) &nbsp;
    </p>

</div>

### :material-numeric-3-box:{ .lg } Layout 3

<div class="grid cards" markdown>

  - <p align=center>[![avatar]{ .twemoji .xxxl .round }][primary-url]</p>

    <p align=center>**Anshul Raj Verma**</p>

    <p align=center>
    [:simple-github:{ .lg }](https://linkedin.com/in/arv-anshul) &nbsp;
    [:simple-linkedin:{ .lg }](https://github.com/arv-anshul) &nbsp;
    </p>

---

    <p align=justify>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Adipiscing enim eu turpis egestas. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sapien pellentesque habitant morbi tristique senectus et. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
    </p>

  - <p align=center>[![avatar]{ .twemoji .xxxl .round }][primary-url]</p>

    <p align=center>**Anshul Raj Verma**</p>

---

    <p align=center>
    [:simple-github:{ .lg }](https://linkedin.com/in/arv-anshul) &nbsp;
    [:simple-linkedin:{ .lg }](https://github.com/arv-anshul) &nbsp;
    </p>

---

    <p align=justify>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Adipiscing enim eu turpis egestas. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sapien pellentesque habitant morbi tristique senectus et. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
    </p>

  - <p align=center>[![avatar]{ .twemoji .xxxl .round }][primary-url]</p>

    <p align=center>**Anshul Raj Verma**</p>

    <p align=justify>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Adipiscing enim eu turpis egestas. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sapien pellentesque habitant morbi tristique senectus et. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
    </p>

---

    <p align=center>
    [:simple-github:{ .lg }](https://linkedin.com/in/arv-anshul) &nbsp;
    [:simple-linkedin:{ .lg }](https://github.com/arv-anshul) &nbsp;
    </p>

</div>

[avatar]: https://avatars.githubusercontent.com/u/111767754?v=4
[primary-url]: https://arv-anshul.github.io/about
