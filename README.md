# Midlife Crisis in Women — Interactive Dashboard

An interactive educational dashboard for understanding and treating midlife
obesity in women, by Dr Samir Contractor. This is a conversion of the original
static `index.html` build into a modern web stack.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (base-ui primitives — used for the slide zoom dialog)
- Deployed on **Vercel**, version-controlled on **GitHub**

## Project structure

```
src/
  app/
    layout.tsx        # Inter font + metadata
    page.tsx          # renders <Dashboard />
    globals.css       # shadcn tokens + the original stylesheet (ported verbatim)
  components/
    dashboard/
      Dashboard.tsx     # client component: holds section/slide/menu/dialog state
      Sidebar.tsx       # brand + learning menu + disclaimer
      Topbar.tsx        # title + mobile menu toggle
      SectionView.tsx   # renders the active section (summary, cards, FAQs, tools)
      SlidePanel.tsx    # slide viewer + prev/next + thumbnail grid
      SlideDialog.tsx   # full-size slide zoom (shadcn Dialog)
      tools.tsx         # risk calculator, checklists, pathway, action plan, FAQs
      icons.tsx         # inline SVG icon set
    ui/                 # shadcn/ui components
  lib/
    data.ts           # menu, slides, sections, FAQ content (typed)
    types.ts          # shared types
public/
  assets/             # brand logo, 56 slides + 56 thumbnails
```

## Conversion notes

- The look is a **pixel-faithful port**: the original `<style>` block lives in
  `globals.css` (unlayered, so it takes precedence over shadcn's base layer).
- The latent **doctor/patient mode toggle** from the original CSS was dropped per
  spec — only the patient-facing teaching notes render. The doctor copy is still
  retained in `lib/data.ts` for future use.
- Checklist progress persists to `localStorage` (`midlife-screen`,
  `midlife-action`), matching the original behaviour.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deploy

### GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<you>/midlife-dashboard.git
git push -u origin main
```

### Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Vercel auto-detects Next.js — no configuration needed.
3. Click **Deploy**.
