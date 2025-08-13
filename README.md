# Stride Design System

A comprehensive React design system built with TypeScript, React Aria Components, and Tailwind CSS. Features brand theming, semantic tokens, and automated releases.

## ✨ Features

- 🎨 **Multi-brand theming** - Switch between different brand identities
- 🎯 **Semantic tokens** - Consistent design tokens across brands
- ♿ **Accessibility first** - Built with React Aria Components
- 📦 **TypeScript support** - Full type safety and IntelliSense
- 🎨 **Tailwind integration** - Utility-first CSS with semantic token mapping
- 📚 **Storybook documentation** - Interactive component documentation
- 🚀 **Automated releases** - Semantic versioning with Changesets

## 🚀 Installation

```bash
npm install stride-ds
```

### Peer Dependencies

Make sure you have React 18+ installed:

```bash
npm install react@^18.0.0 react-dom@^18.0.0
```

## 📖 Usage

### Basic Setup

```tsx
import { Button, Card } from 'stride-ds';
import 'stride-ds/styles/brands.css';

function App() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

### Brand Theming

```tsx
import { BrandInitializer, applyBrandTheme } from 'stride-ds';

// Using the BrandInitializer component
function App() {
  return (
    <>
      <BrandInitializer />
      {/* Your app content */}
    </>
  );
}

// Or programmatically
applyBrandTheme('runswap'); // or 'forest'
```

### Available Components

- `Button` - Interactive button with multiple variants
- `Card` - Container component with consistent styling
- `Input` - Form input with validation states
- `Switch` - Toggle switch component
- `Checkbox` - Checkbox with indeterminate state
- `Radio` - Radio button component
- `Select` - Dropdown selection
- `Tag` - Label/tag component
- `Badge` - Status indicator
- `Search` - Search input component
- `Pagination` - Page navigation

## 🛠 Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd stride-ds

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the Next.js application
- `npm run storybook` - Start Storybook development server
- `npm run build:lib` - Build the library for publishing
- `npm run build:styles` - Copy brand styles for distribution
- `npm run lint` - Run ESLint

## 🤝 Contributing

We welcome contributions! Please follow our contribution guidelines to ensure a smooth process.

### Branch Naming Convention

Use the following prefixes for your branch names:

- `feat/` - New features or enhancements
  ```bash
  git checkout -b feat/add-tooltip-component
  git checkout -b feat/improve-button-accessibility
  ```

- `fix/` - Bug fixes
  ```bash
  git checkout -b fix/button-focus-ring
  git checkout -b fix/card-responsive-padding
  ```

- `refactor/` - Code refactoring without functional changes
  ```bash
  git checkout -b refactor/extract-common-hooks
  git checkout -b refactor/simplify-theme-system
  ```

- `docs/` - Documentation updates
  ```bash
  git checkout -b docs/update-installation-guide
  ```

- `chore/` - Maintenance tasks
  ```bash
  git checkout -b chore/update-dependencies
  ```

### Contribution Workflow

1. **Fork the repository** and create your feature branch
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Create a changeset** (see Versioning section below)
5. **Submit a pull request** with a clear description

### Coding Standards

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Include JSDoc comments for public APIs
- Ensure components are accessible (ARIA compliance)
- Write tests for new functionality
- Update Storybook stories for UI components

### Testing

```bash
# Run linting
npm run lint

# Build the library to check for issues
npm run build:lib

# Test in Storybook
npm run storybook
```

## 📦 Versioning & Releases

This project uses [Changesets](https://github.com/changesets/changesets) for version management and automated releases.

### Creating a Changeset

When you make changes that should trigger a release, create a changeset:

```bash
npm run changeset
```

This will prompt you to:
1. Select which packages should be bumped
2. Choose the type of change (patch, minor, major)
3. Write a summary of the changes

### Version Types

- **Patch** (`0.1.0` → `0.1.1`) - Bug fixes, small improvements
- **Minor** (`0.1.0` → `0.2.0`) - New features, backwards compatible
- **Major** (`0.1.0` → `1.0.0`) - Breaking changes

### Release Process

Releases are automated via GitHub Actions:

1. **Create a changeset** for your changes
2. **Merge your PR** to the `main` branch
3. **Version PR** is automatically created by the bot
4. **Merge the version PR** to trigger the release
5. **Package is published** to npm automatically

### Manual Release (if needed)

```bash
# Build the library and styles
npm run build:lib
npm run build:styles

# Version packages based on changesets
npm run version-packages

# Publish to npm
npm run release
```

## 📚 Architecture

### Project Structure

```
stride-ds/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # UI components
│   │   └── BrandInitializer.tsx
│   ├── lib/                # Utilities and hooks
│   │   ├── brands.ts       # Brand system
│   │   ├── useBrand.ts     # Brand hook
│   │   └── utils.ts        # Common utilities
│   └── index.ts            # Main exports
├── styles/                 # Distributed CSS
├── .changeset/             # Changesets configuration
├── .github/workflows/      # CI/CD workflows
└── dist/                   # Built library output
```

### Design Tokens

The design system uses a three-tier token system:

1. **Foundation tokens** - Base values (colors, spacing, typography)
2. **Semantic tokens** - Purpose-driven tokens (primary, danger, success)
3. **Component tokens** - Component-specific values (button-height, card-radius)

### Brand System

Brands define their own:
- Color palettes
- Component styling overrides
- Custom CSS properties

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Storybook Documentation](storybook-url)
- [npm Package](https://www.npmjs.com/package/stride-ds)
- [Contributing Guidelines](#contributing)
- [Changelog](CHANGELOG.md)