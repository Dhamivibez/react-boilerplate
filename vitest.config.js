/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // ✅ Enables global expect, test, etc.
    environment: "jsdom", // Simulates a browser environment
    setupFiles: ["./setupTests.js"], // Runs before each test
  },
});
