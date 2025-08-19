import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./Dialog";
import { Button } from "../Button";
import { Input } from "../Input";
import {
  AlertTriangle,
  Info,
  CheckCircle,
  X,
  User,
  Mail,
  Settings,
  Trash2,
  FileText,
} from "lucide-react";

const meta: Meta<typeof Dialog> = {
  title: "Stride DS/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile modal dialog component built on React Aria with support for various sizes, accessible keyboard navigation, and customizable content areas. Built with semantic design tokens and smooth animations.",
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "aria-dialog-name",
            enabled: true,
          },
          {
            id: "focus-trap",
            enabled: true,
          },
          {
            id: "color-contrast",
            enabled: true,
          },
        ],
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: [
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "full",
      ],
      description: "Size of the dialog window",
    },
  },
  args: {
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// =======================
// PRIMARY EXAMPLES
// =======================

export const Default: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Open Dialog</Button>
      <DialogOverlay>
        <Dialog {...args}>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogClose>
              <X size={16} />
            </DialogClose>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              This is a basic dialog example. You can place any content here,
              including forms, alerts, or other interactive elements.
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Cancel
            </Button>
            <Button variant="primary">Confirm</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The default dialog with basic structure including header, body, and footer sections.",
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {["sm", "md", "lg", "xl", "2xl"].map((size) => (
        <DialogTrigger key={size}>
          <Button variant="secondary" size="sm">
            {size.toUpperCase()}
          </Button>
          <DialogOverlay>
            <Dialog size={size as "sm" | "md" | "lg" | "xl" | "2xl"}>
              <DialogHeader>
                <DialogTitle>Size: {size.toUpperCase()}</DialogTitle>
                <DialogClose>
                  <X size={16} />
                </DialogClose>
              </DialogHeader>
              <DialogBody>
                <DialogDescription>
                  This dialog uses the &ldquo;{size}&rdquo; size variant. The
                  content area adjusts automatically to fit different screen
                  sizes while maintaining proper proportions.
                </DialogDescription>
              </DialogBody>
              <DialogFooter>
                <Button variant="secondary" slot="close">
                  Close
                </Button>
              </DialogFooter>
            </Dialog>
          </DialogOverlay>
        </DialogTrigger>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different size variants of the dialog component, from small (sm) to extra-large (2xl).",
      },
    },
  },
};

// =======================
// SEMANTIC DIALOG TYPES
// =======================

export const ConfirmationDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="destructive">Delete Item</Button>
      <DialogOverlay>
        <Dialog size="sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle
                size={20}
                className="[color:var(--status-danger)]"
              />
              Confirm Deletion
            </DialogTitle>
            <DialogClose>
              <X size={16} />
            </DialogClose>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              Are you sure you want to delete this item? This action cannot be
              undone and will permanently remove the item from your account.
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Cancel
            </Button>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A confirmation dialog for destructive actions with appropriate visual cues and semantic colors.",
      },
    },
  },
};

export const SuccessDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="primary">Complete Action</Button>
      <DialogOverlay>
        <Dialog size="sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle
                size={20}
                className="[color:var(--status-success)]"
              />
              Success!
            </DialogTitle>
            <DialogClose>
              <X size={16} />
            </DialogClose>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              Your action has been completed successfully. All changes have been
              saved and will take effect immediately.
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <Button variant="primary" slot="close">
              Continue
            </Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A success dialog for providing positive feedback after successful operations.",
      },
    },
  },
};

export const InformationDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="secondary" leftIcon={<Info size={16} />}>
        Show Information
      </Button>
      <DialogOverlay>
        <Dialog size="md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info size={20} className="[color:var(--interactive-primary)]" />
              Information
            </DialogTitle>
            <DialogClose>
              <X size={16} />
            </DialogClose>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              This is an informational dialog that provides important details to
              the user. It can contain rich content, links, and other
              interactive elements.
            </DialogDescription>
            <div className="mt-4 p-4 rounded-lg [background-color:var(--status-success-bg)] [border:1px_solid_var(--status-success)] dark:[background-color:var(--bg-tertiary)] dark:[border-color:var(--border-secondary)]">
              <p className="text-sm [color:var(--status-success-text)] dark:[color:var(--text-primary)]">
                💡 <strong>Tip:</strong> You can use dialogs to provide
                contextual help and guidance to users without navigating away
                from their current task.
              </p>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="primary" slot="close">
              Understood
            </Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An informational dialog with rich content using semantic design tokens for consistent theming.",
      },
    },
  },
};

// =======================
// PRACTICAL EXAMPLES
// =======================

export const FormDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="primary" leftIcon={<User size={16} />}>
        Edit Profile
      </Button>
      <DialogOverlay>
        <Dialog size="lg">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogClose>
              <X size={16} />
            </DialogClose>
          </DialogHeader>
          <DialogBody>
            <form className="space-y-4">
              <Input
                label="Name"
                placeholder="Enter your name"
                leftIcon={<User size={16} />}
                defaultValue="John Doe"
                isRequired
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                leftIcon={<Mail size={16} />}
                defaultValue="john@example.com"
                isRequired
              />
              <div>
                <label className="block text-sm font-medium mb-1 [color:var(--text-primary)]">
                  Bio
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about yourself"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 [background-color:var(--bg-primary)] [color:var(--text-primary)] [border-color:var(--border-primary)] [--tw-ring-color:var(--border-focus)]"
                  defaultValue="I'm a developer passionate about creating great user experiences."
                />
              </div>
            </form>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Cancel
            </Button>
            <Button variant="primary">Save Changes</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A form dialog for editing user information with proper Input components and semantic tokens.",
      },
    },
  },
};

export const SettingsDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="secondary" leftIcon={<Settings size={16} />}>
        Open Settings
      </Button>
      <DialogOverlay>
        <Dialog size="md">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogClose>
              <X size={16} />
            </DialogClose>
          </DialogHeader>
          <DialogBody>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 [color:var(--text-primary)]">
                  Theme
                </label>
                <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 [background-color:var(--bg-primary)] [color:var(--text-primary)] [border-color:var(--border-primary)] [--tw-ring-color:var(--border-focus)]">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 [color:var(--text-primary)]">
                  Language
                </label>
                <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 [background-color:var(--bg-primary)] [color:var(--text-primary)] [border-color:var(--border-primary)] [--tw-ring-color:var(--border-focus)]">
                  <option>English</option>
                  <option>Français</option>
                  <option>Español</option>
                  <option>Deutsch</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 [color:var(--text-primary)]">
                  Notifications
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded [color:var(--interactive-primary)]"
                    />
                    <span className="text-sm [color:var(--text-secondary)]">
                      Email notifications
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded [color:var(--interactive-primary)]"
                    />
                    <span className="text-sm [color:var(--text-secondary)]">
                      Push notifications
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Cancel
            </Button>
            <Button variant="primary">Save Settings</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A settings dialog with various form controls using semantic design tokens for consistent theming.",
      },
    },
  },
};

export const DangerDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="destructive" leftIcon={<Trash2 size={16} />}>
        Delete Account
      </Button>
      <DialogOverlay>
        <Dialog size="md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 [color:var(--status-danger)]">
              <AlertTriangle size={20} />
              Delete Account
            </DialogTitle>
            <DialogClose>
              <X size={16} />
            </DialogClose>
          </DialogHeader>
          <DialogBody>
            <div className="space-y-4">
              <div className="p-4 rounded-lg [background-color:var(--status-danger-bg)] [border:1px_solid_var(--status-danger)]">
                <p className="text-sm [color:var(--status-danger-text)] font-medium mb-2">
                  ⚠️ This action is irreversible
                </p>
                <p className="text-sm [color:var(--status-danger-text)]">
                  All your data, including projects, settings, and account
                  information will be permanently deleted.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 [color:var(--text-primary)]">
                  Type &quot;DELETE&quot; to confirm:
                </label>
                <Input placeholder="DELETE" className="font-mono" />
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Cancel
            </Button>
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A dangerous action dialog with proper warning styling using semantic danger tokens.",
      },
    },
  },
};

// =======================
// SPECIAL LAYOUTS
// =======================

export const MinimalDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="ghost">Quick Confirmation</Button>
      <DialogOverlay>
        <Dialog size="sm">
          <DialogBody>
            <DialogDescription className="text-center py-4">
              Are you sure you want to proceed? This is a minimal dialog without
              a header or explicit close button.
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Cancel
            </Button>
            <Button variant="primary">Confirm</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story: "A minimal dialog without a header for simple confirmations.",
      },
    },
  },
};

export const ScrollableContent: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="primary" leftIcon={<FileText size={16} />}>
        View Terms
      </Button>
      <DialogOverlay>
        <Dialog size="2xl">
          <DialogHeader>
            <DialogTitle>Terms and Conditions</DialogTitle>
            <DialogClose>
              <X size={16} />
            </DialogClose>
          </DialogHeader>
          <DialogBody className="max-h-96 overflow-y-auto">
            <div className="prose prose-sm [color:var(--text-primary)]">
              <p>
                Welcome to our Terms and Conditions. Please read these terms
                carefully before using our service.
              </p>
              <h3 className="[color:var(--text-primary)]">
                1. Acceptance of Terms
              </h3>
              <p>
                By accessing and using this service, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
              <h3 className="[color:var(--text-primary)]">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the
                materials on our website for personal, non-commercial transitory
                viewing only.
              </p>
              <h3 className="[color:var(--text-primary)]">3. Disclaimer</h3>
              <p>
                The materials on our website are provided on an &lsquo;as
                is&rsquo; basis. We make no warranties, expressed or implied,
                and hereby disclaim and negate all other warranties including
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
              <h3 className="[color:var(--text-primary)]">4. Limitations</h3>
              <p>
                In no event shall our company or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on our website.
              </p>
              <h3 className="[color:var(--text-primary)]">5. Privacy Policy</h3>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how
                we collect, use, and protect your information when you use our
                service.
              </p>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Decline
            </Button>
            <Button variant="primary">Accept</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A large dialog with scrollable content for displaying lengthy information like terms and conditions.",
      },
    },
  },
};

// =======================
// ANIMATION & ACCESSIBILITY
// =======================

export const AnimationDemo: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Test Animations</Button>
      <DialogOverlay className="[--modal-animation-duration-in:500ms] [--modal-animation-duration-out:300ms]">
        <Dialog {...args}>
          <DialogHeader>
            <DialogTitle>Animation Demo</DialogTitle>
            <DialogClose>
              <X size={16} />
            </DialogClose>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              This dialog demonstrates enhanced animations with custom timing.
              The animations are based on React Aria&apos;s data-entering and
              data-exiting states.
            </DialogDescription>
            <div className="mt-4 p-4 rounded-lg [background-color:var(--interactive-secondary)] [border:1px_solid_var(--border-primary)]">
              <p className="text-sm [color:var(--text-primary)]">
                ✨ <strong>Animation Features:</strong>
              </p>
              <ul className="text-sm [color:var(--text-secondary)] mt-2 space-y-1">
                <li>• Overlay fades in/out smoothly</li>
                <li>• Content scales and translates</li>
                <li>• Custom 500ms duration for visibility</li>
                <li>• Uses React Aria data attributes</li>
                <li>• Smooth cubic-bezier easing</li>
              </ul>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Close
            </Button>
            <Button variant="primary">Try Again</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Dialog with enhanced animations demonstrating custom timing and React Aria integration.",
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 rounded-lg [background-color:var(--bg-secondary)] [border:1px_solid_var(--border-primary)]">
        <p className="text-sm [color:var(--text-secondary)] mb-2">
          <strong>Keyboard Navigation:</strong>
        </p>
        <ul className="text-sm [color:var(--text-tertiary)] space-y-1">
          <li>
            • Press{" "}
            <kbd className="px-1 py-0.5 rounded [background-color:var(--bg-tertiary)] [color:var(--text-primary)]">
              Tab
            </kbd>{" "}
            to navigate
          </li>
          <li>
            • Press{" "}
            <kbd className="px-1 py-0.5 rounded [background-color:var(--bg-tertiary)] [color:var(--text-primary)]">
              Enter
            </kbd>{" "}
            or{" "}
            <kbd className="px-1 py-0.5 rounded [background-color:var(--bg-tertiary)] [color:var(--text-primary)]">
              Space
            </kbd>{" "}
            to open
          </li>
          <li>
            • Press{" "}
            <kbd className="px-1 py-0.5 rounded [background-color:var(--bg-tertiary)] [color:var(--text-primary)]">
              Escape
            </kbd>{" "}
            to close
          </li>
        </ul>
      </div>
      <DialogTrigger>
        <Button variant="primary">Accessible Dialog</Button>
        <DialogOverlay>
          <Dialog size="md">
            <DialogHeader>
              <DialogTitle>Accessibility Features</DialogTitle>
              <DialogClose aria-label="Close accessibility demo dialog">
                <X size={16} />
              </DialogClose>
            </DialogHeader>
            <DialogBody>
              <DialogDescription>
                This dialog demonstrates comprehensive accessibility features:
              </DialogDescription>
              <ul className="mt-2 space-y-1 text-sm [color:var(--text-secondary)]">
                <li>• Focus is trapped within the dialog</li>
                <li>• Escape key closes the dialog</li>
                <li>• Proper ARIA attributes are applied</li>
                <li>• Screen reader friendly with semantic roles</li>
                <li>• Keyboard navigation support throughout</li>
                <li>• Color contrast compliance</li>
                <li>• Focus indicators on all interactive elements</li>
              </ul>
            </DialogBody>
            <DialogFooter>
              <Button variant="secondary" slot="close">
                Close
              </Button>
              <Button variant="primary">Learn More</Button>
            </DialogFooter>
          </Dialog>
        </DialogOverlay>
      </DialogTrigger>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive demonstration of accessibility features including keyboard navigation, ARIA support, and screen reader compatibility.",
      },
    },
  },
};
