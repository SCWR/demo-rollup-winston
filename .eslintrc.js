// https://segmentfault.com/a/1190000019661168
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  env: {
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'max-len': 0,
  },
};
