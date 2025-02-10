---
date: 2024-04-10
authors: [arv-anshul]
categories: [bash, tips]
title: Bash Useful Commands
slug: bash-useful-commands
icon: material/keyboard
---

# Useful Commands

## :simple-gnubash: Bash

### :octicons-arrow-right-16: Display ANSI colors with their color-code.

```bash
function colormap() {
    range_start=${1:-1}
    range_end=${2:-255}

    for i in $(seq $range_start $range_end); do
        echo -en "\e[48;5;${i}m  ${(l:3::0:)i}  \e[0m "
        [[ $((i % 10)) -eq 0 ]] && echo
    done
    return 0
}
```

> The `colormap` function will print the ANSI colors with codes in your terminal.

<!-- more -->

```bash
$ colormap           # (000 - 255)
$ colormap 200       # (200 - 255)
$ colormap 100 120   # (100 - 120)
```

## :simple-docker: Docker

### :octicons-arrow-right-16: Clear all caches, images, containers, volumes of Docker.

```bash
docker system prune -a --volumes --force
```

## :simple-git: Git

### :octicons-arrow-right-16: Beautiful Oneline - `git log`

```bash
alias glog="git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches"
```

```bash
$ glog # (1)!
* 6914e04 - (HEAD -> main, origin/main) 📝 Update docs/index.md (5 hours ago) <Anshul Raj Verma>
*   3d91241 - Merge branch 'new/friends-page' (5 hours ago) <Anshul Raj Verma>
|\
| * 6160ae5 - 💅 Update UI of friends.md (5 hours ago) <Anshul Raj Verma>
| * 42b52d8 - 🔨 Add friends.md to Home nav (6 hours ago) <Anshul Raj Verma>
| * bef45f6 - ✨ Setup to add friends on website (2 days ago) <Anshul Raj Verma>
|/
* 59340cf - ref: ✨ Add starship.md in Bash (2 days ago) <Anshul Raj Verma>
* ecc8e94 - ✨ Add new nav item "References" (3 days ago) <Anshul Raj Verma>
* 3bea521 - ✨ Add Rust icon on about page (5 days ago) <Anshul Raj Verma>
```

1. Date: 10-04-2024

## :simple-python: Python

### :octicons-arrow-right-16: Remove all cache file specify to a Python project

```bash
function pycls() {
    find . -name '.DS_Store' -type f -delete
    find . -type d -name "__pycache__" -exec rm -rfv {} \; 2>/dev/null
    find . -type d -name ".ipynb_checkpoints" -exec rm -rfv {} \; 2>/dev/null
    find . -type d -name ".ruff_cache" -exec rm -rfv {} \; 2>/dev/null
    find . -type f -name "*.pyc" -exec rm -fv {} \; 2>/dev/null
}
```

```bash
$ pwd
/User/Home  # For MacOS
$ pycls  # Remove all cache files and folders in the directory and sub-dirs
```

## :simple-homebrew: HomeBrew

### :octicons-arrow-right-16: Update, Clean and Doctor

```bash
brew update && brew cleanup --prune=all && brew doctor
```

### :octicons-arrow-right-16: Uninstall unused dependencies

```bash
brew autoremove # (1)!
```

1. Check [docs](https://docs.brew.sh/Manpage#autoremove---dry-run) for `autoremove` command.

## :simple-arc: Arc

### :octicons-arrow-right-16: Change ARC.app Icon

<figure markdown>

![arc logos](https://gist.github.com/assets/7717888/fdfbbb6f-ba07-46b9-bdbf-6ef43009479b)

<figcaption markdown>[Source Gist](https://gist.github.com/gabe565/9654eea08a9f6c7c1f593049e5bed243)</figcaption>
</figure>

```bash
defaults write company.thebrowser.Browser currentAppIconName candy # favorite
```

<figure markdown>

| Candy Arc   | Hologram       | Neon       | Fluted Glass      | Schoolbook       | Colorful       |
| ----------- | -------------- | ---------- | ----------------- | ---------------- | -------------- |
| **`candy`** | **`hologram`** | **`neon`** | **`flutedGlass`** | **`schoolbook`** | **`colorful`** |

</figure>
