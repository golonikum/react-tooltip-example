const custom = require('../webpack.config.js');

module.exports = async ({ config }) => {
  const { rules } = custom.module;
  rules[0].use = rules[0].use.filter((item) => item.loader !== 'ts-loader');
  return {
    ...config,

    module: {
      ...config.module,
      rules,
    },

    resolve: {
      ...config.resolve,
      plugins: custom.resolve.plugins,
      modules: custom.resolve.modules,
      alias: custom.resolve.alias,
      extensions: custom.resolve.extensions,
    },
  };
};
