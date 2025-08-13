# Stride Design System

A modern multi-brand design system built with React, TypeScript, Tailwind CSS v4, and React Aria Components.

## 🚀 Quick Start

### Installation
```bash
npm install stride-ds
```

### Basic Usage
```tsx
import { Button, Card, Input } from 'stride-ds';
import 'stride-ds/styles';

function App() {
  return (
    <Card>
      <Input placeholder="Your name" />
      <Button>Submit</Button>
    </Card>
  );
}
```

## 🎨 Multi-brand Support

The design system supports multiple brands with their own visual identities:

- **Stride** (default) - Modern and professional blue
- **Coral** - Warm orange with tinted neutrals
- **Forest** - Nature green with expanded spacing
- **Runswap** - Energetic pink with custom typography

```tsx
import { BrandInitializer, applyBrandTheme } from 'stride-ds';

// Apply theme
applyBrandTheme('coral'); // or 'forest', 'runswap'

// Or with component
<BrandInitializer brand="forest" />
```

## 📦 Available Components

- **Button** - Buttons with variants (primary, secondary, ghost, destructive)
- **Card** - Cards with headers, footers and variants
- **Input** - Input fields with icons and states
- **Checkbox** - Accessible checkboxes
- **Radio** - Grouped radio buttons
- **Switch** - On/off toggles
- **Select** - Selectors with search
- **Search** - Advanced search field
- **Tag** - Tags with removal actions
- **Badge** - Informational badges
- **Pagination** - Page navigation

## 🛠️ Development & Contributing

### Project Setup
```bash
git clone [repo-url]
cd stride-ds
npm install
```

### Available Scripts
```bash
# Development
npm run dev              # Next.js development app
npm run storybook        # Launch Storybook

# Build
npm run build           # Build Next.js
npm run build:lib       # Build library (Vite)
npm run build:types     # Generate TypeScript types
npm run build:styles    # Build CSS styles
npm run prepublishOnly  # Complete build for publishing

# Release
npm run changeset       # Create a changeset
npm run version         # Bump version
npm run release         # Publish to npm
```

### Project Structure
```
src/
├── components/
│   ├── ui/              # UI Components
│   │   ├── Button/
│   │   ├── Card/
│   │   └── ...
│   ├── BrandInitializer.tsx
│   └── ClientProviders.tsx
├── lib/
│   ├── brands.ts        # Brand management logic
│   ├── useBrand.ts      # React hook for brands
│   └── utils.ts         # Utilities
├── app/
│   ├── brands.css       # 🎨 Brand CSS variables
│   └── globals.css      # Dev app styles
├── styles.css           # 🏗️ Main file (Tailwind + tokens)
└── index.ts             # Library entry point
```

## 🎨 Contributing - Design Tokens

### 1. Brand Tokens (colors, typography specific)
**📁 File:** `src/app/brands.css`

```css
.brand-stride {
  /* New colors */
  --brand-accent-500: #your-color;
  --brand-accent-600: #your-color-dark;
  
  /* Custom typography */
  --font-family-display: 'Your Font', sans-serif;
  
  /* Semantic mapping */
  --text-accent: var(--brand-accent-500);
}
```

### 2. Foundation Tokens (spacing, radius, shadows)
**📁 File:** `src/styles.css` → `:root` section

```css
:root {
  /* Spacing */
  --spacing-xxl: 8rem;
  
  /* Border radius */
  --radius-4xl: 2rem;
  
  /* Shadows */
  --shadow-brand: 0 4px 20px rgba(0,0,0,0.1);
}
```

### 3. Component Tokens
**📁 File:** `src/styles.css` → "COMPONENT TOKENS" section

```css
:root {
  /* Modal */
  --modal-width: 500px;
  --modal-padding: 2rem;
  
  /* Toast */
  --toast-height: 4rem;
}
```

## 🧩 Contributing - New Components

### 1. File Structure
```
src/components/ui/MyComponent/
├── index.ts                 # Export
├── MyComponent.tsx          # Main component
└── MyComponent.stories.tsx  # Storybook documentation
```

### 2. Component Template
```tsx
"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const myComponentVariants = cva(
  ["base-classes"],
  {
    variants: {
      variant: {
        default: "variant-classes",
        secondary: "other-classes",
      },
      size: {
        sm: "small-classes",
        md: "medium-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof myComponentVariants> {
  children?: React.ReactNode;
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        className={cn(myComponentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MyComponent.displayName = "MyComponent";
```

### 3. Export in Main Index
```tsx
// src/index.ts
export * from './components/ui/MyComponent';
```

## 🌙 Dark/Light Themes

The system automatically handles themes per brand:

```tsx
// Manual control
document.documentElement.classList.add('dark');
document.documentElement.classList.remove('dark');

// System detection
@media (prefers-color-scheme: dark) {
  /* Automatic styles */
}
```

## 🔄 Contributing Workflow

### Complete Contribution Process

#### 1. Setup and Branch Creation
```bash
# Clone the repository (first time only)
git clone [repo-url]
cd stride-ds
npm install

# Always start from main and pull latest changes
git checkout main
git pull origin main

# Create a new feature branch
git checkout -b feature/my-new-component
# or
git checkout -b fix/button-styles
# or 
git checkout -b docs/update-readme
```

#### 2. Development
```bash
# Start development environment
npm run dev              # For testing in Next.js app
npm run storybook        # For component documentation

# Make your changes...
# - Add/modify components in src/components/ui/
# - Add/modify tokens in src/app/brands.css or src/styles.css
# - Update stories in *.stories.tsx files
# - Add tests if applicable
```

#### 3. Testing Your Changes
```bash
# Build and test the library
npm run build:lib        # Test library build
npm run build:types      # Test TypeScript compilation
npm run build:styles     # Test style compilation
npm run build-storybook  # Test Storybook build

# Check for linting issues
npm run lint

# Test in Storybook
npm run storybook
# → Verify your component looks and behaves correctly
```

#### 4. Documentation
```bash
# Update relevant documentation
# - Component stories (*.stories.tsx)
# - README.md if adding new features
# - Type definitions are auto-generated
```

#### 5. Changeset Creation
```bash
# Create a changeset to describe your changes
npm run changeset

# Select change type:
# - patch: Bug fixes, small improvements (0.0.1)
# - minor: New features, new components (0.1.0) 
# - major: Breaking changes (1.0.0)

# Write a clear description:
# ✅ Good: "Add new Toast component with success/error variants"
# ✅ Good: "Fix Button focus styles in dark mode"
# ❌ Bad: "Update stuff"
```

#### 6. Commit and Push
```bash
# Stage your changes
git add .

# Commit with conventional commit format
git commit -m "feat: add Toast component with variants"
# or
git commit -m "fix: button focus styles in dark mode"
# or
git commit -m "docs: update contributing guidelines"

# Commit message format:
# feat: new features
# fix: bug fixes
# docs: documentation changes
# style: formatting, missing semicolons, etc.
# refactor: code refactoring
# test: adding missing tests
# chore: maintain

# Push to your branch
git push origin feature/my-new-component
```

#### 7. Pull Request
```bash
# After pushing, create a PR on GitHub:
# 1. Go to the repository on GitHub
# 2. Click "Compare & pull request"
# 3. Fill out the PR template:
#    - Clear title and description
#    - Link to any related issues
#    - Screenshots for UI changes
#    - Testing notes
```

#### 8. PR Review Process
```bash
# Address review feedback:
git add .
git commit -m "fix: address review feedback"
git push origin feature/my-new-component

# Once approved and merged to main:
# - GitHub Actions will detect the changeset
# - A "Version Packages" PR will be created automatically
# - When that PR is merged → automatic npm publication
```

### Branch Naming Conventions
- `feature/component-name` - New components or major features
- `fix/issue-description` - Bug fixes
- `docs/what-changed` - Documentation updates
- `refactor/area-changed` - Code refactoring
- `style/component-name` - Style-only changes

### Commit Message Guidelines
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: type(scope): description

feat(button): add loading state with spinner
fix(card): resolve border radius in safari
docs(readme): update installation instructions
style(input): improve focus ring visibility
refactor(utils): simplify classname helper
test(button): add accessibility tests
chore(deps): update tailwind to latest
```

## 📝 Release & Versioning

The project uses **Changesets** for automatic version management:

### Automated Release Process
1. **Developer creates changeset** during contribution (step 5 above)
2. **PR is merged** to main
3. **GitHub Actions detects changesets** and creates "Version Packages" PR
4. **Maintainer reviews and merges** the version PR
5. **Automatic publication** to npm with release notes

### Change Types
- **patch** (0.0.1): Bug fixes, small improvements
- **minor** (0.1.0): New features, new components
- **major** (1.0.0): Breaking changes

## 🔧 Configuration

### GitHub Environment Variables
- `NPM_TOKEN`: npm token for automatic publishing
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

### Tools Used
- **React 19** + **TypeScript**
- **Tailwind CSS v4** with custom CSS tokens
- **React Aria Components** for accessibility
- **Storybook** for documentation
- **Vite** for library build
- **Changesets** for versioning
- **GitHub Actions** for CI/CD

## 📖 Documentation

- **Storybook**: `npm run storybook` - Interactive component documentation
- **TypeScript Types**: Autocompletion and inline documentation
- **Design Tokens**: CSS variables documented in source files

---

**Maintained by the Design System Team** ⚡