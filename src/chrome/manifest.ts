import { ManifestV3Export } from '@crxjs/vite-plugin'

const config : ManifestV3Export = {
  manifest_version: 3,
  name: "开发者工具",
  version: "1.0.0",
  author: "Helee",
  description: "提供开发者日常使用的工具",
  minimum_chrome_version: "116", // Chrome 最低版本
  permissions: ['sidePanel', 'tabs'],
  background: {
    service_worker: "./src/chrome/service-worker.ts",
    type: "module"
  },
  side_panel: {
      default_path: "index.html"
  },
  icons: {
    "16": "image/icon-40.png",
    "32": "image/icon-40.png",
    "48": "image/icon-80.png",
    "128": "image/icon-80.png"
  }
};

export default config;
