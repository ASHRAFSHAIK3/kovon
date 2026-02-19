# Kovon — Global Talent Mobility Landing Page

A responsive, production-ready landing page built for the Kovon Frontend Developer Hiring Assignment.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript** (strict mode, no `any`)
- **Material UI v5** (latest)
- **Tailwind CSS v3**

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/kovon-landing.git
cd kovon-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Folder Structure

```
kovon-landing/
├── app/
│   ├── layout.tsx          # Root layout with MUI ThemeRegistry & metadata
│   ├── page.tsx            # Main page — composes all sections
│   └── globals.css         # Global styles + Tailwind directives
│
├── components/
│   ├── ThemeRegistry.tsx   # MUI theme + emotion cache provider
│   ├── Button.tsx          # Reusable Button wrapper (bonus)
│   ├── header/
│   │   └── Header.tsx      # Sticky header, mobile drawer, CTA
│   ├── hero/
│   │   └── HeroSection.tsx # Hero with gradient, AI match card, stats
│   ├── features/
│   │   ├── FeatureCard.tsx # Individual feature card with hover effect
│   │   └── FeaturesSection.tsx  # 4-column responsive grid
│   ├── how-it-works/
│   │   └── HowItWorks.tsx  # 4-step process with dark gradient bg
│   └── footer/
│       └── Footer.tsx      # Links, socials, copyright
│
├── constants/
│   └── content.ts          # All static content (nav, features, steps, footer)
│
├── types/
│   └── index.ts            # TypeScript interfaces
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## Design Decisions

### Color Palette
- **Primary Blue:** `#1a56db` — conveys trust and professionalism
- **Accent Cyan:** `#06b6d4` — adds energy and modernity
- **Dark Navy:** `#0f172a` — used for dark sections (How It Works, Footer)

### Typography
- `Geist Sans` (Google Fonts via next/font) — clean, modern, legible at all sizes

### Responsiveness
- **Mobile (360px):** Single column, hamburger nav, stacked CTAs
- **Tablet (768px):** 2-column feature grid, wider hero text
- **Desktop (1440px+):** Full 4-column features, hero with side panel

### MUI + Tailwind Integration
- MUI used for: Grid system, AppBar, Drawer, Paper, Chip, IconButton, Typography
- Tailwind used for: utility layout classes (flex, grid, gap, padding, responsive breakpoints)
- No conflicts — MUI is the "component library", Tailwind handles layout utilities

### Component Architecture
- All components are **functional** with proper **TypeScript interfaces**
- No `any` types used anywhere
- Content separated into `constants/content.ts` for easy maintenance
- Reusable `Button` component wraps MUI Button with project-specific defaults

---

## Deployment

Deploy instantly to Vercel:

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

---

## Bonus Features Implemented

- ✅ Reusable `Button` component
- ✅ SEO meta tags (title, description, OpenGraph)
- ✅ Smooth scroll (`scroll-behavior: smooth` in CSS)
- ✅ Sticky header with scroll-aware styling (blur + shadow on scroll)
- ✅ Hover animations on all interactive elements
- ✅ MUI Theme customization (`ThemeRegistry`)

---

## Next.js Version

`Next.js 14.2.4` with App Router
