import type { Preview } from "@storybook/nextjs";
import { Outfit } from "next/font/google";
import React, { useEffect } from "react";
import { SSRProvider } from "react-aria";
import { availableBrands, applyBrandTheme, initializeBrand } from "../src/lib/brands";
import "../src/app/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const ThemeBrandDecorator = (Story: any, context: any) => {
  const theme = context.globals.theme || 'light';
  const brand = context.globals.brand || 'stride';
  
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    body.classList.remove('light', 'dark');
    
    // Add theme class
    root.classList.add(theme);
    body.classList.add(theme);
    
    // Set color scheme
    root.style.colorScheme = theme;
    
    // Apply brand theme
    applyBrandTheme(brand);
  }, [theme, brand]);

  // Initialize brand on first load
  useEffect(() => {
    initializeBrand();
  }, []);

  return (
    <SSRProvider>
      <div className={`${outfit.variable} font-sans`}>
        <Story />
      </div>
    </SSRProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', icon: 'sun', title: 'Light theme' },
          { value: 'dark', icon: 'moon', title: 'Dark theme' },
        ],
        dynamicTitle: true,
      },
    },
    brand: {
      description: 'Brand theme for components',
      defaultValue: 'stride',
      toolbar: {
        title: 'Brand',
        icon: 'component',
        items: availableBrands.map(brand => ({
          value: brand.id,
          title: brand.name,
          right: brand.description,
        })),
        dynamicTitle: true,
      },
    },
  },
  decorators: [ThemeBrandDecorator],
};

export default preview;
