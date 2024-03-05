module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier', // Disables rules that conflict with Prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows modern ECMAScript features
  },
  rules: {
    // Override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    // Ensure rules that need types information are enabled\
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
