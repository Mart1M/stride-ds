import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./Radio";

const meta = {
  title: "Components/Radio",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    isRequired: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Choose your preferred option",
    children: (
      <>
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    label: "Choose your plan",
    description: "Select the plan that best fits your needs",
    children: (
      <>
        <Radio value="basic" description="Perfect for getting started">
          Basic Plan
        </Radio>
        <Radio value="pro" description="Great for growing businesses">
          Pro Plan
        </Radio>
        <Radio value="enterprise" description="Advanced features for large teams">
          Enterprise Plan
        </Radio>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    label: "Select size",
    orientation: "horizontal",
    children: (
      <>
        <Radio value="small">Small</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="large">Large</Radio>
      </>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <RadioGroup label="Small Size" size="sm">
        <Radio value="sm1" size="sm">Small Option 1</Radio>
        <Radio value="sm2" size="sm">Small Option 2</Radio>
      </RadioGroup>
      
      <RadioGroup label="Medium Size" size="md">
        <Radio value="md1" size="md">Medium Option 1</Radio>
        <Radio value="md2" size="md">Medium Option 2</Radio>
      </RadioGroup>
      
      <RadioGroup label="Large Size" size="lg">
        <Radio value="lg1" size="lg">Large Option 1</Radio>
        <Radio value="lg2" size="lg">Large Option 2</Radio>
      </RadioGroup>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-8">
      <RadioGroup label="Default State" defaultValue="option1">
        <Radio value="option1">Selected Option</Radio>
        <Radio value="option2">Unselected Option</Radio>
      </RadioGroup>
      
      <RadioGroup label="Disabled State" isDisabled defaultValue="disabled1">
        <Radio value="disabled1">Disabled Selected</Radio>
        <Radio value="disabled2">Disabled Unselected</Radio>
      </RadioGroup>
      
      <RadioGroup label="Required Field" isRequired>
        <Radio value="req1">Required Option 1</Radio>
        <Radio value="req2">Required Option 2</Radio>
      </RadioGroup>
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: "Choose your preference",
    errorMessage: "Please select an option",
    isInvalid: true,
    children: (
      <>
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </>
    ),
  },
};

export const ComplexExample: Story = {
  render: () => (
    <RadioGroup
      label="Subscription Plan"
      description="Choose the plan that works best for you"
      defaultValue="pro"
    >
      <Radio 
        value="free" 
        description="Free forever with basic features"
      >
        Free Plan - $0/month
      </Radio>
      <Radio 
        value="pro" 
        description="Everything in Free plus advanced analytics"
      >
        Pro Plan - $19/month
      </Radio>
      <Radio 
        value="enterprise" 
        description="Everything in Pro plus priority support"
      >
        Enterprise - $99/month
      </Radio>
    </RadioGroup>
  ),
};