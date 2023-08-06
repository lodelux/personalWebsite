---
title: "How to fix Vscode asking for Github login on macOS"
description: "Quick fix for Gihtub and/or copilot  login popup in Vscode on every launch"
banner: "/images/vscode-login/banner.png"
tags: ["Vscode", "Github", "Copilot", "fix"]
date: 6 August 2023
---

# How to fix Vscode asking for Github login on macOS

## Quick fix for the annoying login popup in Vscode on every launch on MacOS

---

<div align="center">
   ![img.png](/personalWebsite//images/vscode-login/prompt.png)
</div>
If you are encountering the  issue that on every launch of Vscode, you are prompted to login on your Github
account for syncing vscode, use github repos or use copilot then you are not alone as I also had this problem and for
some strange reason couldn't find any solution on the internet. So I decided to write this article to help others.

### Why is it happening?

In my specific case it was caused by the fact that the **Vscode app was running from the Downloads folder** and so it didn't
have the required permissions to write to cache the login token. So every time I launched the app, it was asking me to
login again.
    

### How to fix it?

The fix is very simple, just **move the Vscode app to the Applications folder** and launch it from there. This will give it
the required permissions to write to cache the login token and after one last login, you won't be prompted again.

if you wish to do so via terminal, you can use the following command:

```bash
mv ~/Downloads/Visual\ Studio\ Code.app /Applications
```

if you get the popup saying that macos prevented terminal from modifying the Applications folder, you can run the previous
command with `sudo`:

```bash
sudo mv ~/Downloads/Visual\ Studio\ Code.app /Applications
```
you will be prompted to enter your password and then the command will run successfully.

