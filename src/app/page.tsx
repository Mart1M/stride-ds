"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Pagination } from "@/components/ui/Pagination";
import { Switch } from "@/components/ui/Switch";
import {
  Star,
  Download,
  ArrowRight,
  Palette,
  Code,
  Zap,
  Search,
  Mail,
  User,
  Lock,
  Heart,
  Calendar,
  Share,
  MapPin,
  Pin,
  Flag,
  Moon,
  Sun,
} from "lucide-react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r [background:linear-gradient(to_right,var(--brand-primary-600),var(--brand-primary-400))] bg-clip-text text-transparent mb-4">
            Runswap
          </h1>
          <p className="text-xl [color:var(--text-secondary)] mb-8">
            A modern React design system built with React Aria and Tailwind CSS
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<Code size={20} />}
              onPress={() => window.open("http://localhost:6006", "_blank")}
            >
              View Storybook
            </Button>
            <Button
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight size={20} />}
            >
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="lg"
              leftIcon={isDark ? <Sun size={20} /> : <Moon size={20} />}
              onPress={toggleDarkMode}
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </div>

        {/* Button Showcase */}
        <div className="grid gap-12">
          {/* Variants */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 [color:var(--text-primary)]">
              Button Variants
            </h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </section>

          {/* Sizes */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 [color:var(--text-primary)]">
              Button Sizes
            </h2>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </section>

          {/* With Icons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 [color:var(--text-primary)]">
              Buttons with Icons
            </h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="primary" leftIcon={<Download size={16} />}>
                Download
              </Button>
              <Button variant="secondary" rightIcon={<ArrowRight size={16} />}>
                Continue
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Star size={16} />}
                rightIcon={<ArrowRight size={16} />}
              >
                Favorite
              </Button>
            </div>
          </section>

          {/* Different Combinations */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 [color:var(--text-primary)]">
              Combinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Palette size={14} />}
              >
                Design
              </Button>
              <Button
                variant="secondary"
                size="md"
                leftIcon={<Code size={16} />}
              >
                Development
              </Button>
              <Button variant="ghost" size="lg" leftIcon={<Zap size={18} />}>
                Performance
              </Button>
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Get Started
              </Button>
              <Button variant="secondary" isDisabled>
                Disabled
              </Button>
              <Button variant="ghost" size="sm" rightIcon={<Star size={14} />}>
                Rate
              </Button>
            </div>
          </section>

          {/* Input Showcase */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 [color:var(--text-primary)]">
              Input Components
            </h2>

            {/* Input Sizes */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Input Sizes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
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
            </div>

            {/* Input States */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Input States
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <Input
                  label="Default Input"
                  placeholder="Enter your text"
                  helperText="This is helper text"
                />
                <Input
                  label="Success Input"
                  variant="success"
                  placeholder="Success state"
                  helperText="Looks good!"
                  defaultValue="valid@example.com"
                />
                <Input
                  label="Error Input"
                  placeholder="Error state"
                  errorMessage="This field has an error"
                  defaultValue="invalid input"
                />
                <Input
                  label="Disabled Input"
                  isDisabled
                  placeholder="Disabled state"
                  defaultValue="Cannot edit"
                />
              </div>
            </div>

            {/* Input with Icons */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Input with Icons
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <Input
                  label="Search"
                  placeholder="Search something..."
                  leftIcon={<Search size={16} />}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  leftIcon={<Mail size={16} />}
                  rightIcon={<ArrowRight size={16} />}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  leftIcon={<Lock size={16} />}
                  helperText="Must be at least 8 characters"
                />
                <Input
                  label="Required Field"
                  isRequired
                  placeholder="This field is required"
                  leftIcon={<User size={16} />}
                  helperText="This field is required"
                />
              </div>
            </div>
          </section>

          {/* Card Showcase */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 [color:var(--text-primary)]">
              Card Components
            </h2>

            {/* Dark Mode Test */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Dark Mode Test - Cards should use bg-primary (brand-neutral-900
                in dark mode)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Test Card</CardTitle>
                    <CardDescription>
                      Background should be brand-neutral-900 in dark mode
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm [color:var(--text-secondary)]">
                      Current background:{" "}
                      <code className="text-xs [color:var(--text-primary)] [background-color:var(--bg-secondary)] px-1 rounded">
                        var(--bg-primary)
                      </code>
                    </p>
                  </CardContent>
                </Card>

                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Elevated Card</CardTitle>
                    <CardDescription>
                      Same background with shadow
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm [color:var(--text-secondary)]">
                      Should also use{" "}
                      <code className="text-xs [color:var(--text-primary)] [background-color:var(--bg-secondary)] px-1 rounded">
                        var(--bg-primary)
                      </code>
                    </p>
                  </CardContent>
                </Card>

                <Card variant="interactive">
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>Hover effects preserved</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm [color:var(--text-secondary)]">
                      Background:{" "}
                      <code className="text-xs [color:var(--text-primary)] [background-color:var(--bg-secondary)] px-1 rounded">
                        var(--bg-primary)
                      </code>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Card Variants */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Card Variants
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated">
                  <CardHeader fullWidth>
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg" />
                  </CardHeader>
                  <CardHeader>
                    <div className="flex flex-col items-start gap-2">
                      <CardDescription className="text-sm flex items-center gap-2 [color:var(--text-secondary)]">
                        <Calendar size={16} /> 5 octobre 2025
                      </CardDescription>
                      <CardTitle as="h2">Semi-marathon de Cardiff</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 flex-col">
                      <span className="text-sm flex items-center gap-2 [color:var(--text-secondary)]">
                        <Pin size={16} /> Cardiff
                      </span>
                      <span className="text-sm flex items-center gap-2 [color:var(--text-secondary)]">
                        <Flag size={16} /> Semi-marathon
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
                    <div className="flex gap-1 items-center">
                      <Button variant="ghost" size="sm">
                        <Share size={16} />
                      </Button>
                      <Button size="md">S&apos;inscrire</Button>
                    </div>
                  </CardFooter>
                </Card>

                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Elevated Card</CardTitle>
                    <CardDescription>
                      Card with shadow elevation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      This card uses shadow to create depth and hierarchy.
                    </p>
                  </CardContent>
                </Card>

                <Card variant="interactive">
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>Hoverable card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Hover over this card to see the interactive effects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Card Examples */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Practical Examples
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Card */}
                <Card variant="elevated">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Premium Headphones</CardTitle>
                        <CardDescription>
                          High-quality wireless headphones
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Heart size={16} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <span className="text-sm [color:var(--text-secondary)] ml-1">
                          (42)
                        </span>
                      </div>
                      <p className="text-sm [color:var(--text-secondary)]">
                        Premium sound quality with active noise cancellation
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-xl font-bold [color:var(--text-primary)]">
                        $199
                      </span>
                      <span className="text-sm [color:var(--text-tertiary)] line-through">
                        $249
                      </span>
                    </div>
                    <Button size="sm">Add to Cart</Button>
                  </CardFooter>
                </Card>

                {/* Event Card */}
                <Card variant="interactive">
                  <CardHeader>
                    <CardTitle>Design Conference 2024</CardTitle>
                    <CardDescription>Join the future of design</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar
                          size={16}
                          className="[color:var(--text-secondary)]"
                        />
                        <span className="text-sm [color:var(--text-secondary)]">
                          March 15-17, 2024
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={16}
                          className="[color:var(--text-secondary)]"
                        />
                        <span className="text-sm [color:var(--text-secondary)]">
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
                      <span className="text-xs [color:var(--text-tertiary)]">
                        Early bird
                      </span>
                    </div>
                    <Button size="sm">Register</Button>
                  </CardFooter>
                </Card>

                {/* Form Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Contact</CardTitle>
                    <CardDescription>Get in touch with us</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      size="sm"
                      placeholder="Your email"
                      leftIcon={<Mail size={14} />}
                    />
                    <Input
                      size="sm"
                      placeholder="Your message"
                      leftIcon={<User size={14} />}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="flex-1">
                      Cancel
                    </Button>
                    <Button size="sm" className="flex-1">
                      Send
                    </Button>
                  </CardFooter>
                </Card>

                {/* Stats Card */}
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Project Statistics</CardTitle>
                    <CardDescription>Current project metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold [color:var(--text-primary)]">
                          1,234
                        </div>
                        <div className="text-xs [color:var(--text-secondary)]">
                          Total Users
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold [color:var(--status-success)]">
                          +12%
                        </div>
                        <div className="text-xs [color:var(--text-secondary)]">
                          Growth
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold [color:var(--text-primary)]">
                          56
                        </div>
                        <div className="text-xs [color:var(--text-secondary)]">
                          Active Now
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold [color:var(--status-warning)]">
                          99.9%
                        </div>
                        <div className="text-xs [color:var(--text-secondary)]">
                          Uptime
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Card Sizes */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Card Sizes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card size="sm">
                  <CardHeader>
                    <CardTitle>Small Card</CardTitle>
                    <CardDescription>Compact size</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Less padding for tight spaces.</p>
                  </CardContent>
                </Card>

                <Card size="md">
                  <CardHeader>
                    <CardTitle>Medium Card</CardTitle>
                    <CardDescription>Default size</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Standard padding for most use cases.
                    </p>
                  </CardContent>
                </Card>

                <Card size="lg">
                  <CardHeader>
                    <CardTitle>Large Card</CardTitle>
                    <CardDescription>Spacious size</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Extra padding for comfortable reading.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Switch Showcase */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 [color:var(--text-primary)]">
              Switch Components
            </h2>

            {/* Switch Sizes */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Switch Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-8">
                <Switch size="sm">Small Switch</Switch>
                <Switch size="md">Medium Switch</Switch>
                <Switch size="lg">Large Switch</Switch>
              </div>
            </div>

            {/* Switch States */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Switch States
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Switch>Default Switch</Switch>
                <Switch defaultSelected>Pre-selected Switch</Switch>
                <Switch isDisabled>Disabled Switch</Switch>
                <Switch isDisabled defaultSelected>
                  Disabled Selected
                </Switch>
              </div>
            </div>

            {/* Switch with Descriptions */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Switch with Descriptions
              </h3>
              <div className="space-y-4">
                <Switch
                  description="Enable dark mode for better night viewing"
                  onChange={(isSelected) =>
                    console.log("Dark mode:", isSelected)
                  }
                >
                  Dark Mode
                </Switch>
                <Switch
                  description="Receive notifications about important updates"
                  defaultSelected
                >
                  Push Notifications
                </Switch>
                <Switch
                  description="Allow the application to use your location"
                  size="sm"
                >
                  Location Services
                </Switch>
              </div>
            </div>
          </section>

          {/* Pagination Showcase */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 [color:var(--text-primary)]">
              Pagination Components
            </h2>

            {/* Pagination Variants */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Pagination Variants
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-md font-medium mb-3 [color:var(--text-tertiary)]">
                    Simple Pagination
                  </h4>
                  <div className="flex flex-col items-start gap-4">
                    <Pagination
                      variant="simple"
                      currentPage={1}
                      totalPages={10}
                      size="sm"
                    />
                    <Pagination
                      variant="simple"
                      currentPage={5}
                      totalPages={20}
                      size="md"
                    />
                    <Pagination
                      variant="simple"
                      currentPage={8}
                      totalPages={15}
                      size="lg"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-md font-medium mb-3 [color:var(--text-tertiary)]">
                    Numbered Pagination
                  </h4>
                  <div className="flex flex-col items-start gap-4">
                    <Pagination
                      variant="numbered"
                      currentPage={3}
                      totalPages={8}
                      size="sm"
                      showPrevNext={true}
                    />
                    <Pagination
                      variant="numbered"
                      currentPage={5}
                      totalPages={15}
                      size="md"
                      showPrevNext={true}
                    />
                    <Pagination
                      variant="numbered"
                      currentPage={8}
                      totalPages={20}
                      size="lg"
                      showPrevNext={true}
                      showFirstLast={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Examples */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 [color:var(--text-secondary)]">
                Practical Examples
              </h3>
              <div className="space-y-6">
                {/* Table Pagination */}
                <Card>
                  <CardHeader>
                    <CardTitle>Product List</CardTitle>
                    <CardDescription>
                      Browse through our product catalog
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 border rounded-lg [border-color:var(--border-primary)]"
                        >
                          <div>
                            <div className="font-medium [color:var(--text-primary)]">
                              Product {i + 1}
                            </div>
                            <div className="text-sm [color:var(--text-secondary)]">
                              Product description here
                            </div>
                          </div>
                          <div className="text-lg font-semibold [color:var(--text-primary)]">
                            $99.99
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Pagination
                      variant="numbered"
                      currentPage={2}
                      totalPages={12}
                      size="sm"
                      showPrevNext={true}
                      className="flex-1 justify-center"
                    />
                  </CardFooter>
                </Card>

                {/* Blog Pagination */}
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Blog Articles</CardTitle>
                    <CardDescription>
                      Showing 1-10 of 156 articles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="space-y-2">
                          <h4 className="font-semibold [color:var(--text-primary)]">
                            Article Title {i + 1}
                          </h4>
                          <p className="text-sm [color:var(--text-secondary)]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore.
                          </p>
                          <div className="text-xs [color:var(--text-tertiary)]">
                            March {15 + i}, 2024
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm [color:var(--text-secondary)]">
                        Showing 1-10 of 156 results
                      </div>
                      <Pagination
                        variant="simple"
                        currentPage={1}
                        totalPages={16}
                        size="md"
                      />
                    </div>
                  </CardFooter>
                </Card>

                {/* Advanced Pagination */}
                <div className="p-6 border rounded-lg [border-color:var(--border-primary)] [background-color:var(--bg-secondary)]">
                  <div className="mb-4">
                    <h4 className="font-semibold [color:var(--text-primary)] mb-2">
                      Advanced Pagination
                    </h4>
                    <p className="text-sm [color:var(--text-secondary)]">
                      Pagination with First/Last buttons and extended sibling
                      count
                    </p>
                  </div>
                  <Pagination
                    variant="numbered"
                    currentPage={10}
                    totalPages={50}
                    size="md"
                    showPrevNext={true}
                    showFirstLast={true}
                    siblingCount={2}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t [border-color:var(--border-primary)] text-center">
          <p className="[color:var(--text-tertiary)] text-sm">
            Runswap Design System - Built with React Aria, Tailwind CSS, and
            TypeScript
          </p>
        </footer>
      </main>
    </div>
  );
}
