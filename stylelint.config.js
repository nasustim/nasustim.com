module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-property-sort-order-smacss'],
  customSyntax: 'postcss-scss',
  rules: {
    'number-leading-zero': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
