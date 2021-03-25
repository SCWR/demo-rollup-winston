import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
// import terser from 'rollup-plugin-terser';
// import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    // {
    //   file: pkg.browser,
    //   format: 'esm',
    //   // https://rollupjs.org/guide/en#output-globals-g-globals
    //   // format: 'umd',
    //   // name: 'DemoRollup',
    //   // globals: {
    //   //   lodash: '_',
    //   // },
    //   sourcemap: true,
    //   plugins: [getBabelOutputPlugin({
    //     presets: [
    //       ['@babel/preset-env', {
    //         modules: 'umd',
    //         useBuiltIns: false,
    //         loose: true,
    //       }],
    //     ],
    //     plugins: [
    //       // '@babel/plugin-transform-runtime',
    //       ['@babel/plugin-transform-modules-umd', {
    //         // globals: {
    //         //   lodash: '_',
    //         // },
    //         moduleId: 'DemoRollup',
    //       }]],
    //   })],
    // },
  ],
  external: (name) => {
    return /(winston)/.test(name);
  },
  plugins: [
    // terser(),
    typescript({ tsconfig: './tsconfig.json' }),
    resolve({ extensions }),
    commonjs(),
    del({ targets: 'dist', force: true, verbose: true }),
  ],
  watch: {
    include: 'src/**/*',
  },
};
