# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static landing page** (no `package.json`, no backend, no build pipeline committed). It consists of:

- `index.html` — the full page markup (Japanese seminar LP).
- `assets/css/style.css` (+ `.map`) — compiled CSS, committed to the repo.
- `assets/scss/**` — SCSS sources that compile into `assets/css/style.css`.
- `assets/js/main.js` — vanilla JS for interactions (hamburger menu, Swiper carousel, FAQ accordion, custom select, client-side form validation/submit, scroll-reveal animations).
- `assets/images/**` — static images/SVGs.

External libraries (Swiper, Google Fonts) load from CDNs at runtime, so an internet connection is needed for full styling/carousel behavior.

### Running / developing

- **Serve the site** (development): from the repo root run a static file server, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000/index.html`. Opening `index.html` via `file://` mostly works too, but a server avoids CDN/CORS quirks.
- **Recompile CSS after editing SCSS**: `sass assets/scss/style.scss assets/css/style.css` (use `sass --watch assets/scss/style.scss:assets/css/style.css` while iterating). `sass` is installed globally via npm — see below.
- There is **no lint, test, or build script** in this repo. "Build" is just the SCSS→CSS compile step above.

### Environment notes (non-obvious)

- The active `node` is `/exec-daemon/node`, but `npm` is nvm-managed. npm's global prefix is set to `$HOME/.npm-global` (in `~/.npmrc`) so `npm install -g` works without root. `$HOME/.npm-global/bin` is added to `PATH` via `~/.bashrc` — this is how the `sass` binary is resolved.
- npm prints a harmless warning ("`.npmrc` ... has a `prefix` setting ... incompatible with nvm") on most commands. It can be ignored; installs and `sass` still work.
- The contact form posts via `fetch` to an external endpoint; with no real backend the JS still shows the success message `お問い合わせを受け付けました。…` once client-side validation passes.
