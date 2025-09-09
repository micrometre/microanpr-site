# MicroANPR Website

A modern website for MicroANPR built with [Astro](https://astro.build) and React components.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Solutions.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── ContactForm.jsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       └── contact.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:


| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`|
| `npm run astro -- --help` | Get help using the Astro CLI                    |

## 🏗️ Features

- **Astro** for static site generation and optimal performance
- **React** components for interactive elements (Header navigation, Contact form)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **TypeScript** support

## 📱 Responsive Design

The website is fully responsive and optimized for all device sizes.

## 🔧 Tech Stack

- **Framework**: Astro 4.x
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 🌟 Performance

Astro generates static HTML with minimal JavaScript, ensuring excellent performance and SEO optimization. React components are only hydrated when needed using Astro's client directives.

## 📄 Pages

- **Home** (`/`) - Main landing page with hero, features, solutions, testimonials, and CTA
- **About** (`/about`) - Company information, team, and history
- **Contact** (`/contact`) - Contact form and company information

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built site will be in the `./dist/` directory, ready to be deployed to any static hosting service.
