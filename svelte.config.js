import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel'; // Import the adapter

import preprocess from 'svelte-preprocess';


const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/styles/functions";@use "@unsass/breakpoint";'
      }
    }),
    mdsvex()
  ],

  kit: {
    adapter: adapter(), 
    alias: {
      $components: './src/lib/components',
      $actions: './src/lib/actions',
      $styles: './src/styles',
      $utils: './src/utils',
      $assets: './src/assets',
      $helpers: './src/lib/helpers',
      $stores: './src/lib/stores',
	  $lib : './src/lib', 
    }
  },

  extensions: ['.svelte', '.svx']
};

export default config;
