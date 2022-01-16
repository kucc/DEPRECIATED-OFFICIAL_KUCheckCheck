var jsOption = {
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSameLine: true,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'auto',
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@(?:redux|actions|reducer)',
    '^@(?:components|pages)(.*)$',
    '^@(?:hoc|utility|/)(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = {
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        ...jsOption,
      },
    },
    {
      files: '*.{js,jsx}',
      options: {
        ...jsOption,
        printWidth: 80,
      },
    },
    {
      files: '*.{scss}',
      options: {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 2,
      },
    },
    {
      files: '*.{css}',
      options: {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 4,
      },
    },
  ],
};
