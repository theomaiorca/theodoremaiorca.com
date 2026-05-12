# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Deployment

Use `/deploy` to commit and push. It will ask for a commit message and run git add/commit/push automatically. GitHub Pages rebuilds within ~30 seconds of a push.

There is no build step — files are served directly as static assets.

To preview locally: open any `.html` file directly in a browser. No server required.

## Stack

Plain HTML + CSS + JS. No frameworks, no build tools, no dependencies. The only external resource is Space Grotesk from Google Fonts.

Hosted on GitHub Pages at `theodoremaiorca.com`. The `CNAME` file contains the custom domain.

Contact form uses Formspree (`contact.html`) — the `YOUR_FORM_ID` placeholder in the form action needs to be replaced with a real Formspree form ID.

## File structure

- `index.html` — home page: hero + "Who I Am" about section combined
- `projects.html` — vertical stacked project list
- `experience.html` — personal "About Me" page with interests + work history as photo+text rows
- `contact.html` — Formspree form + LinkedIn/GitHub buttons
- `about.html` — unused, kept for consistency
- `style.css` — all styling; single shared stylesheet across all pages
- `script.js` — shared across all pages: mobile nav toggle, scroll shadow on nav, active link detection
- `assets/resume.pdf` — linked from hero "Download Resume" button (not yet added)
- `assets/images/` — project and about-page photos (not yet added; placeholder slots exist in HTML)

## CSS architecture

All design tokens are CSS custom properties in `:root` at the top of `style.css`:

```css
--bg: #F3EBD4       /* warm tan body background */
--surface: #E8DCBE  /* alt section background */
--card: #FDFAF3     /* card/input background */
--text: #1C1714     /* primary text */
--text-muted: #7C6F63
--accent: #1D4ED8   /* blue — buttons, links, active states */
--punch: #C05621    /* terracotta — eyebrow, borders, dates, cert chips */
--border: #D2C296
```

The body has a dot-grid texture via `background-image: radial-gradient(...)`.

Decorative circle shapes are applied via:
- `.hero::before` / `.hero::after` — two rings in the hero
- `.section-ring::after` — terracotta ring, right side (applied to projects, contact, experience intro sections)
- `.section-alt::after` — blue ring, bottom-left (automatic on all `section-alt` sections)

## Adding a photo

Each photo slot has a commented-out `<img>` tag and an active `<span class="photo-placeholder">` showing the expected file path. To activate: save the image to `assets/images/<filename>`, uncomment the `<img>` tag, and delete the `<span>`.

Profile photo: `index.html` hero section.
Project photos: `projects.html`, one per project item.
About/work photos: `experience.html`, one per `about-item`.

## Nav active state

`script.js` sets `.active` on the nav link whose `href` matches `window.location.pathname.split('/').pop()`. This means nav link `href` values must exactly match the HTML filename (e.g., `experience.html`, not `./experience.html`).
