---
pubDate: 2026-02-15
title: SSH with Bitwarden
description: Manage your SSH keys with Bitwarden.
icon: simple-icons:bitwarden
categories: [terminal, security]
---

I have switched to SSH from HTTPS for GitHub about two years ago. And that introduced me to the term **Secure Shell
(SSH)**. Although, even now I don't fully understand it but I've got a little gist of it.

SSH encrypts your data before transferring it to the server with the generated keys and when the server transfers you
the data only the private key is able to decrypt the data.

## Manage SSH with Bitwarden

1. Generate new SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "email@example.com" -f "~/.ssh/new-ssh"
   ```
2. The command generates two files
   - `~/.ssh/new-ssh`: Contains the PRIVATE KEY. _**DO NOT SHARE THIS.**_
   - `~/.ssh/new-ssh.pub`: Contains you public key.
3. In Bitwarden desktop app, create new SSH Key > Save > Edit > Import the content of `~/.ssh/new-ssh` in Private Key
   field. The Public Key and Fingerprint field will gets update automatically.
4. Again in Bitwarden, go to Settings > Check "Enable SSH agent".
5. Add the Bitwarden socket file path in your config (`.bashrc` or `.zshrc`) file. Then, restart your terminal.
   ```bash
   # For Linux/MacOS
   export SSH_AUTH_SOCK="$HOME/.bitwarden-ssh-agent.sock"
   ```
6. Now, delete the `~/.ssh/new-ssh` file. After this you only have the `~/.ssh/new-ssh.pub` file.
   ```bash
   rm ~/.ssh/new-ssh
   ```
7. Add the Public Key (content of `~/.ssh/new-ssh.pub`) in your GitHub account.
8. Now create `~/.ssh/config` file to add the host configuration.
   ```bash title="~/.ssh/config"
   HostName github.com
    User git
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/new-ssh
    IdentitiesOnly yes
   ```
9. Check where your config works?
   ```bash
   ssh -T git@github.com
   ```
10. Clone GitHub repo like:
    ```bash
    git clone git@github.com:user/repo
    ```

### How Does Above Config Better?

It is better because the Private Key (`~/.ssh/new-ssh` file) is not on your system, it is safely and securely encrypted
in Bitwarden and your tools are able to access it from Bitwarden SSH Agent. You may check it whether the Bitwarden SSH
Agent is running or not?

```bash
ssh-add -L
```

Also your SSH is always available in Bitwarden, you don't need to create new you reset your system. Just copy it from
Bitwarden.

## `Host` And `HostName` In `~/.ssh/config`

> From `gemini-3-pro`

Think of your `~/.ssh/config` file like the Contacts app on your phone.

- `Host`: The Nickname you give the contact (e.g., "Mom"). This is what you type.
- `HostName`: The actual Phone Number (e.g., 555-0199). This is where the call actually goes.

Modify the above `~/.ssh/config`:

```bash title="~/.ssh/config"
Host gh
  HostName github.com
  User git
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/new-ssh
  IdentitiesOnly yes
```

Now you verify your SSH connection like:

```bash
ssh -T gh
```

Or, clone GitHub repo:

```bash
git clone gh:user/repo
```

> Here the `gh` works as the alias for `git@github.com`
