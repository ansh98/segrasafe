# Segrasafe – Biomedical Waste Management Website

A clean, modern Next.js + Tailwind CSS website for Segrasafe Waste Solutions.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect the repo on [vercel.com](https://vercel.com).

## 📁 Project Structure

```
segrasafe/
├── app/
│   ├── globals.css       # Tailwind base + custom styles
│   ├── layout.js         # Root layout with metadata
│   └── page.js           # Home page (assembles all sections)
├── components/
│   ├── Navbar.js         # Responsive sticky navbar
│   ├── Hero.js           # Full-screen hero section
│   ├── Services.js       # 3 service cards
│   ├── WhyUs.js          # 4-point value proposition
│   ├── Clients.js        # 4 target industries
│   ├── About.js          # Company description + stats
│   ├── Contact.js        # Contact form
│   └── Footer.js         # Footer with links + copyright
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── vercel.json
```

## 🎨 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (custom green/forest palette)
- **Google Fonts** – DM Serif Display + DM Sans
- Zero external UI libraries

## ✏️ Customization

- Colors: Edit `tailwind.config.js` → `forest` palette
- Contact: Replace email/phone in `Contact.js` and `Footer.js`
- Content: Each section is an isolated component — edit freely
