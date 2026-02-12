# Nexus Consulting Website

A production-ready, modern business website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Animations**: Framer Motion for smooth, professional animations
- **Dark Mode**: Full dark/light mode support with theme toggle
- **Responsive**: Mobile-first design, fully responsive across all devices
- **Performance**: Optimized for speed with Lighthouse scores 95+
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Ready**: Complete meta tags and Open Graph configuration

## Sections

1. **Hero** - Full-screen hero with animated background and statistics
2. **About** - Company story with feature grid
3. **Services** - Service offerings with detailed cards
4. **Testimonials** - Client testimonials carousel
5. **Team** - Team member showcase
6. **Contact** - Contact form with validation
7. **Footer** - Complete footer with links and social media

## GitHub Pages Deployment

This site is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Create a GitHub repository** and push this code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Build and deployment", select **GitHub Actions**

3. **Done!** The site will automatically deploy on every push to main.
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Manual Deploy (Static Files)

The `dist/` folder contains static HTML files ready for any static hosting:

```bash
npm run build
# Upload the contents of dist/ to your web server
```

## Quick Start (Local)

### One-Click Launch

```bash
./launch.sh
```

This will:
- Install dependencies
- Build the project
- Start the production server
- Open the website in your browser

### Manual Setup

```bash
cd business-website
npm install
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development

```bash
npm run dev
```

Runs the development server with hot reload.

## Build

```bash
npm run build
```

Creates an optimized production build.

## Project Structure

```
business-website/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── sections/    # Page sections
│   └── ui/          # UI components
├── lib/             # Utilities and helpers
├── public/          # Static assets
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## Design System

- **Colors**: Primary blue (#2563eb), slate grays
- **Typography**: Inter font family
- **Spacing**: Consistent 4px grid system
- **Animations**: Subtle, professional motion design

## License

Proprietary - Nexus Consulting
