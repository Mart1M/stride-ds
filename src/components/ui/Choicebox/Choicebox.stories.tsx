import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Choicebox, ChoiceboxRadio } from "./Choicebox";
import { RadioGroup } from "@/components/ui/Radio";

const meta = {
  title: "Stride DS/Choicebox",
  component: Choicebox,
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
  },
} satisfies Meta<typeof Choicebox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Basic Plan",
    description: "Perfect for individuals getting started with our platform.",
    isSelected: undefined,
  },
  argTypes: {
    isSelected: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};

export const WithLongDescription: Story = {
  args: {
    title: "Premium Plan",
    description:
      "Ideal for growing teams that need advanced features, priority support, and enhanced security. Includes unlimited projects, collaboration tools, and detailed analytics.",
    isSelected: undefined,
  },
  argTypes: {
    isSelected: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const TitleOnly: Story = {
  args: {
    title: "Enterprise Plan",
    isSelected: undefined,
  },
  argTypes: {
    isSelected: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};

export const TitleOnlyCentered: Story = {
  render: () => (
    <div className="max-w-sm">
      <Choicebox
        title="Centered Title"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 max-w-sm">
      <Choicebox
        size="sm"
        title="Small Plan"
        description="Compact option for basic needs."
      />
      <Choicebox
        size="md"
        title="Medium Plan"
        description="Standard option with balanced features and pricing."
      />
      <Choicebox
        size="lg"
        title="Large Plan"
        description="Comprehensive solution with all features included."
      />
    </div>
  ),
};

export const RadioVariant: Story = {
  render: () => (
    <RadioGroup label="Choose your plan" className="max-w-sm">
      <ChoiceboxRadio
        value="basic"
        title="Basic Plan"
        description="Perfect for individuals getting started."
      />
      <ChoiceboxRadio
        value="pro"
        title="Pro Plan"
        description="Great for small teams and growing businesses."
      />
      <ChoiceboxRadio
        value="enterprise"
        title="Enterprise Plan"
        description="Complete solution for large organizations."
      />
    </RadioGroup>
  ),
};

export const RadioTitleOnly: Story = {
  render: () => (
    <RadioGroup label="Select option" className="max-w-sm">
      <ChoiceboxRadio value="option1" title="Option 1" />
      <ChoiceboxRadio value="option2" title="Option 2" />
      <ChoiceboxRadio value="option3" title="Option 3" />
    </RadioGroup>
  ),
};

export const MixedVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-6 max-w-sm">
      <div>
        <h3 className="font-semibold mb-3">Checkbox Variants</h3>
        <div className="flex flex-col space-y-3">
          <Choicebox
            title="Enable Feature A"
            description="This feature provides advanced functionality."
          />
          <Choicebox
            title="Enable Feature B"
          />
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3">Radio Variants</h3>
        <RadioGroup>
          <ChoiceboxRadio
            value="plan1"
            title="Basic Plan"
            description="Essential features for getting started."
          />
          <ChoiceboxRadio
            value="plan2"
            title="Premium Plan"
          />
        </RadioGroup>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 max-w-sm">
      <Choicebox
        title="Unchecked"
        description="This option is not selected."
      />
      <Choicebox
        title="Selected"
        description="This option is currently selected."
        isSelected
      />
      <Choicebox
        title="Indeterminate"
        description="This option has a partial selection state."
        isIndeterminate
      />
      <Choicebox
        title="Disabled"
        description="This option is disabled and cannot be selected."
        isDisabled
      />
      <Choicebox
        title="Disabled & Selected"
        description="This option is disabled but was previously selected."
        isSelected
        isDisabled
      />
    </div>
  ),
};

export const PlanSelection: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    return (
      <div className="flex flex-col space-y-4 max-w-sm">
        <Choicebox
          title="Free Plan"
          description="Get started with basic features and limited usage."
          isSelected={selectedPlan === "free"}
          onChange={(selected) => {
            if (selected) setSelectedPlan("free");
            else if (selectedPlan === "free") setSelectedPlan(null);
          }}
        />
        <Choicebox
          title="Pro Plan"
          description="Perfect for professionals with advanced features and priority support."
          isSelected={selectedPlan === "pro"}
          onChange={(selected) => {
            if (selected) setSelectedPlan("pro");
            else if (selectedPlan === "pro") setSelectedPlan(null);
          }}
        />
        <Choicebox
          title="Enterprise Plan"
          description="Complete solution for large organizations with custom integrations."
          isSelected={selectedPlan === "enterprise"}
          onChange={(selected) => {
            if (selected) setSelectedPlan("enterprise");
            else if (selectedPlan === "enterprise") setSelectedPlan(null);
          }}
        />
      </div>
    );
  },
};

export const FeatureSelection: Story = {
  render: () => {
    const [features, setFeatures] = useState({
      notifications: false,
      analytics: true,
      api: false,
      support: false,
    });

    const updateFeature = (feature: keyof typeof features) => (selected: boolean) => {
      setFeatures(prev => ({ ...prev, [feature]: selected }));
    };

    return (
      <div className="flex flex-col space-y-4 max-w-md">
        <h3 className="font-semibold text-lg mb-2">Select Features</h3>
        <Choicebox
          title="Push Notifications"
          description="Receive real-time updates about your projects and team activities."
          isSelected={features.notifications}
          onChange={updateFeature("notifications")}
        />
        <Choicebox
          title="Advanced Analytics"
          description="Access detailed insights and reporting tools for better decision making."
          isSelected={features.analytics}
          onChange={updateFeature("analytics")}
        />
        <Choicebox
          title="API Access"
          description="Integrate with third-party tools and build custom solutions."
          isSelected={features.api}
          onChange={updateFeature("api")}
        />
        <Choicebox
          title="Priority Support"
          description="Get 24/7 support with faster response times and dedicated assistance."
          isSelected={features.support}
          onChange={updateFeature("support")}
        />
      </div>
    );
  },
};