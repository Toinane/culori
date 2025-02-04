import { build } from 'esbuild';

// Bundled CJS
build({
	entryPoints: ['./src/index.js'],
	logLevel: 'info',
	bundle: true,
	format: 'cjs',
	outfile: 'bundled/culori.cjs'
});

// Bundled CJS, minified
build({
	entryPoints: ['./src/index.js'],
	logLevel: 'info',
	bundle: true,
	minify: true,
	format: 'cjs',
	outfile: 'bundled/culori.min.cjs'
});

// Bundled ESM
build({
	entryPoints: ['./src/index.js'],
	logLevel: 'info',
	bundle: true,
	format: 'esm',
	outfile: 'bundled/culori.mjs'
});

// Bundled ESM, minified
build({
	entryPoints: ['./src/index.js'],
	logLevel: 'info',
	bundle: true,
	minify: true,
	format: 'esm',
	outfile: 'bundled/culori.min.mjs'
});

// Bundled IIFE
build({
	entryPoints: ['./src/index.js'],
	logLevel: 'info',
	bundle: true,
	format: 'iife',
	globalName: 'culori',
	outfile: 'bundled/culori.js'
});

// Bundled IIFE, minified
build({
	entryPoints: ['./src/index.js'],
	logLevel: 'info',
	bundle: true,
	minify: true,
	format: 'iife',
	globalName: 'culori',
	outfile: 'bundled/culori.min.js'
});

// Bundled UMD
// Adapted from: https://github.com/umdjs/umd/blob/master/templates/returnExports.js
build({
	entryPoints: ['./src/index.js'],
	logLevel: 'info',
	bundle: true,
	format: 'iife',
	globalName: 'culori',
	banner: {
		js: `(function(root, factory) {
			if (typeof define === 'function' && define.amd) {
				define([], factory);
			} else if (typeof module === 'object' && module.exports) {
				module.exports = factory();
			} else {
				root.culori = factory();
			}
		}
		(typeof self !== 'undefined' ? self : this, function() {`
	},
	footer: { js: `return culori; }));` },
	outfile: 'bundled/culori.umd.js'
});
