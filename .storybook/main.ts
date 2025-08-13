import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  managerHead: (head) => `
    ${head}
    <title>Stride Design System</title>
    <meta property="og:title" content="Stride Design System" />
    <meta property="og:description" content="Interactive component documentation and design system playground" />
  `,
};



export default config;