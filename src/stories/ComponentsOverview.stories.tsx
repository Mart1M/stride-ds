import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select, SelectItem } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import {
  Star,
  Download,
  ArrowRight,
  Search,
  User,
  Mail,
  Phone,
  MoreHorizontal,
  Heart,
  Share,
} from "lucide-react";

const meta: Meta = {
  title: "Stride DS/Components Overview",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Complete overview of all Stride Design System components",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
  render: () => (
    <div className="space-y-12 max-w-6xl mx-auto bg-background p-7">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">
          Stride Design System
        </h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          Complete collection of UI components with multi-brand support and
          adaptive themes
        </p>
      </div>

      {/* Buttons Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Buttons</h2>

        {/* Button Variants */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Sizes</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Button States */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">States</h3>
          <div className="flex flex-wrap gap-4">
            <Button leftIcon={<Download size={16} />}>With Icon</Button>
            <Button rightIcon={<ArrowRight size={16} />}>With Icon</Button>
            <Button
              leftIcon={<Star size={16} />}
              rightIcon={<ArrowRight size={16} />}
            >
              Both Icons
            </Button>
            <Button isDisabled>Disabled</Button>
          </div>
        </div>
      </section>

      {/* Inputs Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Inputs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Input */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Basic</h3>
            <Input placeholder="Enter text..." />
          </div>

          {/* Input with Label */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">With Label</h3>
            <Input label="Username" placeholder="john.doe" />
          </div>

          {/* Input with Helper */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">With Helper</h3>
            <Input
              label="Email"
              placeholder="user@example.com"
              helperText="We'll never share your email"
            />
          </div>

          {/* Input with Icon */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">With Icon</h3>
            <Input
              label="Search"
              placeholder="Search..."
              leftIcon={<Search size={16} />}
            />
          </div>

          {/* Error State */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Error State</h3>
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              variant="error"
              helperText="Password is required"
            />
          </div>

          {/* Success State */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Success State</h3>
            <Input
              label="Confirmation"
              placeholder="Confirmed"
              variant="success"
              helperText="Email confirmed successfully"
            />
          </div>

          {/* Disabled Input */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Disabled</h3>
            <Input
              label="Readonly Field"
              placeholder="Cannot edit"
              isDisabled
            />
          </div>

          {/* Different Sizes */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Sizes</h3>
            <div className="space-y-2">
              <Input size="sm" placeholder="Small input" />
              <Input size="md" placeholder="Medium input" />
              <Input size="lg" placeholder="Large input" />
            </div>
          </div>
        </div>
      </section>

      {/* Select Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Select</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Select */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Basic</h3>
            <Select
              placeholder="Choose an option"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
            />
          </div>

          {/* Select with Label */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">With Label</h3>
            <Select
              placeholder="Select country"
              options={[
                { value: "fr", label: "France" },
                { value: "us", label: "United States" },
                { value: "uk", label: "United Kingdom" },
                { value: "de", label: "Germany" },
              ]}
            />
          </div>

          {/* Select Sizes */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Sizes</h3>
            <div className="space-y-2">
              <Select
                size="sm"
                placeholder="Small select"
                options={[
                  { value: "sm1", label: "Small Option 1" },
                  { value: "sm2", label: "Small Option 2" },
                ]}
              />
              <Select
                size="md"
                placeholder="Medium select"
                options={[
                  { value: "md1", label: "Medium Option 1" },
                  { value: "md2", label: "Medium Option 2" },
                ]}
              />
              <Select
                size="lg"
                placeholder="Large select"
                options={[
                  { value: "lg1", label: "Large Option 1" },
                  { value: "lg2", label: "Large Option 2" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Checkbox Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Checkbox</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Checkbox */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Basic</h3>
            <div className="space-y-2">
              <Checkbox>Accept terms and conditions</Checkbox>
              <Checkbox>Subscribe to newsletter</Checkbox>
              <Checkbox isDisabled>Disabled option</Checkbox>
            </div>
          </div>

          {/* Checkbox Sizes */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Sizes</h3>
            <div className="space-y-2">
              <Checkbox size="sm">Small checkbox</Checkbox>
              <Checkbox size="md">Medium checkbox</Checkbox>
              <Checkbox size="lg">Large checkbox</Checkbox>
            </div>
          </div>

          {/* Checkbox with Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">With Description</h3>
            <Checkbox description="This will enable email notifications for your account">
              Email notifications
            </Checkbox>
          </div>

          {/* Indeterminate */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Indeterminate</h3>
            <div className="space-y-2">
              <Checkbox isIndeterminate size="md">
                Select all
              </Checkbox>
              <div className="ml-6 space-y-1">
                <Checkbox size="md">Option A</Checkbox>
                <Checkbox size="md">Option B</Checkbox>
                <Checkbox size="md">Option C</Checkbox>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Card */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>
                A simple card with header and content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content of the card.</p>
            </CardContent>
          </Card>

          {/* Card with Form */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Name"
                placeholder="Your name"
                leftIcon={<User size={16} />}
              />
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                leftIcon={<Mail size={16} />}
              />
              <Input
                label="Phone"
                placeholder="+33 6 12 34 56 78"
                leftIcon={<Phone size={16} />}
              />
            </CardContent>
            <CardFooter>
              <Button variant="primary" className="w-full">
                Send Message
              </Button>
            </CardFooter>
          </Card>

          {/* Card with Actions */}
          <Card variant="elevated">
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
              <div className="flex gap-1">
                <Button variant="ghost" size="sm">
                  <Share size={16} />
                </Button>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Interactive Examples
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Login Form */}
          <Card>
            <CardHeader>
              <CardTitle>Login Form</CardTitle>
              <CardDescription>
                Complete example with validation states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="user@example.com"
                leftIcon={<Mail size={16} />}
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                variant="error"
                helperText="Password must be at least 8 characters"
              />
              <Checkbox>Remember me</Checkbox>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="primary" className="w-full">
                Sign In
              </Button>
              <Button variant="ghost" className="w-full">
                Forgot Password?
              </Button>
            </CardFooter>
          </Card>

          {/* Settings Panel */}
          <Card>
            <CardHeader>
              <CardTitle>User Preferences</CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium">Notifications</h4>
                <div className="space-y-2">
                  <Checkbox>Email notifications</Checkbox>
                  <Checkbox>Push notifications</Checkbox>
                  <Checkbox isIndeterminate>Marketing emails</Checkbox>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Preferences</h4>
                <Select
                  placeholder="Select theme"
                  options={[
                    { value: "light", label: "Light" },
                    { value: "dark", label: "Dark" },
                    { value: "auto", label: "Auto" },
                  ]}
                />

                <Select
                  placeholder="Select language"
                  options={[
                    { value: "en", label: "English" },
                    { value: "fr", label: "Français" },
                    { value: "es", label: "Español" },
                  ]}
                />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="secondary" className="flex-1">
                Reset
              </Button>
              <Button variant="destructive" size="sm">
                Delete Account
              </Button>
              <Button variant="primary" className="flex-1">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t">
        <p className="text-secondary">
          🎨 Stride Design System - React Components with Tailwind CSS and React
          Aria
        </p>
      </footer>
    </div>
  ),
};

export const ComponentMatrix: Story = {
  render: () => (
    <div className="space-y-8 bg-background">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Component Matrix</h1>
        <p className="text-secondary">
          Matrix of variants and sizes for all components
        </p>
      </div>

      {/* Buttons Matrix */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-primary)]">
                <th className="text-left p-2">Variant / Size</th>
                <th className="text-center p-2">Small</th>
                <th className="text-center p-2">Medium</th>
                <th className="text-center p-2">Large</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              <tr className="border-b border-[var(--border-primary)]">
                <td className="p-2 font-medium">Primary</td>
                <td className="p-2 text-center">
                  <Button variant="primary" size="sm">
                    Primary
                  </Button>
                </td>
                <td className="p-2 text-center">
                  <Button variant="primary" size="md">
                    Primary
                  </Button>
                </td>
                <td className="p-2 text-center">
                  <Button variant="primary" size="lg">
                    Primary
                  </Button>
                </td>
              </tr>
              <tr className="border-b border-[var(--border-primary)]">
                <td className="p-2 font-medium">Secondary</td>
                <td className="p-2 text-center">
                  <Button variant="secondary" size="sm">
                    Secondary
                  </Button>
                </td>
                <td className="p-2 text-center">
                  <Button variant="secondary" size="md">
                    Secondary
                  </Button>
                </td>
                <td className="p-2 text-center">
                  <Button variant="secondary" size="lg">
                    Secondary
                  </Button>
                </td>
              </tr>
              <tr className="border-b border-[var(--border-primary)]">
                <td className="p-2 font-medium">Ghost</td>
                <td className="p-2 text-center">
                  <Button variant="ghost" size="sm">
                    Ghost
                  </Button>
                </td>
                <td className="p-2 text-center">
                  <Button variant="ghost" size="md">
                    Ghost
                  </Button>
                </td>
                <td className="p-2 text-center">
                  <Button variant="ghost" size="lg">
                    Ghost
                  </Button>
                </td>
              </tr>
              <tr className="border-b border-[var(--border-primary)]">
                <td className="p-2 font-medium">Destructive</td>
                <td className="p-2 text-center">
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </td>
                <td className="p-2 text-center">
                  <Button variant="destructive" size="md">
                    Delete
                  </Button>
                </td>
                <td className="p-2 text-center">
                  <Button variant="destructive" size="lg">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Inputs Matrix */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Small</h3>
            <Input size="sm" placeholder="Small input" />
            <Input size="sm" variant="error" placeholder="Error state" />
            <Input size="sm" variant="success" placeholder="Success state" />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Medium</h3>
            <Input size="md" placeholder="Medium input" />
            <Input size="md" variant="error" placeholder="Error state" />
            <Input size="md" variant="success" placeholder="Success state" />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Large</h3>
            <Input size="lg" placeholder="Large input" />
            <Input size="lg" variant="error" placeholder="Error state" />
            <Input size="lg" variant="success" placeholder="Success state" />
          </div>
        </div>
      </section>

      {/* Checkboxes Matrix */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Checkboxes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Small</h3>
            <Checkbox size="sm">Normal state</Checkbox>
            <Checkbox size="sm" isIndeterminate>
              Indeterminate
            </Checkbox>
            <Checkbox size="sm" isDisabled>
              Disabled
            </Checkbox>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Medium</h3>
            <Checkbox size="md">Normal state</Checkbox>
            <Checkbox size="md" isIndeterminate>
              Indeterminate
            </Checkbox>
            <Checkbox size="md" isDisabled>
              Disabled
            </Checkbox>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Large</h3>
            <Checkbox size="lg">Normal state</Checkbox>
            <Checkbox size="lg" isIndeterminate>
              Indeterminate
            </Checkbox>
            <Checkbox size="lg" isDisabled>
              Disabled
            </Checkbox>
          </div>
        </div>
      </section>
    </div>
  ),
};
