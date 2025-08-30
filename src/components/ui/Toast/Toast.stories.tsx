import type { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastContent,
  ToastRegion,
  toastQueue,
  toast,
  ToastProvider,
  ToastContainer,
  useToastHelpers,
} from "./Toast";
import { Button } from "../Button";

const meta: Meta<typeof ToastRegion> = {
  title: "Stride DS/Toast",
  component: ToastRegion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toast notifications provide brief messages about app processes built on React Aria components.",
      },
    },
  },
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
        "top-center",
        "bottom-center",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// === BASIC STORIES ===
export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Click the button to show a default toast:
      </div>
      <Button
        variant="secondary"
        onPress={() => toast.default("This is a default toast notification.")}
      >
        Show Default Toast
      </Button>
      <ToastRegion position="top-right" />
    </div>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Click the button to show a toast with title:
      </div>
      <Button
        variant="secondary"
        onPress={() =>
          toast.default("This toast has both a title and description.", {
            title: "Notification",
          })
        }
      >
        Show Toast with Title
      </Button>
      <ToastRegion position="top-right" />
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Click the button to show a toast with action:
      </div>
      <Button
        variant="secondary"
        onPress={() =>
          toast.default("A new version of the app is available.", {
            title: "Update Available",
            action: {
              label: "Update",
              onClick: () => alert("Update clicked!"),
            },
          })
        }
      >
        Show Toast with Action
      </Button>
      <ToastRegion position="top-right" />
    </div>
  ),
};

export const Persistent: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Click the button to show a persistent toast (no auto-dismiss):
      </div>
      <Button
        variant="secondary"
        onPress={() =>
          toast.default("This toast will not auto-dismiss.", { timeout: 0 })
        }
      >
        Show Persistent Toast
      </Button>
      <ToastRegion position="top-right" />
    </div>
  ),
};

// === VARIANT STORIES ===
export const Success: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        variant="primary"
        onPress={() =>
          toast.success("Your changes have been saved successfully.", {
            title: "Success!",
          })
        }
      >
        Show Success Toast
      </Button>
      <ToastRegion position="top-right" />
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        variant="secondary"
        onPress={() =>
          toast.warning("This action cannot be undone.", {
            title: "Warning",
            action: {
              label: "Confirm",
              onClick: () => alert("Confirmed!"),
            },
          })
        }
      >
        Show Warning Toast
      </Button>
      <ToastRegion position="top-right" />
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        variant="destructive"
        onPress={() =>
          toast.error("Something went wrong. Please try again.", {
            title: "Error",
            action: {
              label: "Retry",
              onClick: () => alert("Retrying..."),
            },
          })
        }
      >
        Show Error Toast
      </Button>
      <ToastRegion position="top-right" />
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        variant="secondary"
        onPress={() =>
          toast.info("Here is some helpful information.", {
            title: "Info",
          })
        }
      >
        Show Info Toast
      </Button>
      <ToastRegion position="top-right" />
    </div>
  ),
};

// === ALL VARIANTS SHOWCASE ===
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Click buttons to see all toast variants:
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="secondary"
          onPress={() =>
            toast.default("This is a default notification.", {
              title: "Default",
            })
          }
        >
          Default
        </Button>
        <Button
          variant="primary"
          onPress={() =>
            toast.success("Operation completed successfully.", {
              title: "Success",
            })
          }
        >
          Success
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            toast.warning("Please review before proceeding.", {
              title: "Warning",
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="destructive"
          onPress={() =>
            toast.error("An error occurred while processing.", {
              title: "Error",
            })
          }
        >
          Error
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            toast.info("Here's some useful information.", {
              title: "Information",
            })
          }
        >
          Info
        </Button>
      </div>
      <ToastRegion position="top-right" />
    </div>
  ),
};

// === INTERACTIVE STORY WITH PROVIDER ===
const ToastDemo = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="secondary"
          onPress={() => toast.default("Default toast message")}
        >
          Default Toast
        </Button>
        <Button
          variant="primary"
          onPress={() => toast.success("Success! Operation completed.")}
        >
          Success Toast
        </Button>
        <Button
          variant="secondary"
          onPress={() => toast.warning("Warning: Please confirm action.")}
        >
          Warning Toast
        </Button>
        <Button
          variant="destructive"
          onPress={() => toast.error("Error: Something went wrong.")}
        >
          Error Toast
        </Button>
        <Button
          variant="secondary"
          onPress={() => toast.info("Info: Here is some information.")}
        >
          Info Toast
        </Button>
        <Button
          variant="secondary"
          onPress={() => toast.success("Persistent toast", { timeout: 0 })}
        >
          Persistent Toast
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <Button
          variant="secondary"
          onPress={() =>
            toast.success("Toast with action", {
              title: "Update Available",
              action: {
                label: "Install",
                onClick: () => alert("Installing update..."),
              },
            })
          }
        >
          Toast with Action
        </Button>

        <Button
          variant="secondary"
          onPress={() =>
            toast.warning(
              "This is a longer toast message that demonstrates how the component handles multiple lines of text content gracefully.",
              {
                title: "Important Notice",
                timeout: 8000,
              }
            )
          }
        >
          Long Message Toast
        </Button>
      </div>

      <ToastRegion position="top-right" />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <ToastDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demo showing how to use the toast system. Click the buttons to see different toast variants.",
      },
    },
  },
};

// === POSITION DEMO ===
const PositionDemo = () => {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Click buttons to see toasts in different positions:
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Button
          variant="secondary"
          onPress={() => toast.info("Top Right position")}
        >
          Top Right
        </Button>
        <Button
          variant="secondary"
          onPress={() => toast.success("Top Left position")}
        >
          Top Left
        </Button>
        <Button
          variant="secondary"
          onPress={() => toast.default("Top Center position")}
        >
          Top Center
        </Button>
        <Button
          variant="secondary"
          onPress={() => toast.warning("Bottom Right position")}
        >
          Bottom Right
        </Button>
        <Button
          variant="secondary"
          onPress={() => toast.error("Bottom Left position")}
        >
          Bottom Left
        </Button>
        <Button
          variant="secondary"
          onPress={() => toast.info("Bottom Center position")}
        >
          Bottom Center
        </Button>
      </div>

      {/* Multiple ToastRegions for demonstration - normally you'd have only one */}
      <ToastRegion position="top-right" />
      <ToastRegion position="top-left" />
      <ToastRegion position="top-center" />
      <ToastRegion position="bottom-right" />
      <ToastRegion position="bottom-left" />
      <ToastRegion position="bottom-center" />
    </div>
  );
};

export const Positions: Story = {
  render: () => <PositionDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of different toast positions available. Each position creates toasts in different corners/edges of the screen. Note: In a real application, you would typically have only one ToastRegion.",
      },
    },
  },
};

// === POSITION CONTROLS ===
export const PositionControls: Story = {
  args: {
    position: "top-right",
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Use the controls below to change the toast position, then click the
        button to see the result:
      </div>
      <Button
        variant="primary"
        onPress={() => toast.info(`Toast positioned at: ${args.position}`)}
      >
        Show Toast
      </Button>
      <ToastRegion position={args.position} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive story with controls to test different toast positions. Use the position control in the Controls tab to change the position.",
      },
    },
  },
};

// === ANIMATION DEMO ===
const AnimationDemo = () => {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Click buttons to see animated toast entrances:
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="primary"
          onPress={() =>
            toast.success("Smooth spring entrance with left border accent!", {
              title: "Success ✅",
            })
          }
        >
          Success Animation
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            toast.warning("Gentle wiggle to capture attention!", {
              title: "Warning ⚠️",
            })
          }
        >
          Warning Animation
        </Button>
        <Button
          variant="destructive"
          onPress={() =>
            toast.error("Urgent shake animation for errors!", {
              title: "Error ❌",
            })
          }
        >
          Error Animation
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            toast.info("Standard slide animation with hover effects!", {
              title: "Information ℹ️",
            })
          }
        >
          Info Animation
        </Button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button
          variant="ghost"
          onPress={() => {
            // Sequence of toasts to show staggered slide animation
            toast.success("First toast slides in!");
            setTimeout(() => toast.info("Second toast slides in!"), 300);
            setTimeout(() => toast.warning("Third toast slides in!"), 600);
            setTimeout(() => toast.error("Final toast slides in!"), 900);
          }}
        >
          🎭 Show Staggered Slide Sequence
        </Button>
        <Button
          variant="secondary"
          onPress={() => {
            toast.success("Notice the smooth slide from right to left!", {
              title: "Slide Animation Demo ➡️",
            });
          }}
        >
          ➡️ Demo Slide Direction
        </Button>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-md text-sm">
        <strong>Animation Features:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            ➡️ <strong>Slide Animation</strong> - Toasts slide in from right to
            left (or appropriate direction)
          </li>
          <li>
            🎯 <strong>Position-aware</strong> - Slides from the correct
            direction based on position
          </li>
          <li>
            ⚡ <strong>Spring physics</strong> - Natural bouncy entrance with
            cubic-bezier easing
          </li>
          <li>
            🎨 <strong>Variant-specific</strong> - Error shakes, warning wiggles
          </li>
          <li>
            ✨ <strong>Hover effects</strong> - Subtle scale and glow on hover
          </li>
          <li>
            🎭 <strong>Staggered timing</strong> - Multiple toasts animate in
            sequence
          </li>
        </ul>
      </div>

      <ToastRegion position="top-right" />
    </div>
  );
};

export const Animations: Story = {
  render: () => <AnimationDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of the enhanced toast animations with spring physics and variant-specific effects.",
      },
    },
  },
};

// === ACCESSIBILITY STORY ===
const AccessibilityDemo = () => {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Toast notifications include proper ARIA attributes for screen readers:
      </div>

      <div className="space-y-2">
        <Button
          variant="primary"
          onPress={() =>
            toast.success("Screen reader accessible success message", {
              title: "Accessible Success",
            })
          }
        >
          Accessible Success Toast
        </Button>

        <Button
          variant="destructive"
          onPress={() =>
            toast.error(
              "This error message will be announced to screen readers",
              {
                title: "Accessible Error",
              }
            )
          }
        >
          Accessible Error Toast
        </Button>
      </div>

      <div className="text-xs text-gray-500 mt-4 p-4 bg-gray-50 rounded">
        <strong>Accessibility Features:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Built on React Aria Toast components with native accessibility
          </li>
          <li>Automatic screen reader announcements</li>
          <li>Dismiss buttons have proper aria-label</li>
          <li>Keyboard accessible action buttons</li>
          <li>High contrast colors for better visibility</li>
          <li>Proper focus management</li>
        </ul>
      </div>

      <ToastRegion position="top-right" />
    </div>
  );
};

export const Accessibility: Story = {
  render: () => <AccessibilityDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the accessibility features built into the toast component using React Aria.",
      },
    },
  },
};

// === USAGE EXAMPLES ===
export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-2">Basic Setup</h3>
        <div className="bg-gray-50 p-4 rounded-md text-sm font-mono">
          {`// Add ToastRegion to your app root
import { ToastRegion, toast } from 'stride-ds';

function App() {
  return (
    <>
      {/* Your app content */}
      <ToastRegion position="top-right" />
    </>
  );
}

// Use anywhere in your app
toast.success('Operation completed!');
toast.error('Something went wrong.');`}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Advanced Usage</h3>
        <div className="bg-gray-50 p-4 rounded-md text-sm font-mono">
          {`// With actions and custom timeout
toast.warning('Unsaved changes', {
  title: 'Warning',
  timeout: 0, // Persistent
  action: {
    label: 'Save',
    onClick: () => saveChanges()
  }
});

// Different positions
<ToastRegion position="bottom-left" />
<ToastRegion position="top-center" />`}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Toast Control</h3>
        <div className="bg-gray-50 p-4 rounded-md text-sm font-mono">
          {`// Save toast ID for manual control
const id = toast.info('Processing...', { timeout: 0 });

// Close specific toast
toast.close(id);

// Clear all toasts
toast.clear();

// Pause/resume all toasts
toast.pauseAll();
toast.resumeAll();`}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">React Aria Native API</h3>
        <div className="bg-gray-50 p-4 rounded-md text-sm font-mono">
          {`// Direct queue usage (advanced)
import { toastQueue } from 'stride-ds';

toastQueue.add({
  title: 'Custom Toast',
  description: 'Direct queue API',
  variant: 'success'
}, { timeout: 5000 });`}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Code examples showing different ways to use the React Aria based toast system.",
      },
    },
  },
};
