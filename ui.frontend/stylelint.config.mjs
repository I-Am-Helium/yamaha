/** @type {import('stylelint').Config} */
export default {
   extends: ['stylelint-config-standard-scss'],
   rules: {
      'no-empty-source': null,
      'selector-class-pattern': null,
      'no-descending-specificity': null,
      'color-no-invalid-hex': true,
      'at-rule-disallowed-list': ['import'],
   },
   ignoreFiles: [
      'dist/**/*',
      'node_modules/**/*',
      'src/assets/generated-icons/*',
   ],
}
