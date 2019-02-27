/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
import path from 'path';

const SRC = path.resolve(__dirname, "src");
const PAGES = path.resolve(__dirname, "src/pages");
const COMPONENTS = path.resolve(__dirname, "src/components");
const STYLE = path.resolve(__dirname, "src/style");
const ASSETS = path.resolve(__dirname, "src/assets");

export default function (config, env, helpers) {
	/** you can change config here **/
	if(env.production){
		config.output.publicPath = "/ghibli-fans/";
	}

	config.resolve.alias = Object.assign({}, config.resolve.alias, {
		'@': SRC,
		src: SRC,
		pages: PAGES,
		components: COMPONENTS,
		style: STYLE,
		assets: ASSETS
	})
}
