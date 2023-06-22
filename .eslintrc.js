module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: [
    'import', 'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-array-index-key': 0
  },
};
