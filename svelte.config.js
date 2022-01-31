import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: static_adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		appDir: 'internal',
		paths: {
			base: dev ? '' : '/game-of-life'
		}
	}
};

export default config;
