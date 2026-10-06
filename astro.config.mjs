import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { codeTitleTransformer } from './src/utils/code-titles.mjs';

const site = process.env.SITE_URL || 'https://www.mangoduck.cn';
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.endsWith('/admin/') && !page.endsWith('/search/') }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' },
      transformers: [codeTitleTransformer],
      wrap: true,
    },
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
