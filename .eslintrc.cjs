/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    // 基础的eslint配置
    'eslint:recommended',
    // vue3的eslint配置
    'plugin:vue/vue3-essential',
    'plugin:nuxt/recommended',
    // 语言特性的eslint配置
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  // 重新覆盖对于server目录的eslint配置
  overrides: [
    {
      files: ['server/**'],
      parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser'
      },
      extends: [
        'plugin:@typescript-eslint/recommended'
      ],
      plugins: [
        '@typescript-eslint'
      ]
    }
  ]
}
