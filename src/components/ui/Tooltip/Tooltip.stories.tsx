import type { Meta, StoryObj } from "@storybook/nextjs";
import { TooltipWrapper } from "./Tooltip";
import { Button } from "../Button";

const meta: Meta<typeof TooltipWrapper> = {
  title: "UI/Tooltip",
  component: TooltipWrapper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tooltip component provides contextual information on hover or focus. Built on React Aria for accessibility.",
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // Ensure tooltips are accessible
            id: "aria-describedby",
            enabled: true,
          },
          {
            // Check color contrast
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
      options: ["sm", "md", "lg"],
      description: "Size variant of the tooltip",
    },
    placement: {
      control: { type: "select" },
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "top start",
        "top end",
        "bottom start",
        "bottom end",
      ],
      description: "Position of the tooltip relative to the trigger",
    },
    delay: {
      control: { type: "number", min: 0, max: 2000, step: 100 },
      description: "Delay in milliseconds before showing the tooltip",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the tooltip is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "This is a helpful tooltip",
    children: <Button>Hover me</Button>,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <TooltipWrapper content="Small tooltip" size="sm">
        <Button size="sm">Small</Button>
      </TooltipWrapper>

      <TooltipWrapper content="Medium tooltip with more content" size="md">
        <Button size="md">Medium</Button>
      </TooltipWrapper>

      <TooltipWrapper
        content="Large tooltip with even more detailed content that can span multiple lines"
        size="lg"
      >
        <Button size="lg">Large</Button>
      </TooltipWrapper>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <TooltipWrapper content="Top tooltip" placement="top">
        <Button variant="secondary">Top</Button>
      </TooltipWrapper>

      <TooltipWrapper content="Bottom tooltip" placement="bottom">
        <Button variant="secondary">Bottom</Button>
      </TooltipWrapper>

      <TooltipWrapper content="Left tooltip" placement="left">
        <Button variant="secondary">Left</Button>
      </TooltipWrapper>

      <TooltipWrapper content="Right tooltip" placement="right">
        <Button variant="secondary">Right</Button>
      </TooltipWrapper>
    </div>
  ),
};
