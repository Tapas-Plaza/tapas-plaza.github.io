# Tapas Plaza

A plain HTML / CSS / JavaScript website for Tapas Plaza, a tapas restaurant on
the boulevard in Nerja, Spain. No build step, no dependencies, no packages to
update.

## Files

| File         | Purpose                     |
| ------------ | --------------------------- |
| `index.html` | The whole single-page site  |
| `styles.css` | All styling                 |
| `main.js`    | Mobile menu + dish carousel |
| `assets/`    | Images                      |
| `menu.pdf`   | The downloadable menu       |

## Editing content

Everything is plain HTML — open `index.html` and edit the text directly.
Common changes:

- **Dishes**: edit the `<article class="dish">` blocks in the `#dishes` section.
- **Menu PDF**: replace `menu.pdf` with a new file of the same name.
- **Photos**: drop replacements into `assets/` keeping the same file names.
- **Address / phone / links**: edit the `#contact` section and the footer.

## Preview locally

Just open `index.html` in a browser, or use live server in vs code.

## Deploy to GitHub Pages

1. Push these files to a GitHub repository.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, pick your branch and the root (`/`) folder.
3. The included `.nojekyll` file makes Pages serve everything as-is.
