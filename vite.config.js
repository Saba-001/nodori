import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.VITE_BASE_URL || "/",
  plugins: [react()],
});
