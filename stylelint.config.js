module.exports = {
  syntax: 'scss',
  extends: ['stylelint-config-standard', 'stylelint-config-property-sort-order-smacss'],
  customSyntax: 'postcss-scss',
  rules: {
    'number-leading-zero': null,
    'at-rule-no-unknown': [
      true,
      { 'ignoreAtRules': [ 'use' ] }
    ]
  },
}
