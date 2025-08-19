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
} from "./Dialog";
import { Button } from "../Button";
import { AlertTriangle, Info, CheckCircle, X } from "lucide-react";

const meta: Meta<typeof Dialog> = {
  title: "Stride DS/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile modal dialog component built on React Aria with support for various sizes, accessible keyboard navigation, and customizable content areas.",
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

export const AnimationTest: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Test Animation</Button>
      <DialogOverlay className="[--modal-animation-duration-in:500ms] [--modal-animation-duration-out:300ms]">
        <Dialog {...args}>
          <DialogHeader>
            <DialogTitle>Animation Test Dialog</DialogTitle>
            <Button variant="ghost" className="h-6 w-6 p-0" slot="close">
              <X size={16} />
            </Button>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              This dialog should animate smoothly on open and close. The animations are
              based on React Aria&apos;s data-entering and data-exiting states.
            </DialogDescription>
            <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-800">
                ✨ <strong>Animation Features:</strong>
              </p>
              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                <li>• Overlay fades in/out smoothly</li>
                <li>• Content scales and translates</li>
                <li>• 300ms duration with smooth easing</li>
                <li>• Uses React Aria data attributes</li>
              </ul>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">Cancel</Button>
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
          "Test dialog with enhanced animations based on React Aria documentation. Shows smooth overlay fade and content scale animations.",
      },
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button variant="primary">Open Dialog</Button>
      <DialogOverlay>
        <Dialog {...args}>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <Button variant="ghost" className="h-6 w-6 p-0" slot="close">
              <X size={16} />
            </Button>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              This is a basic dialog example. You can place any content here,
              including forms, alerts, or other interactive elements.
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
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
                <Button variant="ghost" className="h-6 w-6 p-0" slot="close">
                  <X size={16} />
                </Button>
              </DialogHeader>
              <DialogBody>
                <DialogDescription>
                  This dialog uses the &ldquo;{size}&rdquo; size variant. The
                  content area adjusts automatically to fit different screen
                  sizes while maintaining proper proportions.
                </DialogDescription>
              </DialogBody>
              <DialogFooter>
                <Button variant="secondary" slot="close">Cancel</Button>
                <Button variant="primary">Accept</Button>
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

export const ConfirmationDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="destructive">Delete Item</Button>
      <DialogOverlay>
        <Dialog size="sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle size={20} className="text-red-500" />
              Confirm Deletion
            </DialogTitle>
            <Button variant="ghost" className="h-6 w-6 p-0" slot="close">
              <X size={16} />
            </Button>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              Are you sure you want to delete this item? This action cannot be
              undone and will permanently remove the item from your account.
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">Cancel</Button>
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
          "A confirmation dialog for destructive actions with appropriate visual cues and button styling.",
      },
    },
  },
};

export const InformationDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="primary" leftIcon={<Info size={16} />}>
        Show Info
      </Button>
      <DialogOverlay>
        <Dialog size="md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info size={20} className="text-blue-500" />
              Information
            </DialogTitle>
            <Button variant="ghost" className="h-6 w-6 p-0" slot="close">
              <X size={16} />
            </Button>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              This is an informational dialog that provides important details to
              the user. It can contain rich content, links, and other
              interactive elements.
            </DialogDescription>
            <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-800">
                💡 <strong>Tip:</strong> You can use dialogs to provide
                contextual help and guidance to users without navigating away
                from their current task.
              </p>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="primary">Got it</Button>
          </DialogFooter>
        </Dialog>
      </DialogOverlay>
    </DialogTrigger>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An informational dialog with rich content and a single action button.",
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
              <CheckCircle size={20} className="text-green-500" />
              Success!
            </DialogTitle>
            <Button variant="ghost" className="h-6 w-6 p-0" slot="close">
              <X size={16} />
            </Button>
          </DialogHeader>
          <DialogBody>
            <DialogDescription>
              Your action has been completed successfully. All changes have been
              saved and will take effect immediately.
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <Button variant="primary">Continue</Button>
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

export const FormDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="primary">Edit Profile</Button>
      <DialogOverlay>
        <Dialog size="lg">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <Button variant="ghost" className="h-6 w-6 p-0" slot="close">
              <X size={16} />
            </Button>
          </DialogHeader>
          <DialogBody>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  placeholder="Tell us about yourself"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="I'm a developer passionate about creating great user experiences."
                />
              </div>
            </form>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">Cancel</Button>
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
          "A form dialog for editing user information with multiple input fields.",
      },
    },
  },
};

export const NoHeaderDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="ghost">Open Simple Dialog</Button>
      <DialogOverlay>
        <Dialog size="sm">
          <DialogBody>
            <DialogDescription className="text-center py-4">
              This is a simple dialog without a header. It&rsquo;s useful for
              quick confirmations or brief messages that don&rsquo;t need a
              title.
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">Cancel</Button>
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

export const LargeContentDialog: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="primary">View Terms</Button>
      <DialogOverlay>
        <Dialog size="2xl">
          <DialogHeader>
            <DialogTitle>Terms and Conditions</DialogTitle>
            <Button variant="ghost" className="h-6 w-6 p-0" slot="close">
              <X size={16} />
            </Button>
          </DialogHeader>
          <DialogBody className="max-h-96 overflow-y-auto">
            <div className="prose prose-sm">
              <p>
                Welcome to our Terms and Conditions. Please read these terms
                carefully before using our service.
              </p>
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing and using this service, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
              <h3>2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the
                materials on our website for personal, non-commercial transitory
                viewing only.
              </p>
              <h3>3. Disclaimer</h3>
              <p>
                The materials on our website are provided on an &lsquo;as
                is&rsquo; basis. We make no warranties, expressed or implied,
                and hereby disclaim and negate all other warranties including
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
              <h3>4. Limitations</h3>
              <p>
                In no event shall our company or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on our website.
              </p>
              <h3>5. Privacy Policy</h3>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how
                we collect, use, and protect your information when you use our
                service.
              </p>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">Decline</Button>
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

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Press Tab to navigate, Enter/Space to open, Escape to close
      </p>
      <DialogTrigger>
        <Button variant="primary">Accessible Dialog</Button>
        <DialogOverlay>
          <Dialog size="md">
            <DialogHeader>
              <DialogTitle>Accessibility Features</DialogTitle>
              <Button variant="ghost" className="h-6 w-6 p-0" slot="close" aria-label="Close dialog">
                <X size={16} />
              </Button>
            </DialogHeader>
            <DialogBody>
              <DialogDescription>
                This dialog demonstrates accessibility features:
              </DialogDescription>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Focus is trapped within the dialog</li>
                <li>• Escape key closes the dialog</li>
                <li>• Proper ARIA attributes are applied</li>
                <li>• Screen reader friendly</li>
                <li>• Keyboard navigation support</li>
              </ul>
            </DialogBody>
            <DialogFooter>
              <Button variant="secondary" slot="close">Close</Button>
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
          "Demonstration of accessibility features including keyboard navigation and screen reader support.",
      },
    },
  },
};
