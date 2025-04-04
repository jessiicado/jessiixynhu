import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // keep this if you're using a custom domain
  build: {
    outDir: "docs", // this makes Vite build to /docs
  },
});
