import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";
import { useState } from "react";
import { Hash, Star, User, Calendar, MapPin } from "lucide-react";

const meta: Meta<typeof Tag> = {
  title: "Stride DS/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "outline",
        "filled",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    removable: {
      control: { type: "boolean" },
    },
    interactive: {
      control: { type: "boolean" },
    },
  },
  args: {
    children: "Tag",
    removable: false,
    interactive: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Tag",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Filled",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Hash size={14} />,
    children: "With Icon",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <Star size={14} />,
    children: "With Icon",
  },
};

export const Removable: Story = {
  args: {
    removable: true,
    children: "Removable",
    onRemove: () => console.log("Tag removed"),
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    children: "Interactive",
    onClick: () => console.log("Tag clicked"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="danger">Danger</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="filled">Filled</Tag>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag leftIcon={<Hash size={14} />}>Category</Tag>
      <Tag leftIcon={<User size={14} />}>User</Tag>
      <Tag leftIcon={<Calendar size={14} />}>Date</Tag>
      <Tag leftIcon={<MapPin size={14} />}>Location</Tag>
      <Tag rightIcon={<Star size={14} />}>Favorite</Tag>
    </div>
  ),
};

export const RemovableTags: Story = {
  render: () => {
    const [tags, setTags] = useState([
      { id: 1, label: "React", variant: "primary" as const },
      { id: 2, label: "TypeScript", variant: "secondary" as const },
      { id: 3, label: "Design System", variant: "success" as const },
      { id: 4, label: "Storybook", variant: "warning" as const },
    ]);

    const removeTag = (id: number) => {
      setTags(tags.filter((tag) => tag.id !== id));
    };

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              variant={tag.variant}
              removable
              onRemove={() => removeTag(tag.id)}
            >
              {tag.label}
            </Tag>
          ))}
        </div>
        <div className="text-sm [color:var(--text-secondary)]">
          Click the × to remove tags
        </div>
      </div>
    );
  },
};

export const InteractiveTags: Story = {
  render: () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const toggleTag = (tag: string) => {
      setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    };

    const tags = ["React", "Vue", "Angular", "Svelte", "Next.js"];

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              key={tag}
              variant={selectedTags.includes(tag) ? "primary" : "outline"}
              interactive
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
        <div className="text-sm [color:var(--text-secondary)]">
          Selected: {selectedTags.join(", ") || "None"}
        </div>
      </div>
    );
  },
};

export const TagExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-3">
          Skills & Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="primary" leftIcon={<Hash size={12} />}>
            JavaScript
          </Tag>
          <Tag variant="primary" leftIcon={<Hash size={12} />}>
            TypeScript
          </Tag>
          <Tag variant="secondary" leftIcon={<Hash size={12} />}>
            React
          </Tag>
          <Tag variant="secondary" leftIcon={<Hash size={12} />}>
            Vue
          </Tag>
          <Tag variant="success" leftIcon={<Hash size={12} />}>
            Node.js
          </Tag>
          <Tag variant="warning" leftIcon={<Hash size={12} />}>
            Python
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-3">
          Project Status
        </h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="success" size="sm">
            Active
          </Tag>
          <Tag variant="warning" size="sm">
            In Progress
          </Tag>
          <Tag variant="danger" size="sm">
            Blocked
          </Tag>
          <Tag variant="outline" size="sm">
            On Hold
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-3">
          User Roles
        </h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="filled" leftIcon={<User size={14} />}>
            Admin
          </Tag>
          <Tag variant="primary" leftIcon={<User size={14} />}>
            Editor
          </Tag>
          <Tag variant="secondary" leftIcon={<User size={14} />}>
            Viewer
          </Tag>
          <Tag variant="outline" leftIcon={<User size={14} />}>
            Guest
          </Tag>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-3">
          Filter Tags (Removable)
        </h3>
        <div className="flex flex-wrap gap-2">
          <Tag
            variant="primary"
            removable
            onRemove={() => console.log("Removed")}
          >
            Category: Design
          </Tag>
          <Tag
            variant="secondary"
            removable
            onRemove={() => console.log("Removed")}
          >
            Author: John Doe
          </Tag>
          <Tag
            variant="success"
            removable
            onRemove={() => console.log("Removed")}
          >
            Status: Published
          </Tag>
        </div>
      </div>
    </div>
  ),
};
