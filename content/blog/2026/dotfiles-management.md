---
pubDate: 2026-01-23
title: Dotfiles Management
description: Manage your dotfiles effectively.
icon: mdi:bash
categories: [thoughts, github]
---

This will be the full refactor of my [arv-anshul/dotfiles] repository from file structure to speak effective configs.

- In repository, main config directory will `./home` instead of the root of the repository.
- Use [XDG Base Directories](https://wiki.archlinux.org/title/XDG_Base_Directory) to comply with opinionated convention.
- Move the main `.zshrc` to `$XDG_CONFIG_HOME/zsh` directory instead of `$HOME` directory. Also keep one at
  `$HOME/.zshrc` but for private or system level use case.
- Use AI to get suggestions around best practices and tools.
- Use comments to explain configs to recall later.

**Currently, using tools such as:**

1. \[`chezmoi`\]: Dotfiles manager.
2. \[`brew`\]: Package manager for macOS.

**Some other which I will consider in future:**

- \[`mise`\]: Lets you manage envs, tools, scripts, and more for a project.
- [Podman]: Alternative to Docker.

[arv-anshul/dotfiles]: https://github.com/arv-anshul/dotfiles
[podman]: https://podman.io
