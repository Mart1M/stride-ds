import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";
import { Filter, Calendar, User } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Search> = {
  title: "Stride DS/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "focused"],
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
    showClearButton: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    placeholder: "Search...",
    showClearButton: true,
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
    placeholder: "Search for anything...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Search Products",
    placeholder: "Enter product name or keywords...",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Global Search",
    placeholder: "Search across all content...",
    helperText: 'Use quotes for exact matches, e.g. "design system"',
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Quick search...",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Search here...",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Search for products, articles, or help...",
  },
};

export const WithoutClearButton: Story = {
  args: {
    placeholder: "Search without clear button...",
    showClearButton: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Search is disabled...",
    isDisabled: true,
    defaultValue: "Cannot search right now",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <Search
          {...args}
          value={value}
          onValueChange={setValue}
          placeholder="Type to search..."
        />
        <div className="text-sm [color:var(--text-secondary)]">
          Current value: "{value}"
        </div>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Search
        size="sm"
        label="Small Search"
        placeholder="Small search input..."
      />
      <Search
        size="md"
        label="Medium Search"
        placeholder="Medium search input..."
      />
      <Search
        size="lg"
        label="Large Search"
        placeholder="Large search input..."
      />
    </div>
  ),
};

export const SearchVariants: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Search
        label="Default Search"
        placeholder="Default search state..."
        defaultValue=""
      />
      <Search
        label="With Content"
        placeholder="Search..."
        defaultValue="design system"
      />
      <Search
        label="Disabled Search"
        placeholder="Disabled search..."
        isDisabled
        defaultValue="Cannot modify"
      />
    </div>
  ),
};

export const SearchExamples: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-4">
          Search Use Cases
        </h3>

        <div className="space-y-4">
          <Search
            label="Product Search"
            placeholder="Search products..."
            helperText="Find items by name, category, or SKU"
          />

          <Search
            label="User Search"
            placeholder="Search users..."
            helperText="Search by name, email, or username"
            size="sm"
          />

          <Search
            label="Global Search"
            placeholder="Search everything..."
            helperText="Search across all content and resources"
            size="lg"
          />

          <Search
            placeholder="Quick filter..."
            showClearButton={false}
            size="sm"
          />
        </div>
      </div>
    </div>
  ),
};

export const WithCustomHandlers: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const handleSearch = (value: string) => {
      setSearchValue(value);
      if (value.length > 2) {
        console.log("Searching for:", value);
      }
    };

    const handleClear = () => {
      setSearchHistory((prev) => [...prev, searchValue]);
      console.log("Search cleared, previous value:", searchValue);
    };

    return (
      <div className="space-y-4 w-96">
        <Search
          label="Advanced Search"
          placeholder="Search with custom handlers..."
          value={searchValue}
          onValueChange={handleSearch}
          onClear={handleClear}
          helperText="Check console for search events"
        />

        {searchHistory.length > 0 && (
          <div className="text-sm [color:var(--text-secondary)]">
            <div className="font-medium mb-1">Search History:</div>
            <ul className="list-disc list-inside space-y-1">
              {searchHistory.slice(-3).map((term, index) => (
                <li key={index}>"{term}"</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

// Mock data for live search examples
const mockData = [
  {
    id: "1",
    title: "React Components",
    description: "Reusable UI components built with React",
    category: "Development",
  },
  {
    id: "2",
    title: "Design System",
    description: "Complete design system documentation",
    category: "Design",
  },
  {
    id: "3",
    title: "API Documentation",
    description: "REST API endpoints and examples",
    category: "Development",
  },
  {
    id: "4",
    title: "User Interface Guidelines",
    description: "UI/UX best practices and guidelines",
    category: "Design",
  },
  {
    id: "5",
    title: "TypeScript Guide",
    description: "Complete guide to TypeScript development",
    category: "Development",
  },
  {
    id: "6",
    title: "Color Palette",
    description: "Brand colors and accessibility guidelines",
    category: "Design",
  },
  {
    id: "7",
    title: "Authentication Flow",
    description: "User authentication and authorization",
    category: "Security",
  },
  {
    id: "8",
    title: "Testing Strategy",
    description: "Unit and integration testing approaches",
    category: "Testing",
  },
  {
    id: "9",
    title: "Performance Optimization",
    description: "Frontend performance best practices",
    category: "Performance",
  },
  {
    id: "10",
    title: "Deployment Guide",
    description: "CI/CD and deployment workflows",
    category: "DevOps",
  },
];

export const LiveSearchCustomHighlighting: Story = {
  render: () => {
    const [searchValue1, setSearchValue1] = useState("");
    const [searchValue2, setSearchValue2] = useState("");
    const [searchValue3, setSearchValue3] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = (query: string) => {
      return new Promise<any[]>((resolve) => {
        setTimeout(() => {
          const results = mockData.filter(
            (item) =>
              item.title.toLowerCase().includes(query.toLowerCase()) ||
              item.description.toLowerCase().includes(query.toLowerCase()) ||
              item.category.toLowerCase().includes(query.toLowerCase())
          );
          resolve(results);
        }, 200);
      });
    };

    return (
      <div className="space-y-4 w-96">
        <Search
          label="Default Highlighting (Yellow)"
          placeholder="Default highlight style..."
          value={searchValue1}
          onValueChange={setSearchValue1}
          enableLiveSearch
          enableHighlighting // Uses default yellow highlighting
          onSearch={handleSearch}
          onResultSelect={(result) => {
            setSearchValue(result.title);
            console.log("Selected:", result);
          }}
          helperText="Default warning-subtle background highlighting"
          minSearchLength={1}
        />

        <Search
          label="Custom Blue Highlighting"
          placeholder="Custom blue highlight style..."
          value={searchValue2}
          onValueChange={setSearchValue2}
          enableLiveSearch
          enableHighlighting
          highlightClassName="bg-blue-200 [color:var(--text-primary)] px-1 py-0.5 rounded-sm font-bold border border-blue-300"
          onSearch={handleSearch}
          onResultSelect={(result) => {
            setSearchValue(result.title);
            console.log("Selected:", result);
          }}
          helperText="Custom blue highlighting with border"
          minSearchLength={1}
        />

        <Search
          label="Disabled Highlighting"
          placeholder="No highlighting..."
          value={searchValue3}
          onValueChange={setSearchValue3}
          enableLiveSearch
          enableHighlighting={false}
          onSearch={handleSearch}
          onResultSelect={(result) => {
            setSearchValue(result.title);
            console.log("Selected:", result);
          }}
          helperText="Highlighting is completely disabled"
          minSearchLength={1}
        />
        <div className="text-sm [color:var(--text-secondary)] mt-4">
          <div className="font-medium mb-2">Try searching for:</div>
          <div className="flex flex-wrap gap-2">
            {[
              "react",
              "design",
              "api",
              "typescript",
              "components",
              "authentication",
              "testing",
            ].map((keyword) => (
              <button
                key={keyword}
                onClick={() => setSearchValue(keyword)}
                className="px-2 py-1 text-xs rounded [background-color:var(--bg-secondary)] [color:var(--text-secondary)] hover:[background-color:var(--bg-tertiary)] transition-colors"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
