import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    // Minificação mais agressiva via esbuild (nativo no Vite, zero deps extras)
    minify: "esbuild",
    target: "es2020",
    // CSS splitting: cada chunk carrega apenas o CSS que precisa
    cssCodeSplit: true,
    // Alerta quando um chunk passar de 500 KB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Chunks manuais para melhor cache e carregamento paralelo em mobile
        manualChunks: {
          // Core React — muda raramente, cache longo
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],
          // React Router / query — infra que não muda com features
          "vendor-query": ["@tanstack/react-query", "@tanstack/query-core"],
          // Radix UI primitives (pesado, lazy-friendly)
          "vendor-radix": [
            "@radix-ui/react-select",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
            "@radix-ui/react-toast",
          ],
          // Lucide icons — bundle separado pois é grande
          "vendor-icons": ["lucide-react"],
        },
      },
    },
  },
}));
