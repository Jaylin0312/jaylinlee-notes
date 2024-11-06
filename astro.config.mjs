// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://.dev/";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let SITE_URL = LOCALHOST_URL;
if (isBuild) {
  SITE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  server: {
    port: SERVER_PORT,
  },
  site: SITE_URL,
  prefetch: true,
  integrations: [tailwind(), mdx()],
});
