module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['@react-native-community', 'eslint:recommended', 'google'],
  rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
};
