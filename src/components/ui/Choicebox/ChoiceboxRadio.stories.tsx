import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { ChoiceboxRadio } from "./Choicebox";
import { RadioGroup } from "@/components/ui/Radio";

const meta = {
  title: "Stride DS/ChoiceboxRadio",
  component: ChoiceboxRadio,
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
    value: {
      control: { type: "text" },
    },
  },
  args: {
    size: "md",
    isDisabled: false,
    value: "option",
  },
} satisfies Meta<typeof ChoiceboxRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup className="max-w-sm">
      <ChoiceboxRadio
        {...args}
        title="Basic Plan"
        description="Perfect for individuals getting started with our platform."
      />
    </RadioGroup>
  ),
};

export const TitleOnly: Story = {
  render: (args) => (
    <RadioGroup className="max-w-sm">
      <ChoiceboxRadio
        {...args}
        title="Enterprise Plan"
      />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 max-w-sm">
      <RadioGroup label="Small size">
        <ChoiceboxRadio
          value="sm"
          size="sm"
          title="Small Plan"
          description="Compact option for basic needs."
        />
      </RadioGroup>
      <RadioGroup label="Medium size">
        <ChoiceboxRadio
          value="md"
          size="md"
          title="Medium Plan"
          description="Standard option with balanced features and pricing."
        />
      </RadioGroup>
      <RadioGroup label="Large size">
        <ChoiceboxRadio
          value="lg"
          size="lg"
          title="Large Plan"
          description="Comprehensive solution with all features included."
        />
      </RadioGroup>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 max-w-sm">
      <RadioGroup label="Normal state">
        <ChoiceboxRadio
          value="normal"
          title="Normal Option"
          description="This option is not selected."
        />
      </RadioGroup>
      <RadioGroup label="Selected state" defaultValue="selected">
        <ChoiceboxRadio
          value="selected"
          title="Selected Option"
          description="This option is currently selected."
        />
      </RadioGroup>
      <RadioGroup label="Disabled state">
        <ChoiceboxRadio
          value="disabled"
          title="Disabled Option"
          description="This option is disabled and cannot be selected."
          isDisabled
        />
      </RadioGroup>
    </div>
  ),
};

export const PlanSelection: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState<string>("pro");

    return (
      <RadioGroup 
        value={selectedPlan} 
        onChange={setSelectedPlan}
        label="Choose your plan" 
        className="max-w-sm"
      >
        <ChoiceboxRadio
          value="free"
          title="Free Plan"
          description="Get started with basic features and limited usage."
        />
        <ChoiceboxRadio
          value="pro"
          title="Pro Plan"
          description="Perfect for professionals with advanced features and priority support."
        />
        <ChoiceboxRadio
          value="enterprise"
          title="Enterprise Plan"
          description="Complete solution for large organizations with custom integrations."
        />
      </RadioGroup>
    );
  },
};

export const LongContent: Story = {
  render: () => (
    <RadioGroup label="Select subscription" className="max-w-md">
      <ChoiceboxRadio
        value="basic"
        title="Basic Subscription"
        description="This is a basic subscription with limited features. You get access to core functionality, basic support, and standard updates. Perfect for individuals or small teams just getting started."
      />
      <ChoiceboxRadio
        value="premium"
        title="Premium Subscription"
        description="Our premium offering includes everything in Basic plus advanced analytics, priority support, custom integrations, and early access to new features. Ideal for growing businesses and professional teams."
      />
    </RadioGroup>
  ),
};