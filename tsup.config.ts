import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    target: ['es2020', 'node14'],
    clean: false,
    dts: true,
    splitting: true,
    minify: false,
  },
  {
    entry: ['src/client.ts'],
    format: ['iife'],
    target: ['chrome89'],
    platform: 'browser',
    clean: false,
    dts: false,
    minify: false,
  },
]);
