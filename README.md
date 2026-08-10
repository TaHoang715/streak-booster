<div align="center">

# GitHub Streak Booster

**Automated activity workflow & customizable profile builder for GitHub READMEs**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/TaHoang715/streak-booster?color=gold)](https://github.com/TaHoang715/streak-booster/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/TaHoang715/streak-booster?color=blue)](https://github.com/TaHoang715/streak-booster/network/members)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/TaHoang715/streak-booster/pulls)
[![Profile Setup Tutorial](https://img.shields.io/badge/Tutorial-Profile_README_Setup-00f5d4.svg)](PROFILE_TUTORIAL.md)

</div>

---

## Overview

GitHub Streak Booster is an open-source toolkit designed to maintain your GitHub contribution activity and streamline custom profile README creation. It combines automated GitHub Actions workflows with a zero-dependency local dashboard to automate daily activity logs, track view statistics, and generate responsive profile layouts.

---

## Features

- **Automated Streak Maintenance**: Scheduled GitHub Actions workflows to maintain daily commit, Pull Request, and Issue activity.
- **Visitor Analytics & Counter**: Automated Playwright runner for dynamic profile view tracking.
- **Balanced Trophy Matrix**: Pre-configured layout for GitHub Trophies using high-availability community CDN mirrors (`gh-trophy.cdnsoft.net`).
- **Zero-Dependency Web Dashboard**: Lightweight Node.js server (`server.js`) for heatmap simulation and script generation (`.ps1` / `.sh`).
- **Profile README Tutorial & Template**: A full step-by-step tutorial ([`PROFILE_TUTORIAL.md`](PROFILE_TUTORIAL.md)) and copyable template ([`PROFILE_TEMPLATE.md`](PROFILE_TEMPLATE.md)).

---

## Quick Start

### Option 1: GitHub Actions Setup (Recommended)

Automate daily contribution activity directly within your repository:

1. Fork or copy the `.github/workflows/` directory into your profile repository (`https://github.com/YOUR_USERNAME/YOUR_USERNAME`).
2. Enable workflow write permissions:
   - Navigate to **Settings** > **Actions** > **General**.
   - Under **Workflow permissions**, select **Read and write permissions** and save.
3. Configure your Git credentials in `.github/workflows/auto-boost.yml`:
   ```yaml
   git config --global user.name "YOUR_USERNAME"
   git config --global user.email "YOUR_EMAIL@gmail.com"
   ```
4. Trigger the workflow manually via the **Actions** tab or allow the scheduled cron job to run daily at 18:30 UTC.

---

### Option 2: Local Web Dashboard

Run the standalone local dashboard to simulate activity heatmaps and generate backdated commit scripts:

```bash
# Clone repository
git clone https://github.com/TaHoang715/streak-booster.git
cd streak-booster

# Start the dashboard server
node server.js
```

Open `http://localhost:3000` in your browser.

> [!NOTE]
> `server.js` uses native Node.js HTTP and FileSystem modules. No external package installation (`npm install`) is required to run the local dashboard.

---

## Profile Tutorial & Template

Check out our step-by-step setup guide and copyable template:

- 📖 **Complete Setup Tutorial**: [`PROFILE_TUTORIAL.md`](PROFILE_TUTORIAL.md)
- 📄 **Copyable Template Code**: [`PROFILE_TEMPLATE.md`](PROFILE_TEMPLATE.md)

---

## Project Badge Integration

To showcase this project on your personal profile README, include the following snippet:

```markdown
<a href="https://github.com/TaHoang715/streak-booster">
  <img src="https://img.shields.io/badge/Project-GitHub_Streak_Booster-00f5d4?style=flat-square&logo=github" alt="GitHub Streak Booster" />
</a>
```

---

## Contributing

Contributions are welcome. Check out [`CONTRIBUTING.md`](CONTRIBUTING.md) for contribution guidelines.

---

## License

This project is licensed under the [MIT License](LICENSE).
