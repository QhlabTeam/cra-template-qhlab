module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-react-router-v6',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // eslint-disable-next-line require-await
  webpackFinal: async (config, {configType}) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    const babelRule = oneOfRule.oneOf.find((rule) =>
      rule.loader?.includes('babel-loader')
    );

    babelRule.options.presets.push('@emotion/babel-preset-css-prop');

    return config;
  },
};
