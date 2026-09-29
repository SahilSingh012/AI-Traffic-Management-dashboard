import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Plugin that mirrors the built single-file index.html to the project root
// so users opening the folder in VS Code can open or right-click Live Server directly
function copySingleFileToRoot(): Plugin {
  return {
    name: "copy-singlefile-to-root",
    closeBundle() {
      const distIndex = path.resolve(__dirname, "dist", "index.html");
      if (fs.existsSync(distIndex)) {
        const html = fs.readFileSync(distIndex, "utf-8");
        fs.writeFileSync(path.resolve(__dirname, "flowgrid-standalone.html"), html, "utf-8");
        fs.writeFileSync(path.resolve(__dirname, "OPEN_ME_IN_VSCODE.html"), html, "utf-8");
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile(), copySingleFileToRoot()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
