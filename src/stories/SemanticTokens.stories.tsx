import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta = {
  title: "Stride DS/Semantic Tokens",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Visual documentation of all semantic tokens in the design system",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component pour afficher un token
const TokenDisplay = ({
  name,
  cssVar,
  description,
  type = "color",
}: {
  name: string;
  cssVar: string;
  description?: string;
  type?:
    | "color"
    | "spacing"
    | "typography"
    | "shadow"
    | "radius"
    | "transition";
}) => {
  const getPreview = () => {
    switch (type) {
      case "color":
        return (
          <div
            className="w-16 h-16 rounded-lg border border-[var(--border-primary)] shadow-sm"
            style={{ backgroundColor: `var(${cssVar})` }}
          />
        );
      case "spacing":
        return (
          <div className="flex items-center space-x-2">
            <div
              className="bg-blue-500 rounded"
              style={{
                width: `var(${cssVar})`,
                height: "16px",
                minWidth: "8px",
              }}
            />
            <span className="text-xs text-gray-500">
              {getComputedStyle(document.documentElement)
                .getPropertyValue(cssVar)
                .trim()}
            </span>
          </div>
        );
      case "typography":
        return (
          <div
            className="text-gray-900"
            style={{
              fontFamily: `var(${cssVar})`,
              fontSize: type === "typography" ? "16px" : undefined,
            }}
          >
            Aa Bb Cc 123
          </div>
        );
      case "shadow":
        return (
          <div
            className="w-16 h-16 bg-white rounded-lg"
            style={{ boxShadow: `var(${cssVar})` }}
          />
        );
      case "radius":
        return (
          <div
            className="w-16 h-16 bg-gray-200"
            style={{ borderRadius: `var(${cssVar})` }}
          />
        );
      case "transition":
        return (
          <div className="text-xs text-gray-500 font-mono">
            {getComputedStyle(document.documentElement)
              .getPropertyValue(cssVar)
              .trim() || "hover to see transition"}
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-xs">
            ?
          </div>
        );
    }
  };

  return (
    <div className="p-4 border-[var(--border-primary)] rounded-lg space-y-3 hover:border-[var(--border-secondary)] transition-colors">
      <div className="flex items-center justify-center">{getPreview()}</div>
      <div className="text-center space-y-1">
        <h4 className="font-medium text-sm">{name}</h4>
        <code className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
          {cssVar}
        </code>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
    </div>
  );
};

// Helper component pour les sections
const TokenSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-6">
    <div className="border-b border-b-[var(--border-primary)] pb-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {description && <p className="text-gray-600 mt-2">{description}</p>}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {children}
    </div>
  </section>
);

export const AllSemanticTokens: Story = {
  render: () => (
    <div className="space-y-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Semantic Tokens</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Semantic tokens of the Stride design system. These tokens
          automatically adapt based on the active brand and theme (light/dark).
        </p>
      </div>

      {/* Text Tokens */}
      <TokenSection
        title="Text Colors"
        description="Semantic text colors for different hierarchy levels"
      >
        <TokenDisplay
          name="Primary Text"
          cssVar="--text-primary"
          description="Primary text, headings"
        />
        <TokenDisplay
          name="Secondary Text"
          cssVar="--text-secondary"
          description="Secondary text, subtitles"
        />
        <TokenDisplay
          name="Tertiary Text"
          cssVar="--text-tertiary"
          description="Tertiary text, descriptions"
        />
        <TokenDisplay
          name="Inverse Text"
          cssVar="--text-inverse"
          description="Text on dark backgrounds"
        />
        <TokenDisplay
          name="Disabled Text"
          cssVar="--text-disabled"
          description="Disabled text"
        />
        <TokenDisplay
          name="Link Text"
          cssVar="--text-link"
          description="Link color"
        />
        <TokenDisplay
          name="Link Hover"
          cssVar="--text-link-hover"
          description="Link hover color"
        />
      </TokenSection>

      {/* Background Tokens */}
      <TokenSection
        title="Background Colors"
        description="Background colors for different surface levels"
      >
        <TokenDisplay
          name="Primary Background"
          cssVar="--bg-primary"
          description="Primary page background"
        />
        <TokenDisplay
          name="Secondary Background"
          cssVar="--bg-secondary"
          description="Secondary background, cards"
        />
        <TokenDisplay
          name="Tertiary Background"
          cssVar="--bg-tertiary"
          description="Tertiary background, surfaces"
        />
        <TokenDisplay
          name="Inverse Background"
          cssVar="--bg-inverse"
          description="Inverse background, dark surfaces"
        />
        <TokenDisplay
          name="Disabled Background"
          cssVar="--bg-disabled"
          description="Background for disabled elements"
        />
      </TokenSection>

      {/* Border Tokens */}
      <TokenSection
        title="Border Colors"
        description="Border colors for different emphasis levels"
      >
        <TokenDisplay
          name="Primary Border"
          cssVar="--border-primary"
          description="Primary borders"
        />
        <TokenDisplay
          name="Secondary Border"
          cssVar="--border-secondary"
          description="Secondary borders"
        />
        <TokenDisplay
          name="Strong Border"
          cssVar="--border-strong"
          description="Emphasized borders"
        />
        <TokenDisplay
          name="Inverse Border"
          cssVar="--border-inverse"
          description="Borders on dark backgrounds"
        />
        <TokenDisplay
          name="Focus Border"
          cssVar="--border-focus"
          description="Focus border"
        />
      </TokenSection>

      {/* Interactive Tokens */}
      <TokenSection
        title="Interactive Colors"
        description="Colors for interactive elements (buttons, links, etc.)"
      >
        <TokenDisplay
          name="Primary Interactive"
          cssVar="--interactive-primary"
          description="Primary buttons"
        />
        <TokenDisplay
          name="Primary Hover"
          cssVar="--interactive-primary-hover"
          description="Primary buttons on hover"
        />
        <TokenDisplay
          name="Primary Active"
          cssVar="--interactive-primary-active"
          description="Active primary buttons"
        />
        <TokenDisplay
          name="Primary Disabled"
          cssVar="--interactive-primary-disabled"
          description="Disabled primary buttons"
        />
        <TokenDisplay
          name="Primary Text"
          cssVar="--interactive-primary-text"
          description="Text on primary buttons"
        />
        <TokenDisplay
          name="Secondary Interactive"
          cssVar="--interactive-secondary"
          description="Secondary buttons"
        />
        <TokenDisplay
          name="Secondary Hover"
          cssVar="--interactive-secondary-hover"
          description="Secondary buttons on hover"
        />
        <TokenDisplay
          name="Secondary Active"
          cssVar="--interactive-secondary-active"
          description="Active secondary buttons"
        />
        <TokenDisplay
          name="Secondary Disabled"
          cssVar="--interactive-secondary-disabled"
          description="Disabled secondary buttons"
        />
        <TokenDisplay
          name="Ghost Interactive"
          cssVar="--interactive-ghost"
          description="Ghost buttons"
        />
        <TokenDisplay
          name="Ghost Hover"
          cssVar="--interactive-ghost-hover"
          description="Ghost buttons on hover"
        />
        <TokenDisplay
          name="Ghost Active"
          cssVar="--interactive-ghost-active"
          description="Active ghost buttons"
        />
        <TokenDisplay
          name="Ghost Disabled"
          cssVar="--interactive-ghost-disabled"
          description="Disabled ghost buttons"
        />
      </TokenSection>

      {/* Status Tokens */}
      <TokenSection
        title="Status Colors"
        description="Colors for status states (success, error, warning)"
      >
        <TokenDisplay
          name="Success"
          cssVar="--status-success"
          description="Success state"
        />
        <TokenDisplay
          name="Success Hover"
          cssVar="--status-success-hover"
          description="Success on hover"
        />
        <TokenDisplay
          name="Success Background"
          cssVar="--status-success-bg"
          description="Success background"
        />
        <TokenDisplay
          name="Success Text"
          cssVar="--status-success-text"
          description="Success text"
        />
        <TokenDisplay
          name="Warning"
          cssVar="--status-warning"
          description="Warning state"
        />
        <TokenDisplay
          name="Warning Hover"
          cssVar="--status-warning-hover"
          description="Warning on hover"
        />
        <TokenDisplay
          name="Warning Background"
          cssVar="--status-warning-bg"
          description="Warning background"
        />
        <TokenDisplay
          name="Warning Text"
          cssVar="--status-warning-text"
          description="Warning text"
        />
        <TokenDisplay
          name="Danger"
          cssVar="--status-danger"
          description="Error/danger state"
        />
        <TokenDisplay
          name="Danger Hover"
          cssVar="--status-danger-hover"
          description="Danger on hover"
        />
        <TokenDisplay
          name="Danger Background"
          cssVar="--status-danger-bg"
          description="Danger background"
        />
        <TokenDisplay
          name="Danger Text"
          cssVar="--status-danger-text"
          description="Danger text"
        />
      </TokenSection>

      {/* Typography Tokens */}
      <TokenSection
        title="Typography"
        description="Typography tokens for different font families"
      >
        <TokenDisplay
          name="Primary Font"
          cssVar="--font-family-primary"
          description="Primary brand font"
          type="typography"
        />
        <TokenDisplay
          name="Secondary Font"
          cssVar="--font-family-secondary"
          description="Secondary brand font"
          type="typography"
        />
      </TokenSection>

      {/* Layout Tokens */}
      <TokenSection
        title="Layout & Spacing"
        description="Tokens for spacing and border radius"
      >
        <TokenDisplay
          name="Button Radius"
          cssVar="--radius-button"
          description="Button radius"
          type="radius"
        />
        <TokenDisplay
          name="Small Radius"
          cssVar="--radius-sm"
          description="Small radius"
          type="radius"
        />
        <TokenDisplay
          name="Medium Radius"
          cssVar="--radius-md"
          description="Medium radius"
          type="radius"
        />
        <TokenDisplay
          name="Large Radius"
          cssVar="--radius-lg"
          description="Large radius"
          type="radius"
        />
      </TokenSection>

      {/* Brand-specific tokens (if available) */}
      <TokenSection
        title="Brand Specific Tokens"
        description="Brand-specific tokens (Forest, Runswap)"
      >
        <TokenDisplay
          name="Spacing Scale"
          cssVar="--spacing-scale"
          description="Spacing scale (Forest/Runswap)"
          type="spacing"
        />
        <TokenDisplay
          name="XS Spacing"
          cssVar="--spacing-xs"
          description="Extra small spacing"
          type="spacing"
        />
        <TokenDisplay
          name="Small Spacing"
          cssVar="--spacing-sm"
          description="Small spacing"
          type="spacing"
        />
        <TokenDisplay
          name="Medium Spacing"
          cssVar="--spacing-md"
          description="Medium spacing"
          type="spacing"
        />
        <TokenDisplay
          name="Large Spacing"
          cssVar="--spacing-lg"
          description="Large spacing"
          type="spacing"
        />
      </TokenSection>

      {/* Brand Demonstration */}
      <section className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold">Brand Adaptation</h2>
          <p className="text-gray-600 mt-2">
            Tokens automatically adapt based on the active brand. Change brands
            in Storybook to see the differences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Color Palette Demo */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Active color palette</h3>
            <div className="grid grid-cols-4 gap-2">
              {[
                "var(--interactive-primary)",
                "var(--status-success)",
                "var(--status-warning)",
                "var(--status-danger)",
                "var(--text-primary)",
                "var(--text-secondary)",
                "var(--bg-secondary)",
                "var(--border-primary)",
              ].map((color, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg border border-[var(--border-primary)]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Typography Demo */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Active typography</h3>
            <div className="space-y-2">
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-family-primary)" }}
              >
                Primary Font - Heading
              </div>
              <div
                className="text-base"
                style={{ fontFamily: "var(--font-family-secondary)" }}
              >
                Secondary Font - Body text and descriptions
              </div>
              <div className="text-sm text-gray-500">
                Typography changes based on the selected brand (Outfit, Poppins,
                Roboto, Montserrat)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold">Usage Examples</h2>
          <p className="text-gray-600 mt-2">
            How to use these tokens in your components
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">CSS/Tailwind</h3>
            <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`/* Usage in Tailwind */
className="[color:var(--text-primary)]"
className="[background:var(--bg-secondary)]"
className="[border-color:var(--border-primary)]"

/* Usage in CSS */
.my-component {
  color: var(--text-primary);
  background: var(--bg-secondary);
  border-color: var(--border-primary);
}`}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">React Style Object</h3>
            <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`// Usage in React
const style = {
  color: 'var(--text-primary)',
  backgroundColor: 'var(--bg-secondary)',
  borderColor: 'var(--border-primary)',
  fontFamily: 'var(--font-family-primary)'
};

<div style={style}>Content</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-t-[var(--border-primary)]">
        <p className="text-gray-500">
          🎨 Semantic Tokens - Multi-brand adaptive Design System
        </p>
        <p className="text-sm text-gray-400 mt-2">
          These tokens automatically change based on the selected brand and
          theme
        </p>
      </footer>
    </div>
  ),
};

export const ColorTokensOnly: Story = {
  render: () => (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Color Tokens</h1>
        <p className="text-gray-600">All semantic color tokens</p>
      </div>

      {/* All color tokens in one grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Text Colors */}
        <TokenDisplay name="Text Primary" cssVar="--text-primary" />
        <TokenDisplay name="Text Secondary" cssVar="--text-secondary" />
        <TokenDisplay name="Text Tertiary" cssVar="--text-tertiary" />
        <TokenDisplay name="Text Inverse" cssVar="--text-inverse" />
        <TokenDisplay name="Text Disabled" cssVar="--text-disabled" />
        <TokenDisplay name="Text Link" cssVar="--text-link" />

        {/* Background Colors */}
        <TokenDisplay name="BG Primary" cssVar="--bg-primary" />
        <TokenDisplay name="BG Secondary" cssVar="--bg-secondary" />
        <TokenDisplay name="BG Tertiary" cssVar="--bg-tertiary" />
        <TokenDisplay name="BG Inverse" cssVar="--bg-inverse" />
        <TokenDisplay name="BG Disabled" cssVar="--bg-disabled" />

        {/* Border Colors */}
        <TokenDisplay name="Border Primary" cssVar="--border-primary" />
        <TokenDisplay name="Border Secondary" cssVar="--border-secondary" />
        <TokenDisplay name="Border Strong" cssVar="--border-strong" />
        <TokenDisplay name="Border Focus" cssVar="--border-focus" />

        {/* Interactive Colors */}
        <TokenDisplay
          name="Interactive Primary"
          cssVar="--interactive-primary"
        />
        <TokenDisplay
          name="Interactive Primary Hover"
          cssVar="--interactive-primary-hover"
        />
        <TokenDisplay
          name="Interactive Secondary"
          cssVar="--interactive-secondary"
        />
        <TokenDisplay name="Interactive Ghost" cssVar="--interactive-ghost" />

        {/* Status Colors */}
        <TokenDisplay name="Success" cssVar="--status-success" />
        <TokenDisplay name="Success BG" cssVar="--status-success-bg" />
        <TokenDisplay name="Warning" cssVar="--status-warning" />
        <TokenDisplay name="Warning BG" cssVar="--status-warning-bg" />
        <TokenDisplay name="Danger" cssVar="--status-danger" />
        <TokenDisplay name="Danger BG" cssVar="--status-danger-bg" />
      </div>
    </div>
  ),
};

export const TypographyTokens: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Typography Tokens</h1>
        <p className="text-gray-600">Typography tokens and usage examples</p>
      </div>

      <div className="space-y-8">
        {/* Primary Font */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Primary Font</h2>
          <div className="p-6 border border-[var(--border-primary)] rounded-lg">
            <div
              className="space-y-4"
              style={{ fontFamily: "var(--font-family-primary)" }}
            >
              <div className="text-4xl font-bold">Heading 1 - Primary Font</div>
              <div className="text-2xl font-semibold">
                Heading 2 - Primary Font
              </div>
              <div className="text-lg font-medium">
                Heading 3 - Primary Font
              </div>
              <div className="text-base">
                Body text with the primary font. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </div>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                font-family: var(--font-family-primary)
              </code>
            </div>
          </div>
        </div>

        {/* Secondary Font */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Secondary Font</h2>
          <div className="p-6 border border-[var(--border-primary)] rounded-lg">
            <div
              className="space-y-4"
              style={{ fontFamily: "var(--font-family-secondary)" }}
            >
              <div className="text-2xl font-semibold">
                Heading - Secondary Font
              </div>
              <div className="text-base">
                Body text with the secondary font. Used for descriptions,
                secondary content and supporting elements.
              </div>
              <div className="text-sm text-gray-600">
                Smaller text with the secondary font for details and
                annotations.
              </div>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                font-family: var(--font-family-secondary)
              </code>
            </div>
          </div>
        </div>

        {/* Brand Typography Comparison */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Brand Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-[var(--border-primary)] rounded-lg">
              <h3 className="font-medium mb-2">Stride (Outfit + Inter)</h3>
              <div style={{ fontFamily: "Outfit, sans-serif" }}>
                Heading with Outfit
              </div>
              <div style={{ fontFamily: "Inter, sans-serif" }}>
                Body with Inter
              </div>
            </div>
            <div className="p-4 border border-[var(--border-primary)] rounded-lg">
              <h3 className="font-medium mb-2">Coral (Poppins + Open Sans)</h3>
              <div style={{ fontFamily: "Poppins, sans-serif" }}>
                Heading with Poppins
              </div>
              <div style={{ fontFamily: "Open Sans, sans-serif" }}>
                Body with Open Sans
              </div>
            </div>
            <div className="p-4 border border-[var(--border-primary)] rounded-lg">
              <h3 className="font-medium mb-2">
                Forest (Roboto + Source Sans Pro)
              </h3>
              <div style={{ fontFamily: "Roboto, sans-serif" }}>
                Heading with Roboto
              </div>
              <div style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                Body with Source Sans Pro
              </div>
            </div>
            <div className="p-4 border border-[var(--border-primary)] rounded-lg">
              <h3 className="font-medium mb-2">
                Runswap (Montserrat + Nunito)
              </h3>
              <div style={{ fontFamily: "Montserrat, sans-serif" }}>
                Heading with Montserrat
              </div>
              <div style={{ fontFamily: "Nunito, sans-serif" }}>
                Body with Nunito
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
