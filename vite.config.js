import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
  build: {
    rollupOptions: {
      external: (id) => {
        if (id.includes("@safe-global") || id.includes("@safe-globalThis")) {
          return true;
        }
        return false;
      }
    }
  }
});