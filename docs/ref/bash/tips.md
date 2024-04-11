---
icon: material/tooltip-plus
---

# Bash: Tips and Tricks

This page contains some Tips and Tricks which are helpful to work with Bash scripts or Terminals. I have mentioned only those tips and tricks which I uses most in my daily routine, BTW you can refer to links which I have shared to know all the tips and tricks.

## Tips by `asottile`

I will only mention those commands and shortcuts which helpful for me. You can check all of them using below links.

<div class="grid cards" markdown>

  - :simple-youtube:{ .lg .middle }&nbsp; [Protips - YouTube Video](https://www.youtube.com/watch?v=_wcVyhfyaeE)
  - :simple-github:{ .lg .middle }&nbsp; [Protips - Github Wiki Link](https://github.com/asottile/scratch/wiki/protips)

</div>

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
$ mkdir new-project
$ code !$  # Opens the `new-project folder in VSCode
```

### Shortcut: ++ctrl+"\"++

++ctrl+"\"++ sends `SIGQUIT` (^^default behavior:^^ terminate + produce a core dump) which can be useful to kill things that normally catch ++ctrl+"c"++ (`SIGINT`).

> :fire: ++ctrl+"\"++ is more powerful than ++ctrl+"c"++.

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