import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

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
  }), react()],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  adapter: netlify()
});