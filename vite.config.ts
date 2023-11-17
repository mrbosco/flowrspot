import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import { run } from 'vite-plugin-run';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr(),
    run({
      name: 'transform scss variables into json theme file',
      run: ['node', './src/styles/themeGenerator.js'],
    }),
  ],
});
