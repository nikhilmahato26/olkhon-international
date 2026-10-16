import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Separate long-lived vendor chunks so content edits don't bust their cache.
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom", "react-helmet-async"],
          motion: ["motion"],
          forms: ["react-hook-form", "zod", "@hookform/resolvers"],
        },
      },
    },
  },
});
