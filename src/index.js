import formatter from './formatter';
import round from './round';
import converter from './converter';
import interpolate from './interpolate/interpolate'; 
import interpolateNumber from './interpolate/interpolateNumber';
import interpolateAlpha from './interpolate/interpolateAlpha';
import interpolateHue from './interpolate/interpolateHue';
import interpolateFunctionLinear from './interpolate/interpolateFunctionLinear';
import interpolateFunctionSpline from './interpolate/interpolateFunctionSpline';
import interpolateFunctionCosine from './interpolate/interpolateFunctionCosine';
import samples from './samples';
import zip from './zip';
import difference from './difference';

import parse from './parse';

import { defineMode, getModeDefinition } from './modes';

import rgbDef from './rgb/definition';
import lrgbDef from './lrgb/definition';
import hslDef from './hsl/definition';
import hsvDef from './hsv/definition';
import hsiDef from './hsi/definition';
import hwbDef from './hwb/definition';
import labDef from './lab/definition';
import lchDef from './lch/definition';
import cubehelixDef from './cubehelix/definition';

import colorsNamed from './colors/named';

defineMode(rgbDef);
defineMode(lrgbDef);
defineMode(hslDef);
defineMode(hsvDef);
defineMode(hsiDef);
defineMode(hwbDef);
defineMode(labDef);
defineMode(lchDef);
defineMode(cubehelixDef);

let rgb = converter('rgb');
let lrgb = converter('lrgb');
let hsl = converter('hsl');
let hsv = converter('hsv');
let hsi = converter('hsi');
let hwb = converter('hwb');
let lab = converter('lab');
let lch = converter('lch');
let cubehelix = converter('cubehelix');

const culori = rgb;

export {
	
	// Color spaces
	hsl,
	hsv,
	hsi,
	hwb,
	rgb,
	lab,
	lch,
	lrgb,
	cubehelix,

	// Basics
	formatter,
	converter,
	round,
	parse,
	difference,

	// Interpolation
	interpolate,
	interpolateNumber,
	interpolateAlpha,
	interpolateHue,
	interpolateFunctionLinear,
	interpolateFunctionSpline,
	interpolateFunctionCosine,
	samples,
	
	// Extending Culori
	defineMode,
	getModeDefinition,

	// Colors
	colorsNamed
};

export default culori;