import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionComponent,
} from "./Accordion";

import { ChevronRight, Plus, Minus, Settings, User, Bell } from "lucide-react";

const meta: Meta<typeof Accordion> = {
  title: "Stride DS/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
          {
            id: "aria-required-attr",
            enabled: true,
          },
          {
            id: "button-name",
            enabled: true,
          },
          {
            id: "focus-order-semantics",
            enabled: true,
          },
        ],
      },
    },
    docs: {
      description: {
        component: `
# Accordion Component

A fully accessible accordion component built with React Aria Components. Supports single and multiple panel expansion, keyboard navigation, and customizable styling.

## Features

- **Accessibility**: Full keyboard navigation and screen reader support via React Aria
- **Variants**: Default, ghost, and filled styles
- **Sizes**: Small, medium, and large sizing options
- **Multi-brand**: Adapts to all design system brands (Stride, Coral, Forest, Runswap, Acme)
- **Dark Mode**: Complete dark mode support with proper contrast ratios
- **Animations**: Smooth expand/collapse transitions using CSS custom properties
- **Customizable**: Support for custom icons and styling
- **Type Safe**: Full TypeScript support with proper prop types

## Usage

\`\`\`tsx
<Accordion>
  <AccordionItem>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

## Design Tokens

The component uses CSS custom properties from the brands.css system:
- **Text**: \`--text-primary\`, \`--text-secondary\`, \`--text-tertiary\`
- **Backgrounds**: \`--bg-primary\`, \`--bg-secondary\`, \`--bg-tertiary\`
- **Borders**: \`--border-primary\`, \`--border-focus\`
- **Typography**: \`--font-family-primary\`
- **Transitions**: \`--brand-transition\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "ghost", "filled"],
      description: "The visual style variant of the accordion",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the accordion (affects padding and text size)",
    },
    allowsMultipleExpanded: {
      control: { type: "boolean" },
      description: "Allow multiple panels to be expanded simultaneously",
    },
    children: {
      control: false,
      description: "AccordionItem components containing triggers and content",
    },
  },
  args: {
    variant: "default",
    size: "md",
    allowsMultipleExpanded: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// === PLAYGROUND STORY ===
export const Playground: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <Accordion {...args}>
        <AccordionItem>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and supports full
            keyboard navigation with screen reader support.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles using design tokens that
            automatically adapt to all brand themes and dark mode.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            By default, yes. The accordion includes smooth expand/collapse
            animations using CSS transitions and keyframes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// === DEFAULT STORY ===
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "The default accordion with standard styling and behavior.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-md">
      <Accordion>
        <AccordionItem>
          <AccordionTrigger>What is Stride Design System?</AccordionTrigger>
          <AccordionContent>
            Stride DS is a comprehensive design system built with React Aria
            Components, featuring multi-brand support, dark mode, and full
            accessibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            It uses CSS custom properties for theming, React Aria for
            accessibility, and supports multiple brand variants that can be
            switched dynamically.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// === ALL VARIANTS ===
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="space-y-8 w-96">
      <div>
        <h3
          className="mb-4 text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Default
        </h3>
        <Accordion variant="default">
          <AccordionItem>
            <AccordionTrigger>Default variant</AccordionTrigger>
            <AccordionContent>
              This is the default accordion variant with border and background.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Another item</AccordionTrigger>
            <AccordionContent>
              Content for the second item in default style.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3
          className="mb-4 text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Ghost
        </h3>
        <Accordion variant="ghost">
          <AccordionItem>
            <AccordionTrigger>Ghost variant</AccordionTrigger>
            <AccordionContent>
              This is the ghost accordion variant with minimal styling.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Another item</AccordionTrigger>
            <AccordionContent>
              Content for the second item in ghost style.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3
          className="mb-4 text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Filled
        </h3>
        <Accordion variant="filled">
          <AccordionItem>
            <AccordionTrigger>Filled variant</AccordionTrigger>
            <AccordionContent>
              This is the filled accordion variant with muted background.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Another item</AccordionTrigger>
            <AccordionContent>
              Content for the second item in filled style.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

// === ALL SIZES ===
export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="space-y-8 w-96">
      <div>
        <h3
          className="mb-4 text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Small
        </h3>
        <Accordion size="sm">
          <AccordionItem>
            <AccordionTrigger>Small accordion</AccordionTrigger>
            <AccordionContent>
              This is a small accordion with compact spacing and text.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3
          className="mb-4 text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Medium
        </h3>
        <Accordion size="md">
          <AccordionItem>
            <AccordionTrigger>Medium accordion</AccordionTrigger>
            <AccordionContent>
              This is a medium accordion with standard spacing and text.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3
          className="mb-4 text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Large
        </h3>
        <Accordion size="lg">
          <AccordionItem>
            <AccordionTrigger>Large accordion</AccordionTrigger>
            <AccordionContent>
              This is a large accordion with generous spacing and text.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

// === MULTIPLE EXPANDED ===
export const MultipleExpanded: Story = {
  name: "Multiple Expanded",
  render: () => (
    <div className="w-96">
      <Accordion allowsMultipleExpanded>
        <AccordionItem>
          <AccordionTrigger>Can I expand multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! This accordion allows multiple items to be expanded at the same
            time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>This one too?</AccordionTrigger>
          <AccordionContent>
            Absolutely. You can have as many panels open as you want.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>And this one?</AccordionTrigger>
          <AccordionContent>
            Yes, all of them can be open simultaneously.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// === CUSTOM ICONS ===
export const CustomIcons: Story = {
  name: "Custom Icons",
  render: () => (
    <div className="w-96">
      <Accordion>
        <AccordionItem>
          <AccordionTrigger icon={ChevronRight}>
            Custom chevron right
          </AccordionTrigger>
          <AccordionContent>
            This accordion item uses a chevron right icon instead of down.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger icon={Plus}>Plus/minus style</AccordionTrigger>
          <AccordionContent>
            This uses a plus icon that rotates to become a minus when expanded.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger hideIcon>No icon at all</AccordionTrigger>
          <AccordionContent>
            This accordion item has no icon, just text.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// === COMPLEX CONTENT ===
export const ComplexContent: Story = {
  name: "Complex Content",
  render: () => (
    <div className="w-96">
      <Accordion>
        <AccordionItem>
          <AccordionTrigger icon={Settings}>Account Settings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profile Information</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Notification Preferences</span>
              </div>
              <button
                className="mt-2 px-3 py-1 rounded text-sm"
                style={{
                  backgroundColor: "var(--interactive-primary)",
                  color: "var(--interactive-primary-text)",
                }}
              >
                Edit Settings
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Rich Content Example</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                This accordion can contain any type of content:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Lists and bullet points</li>
                <li>Images and media</li>
                <li>Interactive elements</li>
                <li>Forms and inputs</li>
              </ul>
              <div
                className="p-3 rounded text-sm"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  color: "var(--text-secondary)",
                }}
              >
                <strong style={{ color: "var(--text-primary)" }}>Note:</strong>{" "}
                Content adapts to the accordion's size variant.
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// === DARK MODE TEST ===
export const DarkModeTest: Story = {
  name: "🌙 Dark Mode Test",
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3
          className="text-lg font-semibold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Accordion in Dark Mode
        </h3>
        <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
          Toggle the theme in Storybook toolbar. All variants adapt to dark
          mode.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4
            className="text-sm font-medium mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Default Variant
          </h4>
          <Accordion variant="default">
            <AccordionItem>
              <AccordionTrigger>Dark mode support</AccordionTrigger>
              <AccordionContent>
                This accordion automatically adapts to dark mode with proper
                contrast and colors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>Accessibility maintained</AccordionTrigger>
              <AccordionContent>
                All accessibility features work perfectly in both light and dark
                themes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <h4
            className="text-sm font-medium mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Filled Variant
          </h4>
          <Accordion variant="filled">
            <AccordionItem>
              <AccordionTrigger>Styled for dark mode</AccordionTrigger>
              <AccordionContent>
                The filled variant uses muted backgrounds that adapt to the
                current theme.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the Accordion component's dark mode capabilities.

**To test:**
1. Use the theme toggle in Storybook's toolbar (sun/moon icon)
2. Switch between light and dark themes
3. Verify proper contrast and readability in both modes

**Dark mode features:**
- Proper background and border colors
- High contrast text for accessibility
- Adapted focus states
- Icon colors that maintain visibility
        `,
      },
    },
  },
};

// === ACCESSIBILITY TEST ===
export const AccessibilityTest: Story = {
  name: "♿ Accessibility Test",
  render: () => (
    <div className="space-y-4 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-2">Keyboard Navigation Test</h3>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          Use Tab, Enter, and Space to navigate and interact with the accordion.
        </p>
      </div>

      <Accordion>
        <AccordionItem>
          <AccordionTrigger>Tab to focus this trigger</AccordionTrigger>
          <AccordionContent>
            Press Enter or Space to toggle this panel. The accordion maintains
            proper focus management.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Navigate to this one</AccordionTrigger>
          <AccordionContent>
            Screen readers announce the state changes and all content is
            properly accessible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Last item to test</AccordionTrigger>
          <AccordionContent>
            Focus management works correctly when panels are expanded or
            collapsed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
