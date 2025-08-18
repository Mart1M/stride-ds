# stride-ds

## 1.1.0

### Minor Changes

- Add new UI components: Slider and Choicebox

  - **Slider**: New range input component with customizable min/max values, step control, and multiple styling variants
  - **Choicebox**: New multi-select component that combines checkbox functionality with enhanced styling and accessibility features

  These components expand the design system with additional form controls and interactive elements.

## 1.0.0

### Major Changes

- 2675050: # 🎉 Initial Release - Stride Design System v1.0.0

  This is the initial release of the Stride Design System, a comprehensive multi-brand design system built with React, TypeScript, and Tailwind CSS v4.

  ## ✨ What's Included

  ### 📦 Components (11 total)

  - **Button** - Primary, secondary, ghost, and destructive variants
  - **Card** - Flexible cards with headers, footers, and multiple variants
  - **Input** - Text inputs with icons, validation states, and sizes
  - **Checkbox** - Accessible checkboxes with indeterminate state
  - **Radio** - Grouped radio buttons with custom styling
  - **Switch** - Toggle switches with smooth animations
  - **Select** - Dropdown selectors with search functionality
  - **Search** - Advanced search component with filtering
  - **Tag** - Interactive tags with removal actions
  - **Badge** - Informational badges with variants
  - **Pagination** - Complete pagination with customizable options

  ### 🎨 Multi-Brand Support

  - **Stride** (default) - Modern blue theme
  - **Coral** - Warm orange with tinted neutrals
  - **Forest** - Nature green with expanded spacing
  - **Runswap** - Energetic pink with custom typography

  ### 🛠️ Developer Experience

  - **TypeScript** - Full type safety with auto-generated types
  - **React Aria** - Built-in accessibility support
  - **Storybook** - Interactive component documentation
  - **Tailwind CSS v4** - Latest CSS framework with custom tokens
  - **Tree-shaking** - Optimized bundle sizes
  - **ESM + CJS** - Universal module support

  ### 🚀 Automated Release Pipeline

  - **Changesets** - Automated versioning and changelogs
  - **GitHub Actions** - CI/CD pipeline for automatic publishing
  - **npm Publishing** - Automatic releases with provenance

  ## 🔥 Key Features

  - **Design Tokens** - Comprehensive token system for consistent theming
  - **Dark/Light Mode** - Automatic theme switching per brand
  - **Accessibility** - WCAG compliant with React Aria Components
  - **Performance** - Optimized builds with minimal bundle impact
  - **Documentation** - Complete Storybook docs with examples
  - **TypeScript** - Full type definitions for excellent DX

  ## 💡 Usage

  ```bash
  npm install stride-ds
  ```

  ```tsx
  import { Button, Card, Input } from "stride-ds";
  import "stride-ds/styles";

  function App() {
    return (
      <Card>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </Card>
    );
  }
  ```

  This release establishes the foundation for a scalable, maintainable design system that can grow with your product needs.
