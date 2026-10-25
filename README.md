# Amit Kumar - Portfolio

My personal portfolio website a single-page site covering my experience, skills, certifications, projects and contact details.

**Live site:** https://amitkumarsde.github.io/portfolio/

---

## Tech stack

- **Next.js 16** (App Router, static export)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** icons (brand icons as inline SVG), no external fonts or CDNs

---

## Project structure

```
portfolio/
├── .github/workflows/deploy.yml   # Lint, build and publish to GitHub Pages
├── public/                        # Images
├── src/
│   ├── app/                       # Root layout, page and global styles
│   ├── components/
│   │   ├── layout/                # Header, Footer
│   │   ├── sections/              # Hero, About, Skills, Projects, etc.
│   │   └── ui/                    # Reusable pieces
│   ├── data/                      # All site content, one file per topic
│   ├── hooks/                     # useInView
│   ├── lib/                       # Helpers (asset base-path prefix)
│   └── types/                     # Shared TypeScript types
├── next.config.ts
└── package.json
```

---

## Getting started

Requires Node.js 24 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start the dev server                       |
| `npm run build` | Build the static site into `out/`          |
| `npm run lint`  | Run ESLint                                 |

---

### Follow me
- **LinkedIn:** https://www.linkedin.com/in/amitkumarsde

---