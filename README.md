# Dim Sum Duck

Website for [Dim Sum Duck](https://dimsumduck.co.uk/) — handmade dim sum and in-house roasted duck at Pentonville Road and King's Cross Road, London.

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
| `site.ts` | Brand name, social links, colours, logos |
| `navigation.ts` | Header and mobile menu items |
| `locations.ts` | Location pages (names, addresses, descriptions, gallery) |
| `pages.ts` | Homepage, Our Story, Menu, Locations, and Reviews copy |
| `faq.ts` | FAQ sections and answers |
| `menu.ts` | Menu categories and items |

### Replacing images

Put new files in `public/`:

- `public/logos/` — brand logos
- `public/images/dimsumduck/` — restaurant photography
- `public/images/ourstory/` — Our Story section images
- `public/hero/` — homepage hero video
- `public/fonts/` — custom web fonts

Then update the paths in `src/content/`.

### Pages

- `/` — Home
- `/menus` — Menu
- `/locations` — Locations index
- `/pentonville-road`, `/kings-cross-road` — Location pages
- `/our-story` — About
- `/reviews` — Press and reviews
- `/faq`, `/privacy`, `/cookies` — FAQ and legal

## Project structure

```
src/
  app/           # Next.js routes
  components/    # Reusable UI (Header, Footer, sections)
  content/       # All site copy and configuration
  styles/        # Brand tokens and layout CSS
public/
  fonts/         # Cooper BT, Feeling Passionate
  images/        # Photography and UI assets
```

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- CSS (ported from the original Kadence/WordPress layout)
