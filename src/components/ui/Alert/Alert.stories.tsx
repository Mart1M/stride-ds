import type { Meta, StoryObj } from "@storybook/nextjs";
import { Alert } from "./Alert";
import { CheckCircle } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Stride DS/Alert",
  component: Alert,
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
        ],
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
      description: "The visual style variant of the alert",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the alert",
    },
    title: {
      control: { type: "text" },
      description: "Optional title for the alert",
    },
    children: {
      control: { type: "text" },
      description: "The content of the alert",
    },
    icon: {
      control: { type: "boolean" },
      description:
        "Whether to show an icon (true/false) or custom icon element",
    },
    dismissible: {
      control: { type: "boolean" },
      description: "Whether the alert can be dismissed",
    },
  },
  args: {
    children: "This is an alert message",
    variant: "info",
    size: "md",
    icon: true,
    dismissible: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "This is a default info alert with important information.",
  },
};

// Variants
export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    children: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "Please review your information before proceeding.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    children: "Something went wrong. Please try again.",
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Alert variant="info" size="sm">
        Small alert message with compact spacing.
      </Alert>
      <Alert variant="success" size="md">
        Medium alert message with default spacing.
      </Alert>
      <Alert variant="warning" size="lg">
        Large alert message with generous spacing.
      </Alert>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// With and without icons
export const IconVariations: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Alert variant="info" icon={true}>
        Alert with default icon
      </Alert>
      <Alert variant="success" icon={<CheckCircle />}>
        Alert with custom icon
      </Alert>
      <Alert variant="warning" icon={false}>
        Alert without icon
      </Alert>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// Dismissible alerts
export const Dismissible: Story = {
  args: {
    variant: "warning",
    title: "Dismissible Alert",
    children: "This alert can be dismissed by clicking the X button.",
    dismissible: true,
    onDismiss: () => alert("Alert dismissed!"),
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Alert variant="info" title="Information">
        This is an informational alert with helpful details.
      </Alert>
      <Alert variant="success" title="Success" dismissible>
        Operation completed successfully! You can dismiss this.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please be careful with this action.
      </Alert>
      <Alert variant="error" title="Error" dismissible>
        An error occurred. Please check your input and try again.
      </Alert>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// Long content
export const LongContent: Story = {
  args: {
    variant: "info",
    title: "Detailed Information",
    children: `This is a longer alert message that demonstrates how the component handles 
    multiple lines of text. The alert should expand to accommodate the content while 
    maintaining proper spacing and readability. Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    dismissible: true,
  },
};

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    type AlertType = {
      id: number;
      variant: "info" | "success" | "warning" | "error";
      message: string;
    };

    const [alerts, setAlerts] = React.useState<AlertType[]>([
      { id: 1, variant: "info", message: "Welcome to the dashboard!" },
      { id: 2, variant: "success", message: "Profile updated successfully" },
    ]);

    const removeAlert = (id: number) => {
      setAlerts(alerts.filter((alert) => alert.id !== id));
    };

    const addAlert = (variant: "info" | "success" | "warning" | "error") => {
      const messages = {
        info: "Here's some information for you",
        success: "Action completed successfully",
        warning: "Please review this carefully",
        error: "Something needs your attention",
      };

      setAlerts([
        ...alerts,
        {
          id: Date.now(),
          variant,
          message: messages[variant],
        },
      ]);
    };

    return (
      <div className="space-y-4 w-full max-w-lg">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => addAlert("info")}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            Add Info
          </button>
          <button
            onClick={() => addAlert("success")}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm"
          >
            Add Success
          </button>
          <button
            onClick={() => addAlert("warning")}
            className="px-3 py-1 bg-yellow-500 text-white rounded text-sm"
          >
            Add Warning
          </button>
          <button
            onClick={() => addAlert("error")}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm"
          >
            Add Error
          </button>
        </div>

        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            variant={alert.variant}
            dismissible
            onDismiss={() => removeAlert(alert.id)}
          >
            {alert.message}
          </Alert>
        ))}
      </div>
    );
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// Accessibility Tests
export const AccessibilityTests: Story = {
  name: "🔍 Accessibility Tests",
  render: () => (
    <div className="space-y-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Screen Reader Tests</h3>
        <Alert variant="error" role="alert">
          Critical error that requires immediate attention
        </Alert>
        <Alert variant="warning" role="status">
          Non-critical status update
        </Alert>
        <Alert variant="success" role="status" aria-live="polite">
          Success message with polite announcement
        </Alert>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Focus Management</h3>
        <Alert variant="info" dismissible>
          Dismissible alert - test focus on close button
        </Alert>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Color Contrast Tests</h3>
        <div className="grid grid-cols-1 gap-4">
          <Alert variant="info">Info alert color contrast</Alert>
          <Alert variant="success">Success alert color contrast</Alert>
          <Alert variant="warning">Warning alert color contrast</Alert>
          <Alert variant="error">Error alert color contrast</Alert>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "aria-allowed-attr", enabled: true },
          { id: "aria-required-attr", enabled: true },
          { id: "button-name", enabled: true },
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

// Add React import for interactive example
import React from "react";

export const DarkModeTest: Story = {
  name: "🌙 Dark Mode Test",
  render: () => (
    <div className="space-y-4 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Alert Components in Dark Mode
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Toggle the theme in Storybook toolbar to test dark mode. All variants should adapt correctly.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Alert variant="info" icon title="Information">
          This is an info alert that adapts to dark mode with proper contrast.
        </Alert>
        
        <Alert variant="success" icon title="Success">
          Success alert with dark mode support and proper colors.
        </Alert>
        
        <Alert variant="warning" icon title="Warning">
          Warning alert that maintains readability in dark theme.
        </Alert>
        
        <Alert variant="error" icon title="Error" dismissible>
          Error alert with dismiss button that works in both themes.
        </Alert>
      </div>
      
      <div className="mt-6 space-y-3">
        <Alert variant="info" size="sm">
          Small info alert - dark mode compatible
        </Alert>
        <Alert variant="success" size="lg" title="Large success alert">
          Large alert with title that scales properly in dark mode
        </Alert>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates how Alert components adapt to dark mode. 

**To test:**
1. Use the theme toggle in Storybook's toolbar (sun/moon icon)
2. Switch between light and dark themes
3. Verify that all Alert variants maintain proper contrast and readability
4. Check that icons, text, borders, and backgrounds adapt correctly

**Dark mode features:**
- Proper background colors with opacity for depth
- High contrast text colors for accessibility  
- Adapted border colors that work on dark backgrounds
- Icon colors that maintain semantic meaning
- Focus rings that work on both light and dark backgrounds
        `,
      },
    },
  },
};
