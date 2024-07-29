/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    "plugin:vue/vue3-recommended"
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
      "@typescript-eslint",
        "vue"
  ],
    rules: {
      'no-console': 2,
      'no-debugger': 'off',
      'vue/no-multiple-template-root': 'off',
    },
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {
        // 这里可以添加或覆盖规则
      }
    }
  ]
}
