import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Stride DS/Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <div className="w-80 p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A customizable slider component built with React Aria Components for accessibility.

## Features
- **Accessibility**: Full keyboard navigation and screen reader support
- **Customizable**: Multiple sizes and styling options
- **Value formatting**: Custom value display formatting
- **Responsive**: Works across all device sizes
- **Theme support**: Automatic dark/light mode integration

## Usage
\`\`\`tsx
import { Slider } from 'stride-ds';

<Slider 
  label="Volume" 
  defaultValue={[50]} 
  maxValue={100}
  formatValue={(value) => \`\${value}%\`}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the slider",
    },
    showOutput: {
      control: "boolean",
      description: "Whether to show the current value",
    },
    isDisabled: {
      control: "boolean",
      description: "Whether the slider is disabled",
    },
    minValue: {
      control: "number",
      description: "Minimum value",
    },
    maxValue: {
      control: "number",
      description: "Maximum value",
    },
    step: {
      control: "number",
      description: "Step increment",
    },
  },
  args: {
    showOutput: true,
    isDisabled: false,
    minValue: 0,
    maxValue: 100,
    step: 1,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Volume",
    defaultValue: [50],
  },
};

export const WithoutLabel: Story = {
  args: {
    defaultValue: [75],
    label: undefined,
  },
};

export const WithoutOutput: Story = {
  args: {
    label: "Brightness",
    defaultValue: [25],
    showOutput: false,
  },
};

export const CustomFormat: Story = {
  args: {
    label: "Temperature",
    defaultValue: [22],
    minValue: 15,
    maxValue: 30,
    formatValue: (value: number) => `${value}°C`,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Slider",
    defaultValue: [40],
    isDisabled: true,
  },
};

export const PrecisionSlider: Story = {
  args: {
    label: "Precision",
    defaultValue: [3.14],
    minValue: 0,
    maxValue: 10,
    step: 0.01,
    formatValue: (value: number) => value.toFixed(2),
  },
};

export const PercentageSlider: Story = {
  args: {
    label: "Completion",
    defaultValue: [87],
    minValue: 0,
    maxValue: 100,
    formatValue: (value: number) => `${value}%`,
  },
};

export const AudioSlider: Story = {
  args: {
    label: "Audio Level",
    defaultValue: [65],
    minValue: 0,
    maxValue: 100,
    step: 5,
    formatValue: (value: number) => {
      if (value === 0) return "Mute";
      if (value <= 30) return "Low";
      if (value <= 70) return "Medium";
      return "High";
    },
  },
};

// Multiple sliders example
export const MultipleSliders: Story = {
  render: () => (
    <div className="space-y-8 w-full">
      <Slider label="Volume" defaultValue={[25]} />
      <Slider label="Brightness" defaultValue={[50]} />
      <Slider label="Contrast" defaultValue={[75]} />
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [value, setValue] = React.useState([50]);

    const handleChange = (newValue: number | number[]) => {
      setValue(Array.isArray(newValue) ? newValue : [newValue]);
    };

    return (
      <div className="space-y-6 w-full">
        <Slider
          label="Master Volume"
          value={value}
          onChange={handleChange}
          formatValue={(v) => `${v}%`}
        />

        <div className="p-4 bg-[var(--bg-secondary)] rounded-lg">
          <p className="text-sm text-[var(--text-secondary)]">
            Current value: <strong>{value[0]}%</strong>
          </p>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">
            This slider is controlled and updates the display above.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
