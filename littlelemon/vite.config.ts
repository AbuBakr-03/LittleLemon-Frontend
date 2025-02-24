/// <reference types="vitest" />
import { defineConfig } from "vite"; // Use 'vite', not 'vitest/config'
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use 'globals' instead of 'global'
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
