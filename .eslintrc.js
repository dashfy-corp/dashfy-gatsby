module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: '16.13',
      flowVersion: '0.133.0'
    },
    "import/resolver": {
      "alias": {
        map: [
          ["components", "./src/components"],
          ["pages", "./src/pages"],
          ["views", "./src/views"],
          ["assets", "./src/assets"],
          ["variables", "./src/variables"]
        ],
        extensions: ['.js', '.jsx', '.json']
      }
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
    'prettier'
  ],
  plugins: ['import', 'react', 'jsx-a11y', 'flowtype'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': 0,
    "react/no-unescaped-entities": ['off'],
    "react/prop-types": ['warn'],
    "react/no-string-refs": ['warn'],
    "no-unused-vars": ['warn'],
  }
}

