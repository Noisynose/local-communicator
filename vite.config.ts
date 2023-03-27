import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
  },
  build: {
    target: 'esnext'
  }
})
