import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['./src/index.ts'],
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  format: ['esm','cjs'],
  dts: false,
  onSuccess: "npm run declarations",
  minify: !options.watch
}));
