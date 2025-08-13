import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
  title: "Stride DS/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    isSelected: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    isDisabled: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Enable notifications",
  },
  argTypes: {
    isSelected: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};

export const WithDescription: Story = {
  args: {
    children: "Enable notifications",
    description:
      "Get notified when someone mentions you in a comment or assigns you a task.",
  },
  argTypes: {
    isSelected: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Switch size="sm">Small switch</Switch>
      <Switch size="md">Medium switch</Switch>
      <Switch size="lg">Large switch</Switch>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Switch>Off</Switch>
      <Switch isSelected>On</Switch>
      <Switch isDisabled>Disabled</Switch>
      <Switch isSelected isDisabled>
        Disabled & On
      </Switch>
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    "aria-label": "Toggle feature",
  },
  argTypes: {
    isSelected: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};

export const LongContent: Story = {
  args: {
    children: "Enable advanced notification system",
    description:
      "This will enable the advanced notification system that includes push notifications, email alerts, and in-app notifications. You can customize these settings later in your preferences.",
  },
  argTypes: {
    isSelected: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export const AllSizesWithLabels: Story = {
  render: () => (
    <div className="flex flex-col space-y-6">
      <div>
        <h3 className="text-sm font-medium [color:var(--text-primary)] mb-3">
          Small
        </h3>
        <div className="space-y-3">
          <Switch size="sm">Dark mode</Switch>
          <Switch size="sm" isSelected>
            Auto-save
          </Switch>
          <Switch size="sm" isDisabled>
            Beta features
          </Switch>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium [color:var(--text-primary)] mb-3">
          Medium
        </h3>
        <div className="space-y-3">
          <Switch size="md">Dark mode</Switch>
          <Switch size="md" isSelected>
            Auto-save
          </Switch>
          <Switch size="md" isDisabled>
            Beta features
          </Switch>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium [color:var(--text-primary)] mb-3">
          Large
        </h3>
        <div className="space-y-3">
          <Switch size="lg">Dark mode</Switch>
          <Switch size="lg" isSelected>
            Auto-save
          </Switch>
          <Switch size="lg" isDisabled>
            Beta features
          </Switch>
        </div>
      </div>
    </div>
  ),
};