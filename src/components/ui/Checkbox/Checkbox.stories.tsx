import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Stride DS/Checkbox",
  component: Checkbox,
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
    isIndeterminate: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    isDisabled: false,
    // isSelected et isIndeterminate ne sont pas définis par défaut
    // pour permettre à React Aria de gérer l'état
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Accept terms and conditions",
    isSelected: undefined, // Permet à React Aria de gérer l'état
  },
  argTypes: {
    isSelected: { table: { disable: true } }, // Cache le contrôle Storybook
    onChange: { table: { disable: true } },
  },
};

export const WithDescription: Story = {
  args: {
    children: "Enable notifications",
    description:
      "Get notified when someone mentions you in a comment or assigns you a task.",
    isSelected: undefined, // Permet à React Aria de gérer l'état
  },
  argTypes: {
    isSelected: { table: { disable: true } }, // Cache le contrôle Storybook
    onChange: { table: { disable: true } },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Checkbox size="sm">Small checkbox</Checkbox>
      <Checkbox size="md">Medium checkbox</Checkbox>
      <Checkbox size="lg">Large checkbox</Checkbox>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Checkbox>Unchecked</Checkbox>
      <Checkbox isSelected>Checked</Checkbox>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
      <Checkbox isSelected isDisabled>
        Disabled & Checked
      </Checkbox>
      <Checkbox isIndeterminate isDisabled>
        Disabled & Indeterminate
      </Checkbox>
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    "aria-label": "Select item",
    isSelected: undefined, // Permet à React Aria de gérer l'état
  },
  argTypes: {
    isSelected: { table: { disable: true } }, // Cache le contrôle Storybook
    onChange: { table: { disable: true } },
  },
};

export const LongContent: Story = {
  args: {
    children: "I agree to the Terms of Service and Privacy Policy",
    description:
      "By checking this box, you acknowledge that you have read and agree to our Terms of Service and Privacy Policy. This includes how we collect, use, and share your data, as well as your rights regarding your personal information.",
    isSelected: undefined, // Permet à React Aria de gérer l'état
  },
  argTypes: {
    isSelected: { table: { disable: true } }, // Cache le contrôle Storybook
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

export const Indeterminate: Story = {
  render: (args) => {
    const [parentChecked, setParentChecked] = useState(false);
    const [child1Checked, setChild1Checked] = useState(false);
    const [child2Checked, setChild2Checked] = useState(true);
    const [child3Checked, setChild3Checked] = useState(false);

    const childrenStates = [child1Checked, child2Checked, child3Checked];
    const allChecked = childrenStates.every(Boolean);
    const someChecked = childrenStates.some(Boolean);
    const isIndeterminate = someChecked && !allChecked;

    const handleParentChange = (checked: boolean) => {
      setParentChecked(checked);
      setChild1Checked(checked);
      setChild2Checked(checked);
      setChild3Checked(checked);
    };

    return (
      <div className="flex flex-col space-y-3">
        <div>
          <Checkbox
            isSelected={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={handleParentChange}
            size={args.size}
          >
            Select all
          </Checkbox>
        </div>

        <div className="ml-6 flex flex-col space-y-2">
          <Checkbox
            isSelected={child1Checked}
            onChange={setChild1Checked}
            size={args.size}
          >
            Option 1
          </Checkbox>
          <Checkbox
            isSelected={child2Checked}
            onChange={setChild2Checked}
            size={args.size}
          >
            Option 2
          </Checkbox>
          <Checkbox
            isSelected={child3Checked}
            onChange={setChild3Checked}
            size={args.size}
          >
            Option 3
          </Checkbox>
        </div>
      </div>
    );
  },
};
