# Third Wave Advisory — Corporate Website

A premium, JLL-inspired (not copied) corporate advisory website built with **React + Vite + Tailwind CSS**, sourced entirely from the client-provided copy deck.

## Stack
- React 18 + Vite 5
- Tailwind CSS (custom design tokens: Deep Navy / Antique Gold / Platinum Gray / Charcoal)
- Playfair Display (headings) + Inter (body) via Google Fonts
- Zero UI dependencies — all components hand-built (accordion/tabs, counters, reveal-on-scroll, contact form) for full control and a light bundle

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/       # One component per section (Navbar, Hero, About, Verticals, ...)
  data/content.js    # All copy, centralized and sourced from the client deck
  hooks/useReveal.js # IntersectionObserver-based scroll-reveal hook
  index.css          # Global styles, design tokens, reduced-motion handling
  App.jsx            # Assembles the page from section components
```

## Content & assets to finalize before launch
The client deck marks the following as placeholders — swap these before going live:
- Leadership: partner names, years of experience, prior titles, degrees
- Headquarters: building/business park name, floor & suite number
- Corporate office phone number
- Careers inbox is set to `careers@thirdwave.com`; confirm this is the live address
- Hero, About, Leadership, and Careers imagery currently uses royalty-free Unsplash placeholders — replace with licensed, brand-shot photography (boardrooms, skylines, portraits) per the visual direction notes in the deck

## SEO checklist (from the deck)
- [ ] Clean, descriptive URL slugs
- [ ] Localized alt text on architectural/corporate imagery (e.g. `Joint-Development-Agreement-JDA-Consultants-Bengaluru`)
- [ ] Organization + LocalBusiness schema targeting Bengaluru (a starter `ProfessionalService` JSON-LD block is already in `index.html` — expand it with the final address/phone)
- [ ] Ensure target keywords (JDA Bangalore, KRERA compliance, ARC debt resolution Karnataka, BDA/BBMP approvals) appear naturally across H1/H2/body copy — the current copy already carries these terms in the Regulatory Stewardship and Transactions sections

## Design notes
- Palette: Deep Navy `#0A192F` (primary), Antique Gold `#C5A880` (accent), Platinum Gray `#F4F6F9` (canvas), Charcoal `#222222` (body text)
- Motion is deliberate and restrained: a page-load sequence on the hero, scroll-triggered reveals per section, animated stat counters, and subtle hover states — no autoplaying carousels or excessive parallax
- Fully responsive from mobile through large desktop; keyboard focus states are visible throughout and `prefers-reduced-motion` is respected
