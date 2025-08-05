import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import prerender from "vite-plugin-prerender";

export default defineConfig({
  plugins: [react(), prerender({
    staticDir: "dist",
    routes: ["/", "/about", "/projects", "/experience", "/skills", "/academic", "/certifications", "/contact"],
    postProcess(renderedRoute) {
      return renderedRoute;
    },
  }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
