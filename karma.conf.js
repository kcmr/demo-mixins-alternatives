const { createDefaultConfig } = require('@open-wc/testing-karma');
const { merge } = require('webpack-merge');

module.exports = (config) => {
  return config.set(
    merge(createDefaultConfig(config), {
      files: [
        {
          pattern: config.grep ? config.grep : 'test/**/*.test.js',
          type: 'module',
        },
      ],

      client: {
        mocha: {
          ui: 'tdd',
        },
      },

      esm: {
        nodeResolve: true,
        babel: true,
      },
    }),
  );
};
