import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


const config = {
  // preprocess: [
  //   preprocess({
  //     scss: {
  //       prependData: '@use "src/styles/functions"; @use "@unsass/breakpoint";@use "@unsass/breakpoint";'
  //     }
  //   }),
  //   mdsvex()
  // ],
  preprocess: vitePreprocess(),

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
