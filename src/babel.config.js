module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',
      ['import', { libraryName: 'antd', style: true }, 'syntax-dynamic-import'],
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: true,
        },
      ],
      ['transform-remove-console', { exclude: ['error', 'warn'] }],
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@components': './src/components',
            '@pages': './src/pages',
            '@hoc': './src/hoc',
            '@firebase': './src/firebase',
            '@redux': './src/redux',
            '@actions': './src/redux/actions',
            '@reducer': './src/redux/reducer',
            '@font': './src/font',
            '@utility': './src/utility',
          },
        },
      ],
    ],
  };
};
