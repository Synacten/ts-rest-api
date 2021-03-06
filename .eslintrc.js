module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "import/prefer-default-export": 0,
    "max-len": ["error", { "ignoreComments": true, "code": 120 }],
    "import/extensions": [1, { "extensions": [".ts", ".tsx"] }],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js",".ts",]
      }
    }
  },
};