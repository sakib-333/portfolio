# Portfolio

A personal portfolio website built with **Vite + React + TypeScript**, styled with **Tailwind CSS** and **shadcn/ui**, and animated using the `motion` package. This repository contains the source for a fast, accessible, and easily-customizable portfolio.

---

## Features

- Fast development with Vite
- React + TypeScript
- Tailwind CSS for utility-first styling
- shadcn/ui components for polished UI primitives
- Motion-based animations for smooth transitions
- Icon set via `lucide-react`
- Utility helpers: `clsx`, `class-variance-authority`, and `tailwind-merge`

---

## Tech Stack

- **Framework:** React (with TypeScript)
- **Bundler / Dev Server:** Vite
- **Styling:** Tailwind CSS
- **UI primitives:** shadcn/ui
- **Animation:** `motion` package
- **Icons:** lucide-react
- **Misc:** clsx, class-variance-authority, tailwind-merge, @radix-ui/react-slot

---

## Getting started (local)

### Prerequisites

- Node.js (recommended **>= 18**)
- npm, yarn, or pnpm

### Clone

```bash
# using npm
git clone git@github.com:sakib-333/portfolio.git
cd portfolio
```

### Install

```bash
# using npm
npm install
```

### Development

Start the Vite dev server:

```bash
npm run dev
```

Open http://localhost:5173 (or the port shown in your terminal).

---

## Animation

- Animations are implemented with the `motion` package. Keep animations subtle and accessible — prefer `prefers-reduced-motion` media queries to respect users who reduce motion.

---

## Demo

[Visit portfolio](https://sakib-333.vercel.app/)
![Alt text describing the image](/public/webview.png)

