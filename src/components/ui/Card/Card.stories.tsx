import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";
import { Button } from "../Button";
import { Input } from "../Input";
import {
  Heart,
  Share,
  MoreHorizontal,
  Star,
  Calendar,
  MapPin,
} from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Stride DS/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outlined", "elevated", "interactive"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description goes here to describe the content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card where you can put any
          information.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: "outlined",
    size: "md",
  },
};

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined">
      <CardHeader>
        <CardTitle>Outlined Card</CardTitle>
        <CardDescription>This card has a border outline</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content for the outlined card variant.</p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>This card has a shadow elevation</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content for the elevated card variant with shadow.</p>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card variant="interactive">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>This card responds to hover and click</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hover over this card to see the interactive effects.</p>
      </CardContent>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Card size="sm">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>Compact card size</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Less padding for tight spaces.</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Large: Story = {
  render: () => (
    <Card size="lg">
      <CardHeader>
        <CardTitle>Large Card</CardTitle>
        <CardDescription>Spacious card size</CardDescription>
      </CardHeader>
      <CardContent>
        <p>More padding for comfortable reading and interaction.</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          leftIcon={<MapPin size={16} />}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="flex-1">
          Forgot password?
        </Button>
        <Button className="flex-1">Sign In</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card>
      <CardHeader fullWidth>
        <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg" />
      </CardHeader>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle as="h2">Amazing Product</CardTitle>
            <CardDescription>
              High-quality product with excellent features
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm [color:var(--text-secondary)]">
            (128 reviews)
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 flex-1">
          <span className="text-2xl font-bold [color:var(--text-primary)]">
            $99
          </span>
          <span className="text-sm [color:var(--text-tertiary)] line-through">
            $129
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <Heart size={16} />
          </Button>
          <Button variant="ghost" size="sm">
            <Share size={16} />
          </Button>
          <Button size="sm">Add to Cart</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const ProductCardLarge: Story = {
  render: () => (
    <Card variant="elevated" size="lg">
      <CardHeader fullWidth>
        <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg" />
      </CardHeader>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle as="h2">Premium Product</CardTitle>
            <CardDescription>
              High-quality product with excellent features and premium materials
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm [color:var(--text-secondary)]">
            (128 reviews)
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 flex-1">
          <span className="text-2xl font-bold [color:var(--text-primary)]">
            $199
          </span>
          <span className="text-sm [color:var(--text-tertiary)] line-through">
            $299
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <Heart size={16} />
          </Button>
          <Button variant="ghost" size="sm">
            <Share size={16} />
          </Button>
          <Button size="sm">Add to Cart</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const EventCard: Story = {
  render: () => (
    <Card variant="interactive">
      <CardHeader>
        <CardTitle>Design Conference 2024</CardTitle>
        <CardDescription>
          Join us for an amazing conference about modern design
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="[color:var(--text-secondary)]" />
            <span className="[color:var(--text-secondary)]">
              March 15-17, 2024
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="[color:var(--text-secondary)]" />
            <span className="[color:var(--text-secondary)]">
              San Francisco, CA
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 flex-1">
          <span className="text-lg font-semibold [color:var(--text-primary)]">
            $299
          </span>
          <span className="text-sm [color:var(--text-tertiary)]">
            Early bird
          </span>
        </div>
        <Button>Register Now</Button>
      </CardFooter>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Outlined</CardTitle>
          <CardDescription>Card with border outline</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Standard card with visible border.</p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
          <CardDescription>Card with shadow elevation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card raised with shadow effect.</p>
        </CardContent>
      </Card>

      <Card variant="interactive">
        <CardHeader>
          <CardTitle>Interactive</CardTitle>
          <CardDescription>Hoverable and clickable</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card with hover and click effects.</p>
        </CardContent>
      </Card>

      <Card variant="outlined" size="sm">
        <CardHeader>
          <CardTitle>Small Size</CardTitle>
          <CardDescription>Compact card layout</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Smaller padding for tight spaces.</p>
        </CardContent>
      </Card>
    </div>
  ),
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
};
