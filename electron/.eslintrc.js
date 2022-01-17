/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['plugin:@qhlab/base', 'plugin:@qhlab/prettier'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
};

module.exports = config;
