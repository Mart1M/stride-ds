# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application with TypeScript and Tailwind CSS v4, bootstrapped with `create-next-app`. The project uses the App Router and is designed for modern React development.

## Development Commands

### Core Development Scripts
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build the application for production
npm start           # Start production server
npm run lint        # Run ESLint checks
```

### Development Server
- The development server runs on http://localhost:3000
- Uses Turbopack for faster builds and hot reloading
- Auto-updates on file changes

## Architecture and Structure

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/layout.tsx` - Root layout with font configuration
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global styles with Tailwind CSS v4
- `public/` - Static assets (SVG icons)

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with inline theme configuration
- **Fonts**: Geist and Geist Mono from Google Fonts
- **Linting**: ESLint with Next.js core-web-vitals and TypeScript rules

### Key Configuration Files
- `next.config.ts` - Next.js configuration (minimal setup)
- `tsconfig.json` - TypeScript configuration with path aliases (`@/*` → `./src/*`)
- `eslint.config.mjs` - ESLint flat config with Next.js rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind

### Styling Approach
- Uses Tailwind CSS v4 with `@theme inline` configuration
- CSS custom properties for theming (light/dark mode support)
- Geist font family variables configured in root layout
- Responsive design with mobile-first approach

### Path Aliases
- `@/` maps to `./src/` for cleaner imports
- Use `@/` prefix for all internal module imports

## React Aria & SSR

### SSR Setup
- **SSRProvider**: Wrapped in root layout for consistent ID generation
- **Hydration**: Prevents client-server mismatch issues
- **Storybook**: Also wrapped with SSRProvider for consistency

### Best Practices
- All React Aria components are SSR-compatible
- Use `useIsSSR()` hook for conditional client-side rendering
- SSR utilities available in `@/lib/ssr-utils`

### Component Guidelines
- Prefer React Aria components over native HTML elements
- Always use semantic tokens for consistent theming
- Test components in both SSR and client-side modes