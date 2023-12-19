import { defineConfig } from 'tsup';

export default defineConfig(options => {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);

  return {
    entry: ['extension/index.ts'],
    format: ['cjs'],
    target: ['es2015', 'node14'],
    env: process.env.NODE_ENV
      ? {
          NODE_ENV: process.env.NODE_ENV!,
        }
      : undefined,
    outDir: 'dist/extension',
    external: ['vscode', 'chokidar'],
    clean: true,
    splitting: true,
    sourcemap: !!options.watch,
  };
});
