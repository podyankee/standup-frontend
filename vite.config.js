import vitePugPlugin from 'vite-plugin-pug-transformer';
import autoprefixer from 'autoprefixer';

export default {
	plugins: [vitePugPlugin()],
	css: {
		postcss: {
			plugins: [
				autoprefixer({}), // add options if needed
			],
		},
	},
};
