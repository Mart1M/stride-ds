import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Stride DS/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['simple', 'numbered'],
    },
    currentPage: {
      control: { type: 'number', min: 1 },
    },
    totalPages: {
      control: { type: 'number', min: 1 },
    },
    showPrevNext: {
      control: { type: 'boolean' },
    },
    showFirstLast: {
      control: { type: 'boolean' },
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'md',
    variant: 'numbered',
    showPrevNext: true,
    showFirstLast: false,
    siblingCount: 1,
  },
};

export const Simple: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        variant="simple"
      />
    );
  },
  args: {
    currentPage: 5,
    totalPages: 20,
    size: 'md',
  },
};

export const WithFirstLast: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        showFirstLast={true}
      />
    );
  },
  args: {
    currentPage: 5,
    totalPages: 20,
    size: 'md',
    variant: 'numbered',
    showPrevNext: true,
    siblingCount: 1,
  },
};

export const LargeSiblingCount: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        siblingCount={2}
      />
    );
  },
  args: {
    currentPage: 10,
    totalPages: 50,
    size: 'md',
    variant: 'numbered',
    showPrevNext: true,
    showFirstLast: true,
  },
};

export const Small: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        size="sm"
      />
    );
  },
  args: {
    currentPage: 3,
    totalPages: 8,
    variant: 'numbered',
    showPrevNext: true,
    showFirstLast: false,
    siblingCount: 1,
  },
};

export const Large: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        size="lg"
      />
    );
  },
  args: {
    currentPage: 7,
    totalPages: 15,
    variant: 'numbered',
    showPrevNext: true,
    showFirstLast: false,
    siblingCount: 1,
  },
};

export const FewPages: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
  },
  args: {
    currentPage: 2,
    totalPages: 3,
    size: 'md',
    variant: 'numbered',
    showPrevNext: true,
    showFirstLast: false,
    siblingCount: 1,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold [color:var(--text-primary)]">Simple Pagination</h3>
        <div className="space-y-2">
          <Pagination variant="simple" currentPage={1} totalPages={10} size="sm" />
          <Pagination variant="simple" currentPage={5} totalPages={20} size="md" />
          <Pagination variant="simple" currentPage={8} totalPages={15} size="lg" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold [color:var(--text-primary)]">Numbered Pagination</h3>
        <div className="space-y-2">
          <Pagination variant="numbered" currentPage={3} totalPages={10} size="sm" showPrevNext={true} />
          <Pagination variant="numbered" currentPage={5} totalPages={20} size="md" showPrevNext={true} showFirstLast={true} />
          <Pagination variant="numbered" currentPage={8} totalPages={15} size="lg" showPrevNext={true} siblingCount={2} />
        </div>
      </div>
    </div>
  ),
};