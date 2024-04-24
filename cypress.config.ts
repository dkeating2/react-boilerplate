import { defineConfig } from "cypress";
import coverage from "@cypress/code-coverage/task";
export default defineConfig({
  e2e: {
    baseUrl: "http://0.0.0.0:5173",
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },

  component: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
