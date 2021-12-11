const [OFF, ERROR] = [0, 2];

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react-native-a11y/all',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@navigation', './src/navigation'],
          ['@screens', './src/screens'],
          ['@theme', './src/theme'],
        ],
      },
    },
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
  rules: {
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    'import/no-named-as-default': OFF,
    'react-native/no-inline-styles': OFF,
    'import/namespace': OFF,
    'import/order': [
      ERROR,
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          'parent',
          ['index', 'sibling'],
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
};
