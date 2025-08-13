import type { Meta, StoryObj } from '@storybook/react';
import { Select, type SelectOption } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Stride DS/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Select component built with React Aria ComboBox for accessibility and keyboard navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    isRequired: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

const optionsWithDisabled: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2 (Disabled)', disabled: true },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

const countryOptions: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
];

const longOptions: SelectOption[] = Array.from({ length: 50 }, (_, i) => ({
  value: `item-${i + 1}`,
  label: `Item ${i + 1}`,
}));

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Choose a fruit...',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    options: defaultOptions,
    placeholder: 'Small select...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    options: defaultOptions,
    placeholder: 'Large select...',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: optionsWithDisabled,
    placeholder: 'Select an option...',
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Disabled select...',
    isDisabled: true,
  },
};

export const Required: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Required selection...',
    isRequired: true,
  },
};

export const Countries: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country...',
  },
};

export const LongList: Story = {
  args: {
    options: longOptions,
    placeholder: 'Select from many options...',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Choose a fruit...',
    defaultSelectedKey: 'banana',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div>
        <label className="block text-sm font-medium [color:var(--text-primary)] mb-2">
          Small
        </label>
        <Select size="sm" options={defaultOptions} placeholder="Small select..." />
      </div>
      <div>
        <label className="block text-sm font-medium [color:var(--text-primary)] mb-2">
          Medium (Default)
        </label>
        <Select options={defaultOptions} placeholder="Medium select..." />
      </div>
      <div>
        <label className="block text-sm font-medium [color:var(--text-primary)] mb-2">
          Large
        </label>
        <Select size="lg" options={defaultOptions} placeholder="Large select..." />
      </div>
    </div>
  ),
  name: 'All Sizes',
};