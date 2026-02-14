---
pubDate: 2024-04-07
categories: [bash, tips]
title: Bash Tips
description: Some terminal or bash tricks you may find useful for your workflow.
icon: mdi:tooltip-plus
---

This page contains some Tips and Tricks which are helpful to work with Bash scripts or Terminals. I have mentioned only
those tips and tricks which I uses most in my daily routine, BTW you can refer to links which I have shared to know all
the tips and tricks.

## Tips By `asottile`

I will only mention those commands and shortcuts which helpful for me. You can check all of them using below links.

- [Protips - YouTube Video](https://www.youtube.com/watch?v=_wcVyhfyaeE)
- [Protips - Github Wiki Link](https://github.com/asottile/scratch/wiki/protips)

### Command: `!!`

A substitution which contains the previous command, some useful invocations.

```bash
$ ls /proc/1/exe
ls: cannot access '/proc/1/exe': Permission denied

$ sudo !!
sudo ls /proc/1/exe
/proc/1/exe
```

```bash
$ ls /tmp/ | grep sys
systemd-private-e21be514f23449189063b6bd95ec13ef-bolt.service-MCMIaN
systemd-private-e21be514f23449189063b6bd95ec13ef-colord.service-yNWr06
systemd-private-e21be514f23449189063b6bd95ec13ef-fwupd.service-geozA1

$ watch "!!"
watch "ls /tmp/ | grep sys"
(opens up watch panel)
```

### Command: `!$`

A substitution which contains the last segment of the previous command.

```bash
$ $EDITOR test.py

$ python !$
python test.py
Hello world!
```

```bash
mkdir new-project
code !$  # Opens the `new-project folder in VSCode
```

### Shortcut: <kbd>ctrl</kbd> + <kbd>\\</Kbd>

<kbd>ctrl</kbd> + <kbd>\\</kbd> sends `SIGQUIT` (**default behavior:** terminate + produce a core dump) which can be
useful to kill things that normally catch <kbd>ctrl</kbd> + <kbd>c</kbd> (`SIGINT`).

> :fire: <kbd>ctrl</kbd> + <kbd>\\</kbd> is more powerful than <kbd>ctrl</kbd> + <kbd>c</kbd>.

## Additional Tricks

### Trick: `` cmd `!!` ``

- Run previous command with new command.
- Replace previous command with `` `!!` `` argument.

```bash
$ brew --prefix
/opt/homebrew

$ open `!!`
open `brew --prefix`
# Now Finder.app opens at "/opt/homebrew" path
```

### Uninstall Apps from Mac

Uninstall and remove all app data from your Mac using
[this script](https://github.com/sunknudsen/privacy-guides/raw/master/how-to-clean-uninstall-macos-apps-using-appcleaner-open-source-alternative/app-cleaner.sh).
For more information [see this](https://youtu.be/0nVOB0EE5ps) youtube video.

### Remove Mac's "Login Items"

1. Go to `/Library/LaunchAgents` and `/Library/LaunchDaemons` path.
2. Check for the login item names and delete them.
3. This process might asks for password.
