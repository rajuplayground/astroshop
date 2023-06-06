import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  experimental: {
    hybridOutput: true
  },
  integrations: [tailwind(), react()],
  server: {
    port: 4000
  },
  adapter: netlify()
});