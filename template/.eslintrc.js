module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "space-in-parens": 0,
    "space-before-function-paren": 0,
    "eol-last": 0
  },
  globals: {}
}