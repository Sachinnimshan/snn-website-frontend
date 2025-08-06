import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [react(),
  Sitemap({
    hostname: 'https://sachinnimshan.com',
    // optional: dynamicRoutes: ['/path1', '/path2'],
    // other options
  }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
