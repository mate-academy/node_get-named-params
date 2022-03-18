module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  "parserOptions": {
    "sourceType": "module",
  },
  rules: {
    'no-proto': 0,
    'no-console': 'off'
  },
  plugins: ['jest']
};
