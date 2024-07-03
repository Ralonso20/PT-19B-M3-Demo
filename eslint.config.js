const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsEslint = require('typescript-eslint');

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
module.exports = [
  // This is just an example for rules specific to JS files
  {
    files: ['**/*.js'],

    rules: {
      'no-duplicate-imports': 'error',
    },
  },

  ...tsEslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.ts'], // We use TS config only for TS files
    rules: {
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      '@typescript-eslint/no-redeclare': 'off',
      'no-redeclare': 'error',
    },
  })),

  {
    files: ['**/*.ts'],

    // This is required, see the docs
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname, // or import.meta.dirname for ESM
      },
    },

    // This is needed in order to specify the desired behavior for its rules
    plugins: {
      '@typescript-eslint': tsPlugin,
    },

    // After defining the plugin, you can use the rules like this
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
