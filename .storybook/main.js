const webpack = require('webpack');

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

    // Webpack5 needs manually fallbacks
    // https://github.com/facebook/create-react-app/issues/11756#issuecomment-1001769356
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    };

    config.plugins = [
      ...config.plugins,
      // Fix buffer not defined
      // https://stackoverflow.com/questions/68707553/uncaught-referenceerror-buffer-is-not-defined
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
      // Fix tree shaking problem
      // https://github.com/facebook/create-react-app/issues/9674#issuecomment-1096270248
      // new webpack.DefinePlugin({
      //   ...(!process.env.REACT_APP_ENABLE_MSW && {
      //     'process.env.REACT_APP_ENABLE_MSW': false,
      //   }),
      // }),
    ];

    return config;
  },
};
