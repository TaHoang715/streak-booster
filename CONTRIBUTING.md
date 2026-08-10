# Contributing to GitHub Streak Booster

Thank you for your interest in contributing to **GitHub Streak Booster & Profile Craft**! We welcome contributions from developers of all skill levels to help improve this open-source project.

---

## 📌 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#development-setup)
- [Commit Conventions](#commit-conventions)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and welcoming environment for everyone. Please be kind, constructive, and collaborative.

---

## How Can I Contribute?

### Reporting Bugs

If you find a bug or unexpected behavior:
1. Check the [Issues](https://github.com/TaHoang715/streak-booster/issues) tab to see if it has already been reported.
2. If not, open a new Issue using a clear title and detailed description including:
   - Operating system and browser details.
   - Steps to reproduce the issue.
   - Expected vs actual result.

### Suggesting Enhancements

Ideas for new profile widgets, dark-mode themes, or workflow optimizations are welcome!
- Open a new Issue tagged with `enhancement`.
- Describe the feature clearly and explain why it would be beneficial.

### Submitting Pull Requests

1. **Fork** the repository: `https://github.com/TaHoang715/streak-booster`
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/streak-booster.git
   cd streak-booster
   ```
3. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. Make your changes and verify them locally.
5. Commit your changes following the [Commit Conventions](#commit-conventions).
6. Push to your branch and open a Pull Request against the `main` branch.

---

## Development Setup

The local web dashboard runs on native Node.js with zero external dependencies:

```bash
# Start the local server
node server.js
```

Open `http://localhost:3000` to test local dashboard features and heatmap simulation.

---

## Commit Conventions

We follow Conventional Commits format for clear repository history:

- `feat:` New features or enhancements
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Formatting or aesthetic changes (no production code change)
- `chore:` Maintenance tasks or repository maintenance

*Example:*
```bash
git commit -m "feat: add neon glow toggle option to web dashboard"
```

---

## Pull Request Process

1. Ensure code is well-formatted and documented.
2. Provide a clear description of changes in your Pull Request.
3. Link relevant Issues in the PR description (e.g. `Closes #12`).
4. Maintainers will review your PR as soon as possible.

Thank you for helping make GitHub Streak Booster better for everyone! 🚀
