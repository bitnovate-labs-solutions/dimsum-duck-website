# Plaza Khao Gaeng — Next.js Template

A Next.js recreation of [Plaza Khao Gaeng](https://plazakhaogaeng.com/), structured so all text, images, and links can be swapped without touching layout code.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customizing content

All editable site data lives under `src/content/`:

| File | What to edit |
|------|----------------|
| `site.ts` | Brand name, social links, opening hours, partner logos, booking/careers URLs |
| `navigation.ts` | Header and mobile menu items |
| `locations.ts` | Location pages (names, addresses, descriptions, menu links) |
| `pages.ts` | Homepage, About, Menu, Locations, and Group Dining copy |
| `faq.ts` | FAQ sections and answers |

### Replacing images

Put new files in `public/images/`:

- `public/images/theme/` — logos, icons, UI SVGs
- `public/images/uploads/` — photos and backgrounds
- `public/fonts/` — custom web fonts

Then update the paths in `src/content/` (e.g. `heroImage: "/images/uploads/your-photo.jpg"`).

### Pages included

- `/` — Home
- `/about-plaza-khao-gaeng` — About
- `/menus` — Menu
- `/locations` — Locations index
- `/covent-garden`, `/borough-yards`, `/tottenham-court-road` — Location pages
- `/group-dining` — Group dining
- `/faq`, `/privacy`, `/cookies` — Legal & FAQ

Gifting opens an external URL (configurable in `site.ts`). Book and Careers open modals with configurable links.

## Project structure

```
src/
  app/           # Next.js routes (thin wrappers)
  components/    # Reusable UI (Header, Footer, modals, sections)
  content/       # All site copy and configuration
public/
  fonts/         # Clearface, Noto, Sati fonts
  images/        # Theme assets and page imagery
```

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- CSS ported from the original WordPress theme
