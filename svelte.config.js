import adapter from '@sveltejs/adapter-static';
import {mdsvex} from 'mdsvex'

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
	},
	extensions: ['.svelte','.md'],
	preprocess: [
		mdsvex({
			extensions:['.md'],
			rehypePlugins:[rehypeSlug,rehypeAutolinkHeadings]
		})
	]
};


export default config;
