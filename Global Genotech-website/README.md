# Global Genotech — Website

A professional software-company website built with React, Vite and Tailwind CSS v4.

## Tech stack
- React 19 + Vite
- Tailwind CSS v4
- react-router-dom (client-side routing, one component per page)
- lucide-react (icons)

## Pages
- `/` — Home
- `/about` — About
- `/services` — Services
- `/work` — Case studies / portfolio
- `/careers` — Careers
- `/contact` — Contact form

Every page lives in `src/pages/`, and shared UI (Navbar, Footer, Hero elements, cards, etc.)
lives in `src/components/` as separate, reusable components.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Customizing

- **Brand colors / fonts**: edit the `@theme` block in `src/index.css`.
- **Company name / copy**: search for "Global Genotech" across `src/` and replace.
- **Contact details**: `src/pages/Contact.jsx` and `src/components/Footer.jsx`.
- **Logo**: `public/favicon.svg` and the inline SVG mark in `Navbar.jsx` / `Footer.jsx`.
