import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Set your base URL here
  server: {
    // Ensure fallback to index.html for client-side routing
    historyApiFallback: true,
  },
});
