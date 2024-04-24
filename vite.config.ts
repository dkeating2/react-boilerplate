import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  host: "0.0.0.0",

  test: {
    global: true,
    setupFiles: ["./vitest-setup.ts"],
    include: [
      "**/*.test.component.vitest.{ts,tsx}",
      "**/*.test.unit.vitest.{ts,tsx}",
    ],
    environmentMatchGlobs: [
      ["**/*.test.component.vitest.{ts,tsx}", "happy-dom"],
      ["**/*.test.unit.vitest.{ts,tsx}", "node"],
    ],
    coverage: {
      provider: "istanbul",
    },
  },
});
