import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react_ebac_practica_3/",
  build: {
    sourcemap: true,
  },
});
