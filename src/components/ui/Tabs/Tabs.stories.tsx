import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs";
import {
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Palette,
  Database,
  FileText,
  BarChart3,
  Code,
} from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "Stride DS/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Tabs component built with React Aria for creating organized content sections with keyboard navigation and accessibility support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    defaultSelectedKey: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// === PRIMARY STORIES ===

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The default tabs with horizontal orientation and standard styling.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-md">
      <Tabs defaultSelectedKey="tab1">
        <TabList>
          <Tab id="tab1">Overview</Tab>
          <Tab id="tab2">Analytics</Tab>
          <Tab id="tab3">Settings</Tab>
        </TabList>
        <TabPanel id="tab1">
          <div className="p-4">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Overview
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Welcome to the overview section. Here you can see a summary of
              your account and recent activity.
            </p>
          </div>
        </TabPanel>
        <TabPanel id="tab2">
          <div className="p-4">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Analytics
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              View detailed analytics and performance metrics for your account.
            </p>
          </div>
        </TabPanel>
        <TabPanel id="tab3">
          <div className="p-4">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Settings
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Manage your account settings and preferences here.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Showcase of all available tab variants: default, soft, outline, and ghost.",
      },
    },
  },
  render: () => (
    <div className="space-y-8 w-full max-w-2xl">
      {/* Default Variant */}
      <div>
        <h4
          className="text-sm font-medium mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Default
        </h4>
        <Tabs defaultSelectedKey="default1">
          <TabList variant="default">
            <Tab id="default1">Dashboard</Tab>
            <Tab id="default2">Reports</Tab>
            <Tab id="default3">Settings</Tab>
          </TabList>
          <TabPanel id="default1">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Default variant with underline selection indicator.
            </div>
          </TabPanel>
          <TabPanel id="default2">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Reports content panel.
            </div>
          </TabPanel>
          <TabPanel id="default3">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Settings content panel.
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {/* Soft Variant */}
      <div>
        <h4
          className="text-sm font-medium mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Soft
        </h4>
        <Tabs defaultSelectedKey="soft1">
          <TabList variant="soft">
            <Tab id="soft1" variant="soft">
              <User size={16} className="mr-2" />
              Profile
            </Tab>
            <Tab id="soft2" variant="soft">
              <Bell size={16} className="mr-2" />
              Notifications
            </Tab>
            <Tab id="soft3" variant="soft">
              <Shield size={16} className="mr-2" />
              Security
            </Tab>
          </TabList>
          <TabPanel id="soft1">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Soft variant with rounded background selection.
            </div>
          </TabPanel>
          <TabPanel id="soft2">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Notification settings and preferences.
            </div>
          </TabPanel>
          <TabPanel id="soft3">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Security settings and two-factor authentication.
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {/* Outline Variant */}
      <div>
        <h4
          className="text-sm font-medium mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Outline
        </h4>
        <Tabs defaultSelectedKey="outline1">
          <TabList variant="outline">
            <Tab id="outline1" variant="outline">
              <CreditCard size={16} className="mr-2" />
              Billing
            </Tab>
            <Tab id="outline2" variant="outline">
              <Globe size={16} className="mr-2" />
              Domains
            </Tab>
            <Tab id="outline3" variant="outline">
              <Database size={16} className="mr-2" />
              Storage
            </Tab>
          </TabList>
          <TabPanel id="outline1">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Outline variant with bordered selection.
            </div>
          </TabPanel>
          <TabPanel id="outline2">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Domain management and DNS settings.
            </div>
          </TabPanel>
          <TabPanel id="outline3">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Storage usage and file management.
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {/* Ghost Variant */}
      <div>
        <h4
          className="text-sm font-medium mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Ghost
        </h4>
        <Tabs defaultSelectedKey="ghost1">
          <TabList variant="ghost">
            <Tab id="ghost1" variant="ghost">
              <Palette size={16} className="mr-2" />
              Appearance
            </Tab>
            <Tab id="ghost2" variant="ghost">
              <Code size={16} className="mr-2" />
              Advanced
            </Tab>
            <Tab id="ghost3" variant="ghost">
              <FileText size={16} className="mr-2" />
              Documentation
            </Tab>
          </TabList>
          <TabPanel id="ghost1">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Ghost variant with minimal styling.
            </div>
          </TabPanel>
          <TabPanel id="ghost2">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Advanced settings and developer options.
            </div>
          </TabPanel>
          <TabPanel id="ghost3">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Component documentation and usage examples.
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: "Demonstration of all available tab sizes: small, medium, and large.",
      },
    },
  },
  render: () => (
    <div className="space-y-8 w-full max-w-2xl">
      {/* Small Size */}
      <div>
        <h4
          className="text-sm font-medium mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Small
        </h4>
        <Tabs defaultSelectedKey="small1">
          <TabList variant="soft" size="sm">
            <Tab id="small1" variant="soft" size="sm">
              Tab 1
            </Tab>
            <Tab id="small2" variant="soft" size="sm">
              Tab 2
            </Tab>
            <Tab id="small3" variant="soft" size="sm">
              Tab 3
            </Tab>
          </TabList>
          <TabPanel id="small1">
            <div
              className="p-3 rounded-md text-sm"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Small size tabs are perfect for compact interfaces.
            </div>
          </TabPanel>
          <TabPanel id="small2">
            <div
              className="p-3 rounded-md text-sm"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Content for small tab 2.
            </div>
          </TabPanel>
          <TabPanel id="small3">
            <div
              className="p-3 rounded-md text-sm"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Content for small tab 3.
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {/* Medium Size */}
      <div>
        <h4
          className="text-sm font-medium mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Medium (Default)
        </h4>
        <Tabs defaultSelectedKey="medium1">
          <TabList variant="soft" size="md">
            <Tab id="medium1" variant="soft" size="md">
              Tab 1
            </Tab>
            <Tab id="medium2" variant="soft" size="md">
              Tab 2
            </Tab>
            <Tab id="medium3" variant="soft" size="md">
              Tab 3
            </Tab>
          </TabList>
          <TabPanel id="medium1">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Medium size tabs provide a good balance for most interfaces.
            </div>
          </TabPanel>
          <TabPanel id="medium2">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Content for medium tab 2.
            </div>
          </TabPanel>
          <TabPanel id="medium3">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Content for medium tab 3.
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {/* Large Size */}
      <div>
        <h4
          className="text-sm font-medium mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Large
        </h4>
        <Tabs defaultSelectedKey="large1">
          <TabList variant="soft" size="lg">
            <Tab id="large1" variant="soft" size="lg">
              Tab 1
            </Tab>
            <Tab id="large2" variant="soft" size="lg">
              Tab 2
            </Tab>
            <Tab id="large3" variant="soft" size="lg">
              Tab 3
            </Tab>
          </TabList>
          <TabPanel id="large1">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Large size tabs are ideal for prominent navigation areas.
            </div>
          </TabPanel>
          <TabPanel id="large2">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Content for large tab 2.
            </div>
          </TabPanel>
          <TabPanel id="large3">
            <div
              className="p-4 rounded-md"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              Content for large tab 3.
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  ),
};

export const VerticalOrientation: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tabs with vertical orientation for sidebar-style navigation.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-3xl h-96">
      <Tabs orientation="vertical" defaultSelectedKey="profile">
        <TabList variant="soft" orientation="vertical">
          <Tab id="profile" variant="soft" orientation="vertical">
            <User size={16} className="mr-2" />
            Profile
          </Tab>
          <Tab id="account" variant="soft" orientation="vertical">
            <Settings size={16} className="mr-2" />
            Account
          </Tab>
          <Tab id="notifications" variant="soft" orientation="vertical">
            <Bell size={16} className="mr-2" />
            Notifications
          </Tab>
          <Tab id="security" variant="soft" orientation="vertical">
            <Shield size={16} className="mr-2" />
            Security
          </Tab>
        </TabList>
        <TabPanel id="profile" orientation="vertical">
          <div
            className="p-6 rounded-md h-full"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Profile Settings
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Manage your profile information, avatar, and personal details.
            </p>
            <div className="mt-4 space-y-2">
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Name:</strong>{" "}
                <span style={{ color: "var(--text-secondary)" }}>John Doe</span>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)" }}>Email:</strong>{" "}
                <span style={{ color: "var(--text-secondary)" }}>
                  john@example.com
                </span>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel id="account" orientation="vertical">
          <div
            className="p-6 rounded-md h-full"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Account Settings
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Configure account preferences, subscription, and billing
              information.
            </p>
          </div>
        </TabPanel>
        <TabPanel id="notifications" orientation="vertical">
          <div
            className="p-6 rounded-md h-full"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Notification Preferences
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Choose how and when you want to receive notifications.
            </p>
          </div>
        </TabPanel>
        <TabPanel id="security" orientation="vertical">
          <div
            className="p-6 rounded-md h-full"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Security Settings
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Manage your password, two-factor authentication, and security
              preferences.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  ),
};

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tabs enhanced with icons for better visual navigation.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-2xl">
      <Tabs defaultSelectedKey="dashboard">
        <TabList variant="outline">
          <Tab id="dashboard" variant="outline">
            <BarChart3 size={18} className="mr-2" />
            Dashboard
          </Tab>
          <Tab id="analytics" variant="outline">
            <BarChart3 size={18} className="mr-2" />
            Analytics
          </Tab>
          <Tab id="reports" variant="outline">
            <FileText size={18} className="mr-2" />
            Reports
          </Tab>
          <Tab id="settings" variant="outline">
            <Settings size={18} className="mr-2" />
            Settings
          </Tab>
        </TabList>
        <TabPanel id="dashboard">
          <div
            className="p-6 rounded-md"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <div className="flex items-center mb-4">
              <BarChart3
                size={24}
                style={{ color: "var(--interactive-primary)" }}
                className="mr-3"
              />
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Dashboard Overview
              </h3>
            </div>
            <p>
              Get a comprehensive view of your key metrics, recent activity, and
              important updates in one place.
            </p>
          </div>
        </TabPanel>
        <TabPanel id="analytics">
          <div
            className="p-6 rounded-md"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <div className="flex items-center mb-4">
              <BarChart3
                size={24}
                style={{ color: "var(--interactive-primary)" }}
                className="mr-3"
              />
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Analytics
              </h3>
            </div>
            <p>
              Dive deep into your data with detailed analytics and performance
              insights.
            </p>
          </div>
        </TabPanel>
        <TabPanel id="reports">
          <div
            className="p-6 rounded-md"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <div className="flex items-center mb-4">
              <FileText
                size={24}
                style={{ color: "var(--interactive-primary)" }}
                className="mr-3"
              />
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Reports
              </h3>
            </div>
            <p>
              Generate and view detailed reports for your business analysis and
              decision making.
            </p>
          </div>
        </TabPanel>
        <TabPanel id="settings">
          <div
            className="p-6 rounded-md"
            style={{
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            <div className="flex items-center mb-4">
              <Settings
                size={24}
                style={{ color: "var(--interactive-primary)" }}
                className="mr-3"
              />
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Settings
              </h3>
            </div>
            <p>
              Configure your preferences, account settings, and system
              preferences.
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  ),
};

export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Accessibility features demonstration including keyboard navigation and screen reader support.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-2xl space-y-6">
      <div
        className="p-4 rounded-md"
        style={{
          backgroundColor: "var(--status-info-bg)",
          borderLeft: "4px solid var(--status-info)",
        }}
      >
        <h4
          className="font-semibold mb-2"
          style={{ color: "var(--status-info-text)" }}
        >
          Accessibility Features
        </h4>
        <ul
          className="text-sm space-y-1"
          style={{ color: "var(--text-tertiary)" }}
        >
          <li>
            • Press{" "}
            <kbd className="px-1 py-0.5 rounded text-xs font-mono bg-gray-100 text-gray-800">
              Tab
            </kbd>{" "}
            to navigate between tabs
          </li>
          <li>
            • Press{" "}
            <kbd className="px-1 py-0.5 rounded text-xs font-mono bg-gray-100 text-gray-800">
              Arrow Keys
            </kbd>{" "}
            to move between tabs
          </li>
          <li>
            • Press{" "}
            <kbd className="px-1 py-0.5 rounded text-xs font-mono bg-gray-100 text-gray-800">
              Enter
            </kbd>{" "}
            or{" "}
            <kbd className="px-1 py-0.5 rounded text-xs font-mono bg-gray-100 text-gray-800">
              Space
            </kbd>{" "}
            to activate a tab
          </li>
          <li>• Screen readers announce tab content and selection state</li>
          <li>• Focus indicators are clearly visible</li>
        </ul>
      </div>

      <Tabs defaultSelectedKey="accessibility1">
        <TabList>
          <Tab id="accessibility1">WCAG Compliance</Tab>
          <Tab id="accessibility2">Keyboard Navigation</Tab>
          <Tab id="accessibility3">Screen Readers</Tab>
          <Tab id="accessibility4" isDisabled>
            Disabled Tab
          </Tab>
        </TabList>
        <TabPanel id="accessibility1">
          <div
            className="p-4 rounded-md"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              WCAG 2.1 AA Compliance
            </h3>
            <p
              className="mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              This Tabs component follows Web Content Accessibility Guidelines:
            </p>
            <ul
              className="list-disc list-inside space-y-1 text-sm"
              style={{ color: "var(--text-tertiary)" }}
            >
              <li>Proper ARIA roles and attributes</li>
              <li>Sufficient color contrast ratios</li>
              <li>Focus management and visual indicators</li>
              <li>Semantic HTML structure</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel id="accessibility2">
          <div
            className="p-4 rounded-md"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Keyboard Navigation
            </h3>
            <p
              className="mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              Full keyboard support is provided:
            </p>
            <ul
              className="list-disc list-inside space-y-1 text-sm"
              style={{ color: "var(--text-tertiary)" }}
            >
              <li>Tab key moves focus to the tab list</li>
              <li>Arrow keys navigate between tabs</li>
              <li>Enter and Space activate the focused tab</li>
              <li>Focus wraps around at the ends</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel id="accessibility3">
          <div
            className="p-4 rounded-md"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Screen Reader Support
            </h3>
            <p
              className="mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              Enhanced screen reader experience:
            </p>
            <ul
              className="list-disc list-inside space-y-1 text-sm"
              style={{ color: "var(--text-tertiary)" }}
            >
              <li>Tabs are announced with their role and position</li>
              <li>Selected state is clearly communicated</li>
              <li>Tab panels are associated with their tabs</li>
              <li>Disabled tabs are announced as unavailable</li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  ),
};
