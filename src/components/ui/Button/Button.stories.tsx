import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./Button";
import { Star, Download, ArrowRight } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Stride DS/Button",
  component: Button,
  parameters: {
    layout: "centered",
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
