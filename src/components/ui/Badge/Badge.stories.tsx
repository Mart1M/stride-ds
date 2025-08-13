import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Stride DS/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "outline",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    dot: {
      control: { type: "boolean" },
    },
    dotColor: {
      control: { type: "text" },
    },
    numeric: {
      control: { type: "boolean" },
    },
  },
  args: {
    children: "Badge",
    dot: false,
    numeric: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Badge",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const WithDot: Story = {
  args: {
    dot: true,
    children: "With Dot",
  },
};

export const WithCustomDotColor: Story = {
  args: {
    dot: true,
    dotColor: "#ff6b6b",
    children: "Custom Dot Color",
  },
};

export const NumericBadge: Story = {
  args: {
    numeric: true,
    variant: "danger",
    children: "5",
  },
};

export const NumericBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge numeric variant="danger">
        1
      </Badge>
      <Badge numeric variant="danger">
        9
      </Badge>
      <Badge numeric variant="danger">
        12
      </Badge>
      <Badge numeric variant="danger">
        99+
      </Badge>
      <Badge numeric variant="primary">
        3
      </Badge>
      <Badge numeric variant="success">
        •
      </Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithDots: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge dot variant="success">
        Online
      </Badge>
      <Badge dot variant="warning">
        Away
      </Badge>
      <Badge dot variant="danger">
        Offline
      </Badge>
      <Badge dot variant="primary">
        Active
      </Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-2">
          User Status
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge dot variant="success">
            Online
          </Badge>
          <Badge dot variant="warning">
            Away
          </Badge>
          <Badge dot variant="danger">
            Offline
          </Badge>
          <Badge dot variant="secondary">
            Invisible
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-2">
          Order Status
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">New</Badge>
          <Badge variant="warning">Processing</Badge>
          <Badge variant="success">Shipped</Badge>
          <Badge variant="outline">Delivered</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-2">
          Priority Levels
        </h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="danger" size="sm">
            High
          </Badge>
          <Badge variant="warning" size="sm">
            Medium
          </Badge>
          <Badge variant="success" size="sm">
            Low
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const NumberBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-2">
          Notification Counts
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <button className="px-4 py-2 [background-color:var(--bg-secondary)] rounded">
              Messages
            </button>
            <Badge
              numeric
              variant="danger"
              size="sm"
              className="absolute -top-2 -right-2"
            >
              12
            </Badge>
          </div>

          <div className="relative">
            <button className="px-4 py-2 [background-color:var(--bg-secondary)] rounded">
              Notifications
            </button>
            <Badge
              numeric
              variant="primary"
              size="sm"
              className="absolute -top-2 -right-2"
            >
              3
            </Badge>
          </div>

          <div className="relative">
            <button className="px-4 py-2 [background-color:var(--bg-secondary)] rounded">
              Updates
            </button>
            <Badge
              numeric
              variant="success"
              size="sm"
              className="absolute -top-2 -right-2"
            >
              •
            </Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};
