import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "http://192.168.1.122/",
  image: {
    domains: ["images.unsplash.com"]
  },
  prefetch: true,
  integrations: [tailwind(), sitemap(), compressor({
    gzip: false,
    brotli: true
  }), react(), db()],
  output: "server",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  adapter: netlify()
});