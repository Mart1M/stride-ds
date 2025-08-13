import type { Meta, StoryObj } from "@storybook/nextjs";
import { Input } from "./Input";
import { Search, Mail, Eye, EyeOff, User, Lock } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Stride DS/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    helperText: {
      control: { type: "text" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    isRequired: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    placeholder: "Enter text...",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Must be at least 3 characters long",
  },
};

export const Required: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
    isRequired: true,
    helperText: "This field is required",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    errorMessage: "Please enter a valid email address",
    defaultValue: "invalid-email",
  },
};

export const Success: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    variant: "success",
    helperText: "Username is available!",
    defaultValue: "johndoe",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    isDisabled: true,
    defaultValue: "Cannot edit this",
  },
};

export const Small: Story = {
  args: {
    label: "Small Input",
    size: "sm",
    placeholder: "Small size input",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Input",
    size: "md",
    placeholder: "Medium size input",
  },
};

export const Large: Story = {
  args: {
    label: "Large Input",
    size: "lg",
    placeholder: "Large size input",
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Newsletter",
    placeholder: "Enter your email",
    leftIcon: <Mail size={16} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    rightIcon: <Mail size={16} />,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    leftIcon: <Lock size={16} />,
    rightIcon: <Eye size={16} />,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Small Input"
        size="sm"
        placeholder="Small size"
        leftIcon={<User size={14} />}
      />
      <Input
        label="Medium Input"
        size="md"
        placeholder="Medium size"
        leftIcon={<User size={16} />}
      />
      <Input
        label="Large Input"
        size="lg"
        placeholder="Large size"
        leftIcon={<User size={18} />}
      />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Default Input"
        placeholder="Default state"
        helperText="This is a helper text"
      />
      <Input
        label="Success Input"
        variant="success"
        placeholder="Success state"
        helperText="Everything looks good!"
        defaultValue="valid@example.com"
      />
      <Input
        label="Error Input"
        errorMessage="This field has an error"
        placeholder="Error state"
        defaultValue="invalid input"
      />
      <Input
        label="Disabled Input"
        isDisabled
        placeholder="Disabled state"
        defaultValue="Cannot edit"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <h3 className="text-lg font-semibold [color:var(--text-primary)]">
        Sign Up Form
      </h3>
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        isRequired
        leftIcon={<User size={16} />}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        isRequired
        leftIcon={<Mail size={16} />}
        helperText="We'll never share your email with anyone else"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Create a password"
        isRequired
        leftIcon={<Lock size={16} />}
        rightIcon={<EyeOff size={16} />}
        helperText="Must be at least 8 characters long"
      />
      <Input
        label="Search"
        placeholder="Search for something..."
        leftIcon={<Search size={16} />}
      />
    </div>
  ),
};
