# Portfolio Website — Pangeran Christian Pardamean Pasaribu

## 🌐 Live Website
**https://pangeranpas.github.io**

A modern, professional, and responsive personal portfolio showcasing 7+ years of Odoo ERP and software engineering experience.

---

## 🚀 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure & semantic markup |
| CSS3 | Custom animations, glassmorphism, responsive design |
| Vanilla JavaScript | Interactivity, scroll animations, counters |
| Tailwind CSS CDN | Utility-first styling |
| Lucide Icons CDN | Clean, consistent icons |
| Google Fonts | Inter + JetBrains Mono |

> **No build step required.** Works directly in the browser.

---

## 📁 Project Structure

```
pangeranpas.github.io/
├── index.html              # Main HTML file (single page)
├── css/
│   └── portfolio.css       # Custom styles, animations, components
├── js/
│   └── portfolio.js        # Interactivity: scroll, reveal, counters
├── assets/
│   └── cv-pangeran-pasaribu.pdf   # ← REPLACE with your actual CV PDF
├── img/                    # (existing) images directory
└── README.md               # This file
```

---

## 📋 Sections

1. **Hero** — Name, titles, headline, location, Download CV, Email, LinkedIn
2. **Achievements** — 7+ years, 50+ modules, 200+ users, 2M+ customers, 1000x performance
3. **About Me** — Professional bio, quick facts
4. **Work Experience** — Timeline: PT Infomedia, Cendana Teknika Utama, PT Global Service Indonesia
5. **Featured Projects** — PDAM Bandung Odoo, Enterprise Info System, Odoo Customization, Tableau BI
6. **Technical Skills** — Skill bars: Python, Odoo, PostgreSQL, JS, PHP, Golang, Tableau, Git, REST API
7. **Odoo Expertise** — Version timeline v10–v19, 6 expertise areas
8. **Education** — Universitas Gunadarma + UPN Veteran Jakarta
9. **Certifications** — Microsoft AZ-900, MS-900, AI-900 + Udemy courses
10. **Contact** — Email, phone, LinkedIn, location + CTA card

---

## ⚙️ GitHub Pages Deployment

### Method 1: Automatic (Repository Settings)

1. Push all files to your GitHub repository `pangeranpas/pangeranpas.github.io`
2. Go to **Settings → Pages**
3. Set **Source** to `Deploy from a branch`
4. Select branch: `main` (or `master`), folder: `/ (root)`
5. Click **Save**
6. Website will be live at **https://pangeranpas.github.io** within 1–2 minutes

### Method 2: Git Commands

```bash
cd c:\Kerja\web\pangeranpas.github.io

# Stage all changes
git add .

# Commit
git commit -m "🚀 Deploy: Modern portfolio website v2.0"

# Push to GitHub
git push origin main
```

---

## 📄 Adding Your CV

1. Place your CV PDF file in the `assets/` folder
2. Name it exactly: `cv-pangeran-pasaribu.pdf`
3. The "Download CV" buttons will automatically link to it

```
assets/
└── cv-pangeran-pasaribu.pdf   ← Put your CV here
```

---

## ✏️ Customization Guide

### Update Personal Info
Edit `index.html`:
- **Line ~100**: Email address
- **Line ~105**: LinkedIn URL
- **Line ~108**: Phone number
- **Line ~350+**: Work experience details
- **Line ~500+**: Project descriptions

### Update Colors
Edit `css/portfolio.css`:
```css
:root {
  --blue-500: #3b82f6;    /* Primary blue */
  --cyan-400: #22d3ee;    /* Accent cyan */
  --navy-950: #020817;    /* Darkest background */
}
```

### Add/Remove Sections
Each section in `index.html` is clearly commented with `<!-- ===== SECTION NAME ===== -->`.

---

## 🔧 Features

- ✅ **Dark theme** — Navy + Electric Blue + Cyan palette
- ✅ **Glass morphism** cards with subtle borders
- ✅ **Scroll reveal** animations on all sections
- ✅ **Animated counters** in Achievements section
- ✅ **Skill progress bars** animated on scroll
- ✅ **Odoo version timeline** (v10–v19) with hover tooltips
- ✅ **Active nav link** highlighting on scroll
- ✅ **Back to top** button (appears after 400px scroll)
- ✅ **Mobile hamburger menu** with smooth open/close
- ✅ **Responsive** — mobile, tablet, desktop
- ✅ **SEO meta tags** — title, description, og:tags
- ✅ **Smooth scroll** to all sections
- ✅ **Parallax orbs** in hero section
- ✅ **Keyboard accessible** (focus styles)
- ✅ **Print stylesheet** included

---

## 📞 Contact

**Pangeran Christian Pardamean Pasaribu**
- 📧 pangeranpasaribu@gmail.com
- 📱 +62 851-5527-0407
- 💼 linkedin.com/in/pangeranpas
- 📍 Bekasi, West Java, Indonesia
