import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html'
    }),

    paths: {
      base: dev ? '' : '/inspirators-web'
    },

    prerender: {
      handleHttpError: 'warn', // prevents build errors on 404s
      entries: ['*'] // pre-render all known routes
    },

    appDir: 'internal' // this is fine for GH Pages
  }
};

export default config;
