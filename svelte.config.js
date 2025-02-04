import * as child_process from 'node:child_process';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess:preprocess(),
	kit: {
		adapter: adapter({runtime:'nodejs18.x'}),
		// serviceWorker:{
		// 	register:false
		// }
	},
	vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true
			}
		}
	},
};

export default config;
