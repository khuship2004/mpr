import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// If you're using the vite-tsconfig-paths plugin, import and use it
// import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    // tsconfigPaths() // Uncomment if using the plugin
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Map '@' to the 'src' directory
    },
  },
});