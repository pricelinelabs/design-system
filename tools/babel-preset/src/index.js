module.exports = () => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'entry',
          corejs: 3,
        },
      ],
      '@babel/preset-react',
      [
        '@babel/preset-typescript',
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
    ],
    plugins: [
      'babel-plugin-styled-components',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-export-default-from',
      'babel-plugin-lodash',
      'babel-plugin-date-fns',
    ],
    env: {
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
        plugins: [
          [
            'babel-plugin-styled-components',
            { ssr: false, displayName: false },
          ],
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-optional-chaining',
          'babel-plugin-dynamic-import-node',
          '@babel/plugin-transform-modules-commonjs',
        ],
        compact: true,
      },
      production: {
        plugins: ['babel-plugin-transform-react-remove-prop-types'],
      },
      cjs: {
        presets: [['@babel/preset-env', { modules: 'cjs' }]],
      },
    },
  }
}
