const CracoAlias = require('craco-alias');

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: '.',
        tsConfigPath: 'jsconfig.paths.json',
        debug: false,
      },
    },
  ],
};
