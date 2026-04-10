# 🚀 Personal Portfolio — Dark Futuristic

A production-ready personal portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

---

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── ui/
│   │   └── Animations.js       # Reusable FadeIn, SectionTitle, StaggerContainer
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Experience.js
│   ├── Contact.js
│   └── Footer.js
├── data/
│   └── config.js               # ← EDIT THIS FILE to personalise your site
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/
│   └── globals.css
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 🎨 Personalising Your Site

**All personal data lives in one file: `data/config.js`**

Open it and replace:

| Field         | Description                              |
|---------------|------------------------------------------|
| `name`        | Your full name                           |
| `title`       | Your job title / role                    |
| `tagline`     | One-line summary shown in the hero       |
| `about`       | Paragraph about yourself                 |
| `email`       | Contact email address                    |
| `location`    | Your city / country                      |
| `socials`     | GitHub, LinkedIn, Twitter links          |
| `skills`      | Categories with skill names + levels (%) |
| `projects`    | Title, description, tags, URLs           |
| `experience`  | Role, company, period, description       |
| `education`   | Degree, school, period                   |

You **never** need to touch any component file just to update content.

---

## 🖼️ Adding a Profile Photo

1. Add your image to `/public/avatar.png`
2. In `data/config.js`, uncomment `heroImage: "/avatar.png"`
3. Update `About.js` to render `<Image src={siteConfig.heroImage} ... />` if desired

---

## 🌐 Deploying to Vercel (free)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect the repo at [vercel.com](https://vercel.com).

---

## ✨ Features

- 🌑 Dark futuristic theme with glassmorphism
- 🖱️ Mouse-follow cursor glow effect
- 🎛️ Animated grid background
- 🃏 3D tilt effect on project cards
- 📜 Scroll-triggered animations (Framer Motion)
- 📱 Fully responsive (mobile-first)
- ⚡ Optimised for Core Web Vitals
- 🎨 Custom scrollbar, neon glows, gradient text
- 📬 Contact form with loading & success states
- 🔧 Single config file for all content

---

## 🛠️ Tech Stack

| Tool           | Purpose                    |
|----------------|----------------------------|
| Next.js 14     | Framework & routing        |
| Tailwind CSS   | Utility-first styling      |
| Framer Motion  | Scroll & mount animations  |
| react-intersection-observer | Viewport detection |
| Google Fonts   | Orbitron + Syne + JetBrains Mono |

---

## 📄 License

MIT — free to use and modify.
