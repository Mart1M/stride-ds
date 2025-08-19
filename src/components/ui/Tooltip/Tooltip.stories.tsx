import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tooltip, TooltipTrigger, TooltipWrapper } from "./Tooltip";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Info, HelpCircle, AlertTriangle, CheckCircle, XCircle, User } from "lucide-react";

const meta: Meta<typeof TooltipWrapper> = {
  title: "UI/Tooltip",
  component: TooltipWrapper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: 'Tooltip component provides contextual information on hover or focus. Built on React Aria for accessibility.',
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
      options: ["top", "bottom", "left", "right", "top start", "top end", "bottom start", "bottom end"],
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

// === BASIC STORIES ===

export const Default: Story = {
  args: {
    content: "This is a helpful tooltip",
    children: <Button>Hover me</Button>,
  },
};

export const BasicUsage: Story = {
  name: "Basic Usage",
  render: () => (
    <div className="flex flex-wrap gap-6 items-center">
      <TooltipWrapper content="Simple tooltip">
        <Button variant="secondary">Hover me</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Information tooltip">
        <Button variant="primary">Primary action</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Success action completed">
        <Button variant="secondary">
          <CheckCircle className="w-4 h-4" />
          Success
        </Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Warning: This action is irreversible">
        <Button variant="secondary">
          <AlertTriangle className="w-4 h-4" />
          Warning
        </Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Delete permanently">
        <Button variant="destructive">
          <XCircle className="w-4 h-4" />
          Delete
        </Button>
      </TooltipWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic tooltip usage with different button types.',
      },
    },
  },
};

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="flex gap-6 items-center">
      <TooltipWrapper content="Small tooltip" size="sm">
        <Button size="sm">Small</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Medium tooltip with more content" size="md">
        <Button size="md">Medium</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Large tooltip with even more detailed content that can span multiple lines" size="lg">
        <Button size="lg">Large</Button>
      </TooltipWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes for various content lengths.',
      },
    },
  },
};

export const AllPlacements: Story = {
  name: "All Placements",
  render: () => (
    <div className="grid grid-cols-3 gap-8 items-center justify-items-center min-h-[300px]">
      {/* Top row */}
      <TooltipWrapper content="Top start placement" placement="top start">
        <Button variant="secondary">Top Start</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Top placement" placement="top">
        <Button variant="secondary">Top</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Top end placement" placement="top end">
        <Button variant="secondary">Top End</Button>
      </TooltipWrapper>
      
      {/* Middle row */}
      <TooltipWrapper content="Left placement" placement="left">
        <Button variant="secondary">Left</Button>
      </TooltipWrapper>
      
      <div className="flex items-center justify-center">
        <span className="text-sm text-gray-500">Center Reference</span>
      </div>
      
      <TooltipWrapper content="Right placement" placement="right">
        <Button variant="secondary">Right</Button>
      </TooltipWrapper>
      
      {/* Bottom row */}
      <TooltipWrapper content="Bottom start placement" placement="bottom start">
        <Button variant="secondary">Bottom Start</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Bottom placement" placement="bottom">
        <Button variant="secondary">Bottom</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Bottom end placement" placement="bottom end">
        <Button variant="secondary">Bottom End</Button>
      </TooltipWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available placement options for positioning tooltips.',
      },
    },
  },
};

// === INTERACTIVE STORIES ===

export const WithDifferentTriggers: Story = {
  name: "Different Triggers",
  render: () => (
    <div className="flex flex-wrap gap-6 items-center">
      <TooltipWrapper content="Tooltip on button" delay={300}>
        <Button>Button Trigger</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Tooltip on badge" delay={300}>
        <Badge variant="secondary">Badge Trigger</Badge>
      </TooltipWrapper>
      
      <TooltipWrapper content="Tooltip on icon" delay={300}>
        <div className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
          <Info className="w-5 h-5 text-gray-600" />
        </div>
      </TooltipWrapper>
      
      <TooltipWrapper content="Click me for more info" delay={300}>
        <button 
          className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
          style={{
            color: 'var(--interactive-primary)',
          }}
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </TooltipWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can be attached to any interactive element.',
      },
    },
  },
};

export const WithDelays: Story = {
  name: "Different Delays",
  render: () => (
    <div className="flex gap-6 items-center">
      <TooltipWrapper content="Instant tooltip (0ms)" delay={0}>
        <Button variant="secondary">Instant</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Quick tooltip (300ms)" delay={300}>
        <Button variant="secondary">Quick</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Normal tooltip (700ms)" delay={700}>
        <Button variant="secondary">Normal</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="Slow tooltip (1500ms)" delay={1500}>
        <Button variant="secondary">Slow</Button>
      </TooltipWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different delay timings before the tooltip appears.',
      },
    },
  },
};

export const ComplexContent: Story = {
  name: "Complex Content",
  render: () => (
    <div className="flex gap-6 items-center">
      <TooltipWrapper 
        content={
          <div className="space-y-1">
            <div className="font-semibold">User Information</div>
            <div className="text-xs opacity-90">Click to view profile</div>
          </div>
        }
        size="lg"
      >
        <Button variant="secondary">
          <User className="w-4 h-4" />
          Profile
        </Button>
      </TooltipWrapper>
      
      <TooltipWrapper 
        content={
          <div>
            <div className="font-medium">Warning</div>
            <div className="text-xs mt-1">This action cannot be undone</div>
          </div>
        }
        size="lg"
      >
        <Button variant="destructive">Delete</Button>
      </TooltipWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can contain complex content including multiple lines and styling.',
      },
    },
  },
};

export const DisabledState: Story = {
  name: "Disabled State",
  render: () => (
    <div className="flex gap-6 items-center">
      <TooltipWrapper content="This tooltip is enabled">
        <Button>Enabled Tooltip</Button>
      </TooltipWrapper>
      
      <TooltipWrapper content="This tooltip is disabled" isDisabled>
        <Button variant="secondary">Disabled Tooltip</Button>
      </TooltipWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can be disabled when not needed.',
      },
    },
  },
};

// === ACCESSIBILITY STORY ===

export const AccessibilityDemo: Story = {
  name: "Accessibility Demo",
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Keyboard Navigation</h3>
        <p className="text-sm text-gray-600">Use Tab to navigate and focus elements. Tooltips appear on focus.</p>
        <div className="flex gap-4">
          <TooltipWrapper content="Accessible with keyboard navigation">
            <Button>Tab to me</Button>
          </TooltipWrapper>
          <TooltipWrapper content="Also keyboard accessible">
            <Button variant="secondary">And me</Button>
          </TooltipWrapper>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Screen Reader Support</h3>
        <p className="text-sm text-gray-600">Tooltips are announced by screen readers via aria-describedby.</p>
        <TooltipWrapper content="This tooltip provides additional context for screen readers">
          <Button>Accessible Content</Button>
        </TooltipWrapper>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates accessibility features including keyboard navigation and screen reader support.',
      },
    },
  },
};

// === USAGE WITH MANUAL COMPONENTS ===

export const ManualComponents: Story = {
  name: "Manual Components",
  render: () => (
    <div className="flex gap-6 items-center">
      <TooltipTrigger>
        <>
          <Button variant="secondary">Custom Trigger</Button>
          <Tooltip placement="top">
            Custom tooltip with manual components
          </Tooltip>
        </>
      </TooltipTrigger>
      
      <TooltipTrigger>
        <>
          <Badge variant="outline">Hover Badge</Badge>
          <Tooltip size="sm" placement="bottom">
            Small tooltip
          </Tooltip>
        </>
      </TooltipTrigger>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using TooltipTrigger and Tooltip components manually for more control.',
      },
    },
  },
};
