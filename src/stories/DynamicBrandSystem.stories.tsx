import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import {
  type DynamicBrandConfig,
} from "@/lib/brands";
import { useBrand } from "@/lib/useBrand";

const meta: Meta = {
  title: "Stride DS/🎨 Dynamic Brand System",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# 🎨 Dynamic White-Label Brand System

The white-label brand system allows injecting custom design tokens without having to define them in advance in the Design System. Perfect for white-label platforms with many clients.

## 🎯 Features

- **Optional core tokens** : Primary, neutral, status colors
- **Direct semantic tokens** : Hardcoded values (e.g. "#000000") or references (e.g. "var(--brand-primary-500)")
- **Intelligent fallback** : Uses a base brand for missing tokens
- **Persistence** : Automatic localStorage saving
- **Type-safe** : Complete TypeScript interface
- **Performance** : Native CSS variables, no re-renders

## 📋 Interface TypeScript

\`\`\`typescript
interface DynamicBrandConfig {
  id: string;
  name: string;
  description?: string;
  tokens: {
    core?: CoreBrandTokens;      // Base colors (all optional)
    semantic?: SemanticBrandTokens; // Semantic tokens (direct values)
    typography?: TypographyBrandTokens;
    layout?: LayoutBrandTokens;
    custom?: Record<string, string>; // Custom CSS variables
  };
  fallback?: {
    brand?: string;              // Fallback brand (configurable)
    useSemanticFallback?: boolean;
  };
}
\`\`\`

## 🚀 Usage

\`\`\`typescript
import { registerDynamicBrand, useBrand } from 'stride-ds';

// 1. Register a brand
registerDynamicBrand({
  id: 'client-abc',
  name: 'ABC Corporation',
  tokens: {
    core: {
      primary: { 500: '#ff6b35' }
    },
    semantic: {
      textPrimary: '#1a1a1a',           // Direct value
      textLink: 'var(--brand-primary-600)' // Reference
    },
    typography: {
      fontFamilyPrimary: '"Montserrat", sans-serif'
    },
    custom: {
      'header-height': '80px'
    }
  }
});

// 2. Apply the brand
const { setBrand } = useBrand();
setBrand('client-abc');
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ===============================================
// 🎨 COMPOSANTS POUR LA DÉMONSTRATION
// ===============================================

const ComponentShowcase = () => (
  <div className="space-y-6 p-6">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">
        Components Preview
      </h2>
      <p className="text-[var(--text-secondary)]">
        These components use tokens from the active brand and adapt
        automatically.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Buttons */}
      <Card className="p-4 space-y-3">
        <h3 className="font-semibold text-[var(--text-primary)]">Buttons</h3>
        <div className="space-y-2">
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
          <Button variant="ghost" size="sm">
            Ghost Button
          </Button>
        </div>
      </Card>

      {/* Alerts */}
      <Card className="p-4 space-y-3">
        <h3 className="font-semibold text-[var(--text-primary)]">Alerts</h3>
        <div className="space-y-2">
          <Alert variant="success" size="sm">
            Success!
          </Alert>
          <Alert variant="warning" size="sm">
            Warning
          </Alert>
          <Alert variant="error" size="sm">
            Error
          </Alert>
        </div>
      </Card>

      {/* Badges */}
      <Card className="p-4 space-y-3">
        <h3 className="font-semibold text-[var(--text-primary)]">Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </Card>

      {/* Form Elements */}
      <Card className="p-4 space-y-3 md:col-span-2">
        <h3 className="font-semibold text-[var(--text-primary)]">
          Form Elements
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <Input placeholder="Email address" />
          <Input placeholder="Full name" />
        </div>
      </Card>

      {/* Colors Preview */}
      <Card className="p-4 space-y-3">
        <h3 className="font-semibold text-[var(--text-primary)]">Colors</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-8 rounded bg-[var(--interactive-primary)] flex items-center justify-center text-xs text-white">
            Primary
          </div>
          <div className="h-8 rounded bg-[var(--status-success)] flex items-center justify-center text-xs text-white">
            Success
          </div>
          <div className="h-8 rounded bg-[var(--status-warning)] flex items-center justify-center text-xs text-white">
            Warning
          </div>
          <div className="h-8 rounded bg-[var(--status-danger)] flex items-center justify-center text-xs text-white">
            Error
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const BrandManager = () => {
  const {
    currentBrand,
    currentBrandType,
    setBrand,
    availableBrands,
    dynamicBrands,
    registerDynamicBrand: registerBrand,
    unregisterDynamicBrand: unregisterBrand,
    clearAllDynamicBrands: clearAll,
  } = useBrand();

  // Sync with current brand
  useEffect(() => {
    // Local state is automatically synced via useBrand
  }, [currentBrand]);

  // Predefined dynamic brand examples
  const exampleBrands: DynamicBrandConfig[] = [
    {
      id: "simple-client",
      name: "🟠 Simple Client",
      description: "Orange primary color only",
      tokens: {
        core: {
          primary: { 500: "#ff6b35" },
        },
      },
    },
    {
      id: "purple-corp",
      name: "🟣 Purple Corp",
      description: "Purple brand with custom typography",
      tokens: {
        core: {
          primary: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7c3aed",
            800: "#6b21a8",
            900: "#581c87",
          },
        },
        typography: {
          fontFamilyPrimary: '"Poppins", sans-serif',
        },
        semantic: {
          textLink: "#9333ea",
          borderFocus: "#a855f7",
        },
      },
    },
    {
      id: "semantic-only",
      name: "🎨 Semantic Only",
      description: "Semantic tokens only",
      tokens: {
        semantic: {
          textPrimary: "#1f2937",
          textSecondary: "#6b7280",
          textLink: "#059669",
          textLinkHover: "#047857",
          bgPrimary: "#ffffff",
          bgSecondary: "#f9fafb",
          interactivePrimary: "#059669",
          interactivePrimaryHover: "#047857",
          borderPrimary: "#e5e7eb",
          borderFocus: "#059669",
        },
        typography: {
          fontFamilyPrimary: '"Inter", sans-serif',
        },
      },
    },
    {
      id: "medical-platform",
      name: "🏥 Medical Platform",
      description: "Colors adapted for medical use",
      tokens: {
        core: {
          primary: { 500: "#0ea5e9" },
          success: { 500: "#059669", 600: "#047857" },
          warning: { 500: "#d97706", 600: "#b45309" },
          danger: { 500: "#dc2626", 600: "#b91c1c" },
        },
        semantic: {
          statusSuccess: "#059669",
          statusSuccessBg: "#ecfdf5",
          statusWarning: "#d97706",
          statusWarningBg: "#fffbeb",
          statusDanger: "#dc2626",
          statusDangerBg: "#fef2f2",
        },
      },
    },
  ];

  const handleLoadExampleBrand = (brandConfig: DynamicBrandConfig) => {
    registerBrand(brandConfig);
    setBrand(brandConfig.id);
  };

  const handleSwitchBrand = (brandId: string) => {
    setBrand(brandId);
  };

  const handleRemoveDynamicBrand = (brandId: string) => {
    unregisterBrand(brandId);
    if (brandId === currentBrand) {
      setBrand("stride");
    }
  };

  const allBrands = [...availableBrands, ...dynamicBrands];

  return (
    <div className="space-y-6 p-6 bg-[var(--bg-secondary)] min-h-screen">
      {/* Header */}
      <div className="bg-[var(--bg-primary)] rounded-lg p-6 border border-[var(--border-primary)]">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
          🎨 Dynamic Brand Manager
        </h1>
        <p className="text-[var(--text-secondary)]">
          Test the white-label brand system in real-time. Current brand:{" "}
          <strong>{currentBrand}</strong> ({currentBrandType})
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Control Panel */}
        <div className="lg:col-span-1 space-y-4">
          {/* Available brands */}
          <Card className="p-4">
            <h3 className="font-semibold text-[var(--text-primary)] mb-3">
              Available Brands
            </h3>
            <div className="space-y-2">
              {allBrands.map((brand) => {
                const isDynamic = dynamicBrands.some(
                  (db) => db.id === brand.id
                );
                return (
                  <div
                    key={brand.id}
                    className="flex items-center justify-between"
                  >
                    <button
                      onClick={() => handleSwitchBrand(brand.id)}
                      className={`flex-1 text-left px-3 py-2 rounded text-sm transition-colors ${
                        brand.id === currentBrand
                          ? "bg-[var(--interactive-primary)] text-white"
                          : "bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)]"
                      }`}
                    >
                      {isDynamic ? "🔄" : "📦"} {brand.name}
                    </button>
                    {isDynamic && (
                      <button
                        onClick={() => handleRemoveDynamicBrand(brand.id)}
                        className="ml-2 px-2 py-1 text-xs bg-red-100 hover:bg-red-200 text-red-700 rounded"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Brand examples */}
          <Card className="p-4">
            <h3 className="font-semibold text-[var(--text-primary)] mb-3">
              Brand Examples
            </h3>
            <div className="space-y-2">
              {exampleBrands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => handleLoadExampleBrand(brand)}
                  className="w-full text-left px-3 py-2 rounded text-sm bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] transition-colors"
                >
                  <div className="font-medium">{brand.name}</div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {brand.description}
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Actions */}
          <Card className="p-4">
            <h3 className="font-semibold text-[var(--text-primary)] mb-3">
              Actions
            </h3>
            <div className="space-y-2">
              <Button
                onClick={clearAll}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                🗑️ Clear dynamic brands
              </Button>
              <Button
                onClick={() => setBrand("stride")}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                🏠 Back to Stride (default)
              </Button>
            </div>
          </Card>
        </div>

        {/* Components showcase */}
        <div className="lg:col-span-2">
          <Card>
            <ComponentShowcase />
          </Card>
        </div>
      </div>
    </div>
  );
};

// ===============================================
// 📖 STORIES
// ===============================================

export const Overview: Story = {
  name: "🏠 Overview",
  render: () => <BrandManager />,
  parameters: {
    docs: {
      description: {
        story: `
## Interactive Overview

This demo story allows you to:

1. **Test predefined brands** - Click on examples to load them
2. **Switch between brands** - See components adapt in real-time
3. **Manage dynamic brands** - Add/remove brands on the fly

### 🎮 Instructions

1. Click on **brand examples** to load them
2. Use **available brands** to switch
3. Observe how all components adapt automatically
4. Test **cleanup** and **default return**

The active brand is displayed in the header with its type (static/dynamic).
        `,
      },
    },
  },
};

export const SimpleExample: Story = {
  name: "🟠 Simple Example",
  render: () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { registerDynamicBrand: registerBrand, setBrand } = useBrand();

    const loadSimpleBrand = () => {
      registerBrand({
        id: "demo-simple",
        name: "Demo Simple",
        description: "Just an orange primary color",
        tokens: {
          core: {
            primary: { 500: "#ff6b35" },
          },
        },
      });
      setBrand("demo-simple");
      setIsLoaded(true);
    };

    const resetBrand = () => {
      setBrand("stride");
      setIsLoaded(false);
    };

    return (
      <div className="p-6 space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Simple Brand Example
          </h2>
          <p className="text-[var(--text-secondary)]">
            Demonstration of a brand with only a custom primary color
          </p>

          <div className="space-x-4">
            <Button onClick={loadSimpleBrand} isDisabled={isLoaded}>
              🎨 Load Orange Brand
            </Button>
            <Button
              onClick={resetBrand}
              variant="secondary"
              isDisabled={!isLoaded}
            >
              🔄 Reset to Stride
            </Button>
          </div>
        </div>

        <ComponentShowcase />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Simple Example: Primary Color Only

This example shows how to create a brand with **only a primary color**:

\`\`\`typescript
registerDynamicBrand({
  id: 'demo-simple',
  name: 'Demo Simple',
  tokens: {
    core: {
      primary: { 500: '#ff6b35' } // Only the main color
    }
  }
  // All other tokens use the fallback brand 'stride'
});
\`\`\`

### ✨ Benefits

- **Minimal**: Just what's necessary
- **Automatic fallback**: Missing tokens use Stride
- **Performance**: Only one overridden CSS variable
        `,
      },
    },
  },
};

export const SemanticExample: Story = {
  name: "🎨 Semantic Tokens",
  render: () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { registerDynamicBrand: registerBrand, setBrand } = useBrand();

    const loadSemanticBrand = () => {
      registerBrand({
        id: "demo-semantic",
        name: "Demo Semantic",
        description: "Semantic tokens with direct values",
        tokens: {
          semantic: {
            textPrimary: "#1f2937",
            textSecondary: "#6b7280",
            textLink: "#059669", // Direct value
            textLinkHover: "#047857",
            bgPrimary: "#ffffff",
            bgSecondary: "#f9fafb",
            interactivePrimary: "#059669",
            interactivePrimaryHover: "#047857",
            borderPrimary: "#e5e7eb",
            borderFocus: "#059669",
          },
          typography: {
            fontFamilyPrimary: '"Inter", sans-serif',
          },
        },
      });
      setBrand("demo-semantic");
      setIsLoaded(true);
    };

    const resetBrand = () => {
      setBrand("stride");
      setIsLoaded(false);
    };

    return (
      <div className="p-6 space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Semantic Tokens Example
          </h2>
          <p className="text-[var(--text-secondary)]">
            Demonstration with semantic tokens as direct values
          </p>

          <div className="space-x-4">
            <Button onClick={loadSemanticBrand} isDisabled={isLoaded}>
              🎨 Load Semantic Brand
            </Button>
            <Button
              onClick={resetBrand}
              variant="secondary"
              isDisabled={!isLoaded}
            >
              🔄 Reset to Stride
            </Button>
          </div>
        </div>

        <ComponentShowcase />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Semantic Tokens with Direct Values

This approach allows defining semantic tokens directly **without going through core colors**:

\`\`\`typescript
registerDynamicBrand({
  tokens: {
    semantic: {
      textPrimary: '#1f2937',              // Direct value
      textLink: '#059669',                 // Direct value
      textLinkHover: '#047857',            // Direct value
      interactivePrimary: '#059669',       // Direct value
      borderFocus: '#059669'               // Direct value
    },
    typography: {
      fontFamilyPrimary: '"Inter", sans-serif'
    }
  }
});
\`\`\`

### 🎯 Use Cases

- **Rapid prototyping**: No need to define a complete palette
- **Temporary brands**: For tests or MVPs
- **Precise overrides**: Change only specific tokens
        `,
      },
    },
  },
};

export const CodeExamples: Story = {
  name: "💻 Code Examples",
  render: () => (
    <div className="p-6 space-y-6 max-w-4xl">
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">
        Complete Code Examples
      </h2>

      <div className="space-y-8">
        {/* Initial configuration */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
            1. Initial Configuration
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            {`// At startup of your white-label platform
import { configureDynamicBrandSystem } from 'stride-ds';

configureDynamicBrandSystem({
  defaultFallbackBrand: 'stride',    // Default brand
  enableLocalStorage: true,          // Persistence
  enableTransitions: true,           // Smooth transitions
  transitionDuration: 150,           // Duration in ms
});`}
          </pre>
        </Card>

        {/* Simple brand */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
            2. Simple Brand (Primary Color)
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            {`import { registerDynamicBrand, useBrand } from 'stride-ds';

// Register the brand
registerDynamicBrand({
  id: 'client-abc',
  name: 'ABC Corporation',
  tokens: {
    core: {
      primary: { 500: '#ff6b35' }
    }
  }
});

// Use in a component
const MyComponent = () => {
  const { setBrand } = useBrand();
  
  return (
    <Button onClick={() => setBrand('client-abc')}>
      Switch to ABC Corp
    </Button>
  );
};`}
          </pre>
        </Card>

        {/* Complete brand */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
            3. Complete Brand
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            {`registerDynamicBrand({
  id: 'premium-client',
  name: 'Premium Client',
  tokens: {
    core: {
      primary: {
        50: '#fef7f0',
        500: '#ef6c35',  // Main color
        600: '#e0532a',
        700: '#ba3e23'
      }
    },
    semantic: {
      textPrimary: '#1a1a1a',               // Direct value
      textLink: 'var(--brand-primary-600)', // Reference
      borderFocus: '#ef6c35'
    },
    typography: {
      fontFamilyPrimary: '"Montserrat", sans-serif'
    },
    custom: {
      'header-height': '80px',
      'brand-gradient': 'linear-gradient(45deg, #ef6c35, #f7931e)'
    }
  },
  fallback: {
    brand: 'stride',
    useSemanticFallback: true
  }
});`}
          </pre>
        </Card>

        {/* API Integration */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
            4. API Integration
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
            {`const ClientBrandProvider = ({ clientId, children }) => {
  const { registerDynamicBrand, setBrand } = useBrand();
  
  useEffect(() => {
    const loadClientBrand = async () => {
      try {
        // Fetch from your API
        const response = await fetch(\`/api/clients/\${clientId}/brand\`);
        const brandData = await response.json();
        
        // Create the dynamic brand
        registerDynamicBrand({
          id: clientId,
          name: brandData.name,
          tokens: {
            core: brandData.colors,
            semantic: brandData.semanticTokens,
            typography: brandData.typography
          }
        });
        
        // Apply immediately
        setBrand(clientId);
        
      } catch (error) {
        console.error('Brand loading error:', error);
        setBrand('stride'); // Fallback
      }
    };
    
    loadClientBrand();
  }, [clientId]);
  
  return <>{children}</>;
};`}
          </pre>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Practical Code Examples

This section presents concrete implementation examples of the white-label brand system in different contexts.

### 📚 Additional Resources

- **Complete TypeScript interface** in \`src/lib/brands.ts\`
- **React Hook** in \`src/lib/useBrand.ts\`
- **Advanced examples** in \`src/lib/dynamic-brand-examples.ts\`
        `,
      },
    },
  },
};
