import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from "@astrojs/cloudflare";

// Keep existing URLs (/work.html, /about.html, ...) so the sitemap and any
// inbound links continue to resolve after the Astro migration.
export default defineConfig({
  site: 'https://whitneyesque.github.io',
  integrations: [mdx()],

  build: {
    format: 'file',
  },

  trailingSlash: 'never',
  adapter: cloudflare()
});