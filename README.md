# GDGoC TUP Manila

The GDGoC TUP Manila website was redeveloped from a static HTML, CSS, and JavaScript page into a Next.js application. The existing page content, responsive design, styles, and interactive features were carried over. The homepage is now rendered from `app/page.jsx`, with document metadata and shared page setup in `app/layout.jsx`. Static assets, stylesheets, and the existing interaction script are served from `public/`.

## Requirements

- Node.js 20.9 or later
- npm

## Install and run locally

Install the project dependencies, then start the Next.js development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server reloads the app as you make changes.

## Production build

To create and run an optimized production build:

```bash
npm run build
npm start
```
