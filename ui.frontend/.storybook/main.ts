import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  staticDirs: ['../public', '../src/assets/generated-icons', { from: '../src/assets/fonts', to: '/resources/assets/fonts' }],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-storysource",
    "@storybook/addon-designs",
    "@storybook/addon-a11y",
    "@storybook/theming",
    "@storybook/addon-coverage"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
};
export default config;