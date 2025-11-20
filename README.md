# QuantumGrid OS Landing Page

A modern, production-ready landing page for QuantumGrid OS - an open-source integration layer bridging quantum computing algorithms with power grid and energy optimization systems.

## Features

- **Next.js 14+** with App Router
- **Tailwind CSS** for styling
- **Google Fonts (Sen)** typography
- **Dark mode** design with orange accent color (#ea580b)
- **Fixed orange border frame** inspired by newtrace.io
- **Responsive design** (mobile, tablet, desktop)
- **Interactive components** with smooth animations
- **Modal forms** for beta access requests
- **SEO optimized** with proper metadata

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with Sen font
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles and animations
├── components/
│   ├── layout/
│   │   ├── BorderFrame.js # Fixed orange border
│   │   ├── Header.js      # Navigation header
│   │   └── Footer.js      # Footer with links
│   ├── sections/
│   │   ├── Hero.js        # Hero section with 3D visual
│   │   ├── Problem.js     # Problem statement
│   │   ├── Solution.js    # Solution overview
│   │   ├── UseCases.js    # Use case cards
│   │   ├── Credibility.js # Timeline and stats
│   │   ├── HowItWorks.js  # Step-by-step guide
│   │   ├── Tech.js        # Technology stack
│   │   ├── POC.js         # Proof of concept
│   │   ├── Install.js     # Installation guide
│   │   ├── FAQ.js         # FAQ accordion
│   │   └── Team.js        # Team section
│   └── ui/
│       ├── Button.js      # Reusable button component
│       ├── Card.js        # Reusable card component
│       ├── Code.js        # Code snippet component
│       ├── Modal.js       # Modal wrapper
│       └── BetaAccessModal.js # Beta access form
public/
└── grid.svg               # Background grid pattern
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Design System

### Colors

- Primary: #ea580b (orange-600)
- Dark backgrounds: #0a0a0a, #111111, #1a1a1a
- Text: #ffffff (headings), #a3a3a3 (body), #737373 (muted)
- Success: #22c55e (green-500)
- Borders: #262626, #333333

### Typography

- Font family: Sen (Google Fonts)
- Weights: 400, 600, 700, 800

### Border Frame

- Desktop: 4px solid #ea580b
- Tablet: 3px solid #ea580b
- Mobile: 2px solid #ea580b

## Key Components

### Hero Section

Features an abstract 3D visualization representing the quantum-grid connection with animated particles and grid overlay.

### Beta Access Modal

Collects user information including:
- Full name
- Work email
- Company
- Job title
- Current challenge
- Quantum backend preference
- Timeline

### Interactive Elements

- Smooth scroll navigation
- Hover animations on cards
- Expandable FAQ items
- Tab interface for installation methods
- Copy-to-clipboard for code snippets

## Deployment

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

Deploy to Vercel, Netlify, or any Node.js hosting platform.

## License

Apache 2.0 License
