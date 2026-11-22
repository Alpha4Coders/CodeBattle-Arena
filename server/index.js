import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const v2Path = path.resolve(__dirname, "v2.0");

// Change working directory to v2.0 so any cwd-dependent operations run in v2.0 context
try {
  process.chdir(v2Path);
} catch (err) {
  console.error("[Server Root Proxy] Failed to set cwd to v2.0:", err.message);
}

// Forward execution to v2.0 server entrypoint
const serverEntry = pathToFileURL(path.join(v2Path, "server", "index.js")).href;
await import(serverEntry);
