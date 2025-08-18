import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./Button";
import { Star, Download, ArrowRight } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Stride DS/Button",
  component: Button,
  parameters: {
    layout: "centered",
    a11y: {
      // Configuration spécifique pour les tests d'accessibilité du Button
      config: {
        rules: [
          {
            // S'assurer que les boutons ont un nom accessible
            id: "button-name",
            enabled: true,
          },
          {
            // S'assurer que les contrastes de couleur sont suffisants
            id: "color-contrast",
            enabled: true,
          },
          {
            // S'assurer que les éléments focusables ont un indicateur de focus visible
            id: "focus-order-semantics",
            enabled: true,
          },
        ],
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "destructive"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: {
      control: { type: "text" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "Download",
    leftIcon: <Download size={16} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Continue",
    rightIcon: <ArrowRight size={16} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Favorite",
    leftIcon: <Star size={16} />,
    rightIcon: <ArrowRight size={16} />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    isDisabled: true,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete Account",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="destructive" size="sm">
          Delete (Small)
        </Button>
        <Button variant="destructive" size="md">
          Delete (Medium)
        </Button>
        <Button variant="destructive" size="lg">
          Delete (Large)
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button leftIcon={<Star size={16} />}>With Icon</Button>
        <Button rightIcon={<ArrowRight size={16} />}>With Icon</Button>
        <Button isDisabled>Disabled</Button>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button variant="primary" size="sm" leftIcon={<Download size={14} />}>
        Small
      </Button>
      <Button variant="primary" size="md" leftIcon={<Download size={16} />}>
        Medium
      </Button>
      <Button variant="primary" size="lg" leftIcon={<Download size={18} />}>
        Large
      </Button>
    </div>
  ),
};

// Stories spécifiques pour les tests d'accessibilité
export const AccessibilityTests: Story = {
  name: "🔍 Accessibility Tests",
  render: () => (
    <div className="space-y-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contrast and Focus Tests</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Keyboard Navigation</h3>
        <div className="flex gap-4 flex-wrap">
          <Button>First Button</Button>
          <Button>Second Button</Button>
          <Button isDisabled>Disabled Button</Button>
          <Button>Last Button</Button>
        </div>
        <p className="text-sm text-gray-600">
          Test: Use Tab to navigate, Space/Enter to activate
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Screen Reader Tests</h3>
        <div className="flex gap-4 flex-wrap">
          <Button aria-label="Save document">💾</Button>
          <Button aria-describedby="help-text">Help</Button>
          <Button leftIcon={<Download size={16} />}>Download Report</Button>
        </div>
        <p id="help-text" className="text-sm text-gray-600">
          This button provides additional help information
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States and Variants</h3>
        <div className="flex gap-4 flex-wrap">
          <Button aria-pressed="false">Toggle Off</Button>
          <Button aria-pressed="true" variant="primary">
            Toggle On
          </Button>
          <Button aria-expanded="false">Menu Collapsed</Button>
          <Button aria-expanded="true" variant="secondary">
            Menu Expanded
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    a11y: {
      // Tests d'accessibilité renforcés pour cette story
      config: {
        rules: [
          { id: "button-name", enabled: true },
          { id: "color-contrast", enabled: true },
          { id: "focus-order-semantics", enabled: true },
          { id: "keyboard-navigation", enabled: true },
          { id: "aria-allowed-attr", enabled: true },
          { id: "aria-required-attr", enabled: true },
        ],
      },
      options: {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21aa"],
        },
      },
    },
  },
};
