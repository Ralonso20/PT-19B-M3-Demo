module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-redeclare': 'off',
    'no-redeclare': 'error',
  },
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules/',
    'dist',
    'package.json',
    'package-lock.json',
    '.gitignore',
    '.prettierrc',
  ],
};
