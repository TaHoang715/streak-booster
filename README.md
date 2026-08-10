<div align="center">

<img src="https://github.com/user-attachments/assets/a492b7c6-eb2d-4e44-a427-02abb83cd7c6" width="100%" style="max-width: 850px; border-radius: 8px;" alt="GitHub Streak Booster Banner" />

# 🚀 GitHub Streak Booster & Profile Craft

<p align="center">
  <b>An all-in-one open-source toolkit & GitHub Actions workflow suite to design stunning GitHub profile READMEs, automate daily activity streaks, and boost profile engagement.</b>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-00f5d4.svg?style=for-the-badge" alt="License" /></a>
  <a href="https://github.com/TaHoang715/streak-booster/stargazers"><img src="https://img.shields.io/github/stars/TaHoang715/streak-booster?style=for-the-badge&color=2ea44f" alt="Stars" /></a>
  <a href="https://github.com/TaHoang715/streak-booster/network/members"><img src="https://img.shields.io/github/forks/TaHoang715/streak-booster?style=for-the-badge&color=1877F2" alt="Forks" /></a>
  <a href="https://github.com/TaHoang715/streak-booster/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" /></a>
</p>

<div style="background: #0b0f19; border: 2px solid #00f5d4; border-radius: 8px; padding: 12px 20px; max-width: 600px; margin: 0 auto; box-shadow: 0 0 15px rgba(0, 245, 212, 0.35);">
  <img src="https://readme-typing-svg.demolab.com?font=Audiowide&weight=400&size=20&duration=3000&pause=1000&color=00f5d4&center=true&vCenter=true&width=550&lines=GitHub+Streak+Booster+%26+Profile+Craft;Keep+Your+Contribution+Graph+Green+365+Days!;Custom+Cyberpunk+Theme+%2B+Trophies+%2B+Visitor+Count;100%25+Open-Source+%2B+Zero-Dependency+Dashboard&stroke=000000&stroke_width=1&v=1" alt="Typing SVG" />
</div>

</div>

<br>

---

## 📌 Table of Contents
- [✨ Features](#-features)
- [🎨 Cyberpunk Profile Template](#-cyberpunk-profile-template)
- [📖 Hướng Dẫn Sử Dụng (Quick Start & Usage)](#-hướng-dẫn-sử-dụng-quick-start--usage)
  - [Cách 1: Tự động hóa bằng GitHub Actions (Khuyên dùng)](#cách-1-tự-động-hóa-bằng-github-actions-khuyên-dùng)
  - [Cách 2: Sử dụng Web Dashboard Cục Bộ (Zero-Dependency)](#cách-2-sử-dụng-web-dashboard-cục-bộ-zero-dependency)
- [⚙️ Config & Customization](#️-config--customization)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features

- **🔥 Automated Streak Keeper**: GitHub Actions workflow running daily to generate commits, Pull Requests, and Issues, keeping your contribution matrix green without missing a day.
- **👁️ Visitor Counter Booster**: Automated Playwright background runner to track and boost your GitHub profile view counts smoothly.
- **🏆 Balanced Matrix Trophies**: Pre-configured GitHub Trophies widget hosted on high-availability community CDN mirrors (`gh-trophy.cdnsoft.net`) with a clean 2-row layout.
- **💻 Zero-Dependency Web Dashboard**: Native Node.js web interface (`server.js`) to visually simulate heatmaps, generate backdated commits, and export PowerShell (`.ps1`) / Bash (`.sh`) scripts.
- **🎨 Dark Mode Cyber Template**: Full ready-to-copy Markdown template (`PROFILE_TEMPLATE.md`) with skill badges, terminal contact links, and custom assets.

---

## 🎨 Cyberpunk Profile Template

Projects created with this toolkit feature a sleek, modern dark-mode aesthetic with neon cyan accents:

| Component | Preview / Provider |
| :--- | :--- |
| **Typing Header** | Powered by `readme-typing-svg` with Audiowide font |
| **Skill Badges** | Powered by `skillicons.dev` in Dark Theme |
| **GitHub Trophies** | 2-row x 4-column balanced matrix layout via `gh-trophy.cdnsoft.net` |
| **Stats & Streaks** | Dark themed stats & streak counters via `github-readme-stats` |

👉 View the ready-to-use template code in [PROFILE_TEMPLATE.md](PROFILE_TEMPLATE.md).

---

## 📖 Hướng Dẫn Sử Dụng (Quick Start & Usage)

### Cách 1: Tự động hóa bằng GitHub Actions (Khuyên dùng)

Bạn có thể chạy tự động hàng ngày hoàn toàn miễn phí ngay trên GitHub:

1. **Fork repository này** hoặc sao chép thư mục `.github/workflows` vào repository profile của bạn (`https://github.com/YOUR_USERNAME/YOUR_USERNAME` hoặc repo tùy chọn).
2. **Cấp quyền ghi cho GitHub Actions**:
   - Truy cập vào **Settings** -> **Actions** -> **General**.
   - Tại mục **Workflow permissions**, chọn **Read and write permissions**.
   - Nhấn **Save**.
3. **Chỉnh sửa File Workflow**:
   - Mở file `.github/workflows/auto-boost.yml`.
   - Cập nhật `user.name` và `user.email` thành thông tin GitHub của bạn:
     ```yaml
     git config --global user.name "YOUR_USERNAME"
     git config --global user.email "YOUR_EMAIL@gmail.com"
     ```
4. **Kích hoạt**: Workflow sẽ tự động chạy vào lúc 18:30 tối (giờ Việt Nam) mỗi ngày để duy trì Streak, tạo PR & Issue ngẫu nhiên!

---

### Cách 2: Sử dụng Web Dashboard Cục Bộ (Zero-Dependency)

Ứng dụng đi kèm một Dashboard giao diện tối cao cấp chạy hoàn toàn bằng Node.js thuần (không cần `npm install`):

```bash
# 1. Clone repository về máy
git clone https://github.com/TaHoang715/streak-booster.git

# 2. Di chuyển vào thư mục dự án
cd streak-booster

# 3. Khởi chạy Dashboard Web Server
node server.js
```

Mở trình duyệt và truy cập: **[http://localhost:3000](http://localhost:3000)**

#### Các tính năng trên Dashboard:
- 📅 **Backdate Range**: Chọn số ngày lùi quá khứ (ví dụ: 100-365 ngày).
- 🎲 **Commit Density**: Tùy chỉnh tỷ lệ mật độ commit (85% ngẫu nhiên để giống lịch làm việc thực tế).
- 📄 **Generate Script**: Tạo file `boost.ps1` (PowerShell) hoặc `boost.sh` (Bash) chỉ với 1 cú click.

---

## ⚙️ Config & Customization

### Badge Giới Thiệu Dự Án Cho Profile

Nếu bạn muốn thêm Thẻ Badge giới thiệu dự án Open Source này vào Profile README của mình:

```markdown
<a href="https://github.com/TaHoang715/streak-booster">
  <img src="https://img.shields.io/badge/Featured_Project-GitHub_Streak_Booster-00f5d4?style=for-the-badge&logo=github&logoColor=black" alt="GitHub Streak Booster" />
</a>
```

Hiển thị:
<a href="https://github.com/TaHoang715/streak-booster">
  <img src="https://img.shields.io/badge/Featured_Project-GitHub_Streak_Booster-00f5d4?style=for-the-badge&logo=github&logoColor=black" alt="GitHub Streak Booster" />
</a>

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

<div align="center">
  <samp>Developed with ❤️ by <a href="https://github.com/TaHoang715">@TaHoang715</a></samp>
</div>
