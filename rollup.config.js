import { defineConfig } from 'rollup';
import ts from 'rollup-plugin-typescript2';

const esmConfig = defineConfig({
  input: './src/core/index.ts',
  output: {
    file: './dist/vue.es.js',
    name: 'Vue',
    format: 'esm',
  },
  plugins: [
    ts({
      tsconfig: './tsconfig.json',
    }),
  ],
});

const umdConfig = defineConfig({
  input: './src/core/index.ts',
  output: {
    file: './dist/vue.umd.js',
    name: 'Vue',
    format: 'umd',
  },
  plugins: [
    ts({
      tsconfig: './tsconfig.json',
    }),
  ],
});

const cmdConfig = defineConfig({
  input: './src/core/index.ts',
  output: {
    file: './dist/vue.cjs.js',
    name: 'Vue',
    format: 'commonjs',
    exports: 'default',
  },
  plugins: [
    ts({
      tsconfig: './tsconfig.json',
    }),
  ],
});

const compilerConfig = defineConfig({
  input: './src/compiler/index.ts',
  output: {
    file: './dist/vue.compiler.esm.js',
    name: 'Vue',
    format: 'esm',
  },
  plugins: [
    ts({
      tsconfig: './tsconfig.json',
    }),
  ],
});

export default [umdConfig];
