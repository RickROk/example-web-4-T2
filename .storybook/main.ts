import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

// const {mergeConfig} = require('vite');
// const path = require('path');
// const baseConfig = require('../config/base.config.cjs');

// module.exports = {
//   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|ts)'],

//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-a11y',
//     "@storybook/addon-interactions",
//     {
//       name: '@storybook/addon-styling',
//       options: {
//         postCss: {
//           implementation: require.resolve('postcss'),
//         },
//       },
//     },
//     {
//       name: '@storybook/addon-postcss',
//       options: {
//         cssLoaderOptions: {
//           importLoaders: 1,
//         },
//         postcssLoaderOptions: {
//           implementation: require('postcss'),
//         },
//       },
//     },
//   ],

//   framework: {
//     name: '@storybook/vue3-vite',
//     options: {}
//   },

//   typescript: {
//     check: false,
//     checkOptions: {},
//   },

//   // async viteFinal(previousConfig) {
//   //   return mergeConfig(previousConfig, {

//   //     resolve: {
//   //         alias: {
//   //           '@': path.resolve(__dirname, '..', 'src'),
//   //       },
//   //     },
//   //     // css: baseConfig.css,
//   //   });
//   // },

//   docs: {
//     autodocs: true
//   }
// };
