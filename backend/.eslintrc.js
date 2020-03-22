module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off", //nao precisa usar this
    "no-param-reassign": "off", //permitir receber parametro e altera-lo
    "camelcase": "off", //padrao variavel
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  },
};