const webpack = require('webpack');

module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  webpack: {
    /** @param {import('webpack').Configuration} config */
    configure: (config) => {
      // Temp fix antd issue https://github.com/ant-design/ant-design/issues/33327#issuecomment-996482057
      config.ignoreWarnings = [/Failed to parse source map/];

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
  },
};
