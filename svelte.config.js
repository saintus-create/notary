import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use Vercel adapter for optimal Vercel deployment
		adapter: adapter({
			// Optional: specify which Vercel runtime to use
			runtime: 'edge'
		}),
		alias: {
			'$lib': './src/lib',
		},
		// Enable prerendering for better performance
		prerender: {
			entries: ['*']
		},
		// Environment variables
		env: {
			publicPrefix: 'VITE_'
		}
	}
};

export default config;