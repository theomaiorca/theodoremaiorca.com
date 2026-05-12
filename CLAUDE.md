# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## User preferences

When Theo provides specific wording for any text on the site, keep it in his exact words. Only fix spelling, grammar, and punctuation — do not rephrase, restructure, or replace his words with alternatives. No em dashes.

## Deployment

Use `/deploy` to commit and push. It will ask for a commit message and run git add/commit/push automatically. GitHub Pages rebuilds within ~30 seconds of a push.

There is no build step — files are served directly as static assets.

To preview locally: open any `.html` file directly in a browser. No server required.

## Stack

Plain HTML + CSS + JS. No frameworks, no build tools, no dependencies. The only external resource is Space Grotesk from Google Fonts.

Hosted on GitHub Pages at `theodoremaiorca.com`. The `CNAME` file contains the custom domain.

Contact form uses Formspree (`contact/index.html`) — the `YOUR_FORM_ID` placeholder in the form action needs to be replaced with a real Formspree form ID.

## URL structure

The site uses folder-based clean URLs. Each page lives at `/<name>/index.html`:

- `theodoremaiorca.com` → `index.html` (root)
- `theodoremaiorca.com/projects/` → `projects/index.html`
- `theodoremaiorca.com/hobbies/` → `hobbies/index.html`
- `theodoremaiorca.com/contact/` → `contact/index.html`

The old `.html` files (`projects.html`, `experience.html`, `contact.html`) remain at root as fallback URLs. When editing page content, update both the new folder version and the old `.html` fallback.

All asset paths in subdirectory pages use root-relative paths (`/style.css`, `/script.js`, `/assets/...`). The root `index.html` uses relative paths (`style.css`, `assets/...`).

## File structure

- `index.html` — home page: hero + "Who I Am" + skills grid
- `projects/index.html` — project list (landscape card layout, image left)
- `hobbies/index.html` — hobbies page (photo+text rows, section-alt background)
- `contact/index.html` — Formspree form + LinkedIn/GitHub buttons
- `about.html` — unused, kept for consistency
- `style.css` — all styling; single shared stylesheet across all pages
- `script.js` — mobile nav toggle, scroll shadow on nav, active link detection
- `assets/resume.pdf` — linked from hero "Download Resume" button (not yet added)
- `assets/images/` — photos: `TheoHeadshotPhoto.JPEG` (hero), `TheoMountainBike.JPEG` (hobbies), `TheoSpikeball.JPEG` (hobbies)

## CSS architecture

All design tokens are CSS custom properties in `:root` at the top of `style.css`:

```css
--bg: #F3EBD4       /* warm tan body background */
--surface: #E8DCBE  /* alt section background */
--card: #FDFAF3     /* card/input background */
--text: #1C1714     /* primary text */
--text-muted: #7C6F63
--accent: #1D4ED8   /* blue — buttons, links, active states */
--punch: #C05621    /* terracotta — eyebrow, borders, dates, accent */
--border: #D2C296
```

The body has a dot-grid texture via `background-image: radial-gradient(...)`.

Decorative circle shapes:
- `.hero::before` / `.hero::after` — two rings in the hero section
- `.section-projects::before` / `::after` — filled blob + ring on projects page
- `.section-ring::after` — terracotta ring, right side (contact page)
- `.section-alt::after` — blue ring, bottom-left (hobbies page, any section-alt)

Skill chip color variants: `.chips--software` (blue), `.chips--digital` (green), `.chips--hardware` (terracotta).

Hover lift effect (`transform: translateY(-3px)` + shadow) applies to `.project-item` and `.about-item`.

## Adding a photo or video

Each placeholder slot has a commented-out `<img>` tag and a `<span class="photo-placeholder">`. To activate a photo: save to `assets/images/<filename>`, uncomment the `<img>`, delete the `<span>`.

For video: use `<video src="/assets/videos/file.mp4" autoplay muted loop playsinline></video>` in place of the img/span. CSS already handles sizing for both `video` and `img` inside `.project-image` and `.about-item-image`.

## Nav active state

`script.js` matches nav links against `window.location.pathname`. Home (`href="/"`) matches `/` exactly. All other links match via `path.startsWith(href)`. Nav link `href` values must be root-relative with trailing slash (e.g., `/projects/`).
