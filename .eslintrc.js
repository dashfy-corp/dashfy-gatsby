module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: '16.13',
      flowVersion: '0.133.0'
    }
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:flowtype/recommended',
    'flowtype-essential',
    'plugin:prettier/recommended'
  ],
  plugins: ['import', 'react', 'jsx-a11y', 'flowtype', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': 0
  }
}
