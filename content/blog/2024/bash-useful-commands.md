---
pubDate: 2024-04-10
categories: [bash, tips]
title: Bash Useful Commands
description: Some daily life useful commands.
icon: mdi:keyboard
---

## Bash

### Display ANSI Colors with Their Color-Code

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

```bash
colormap           # (000 - 255)
colormap 200       # (200 - 255)
colormap 100 120   # (100 - 120)
```

## Docker

### Clear All Caches, Images, Containers, Volumes of Docker

```bash
docker system prune -a --volumes --force
```

## Git

### Beautiful One Line - `git log`

```bash
alias glog="git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches"
```

```bash
$ glog
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

## Python

### Remove All Cache File Specify to a Python Project

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

## Homebrew

### Update, Clean, and Doctor

```bash
brew update && brew cleanup --prune=all && brew doctor
```

### Uninstall Unused Dependencies

```bash
brew autoremove
```

> Check [docs](https://docs.brew.sh/Manpage#autoremove---dry-run) for `autoremove` command.

## Arc

### Change `ARC.app` Icon

![arc logos](https://gist.github.com/assets/7717888/fdfbbb6f-ba07-46b9-bdbf-6ef43009479b)
[Source Gist](https://gist.github.com/gabe565/9654eea08a9f6c7c1f593049e5bed243)

```bash
defaults write company.thebrowser.Browser currentAppIconName candy # favorite
```

| Candy Arc   | Hologram       | Neon       | Fluted Glass      | Schoolbook       | Colorful       |
| ----------- | -------------- | ---------- | ----------------- | ---------------- | -------------- |
| **`candy`** | **`hologram`** | **`neon`** | **`flutedGlass`** | **`schoolbook`** | **`colorful`** |
