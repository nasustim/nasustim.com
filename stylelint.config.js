module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-selector-bem-pattern',
  ],
  extends: ['stylelint-config-standard', 'stylelint-config-property-sort-order-smacss'],
  customSyntax: 'postcss-scss',
  rules: {
    'number-leading-zero': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'plugin/selector-bem-pattern': {
      'componentName': "[A-Z]+",
      'componentSelectors': {
        'initial': "^\\.{componentName}(?:-[a-z]+)?$",
        'combined': "^\\.combined-{componentName}-[a-z]+$",
      },
      'utilitySelectors': "^\\.util-[a-z]+$",
    },
  },
}
