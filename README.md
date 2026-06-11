# IKIGAI Corporate Website

Next.js corporate website for **IKIGAI**, a multi-disciplinary technology solutions company.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm run start` | Run production server    |
| `npm run lint`  | Run ESLint               |

## Project Structure

```text
ikigai-website/
├── config/              # Site content, images, navigation
├── public/              # Static assets (logo, etc.)
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # UI components
│   └── hooks/           # Client-side logic
└── package.json
```

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/contact` — Contact

Legacy `.html` URLs (`/about.html`, etc.) redirect automatically to the new routes.

## Logo

Logo files live in `public/`:

- `logo-simple-transparent.png` — header logo
- `logo-icon.png` — favicon

Paths are configured in `config/images.ts`.

## Deployment

Deploy to [Vercel](https://vercel.com), Netlify, or any Node.js host:

```bash
npm run build
npm run start
```

For static hosting (similar to the old HTML setup), add `output: "export"` to `next.config.ts` and run `npm run build` — output goes to the `out/` folder.
