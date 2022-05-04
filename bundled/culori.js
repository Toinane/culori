var culori = (() => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all)
			__defProp(target, name, { get: all[name], enumerable: true });
	};
	var __copyProps = (to, from, except, desc) => {
		if ((from && typeof from === 'object') || typeof from === 'function') {
			for (let key of __getOwnPropNames(from))
				if (!__hasOwnProp.call(to, key) && key !== except)
					__defProp(to, key, {
						get: () => from[key],
						enumerable:
							!(desc = __getOwnPropDesc(from, key)) ||
							desc.enumerable
					});
		}
		return to;
	};
	var __toCommonJS = mod2 =>
		__copyProps(__defProp({}, '__esModule', { value: true }), mod2);

	// src/index.js
	var src_exports = {};
	__export(src_exports, {
		a98: () => a98,
		average: () => average,
		averageAngle: () => averageAngle,
		averageNumber: () => averageNumber,
		blend: () => blend_default,
		clampChroma: () => clampChroma,
		clampRgb: () => clampRgb,
		colorsNamed: () => named_default,
		convertA98ToXyz65: () => convertA98ToXyz65_default,
		convertCubehelixToRgb: () => convertCubehelixToRgb_default,
		convertDlchToLab65: () => convertDlchToLab65_default,
		convertHsiToRgb: () => convertHsiToRgb,
		convertHslToRgb: () => convertHslToRgb,
		convertHsvToRgb: () => convertHsvToRgb,
		convertHwbToRgb: () => convertHwbToRgb,
		convertJabToJch: () => convertJabToJch_default,
		convertJabToRgb: () => convertJabToRgb_default,
		convertJabToXyz65: () => convertJabToXyz65_default,
		convertJchToJab: () => convertJchToJab_default,
		convertLab65ToDlch: () => convertLab65ToDlch_default,
		convertLab65ToRgb: () => convertLab65ToRgb_default,
		convertLab65ToXyz65: () => convertLab65ToXyz65_default,
		convertLabToLch: () => convertLabToLch_default,
		convertLabToRgb: () => convertLabToRgb_default,
		convertLabToXyz50: () => convertLabToXyz50_default,
		convertLchToLab: () => convertLchToLab_default,
		convertLchuvToLuv: () => convertLchuvToLuv_default,
		convertLrgbToOklab: () => convertLrgbToOklab_default,
		convertLrgbToRgb: () => convertLrgbToRgb_default,
		convertLuvToLchuv: () => convertLuvToLchuv_default,
		convertLuvToXyz50: () => convertLuvToXyz50_default,
		convertOkhslToOklab: () => convertOkhslToOklab,
		convertOkhsvToOklab: () => convertOkhsvToOklab,
		convertOklabToLrgb: () => convertOklabToLrgb_default,
		convertOklabToOkhsl: () => convertOklabToOkhsl,
		convertOklabToOkhsv: () => convertOklabToOkhsv,
		convertOklabToRgb: () => convertOklabToRgb_default,
		convertP3ToXyz65: () => convertP3ToXyz65_default,
		convertProphotoToXyz50: () => convertProphotoToXyz50_default,
		convertRec2020ToXyz65: () => convertRec2020ToXyz65_default,
		convertRgbToCubehelix: () => convertRgbToCubehelix_default,
		convertRgbToHsi: () => convertRgbToHsi,
		convertRgbToHsl: () => convertRgbToHsl,
		convertRgbToHsv: () => convertRgbToHsv,
		convertRgbToHwb: () => convertRgbToHwb,
		convertRgbToJab: () => convertRgbToJab_default,
		convertRgbToLab: () => convertRgbToLab_default,
		convertRgbToLab65: () => convertRgbToLab65_default,
		convertRgbToLrgb: () => convertRgbToLrgb_default,
		convertRgbToOklab: () => convertRgbToOklab_default,
		convertRgbToXyz50: () => convertRgbToXyz50_default,
		convertRgbToXyz65: () => convertRgbToXyz65_default,
		convertRgbToYiq: () => convertRgbToYiq_default,
		convertXyz50ToLab: () => convertXyz50ToLab_default,
		convertXyz50ToLuv: () => convertXyz50ToLuv_default,
		convertXyz50ToProphoto: () => convertXyz50ToProphoto_default,
		convertXyz50ToRgb: () => convertXyz50ToRgb_default,
		convertXyz50ToXyz65: () => convertXyz50ToXyz65_default,
		convertXyz65ToA98: () => convertXyz65ToA98_default,
		convertXyz65ToJab: () => convertXyz65ToJab_default,
		convertXyz65ToLab65: () => convertXyz65ToLab65_default,
		convertXyz65ToP3: () => convertXyz65ToP3_default,
		convertXyz65ToRec2020: () => convertXyz65ToRec2020_default,
		convertXyz65ToRgb: () => convertXyz65ToRgb_default,
		convertXyz65ToXyz50: () => convertXyz65ToXyz50_default,
		convertYiqToRgb: () => convertYiqToRgb_default,
		converter: () => converter_default,
		cubehelix: () => cubehelix,
		differenceCie76: () => differenceCie76,
		differenceCie94: () => differenceCie94,
		differenceCiede2000: () => differenceCiede2000,
		differenceCmc: () => differenceCmc,
		differenceEuclidean: () => differenceEuclidean,
		differenceHueChroma: () => differenceHueChroma,
		differenceHueNaive: () => differenceHueNaive,
		differenceHueSaturation: () => differenceHueSaturation,
		differenceHyab: () => differenceHyab,
		differenceKotsarenkoRamos: () => differenceKotsarenkoRamos,
		displayable: () => displayable_default,
		dlab: () => dlab,
		dlch: () => dlch,
		easingGamma: () => gamma_default,
		easingInOutSine: () => inOutSine_default,
		easingMidpoint: () => midpoint_default,
		easingSmootherstep: () => smootherstep_default,
		easingSmoothstep: () => smoothstep_default,
		filterBrightness: () => filterBrightness,
		filterContrast: () => filterContrast,
		filterDeficiencyDeuter: () => filterDeficiencyDeuter,
		filterDeficiencyProt: () => filterDeficiencyProt,
		filterDeficiencyTrit: () => filterDeficiencyTrit,
		filterGrayscale: () => filterGrayscale,
		filterHueRotate: () => filterHueRotate,
		filterInvert: () => filterInvert,
		filterSaturate: () => filterSaturate,
		filterSepia: () => filterSepia,
		fixupAlpha: () => fixupAlpha,
		fixupHueDecreasing: () => fixupHueDecreasing,
		fixupHueIncreasing: () => fixupHueIncreasing,
		fixupHueLonger: () => fixupHueLonger,
		fixupHueShorter: () => fixupHueShorter,
		formatCss: () => formatCss,
		formatHex: () => formatHex,
		formatHex8: () => formatHex8,
		formatHsl: () => formatHsl,
		formatRgb: () => formatRgb,
		getMode: () => getMode,
		hsi: () => hsi,
		hsl: () => hsl,
		hsv: () => hsv,
		hwb: () => hwb2,
		interpolate: () => interpolate,
		interpolateWith: () => interpolateWith,
		interpolateWithPremultipliedAlpha: () =>
			interpolateWithPremultipliedAlpha,
		interpolatorLinear: () => interpolatorLinear,
		interpolatorPiecewise: () => interpolatorPiecewise,
		interpolatorSplineBasis: () => interpolatorSplineBasis,
		interpolatorSplineBasisClosed: () => interpolatorSplineBasisClosed,
		interpolatorSplineMonotone: () => interpolatorSplineMonotone,
		interpolatorSplineMonotone2: () => interpolatorSplineMonotone2,
		interpolatorSplineMonotoneClosed: () =>
			interpolatorSplineMonotoneClosed,
		interpolatorSplineNatural: () => interpolatorSplineNatural,
		interpolatorSplineNaturalClosed: () => interpolatorSplineNaturalClosed,
		jab: () => jab,
		jch: () => jch,
		lab: () => lab2,
		lab65: () => lab65,
		lch: () => lch2,
		lch65: () => lch65,
		lchuv: () => lchuv,
		lerp: () => lerp_default,
		lrgb: () => lrgb,
		luv: () => luv,
		mapAlphaDivide: () => mapAlphaDivide,
		mapAlphaMultiply: () => mapAlphaMultiply,
		mapTransferGamma: () => mapTransferGamma,
		mapTransferLinear: () => mapTransferLinear,
		mapper: () => mapper,
		modeA98: () => definition_default2,
		modeCubehelix: () => definition_default3,
		modeDlab: () => definition_default4,
		modeDlch: () => definition_default5,
		modeHsi: () => definition_default6,
		modeHsl: () => definition_default7,
		modeHsv: () => definition_default8,
		modeHwb: () => definition_default9,
		modeJab: () => definition_default10,
		modeJch: () => definition_default11,
		modeLab: () => definition_default12,
		modeLab65: () => definition_default13,
		modeLch: () => definition_default14,
		modeLch65: () => definition_default15,
		modeLchuv: () => definition_default16,
		modeLrgb: () => definition_default17,
		modeLuv: () => definition_default18,
		modeOkhsl: () => modeOkhsl_default,
		modeOkhsv: () => modeOkhsv_default,
		modeOklab: () => definition_default19,
		modeOklch: () => definition_default20,
		modeP3: () => definition_default21,
		modeProphoto: () => definition_default22,
		modeRec2020: () => definition_default23,
		modeRgb: () => definition_default,
		modeXyz50: () => definition_default24,
		modeXyz65: () => definition_default25,
		modeYiq: () => definition_default26,
		nearest: () => nearest_default,
		okhsl: () => okhsl,
		okhsv: () => okhsv,
		oklab: () => oklab,
		oklch: () => oklch,
		p3: () => p3,
		parse: () => parse_default,
		parseHex: () => parseHex_default,
		parseHsl: () => parseHsl_default,
		parseHwb: () => parseHwb_default,
		parseLab: () => parseLab_default,
		parseLch: () => parseLch_default,
		parseNamed: () => parseNamed_default,
		parseRgb: () => parseRgb_default,
		parseTransparent: () => parseTransparent_default,
		prophoto: () => prophoto,
		random: () => random_default,
		rec2020: () => rec2020,
		removeParser: () => removeParser,
		rgb: () => rgb4,
		round: () => round_default,
		samples: () => samples_default,
		serializeHex: () => serializeHex,
		serializeHex8: () => serializeHex8,
		serializeHsl: () => serializeHsl,
		serializeRgb: () => serializeRgb,
		useMode: () => useMode,
		useParser: () => useParser,
		wcagContrast: () => contrast,
		wcagLuminance: () => luminance,
		xyz50: () => xyz50,
		xyz65: () => xyz65,
		yiq: () => yiq
	});

	// src/rgb/parseNumber.js
	var parseNumber = (color, len) => {
		if (typeof color !== 'number') return;
		if (len === 3) {
			return {
				mode: 'rgb',
				r: (((color >> 8) & 15) | ((color >> 4) & 240)) / 255,
				g: (((color >> 4) & 15) | (color & 240)) / 255,
				b: ((color & 15) | ((color << 4) & 240)) / 255
			};
		}
		if (len === 4) {
			return {
				mode: 'rgb',
				r: (((color >> 12) & 15) | ((color >> 8) & 240)) / 255,
				g: (((color >> 8) & 15) | ((color >> 4) & 240)) / 255,
				b: (((color >> 4) & 15) | (color & 240)) / 255,
				alpha: ((color & 15) | ((color << 4) & 240)) / 255
			};
		}
		if (len === 6) {
			return {
				mode: 'rgb',
				r: ((color >> 16) & 255) / 255,
				g: ((color >> 8) & 255) / 255,
				b: (color & 255) / 255
			};
		}
		if (len === 8) {
			return {
				mode: 'rgb',
				r: ((color >> 24) & 255) / 255,
				g: ((color >> 16) & 255) / 255,
				b: ((color >> 8) & 255) / 255,
				alpha: (color & 255) / 255
			};
		}
	};
	var parseNumber_default = parseNumber;

	// src/colors/named.js
	var named = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	};
	var named_default = named;

	// src/rgb/parseNamed.js
	var parseNamed = color => {
		return parseNumber_default(named_default[color.toLowerCase()], 6);
	};
	var parseNamed_default = parseNamed;

	// src/rgb/parseHex.js
	var hex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;
	var parseHex = color => {
		let match;
		return (match = color.match(hex))
			? parseNumber_default(parseInt(match[1], 16), match[1].length)
			: void 0;
	};
	var parseHex_default = parseHex;

	// src/util/regex.js
	var num = '([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)';
	var num_none = `(?:${num}|none)`;
	var per = `${num}%`;
	var per_none = `(?:${num}%|none)`;
	var num_per = `(?:${num}%|${num})`;
	var num_per_none = `(?:${num}%|${num}|none)`;
	var hue = `(?:${num}(deg|grad|rad|turn)|${num})`;
	var hue_none = `(?:${num}(deg|grad|rad|turn)|${num}|none)`;
	var c = `\\s*,\\s*`;
	var s = `\\s+`;
	var rx_num_per_none = new RegExp('^' + num_per_none + '$');

	// src/rgb/parseRgb.js
	var rgb_num_old = new RegExp(
		`^rgba?\\(\\s*${num}${c}${num}${c}${num}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
	);
	var rgb_per_old = new RegExp(
		`^rgba?\\(\\s*${per}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
	);
	var rgb_num_new = new RegExp(
		`^rgba?\\(\\s*${num_none}${s}${num_none}${s}${num_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
	);
	var rgb_per_new = new RegExp(
		`^rgba?\\(\\s*${per_none}${s}${per_none}${s}${per_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
	);
	var parseRgb = color => {
		let res = { mode: 'rgb' };
		let match;
		if ((match = color.match(rgb_num_old) || color.match(rgb_num_new))) {
			if (match[1] !== void 0) {
				res.r = match[1] / 255;
			}
			if (match[2] !== void 0) {
				res.g = match[2] / 255;
			}
			if (match[3] !== void 0) {
				res.b = match[3] / 255;
			}
		} else if (
			(match = color.match(rgb_per_old) || color.match(rgb_per_new))
		) {
			if (match[1] !== void 0) {
				res.r = match[1] / 100;
			}
			if (match[2] !== void 0) {
				res.g = match[2] / 100;
			}
			if (match[3] !== void 0) {
				res.b = match[3] / 100;
			}
		} else {
			return void 0;
		}
		if (match[4] !== void 0) {
			res.alpha = match[4] / 100;
		} else if (match[5] !== void 0) {
			res.alpha = +match[5];
		}
		return res;
	};
	var parseRgb_default = parseRgb;

	// src/rgb/parseTransparent.js
	var parseTransparent = c4 =>
		c4 === 'transparent'
			? { mode: 'rgb', r: 0, g: 0, b: 0, alpha: 0 }
			: void 0;
	var parseTransparent_default = parseTransparent;

	// src/interpolate/lerp.js
	var lerp = (a, b, t) => a + t * (b - a);
	var lerp_default = lerp;

	// src/interpolate/piecewise.js
	var get_classes = arr => {
		let classes = [];
		for (let i = 0; i < arr.length - 1; i++) {
			let a = arr[i];
			let b = arr[i + 1];
			if (a === void 0 && b === void 0) {
				classes.push(void 0);
			} else if (a !== void 0 && b !== void 0) {
				classes.push([a, b]);
			} else {
				classes.push(a !== void 0 ? [a, a] : [b, b]);
			}
		}
		return classes;
	};
	var interpolatorPiecewise = interpolator2 => arr => {
		let classes = get_classes(arr);
		return t => {
			let cls = t * classes.length;
			let idx =
				t >= 1 ? classes.length - 1 : Math.max(Math.floor(cls), 0);
			let pair = classes[idx];
			return pair === void 0
				? void 0
				: interpolator2(pair[0], pair[1], cls - idx);
		};
	};

	// src/interpolate/linear.js
	var interpolatorLinear = interpolatorPiecewise(lerp_default);

	// src/fixup/alpha.js
	var fixupAlpha = arr => {
		let some_defined = false;
		let res = arr.map(v => {
			if (v !== void 0) {
				some_defined = true;
				return v;
			}
			return 1;
		});
		return some_defined ? res : arr;
	};

	// src/rgb/definition.js
	var definition = {
		mode: 'rgb',
		channels: ['r', 'g', 'b', 'alpha'],
		parse: [
			parseHex_default,
			parseRgb_default,
			parseNamed_default,
			parseTransparent_default,
			'srgb'
		],
		serialize: 'srgb',
		interpolate: {
			r: interpolatorLinear,
			g: interpolatorLinear,
			b: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		}
	};
	var definition_default = definition;

	// src/a98/convertA98ToXyz65.js
	var linearize = v => Math.pow(Math.abs(v), 563 / 256) * Math.sign(v);
	var convertA98ToXyz65 = a982 => {
		let r2 = linearize(a982.r);
		let g = linearize(a982.g);
		let b = linearize(a982.b);
		let res = {
			mode: 'xyz65',
			x:
				0.5766690429101305 * r2 +
				0.1855582379065463 * g +
				0.1882286462349947 * b,
			y:
				0.297344975250536 * r2 +
				0.6273635662554661 * g +
				0.0752914584939979 * b,
			z:
				0.0270313613864123 * r2 +
				0.0706888525358272 * g +
				0.9913375368376386 * b
		};
		if (a982.alpha !== void 0) {
			res.alpha = a982.alpha;
		}
		return res;
	};
	var convertA98ToXyz65_default = convertA98ToXyz65;

	// src/a98/convertXyz65ToA98.js
	var gamma = v => Math.pow(Math.abs(v), 256 / 563) * Math.sign(v);
	var convertXyz65ToA98 = ({ x, y, z, alpha }) => {
		let res = {
			mode: 'a98',
			r: gamma(
				x * 2.0415879038107465 -
					y * 0.5650069742788597 -
					0.3447313507783297 * z
			),
			g: gamma(
				x * -0.9692436362808798 +
					y * 1.8759675015077206 +
					0.0415550574071756 * z
			),
			b: gamma(
				x * 0.0134442806320312 -
					y * 0.1183623922310184 +
					1.0151749943912058 * z
			)
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz65ToA98_default = convertXyz65ToA98;

	// src/lrgb/convertRgbToLrgb.js
	var fn = c4 => {
		const abs3 = Math.abs(c4);
		if (abs3 < 0.04045) {
			return c4 / 12.92;
		}
		return (Math.sign(c4) || 1) * Math.pow((abs3 + 0.055) / 1.055, 2.4);
	};
	var convertRgbToLrgb = ({ r: r2, g, b, alpha }) => {
		let res = {
			mode: 'lrgb',
			r: fn(r2),
			g: fn(g),
			b: fn(b)
		};
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertRgbToLrgb_default = convertRgbToLrgb;

	// src/xyz65/convertRgbToXyz65.js
	var convertRgbToXyz65 = rgb5 => {
		let { r: r2, g, b, alpha } = convertRgbToLrgb_default(rgb5);
		let res = {
			mode: 'xyz65',
			x:
				0.4123907992659593 * r2 +
				0.357584339383878 * g +
				0.1804807884018343 * b,
			y:
				0.2126390058715102 * r2 +
				0.715168678767756 * g +
				0.0721923153607337 * b,
			z:
				0.0193308187155918 * r2 +
				0.119194779794626 * g +
				0.9505321522496607 * b
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertRgbToXyz65_default = convertRgbToXyz65;

	// src/lrgb/convertLrgbToRgb.js
	var fn2 = c4 => {
		const abs3 = Math.abs(c4);
		if (abs3 > 31308e-7) {
			return (
				(Math.sign(c4) || 1) * (1.055 * Math.pow(abs3, 1 / 2.4) - 0.055)
			);
		}
		return c4 * 12.92;
	};
	var convertLrgbToRgb = ({ r: r2, g, b, alpha }, mode = 'rgb') => {
		let res = {
			mode,
			r: fn2(r2),
			g: fn2(g),
			b: fn2(b)
		};
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertLrgbToRgb_default = convertLrgbToRgb;

	// src/xyz65/convertXyz65ToRgb.js
	var convertXyz65ToRgb = ({ x, y, z, alpha }) => {
		let res = convertLrgbToRgb_default({
			r:
				x * 3.2409699419045226 -
				y * 1.537383177570094 -
				0.4986107602930034 * z,
			g:
				x * -0.9692436362808796 +
				y * 1.8759675015077204 +
				0.0415550574071756 * z,
			b:
				x * 0.0556300796969936 -
				y * 0.2039769588889765 +
				1.0569715142428784 * z
		});
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz65ToRgb_default = convertXyz65ToRgb;

	// src/a98/definition.js
	var definition2 = {
		...definition_default,
		mode: 'a98',
		parse: ['a98-rgb'],
		serialize: 'a98-rgb',
		fromMode: {
			rgb: color =>
				convertXyz65ToA98_default(convertRgbToXyz65_default(color)),
			xyz65: convertXyz65ToA98_default
		},
		toMode: {
			rgb: color =>
				convertXyz65ToRgb_default(convertA98ToXyz65_default(color)),
			xyz65: convertA98ToXyz65_default
		}
	};
	var definition_default2 = definition2;

	// src/util/normalizeHue.js
	var normalizeHue = hue3 => ((hue3 = hue3 % 360) < 0 ? hue3 + 360 : hue3);
	var normalizeHue_default = normalizeHue;

	// src/fixup/hue.js
	var hue2 = (hues, fn5) => {
		return hues
			.map((hue3, idx, arr) => {
				if (hue3 === void 0) {
					return hue3;
				}
				let normalized = normalizeHue_default(hue3);
				if (idx === 0 || hues[idx - 1] === void 0) {
					return normalized;
				}
				return fn5(normalized - normalizeHue_default(arr[idx - 1]));
			})
			.reduce((acc, curr) => {
				if (
					!acc.length ||
					curr === void 0 ||
					acc[acc.length - 1] === void 0
				) {
					acc.push(curr);
					return acc;
				}
				acc.push(curr + acc[acc.length - 1]);
				return acc;
			}, []);
	};
	var fixupHueShorter = arr =>
		hue2(arr, d => (Math.abs(d) <= 180 ? d : d - 360 * Math.sign(d)));
	var fixupHueLonger = arr =>
		hue2(arr, d =>
			Math.abs(d) >= 180 || d === 0 ? d : d - 360 * Math.sign(d)
		);
	var fixupHueIncreasing = arr => hue2(arr, d => (d >= 0 ? d : d + 360));
	var fixupHueDecreasing = arr => hue2(arr, d => (d <= 0 ? d : d - 360));

	// src/cubehelix/constants.js
	var M = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0];
	var degToRad = Math.PI / 180;
	var radToDeg = 180 / Math.PI;

	// src/cubehelix/convertRgbToCubehelix.js
	var DE = M[3] * M[4];
	var BE = M[1] * M[4];
	var BCAD = M[1] * M[2] - M[0] * M[3];
	var convertRgbToCubehelix = ({ r: r2, g, b, alpha }) => {
		let l = (BCAD * b + r2 * DE - g * BE) / (BCAD + DE - BE);
		let x = b - l;
		let y = (M[4] * (g - l) - M[2] * x) / M[3];
		let res = {
			mode: 'cubehelix',
			l,
			s:
				l === 0 || l === 1
					? void 0
					: Math.sqrt(x * x + y * y) / (M[4] * l * (1 - l))
		};
		if (res.s) res.h = Math.atan2(y, x) * radToDeg - 120;
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertRgbToCubehelix_default = convertRgbToCubehelix;

	// src/cubehelix/convertCubehelixToRgb.js
	var convertCubehelixToRgb = ({ h, s: s2, l, alpha }) => {
		let res = { mode: 'rgb' };
		h = (h === void 0 ? 0 : h + 120) * degToRad;
		let amp = s2 === void 0 ? 0 : s2 * l * (1 - l);
		let cosh = Math.cos(h);
		let sinh = Math.sin(h);
		res.r = l + amp * (M[0] * cosh + M[1] * sinh);
		res.g = l + amp * (M[2] * cosh + M[3] * sinh);
		res.b = l + amp * (M[4] * cosh + M[5] * sinh);
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertCubehelixToRgb_default = convertCubehelixToRgb;

	// src/parse.js
	function parseColorSyntax(color) {
		const m = color.match(/^color\(\s*([a-z0-9-]+)\s*(.*?)\s*\)$/);
		if (!m) {
			return void 0;
		}
		const mode = colorProfiles[m[1]];
		if (!mode) {
			return void 0;
		}
		const res = { mode };
		const [cmp_string, alpha] = m[2].split(/\s*\/\s*/);
		let cm;
		if (alpha !== void 0) {
			cm = alpha.match(rx_num_per_none);
			if (!cm) {
				return void 0;
			}
			if (cm[1] !== void 0) {
				res.alpha = cm[1] / 100;
			} else if (cm[2] !== void 0) {
				res.alpha = +cm[2];
			}
		}
		const components = cmp_string.split(/\s+/);
		let channels = getMode(mode).channels;
		for (let i = 0, ch; i < channels.length; i++) {
			ch = channels[i];
			if (ch === 'alpha') {
				continue;
			}
			if (i >= components.length || !components[i]) {
				res[ch] = 0;
				continue;
			}
			if (!(cm = components[i].match(rx_num_per_none))) {
				return void 0;
			}
			if (cm[1] !== void 0) {
				res[ch] = cm[1] / 100;
			} else if (cm[2] !== void 0) {
				res[ch] = +cm[2];
			}
		}
		return res;
	}
	var parse = color => {
		if (typeof color !== 'string') {
			return void 0;
		}
		let result = void 0;
		let i = 0;
		let len = parsers.length;
		while (i < len) {
			if ((result = parsers[i++](color)) !== void 0) {
				return result;
			}
		}
		return parseColorSyntax(color);
	};
	var parse_default = parse;

	// src/_prepare.js
	var prepare = (color, mode) =>
		color === void 0
			? void 0
			: typeof color !== 'object'
			? parse_default(color)
			: color.mode !== void 0
			? color
			: mode
			? { ...color, mode }
			: void 0;
	var prepare_default = prepare;

	// src/converter.js
	var converter =
		(target_mode = 'rgb') =>
		color =>
			(color = prepare_default(color, target_mode)) !== void 0
				? color.mode === target_mode
					? color
					: converters[color.mode][target_mode]
					? converters[color.mode][target_mode](color)
					: target_mode === 'rgb'
					? converters[color.mode].rgb(color)
					: converters.rgb[target_mode](
							converters[color.mode].rgb(color)
					  )
				: void 0;
	var converter_default = converter;

	// src/modes.js
	var converters = {};
	var modes = {};
	var parsers = [];
	var colorProfiles = {};
	var identity = v => v;
	var useMode = definition27 => {
		converters[definition27.mode] = {
			...converters[definition27.mode],
			...definition27.toMode
		};
		Object.keys(definition27.fromMode || {}).forEach(k4 => {
			if (!converters[k4]) {
				converters[k4] = {};
			}
			converters[k4][definition27.mode] = definition27.fromMode[k4];
		});
		if (!definition27.ranges) {
			definition27.ranges = {};
		}
		if (!definition27.difference) {
			definition27.difference = {};
		}
		definition27.channels.forEach(channel => {
			if (definition27.ranges[channel] === void 0) {
				definition27.ranges[channel] = [0, 1];
			}
			if (!definition27.interpolate[channel]) {
				throw new Error(`Missing interpolator for: ${channel}`);
			}
			if (typeof definition27.interpolate[channel] === 'function') {
				definition27.interpolate[channel] = {
					use: definition27.interpolate[channel]
				};
			}
			if (!definition27.interpolate[channel].fixup) {
				definition27.interpolate[channel].fixup = identity;
			}
		});
		modes[definition27.mode] = definition27;
		(definition27.parse || []).forEach(parser => {
			if (typeof parser === 'function') {
				useParser(parser);
			} else if (typeof parser === 'string') {
				colorProfiles[parser] = definition27.mode;
			}
		});
		return converter_default(definition27.mode);
	};
	var getMode = mode => modes[mode];
	var useParser = parser => {
		const idx = parsers.indexOf(parser);
		if (idx < 0) {
			parsers.push(parser);
		}
	};
	var removeParser = parser => {
		const idx = parsers.indexOf(parser);
		if (idx > 0) {
			parsers.splice(idx, 1);
		}
	};

	// src/difference.js
	var differenceHueSaturation = (std, smp) => {
		if (std.h === void 0 || smp.h === void 0 || !std.s || !smp.s) {
			return 0;
		}
		let std_h = normalizeHue_default(std.h);
		let smp_h = normalizeHue_default(smp.h);
		let dH = Math.sin((((smp_h - std_h + 360) / 2) * Math.PI) / 180);
		return 2 * Math.sqrt(std.s * smp.s) * dH;
	};
	var differenceHueNaive = (std, smp) => {
		if (std.h === void 0 || smp.h === void 0) {
			return 0;
		}
		let std_h = normalizeHue_default(std.h);
		let smp_h = normalizeHue_default(smp.h);
		if (Math.abs(smp_h - std_h) > 180) {
			return std_h - (smp_h - 360 * Math.sign(smp_h - std_h));
		}
		return smp_h - std_h;
	};
	var differenceHueChroma = (std, smp) => {
		if (std.h === void 0 || smp.h === void 0 || !std.c || !smp.c) {
			return 0;
		}
		let std_h = normalizeHue_default(std.h);
		let smp_h = normalizeHue_default(smp.h);
		let dH = Math.sin((((smp_h - std_h + 360) / 2) * Math.PI) / 180);
		return 2 * Math.sqrt(std.c * smp.c) * dH;
	};
	var differenceEuclidean = (mode = 'rgb', weights = [1, 1, 1, 0]) => {
		let def = getMode(mode);
		let channels = def.channels;
		let diffs = def.difference;
		let conv = converter_default(mode);
		return (std, smp) => {
			let ConvStd = conv(std);
			let ConvSmp = conv(smp);
			return Math.sqrt(
				channels.reduce((sum, k4, idx) => {
					let delta = diffs[k4]
						? diffs[k4](ConvStd, ConvSmp)
						: ConvStd[k4] - ConvSmp[k4];
					return (
						sum +
						(weights[idx] || 0) *
							Math.pow(isNaN(delta) ? 0 : delta, 2)
					);
				}, 0)
			);
		};
	};
	var differenceCie76 = () => differenceEuclidean('lab65');
	var differenceCie94 = (kL = 1, K1 = 0.045, K2 = 0.015) => {
		let lab3 = converter_default('lab65');
		return (std, smp) => {
			let LabStd = lab3(std);
			let LabSmp = lab3(smp);
			let lStd = LabStd.l;
			let aStd = LabStd.a;
			let bStd = LabStd.b;
			let cStd = Math.sqrt(aStd * aStd + bStd * bStd);
			let lSmp = LabSmp.l;
			let aSmp = LabSmp.a;
			let bSmp = LabSmp.b;
			let cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);
			let dL2 = Math.pow(lStd - lSmp, 2);
			let dC2 = Math.pow(cStd - cSmp, 2);
			let dH2 = Math.pow(aStd - aSmp, 2) + Math.pow(bStd - bSmp, 2) - dC2;
			return Math.sqrt(
				dL2 / Math.pow(kL, 2) +
					dC2 / Math.pow(1 + K1 * cStd, 2) +
					dH2 / Math.pow(1 + K2 * cStd, 2)
			);
		};
	};
	var differenceCiede2000 = (Kl = 1, Kc = 1, Kh = 1) => {
		let lab3 = converter_default('lab65');
		return (std, smp) => {
			let LabStd = lab3(std);
			let LabSmp = lab3(smp);
			let lStd = LabStd.l;
			let aStd = LabStd.a;
			let bStd = LabStd.b;
			let cStd = Math.sqrt(aStd * aStd + bStd * bStd);
			let lSmp = LabSmp.l;
			let aSmp = LabSmp.a;
			let bSmp = LabSmp.b;
			let cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);
			let cAvg = (cStd + cSmp) / 2;
			let G =
				0.5 *
				(1 -
					Math.sqrt(
						Math.pow(cAvg, 7) /
							(Math.pow(cAvg, 7) + Math.pow(25, 7))
					));
			let apStd = aStd * (1 + G);
			let apSmp = aSmp * (1 + G);
			let cpStd = Math.sqrt(apStd * apStd + bStd * bStd);
			let cpSmp = Math.sqrt(apSmp * apSmp + bSmp * bSmp);
			let hpStd =
				Math.abs(apStd) + Math.abs(bStd) === 0
					? 0
					: Math.atan2(bStd, apStd);
			hpStd += (hpStd < 0) * 2 * Math.PI;
			let hpSmp =
				Math.abs(apSmp) + Math.abs(bSmp) === 0
					? 0
					: Math.atan2(bSmp, apSmp);
			hpSmp += (hpSmp < 0) * 2 * Math.PI;
			let dL = lSmp - lStd;
			let dC = cpSmp - cpStd;
			let dhp = cpStd * cpSmp === 0 ? 0 : hpSmp - hpStd;
			dhp -= (dhp > Math.PI) * 2 * Math.PI;
			dhp += (dhp < -Math.PI) * 2 * Math.PI;
			let dH = 2 * Math.sqrt(cpStd * cpSmp) * Math.sin(dhp / 2);
			let Lp = (lStd + lSmp) / 2;
			let Cp = (cpStd + cpSmp) / 2;
			let hp;
			if (cpStd * cpSmp === 0) {
				hp = hpStd + hpSmp;
			} else {
				hp = (hpStd + hpSmp) / 2;
				hp -= (Math.abs(hpStd - hpSmp) > Math.PI) * Math.PI;
				hp += (hp < 0) * 2 * Math.PI;
			}
			let Lpm50 = Math.pow(Lp - 50, 2);
			let T =
				1 -
				0.17 * Math.cos(hp - Math.PI / 6) +
				0.24 * Math.cos(2 * hp) +
				0.32 * Math.cos(3 * hp + Math.PI / 30) -
				0.2 * Math.cos(4 * hp - (63 * Math.PI) / 180);
			let Sl = 1 + (0.015 * Lpm50) / Math.sqrt(20 + Lpm50);
			let Sc = 1 + 0.045 * Cp;
			let Sh = 1 + 0.015 * Cp * T;
			let deltaTheta =
				((30 * Math.PI) / 180) *
				Math.exp(-1 * Math.pow(((180 / Math.PI) * hp - 275) / 25, 2));
			let Rc =
				2 *
				Math.sqrt(
					Math.pow(Cp, 7) / (Math.pow(Cp, 7) + Math.pow(25, 7))
				);
			let Rt = -1 * Math.sin(2 * deltaTheta) * Rc;
			return Math.sqrt(
				Math.pow(dL / (Kl * Sl), 2) +
					Math.pow(dC / (Kc * Sc), 2) +
					Math.pow(dH / (Kh * Sh), 2) +
					(((Rt * dC) / (Kc * Sc)) * dH) / (Kh * Sh)
			);
		};
	};
	var differenceCmc = (l = 1, c4 = 1) => {
		let lab3 = converter_default('lab65');
		return (std, smp) => {
			let LabStd = lab3(std);
			let lStd = LabStd.l;
			let aStd = LabStd.a;
			let bStd = LabStd.b;
			let cStd = Math.sqrt(aStd * aStd + bStd * bStd);
			let hStd = Math.atan2(bStd, aStd);
			hStd = hStd + 2 * Math.PI * (hStd < 0);
			let LabSmp = lab3(smp);
			let lSmp = LabSmp.l;
			let aSmp = LabSmp.a;
			let bSmp = LabSmp.b;
			let cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);
			let dL2 = Math.pow(lStd - lSmp, 2);
			let dC2 = Math.pow(cStd - cSmp, 2);
			let dH2 = Math.pow(aStd - aSmp, 2) + Math.pow(bStd - bSmp, 2) - dC2;
			let F = Math.sqrt(Math.pow(cStd, 4) / (Math.pow(cStd, 4) + 1900));
			let T =
				hStd >= (164 / 180) * Math.PI && hStd <= (345 / 180) * Math.PI
					? 0.56 +
					  Math.abs(0.2 * Math.cos(hStd + (168 / 180) * Math.PI))
					: 0.36 +
					  Math.abs(0.4 * Math.cos(hStd + (35 / 180) * Math.PI));
			let Sl =
				lStd < 16 ? 0.511 : (0.040975 * lStd) / (1 + 0.01765 * lStd);
			let Sc = (0.0638 * cStd) / (1 + 0.0131 * cStd) + 0.638;
			let Sh = Sc * (F * T + 1 - F);
			return Math.sqrt(
				dL2 / Math.pow(l * Sl, 2) +
					dC2 / Math.pow(c4 * Sc, 2) +
					dH2 / Math.pow(Sh, 2)
			);
		};
	};
	var differenceHyab = () => {
		let lab3 = converter_default('lab65');
		return (std, smp) => {
			let LabStd = lab3(std);
			let LabSmp = lab3(smp);
			let dL = LabStd.l - LabSmp.l;
			let dA = LabStd.a - LabSmp.a;
			let dB = LabStd.b - LabSmp.b;
			return Math.abs(dL) + Math.sqrt(dA * dA + dB * dB);
		};
	};
	var differenceKotsarenkoRamos = () =>
		differenceEuclidean('yiq', [0.5053, 0.299, 0.1957]);

	// src/average.js
	var averageAngle = val => {
		let sum = val.reduce(
			(sum2, val2) => {
				if (val2 !== void 0) {
					let rad = (val2 * Math.PI) / 180;
					sum2.sin += Math.sin(rad);
					sum2.cos += Math.cos(rad);
				}
				return sum2;
			},
			{ sin: 0, cos: 0 }
		);
		return (Math.atan2(sum.sin, sum.cos) * 180) / Math.PI;
	};
	var averageNumber = val => {
		let a = val.filter(v => v !== void 0);
		return a.length ? a.reduce((sum, v) => sum + v, 0) / a.length : void 0;
	};
	var isfn = o => typeof o === 'function';
	function average(colors, mode = 'rgb', overrides) {
		let def = getMode(mode);
		let cc = colors.map(converter_default(mode));
		return def.channels.reduce(
			(res, ch) => {
				let arr = cc.map(c4 => c4[ch]).filter(val => val !== void 0);
				if (arr.length) {
					let fn5;
					if (isfn(overrides)) {
						fn5 = overrides;
					} else if (overrides && isfn(overrides[ch])) {
						fn5 = overrides[ch];
					} else if (def.average && isfn(def.average[ch])) {
						fn5 = def.average[ch];
					} else {
						fn5 = averageNumber;
					}
					res[ch] = fn5(arr, ch);
				}
				return res;
			},
			{ mode }
		);
	}

	// src/cubehelix/definition.js
	var definition3 = {
		mode: 'cubehelix',
		channels: ['h', 's', 'l', 'alpha'],
		parse: ['--cubehelix'],
		serialize: '--cubehelix',
		ranges: {
			h: [0, 360],
			s: [0, 4.614],
			l: [0, 1]
		},
		fromMode: {
			rgb: convertRgbToCubehelix_default
		},
		toMode: {
			rgb: convertCubehelixToRgb_default
		},
		interpolate: {
			h: {
				use: interpolatorLinear,
				fixup: fixupHueShorter
			},
			s: interpolatorLinear,
			l: interpolatorLinear,
			alpha: {
				use: interpolatorLinear,
				fixup: fixupAlpha
			}
		},
		difference: {
			h: differenceHueSaturation
		},
		average: {
			h: averageAngle
		}
	};
	var definition_default3 = definition3;

	// src/lch/convertLabToLch.js
	var convertLabToLch = ({ l, a, b, alpha }, mode = 'lch') => {
		let c4 = Math.sqrt(a * a + b * b);
		let res = { mode, l, c: c4 };
		if (c4)
			res.h = normalizeHue_default((Math.atan2(b, a) * 180) / Math.PI);
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertLabToLch_default = convertLabToLch;

	// src/lch/convertLchToLab.js
	var convertLchToLab = ({ l, c: c4, h, alpha }, mode = 'lab') => {
		let res = {
			mode,
			l,
			a: c4 ? c4 * Math.cos((h / 180) * Math.PI) : 0,
			b: c4 ? c4 * Math.sin((h / 180) * Math.PI) : 0
		};
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertLchToLab_default = convertLchToLab;

	// src/xyz65/constants.js
	var k = Math.pow(29, 3) / Math.pow(3, 3);
	var e = Math.pow(6, 3) / Math.pow(29, 3);

	// src/constants.js
	var D50 = {
		X: 0.3457 / 0.3585,
		Y: 1,
		Z: (1 - 0.3457 - 0.3585) / 0.3585
	};
	var D65 = {
		X: 0.3127 / 0.329,
		Y: 1,
		Z: (1 - 0.3127 - 0.329) / 0.329
	};
	var k2 = Math.pow(29, 3) / Math.pow(3, 3);
	var e2 = Math.pow(6, 3) / Math.pow(29, 3);

	// src/lab65/convertLab65ToXyz65.js
	var fn3 = v => (Math.pow(v, 3) > e ? Math.pow(v, 3) : (116 * v - 16) / k);
	var convertLab65ToXyz65 = ({ l, a, b, alpha }) => {
		let fy = (l + 16) / 116;
		let fx = a / 500 + fy;
		let fz = fy - b / 200;
		let res = {
			mode: 'xyz65',
			x: fn3(fx) * D65.X,
			y: fn3(fy) * D65.Y,
			z: fn3(fz) * D65.Z
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertLab65ToXyz65_default = convertLab65ToXyz65;

	// src/lab65/convertLab65ToRgb.js
	var convertLab65ToRgb = lab3 =>
		convertXyz65ToRgb_default(convertLab65ToXyz65_default(lab3));
	var convertLab65ToRgb_default = convertLab65ToRgb;

	// src/lab65/convertXyz65ToLab65.js
	var f = value => (value > e ? Math.cbrt(value) : (k * value + 16) / 116);
	var convertXyz65ToLab65 = ({ x, y, z, alpha }) => {
		let f0 = f(x / D65.X);
		let f1 = f(y / D65.Y);
		let f22 = f(z / D65.Z);
		let res = {
			mode: 'lab65',
			l: 116 * f1 - 16,
			a: 500 * (f0 - f1),
			b: 200 * (f1 - f22)
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz65ToLab65_default = convertXyz65ToLab65;

	// src/lab65/convertRgbToLab65.js
	var convertRgbToLab65 = rgb5 => {
		let res = convertXyz65ToLab65_default(convertRgbToXyz65_default(rgb5));
		if (rgb5.r === rgb5.b && rgb5.b === rgb5.g) {
			res.a = res.b = 0;
		}
		return res;
	};
	var convertRgbToLab65_default = convertRgbToLab65;

	// src/dlch/constants.js
	var kE = 1;
	var kCH = 1;
	var θ = (26 / 180) * Math.PI;
	var cosθ = Math.cos(θ);
	var sinθ = Math.sin(θ);
	var factor = 100 / Math.log(139 / 100);

	// src/dlch/convertDlchToLab65.js
	var convertDlchToLab65 = ({ l, c: c4, h, alpha }) => {
		let res = {
			mode: 'lab65',
			l: (Math.exp((l * kE) / factor) - 1) / 39e-4
		};
		if (h === void 0) {
			res.a = res.b = 0;
		} else {
			let G = (Math.exp(0.0435 * c4 * kCH * kE) - 1) / 0.075;
			let e4 = G * Math.cos((h / 180) * Math.PI - θ);
			let f3 = G * Math.sin((h / 180) * Math.PI - θ);
			res.a = e4 * cosθ - (f3 / 0.83) * sinθ;
			res.b = e4 * sinθ + (f3 / 0.83) * cosθ;
		}
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertDlchToLab65_default = convertDlchToLab65;

	// src/dlch/convertLab65ToDlch.js
	var convertLab65ToDlch = ({ l, a, b, alpha }) => {
		let e4 = a * cosθ + b * sinθ;
		let f3 = 0.83 * (b * cosθ - a * sinθ);
		let G = Math.sqrt(e4 * e4 + f3 * f3);
		let res = {
			mode: 'dlch',
			l: (factor / kE) * Math.log(1 + 39e-4 * l),
			c: Math.log(1 + 0.075 * G) / (0.0435 * kCH * kE)
		};
		if (res.c) {
			res.h = normalizeHue_default(
				((Math.atan2(f3, e4) + θ) / Math.PI) * 180
			);
		}
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertLab65ToDlch_default = convertLab65ToDlch;

	// src/dlab/definition.js
	var convertDlabToLab65 = c4 =>
		convertDlchToLab65_default(convertLabToLch_default(c4, 'dlch'));
	var convertLab65ToDlab = c4 =>
		convertLchToLab_default(convertLab65ToDlch_default(c4), 'dlab');
	var definition4 = {
		mode: 'dlab',
		parse: ['--din99o-lab'],
		serialize: '--din99o-lab',
		toMode: {
			lab65: convertDlabToLab65,
			rgb: c4 => convertLab65ToRgb_default(convertDlabToLab65(c4))
		},
		fromMode: {
			lab65: convertLab65ToDlab,
			rgb: c4 => convertLab65ToDlab(convertRgbToLab65_default(c4))
		},
		channels: ['l', 'a', 'b', 'alpha'],
		ranges: {
			l: [0, 100],
			a: [-40.09, 45.501],
			b: [-40.469, 44.344]
		},
		interpolate: {
			l: interpolatorLinear,
			a: interpolatorLinear,
			b: interpolatorLinear,
			alpha: {
				use: interpolatorLinear,
				fixup: fixupAlpha
			}
		}
	};
	var definition_default4 = definition4;

	// src/dlch/definition.js
	var definition5 = {
		mode: 'dlch',
		parse: ['--din99o-lch'],
		serialize: '--din99o-lch',
		toMode: {
			lab65: convertDlchToLab65_default,
			dlab: c4 => convertLchToLab_default(c4, 'dlab'),
			rgb: c4 => convertLab65ToRgb_default(convertDlchToLab65_default(c4))
		},
		fromMode: {
			lab65: convertLab65ToDlch_default,
			dlab: c4 => convertLabToLch_default(c4, 'dlch'),
			rgb: c4 => convertLab65ToDlch_default(convertRgbToLab65_default(c4))
		},
		channels: ['l', 'c', 'h', 'alpha'],
		ranges: {
			l: [0, 100],
			c: [0, 51.484],
			h: [0, 360]
		},
		interpolate: {
			l: interpolatorLinear,
			c: interpolatorLinear,
			h: {
				use: interpolatorLinear,
				fixup: fixupHueShorter
			},
			alpha: {
				use: interpolatorLinear,
				fixup: fixupAlpha
			}
		},
		difference: {
			h: differenceHueChroma
		},
		average: {
			h: averageAngle
		}
	};
	var definition_default5 = definition5;

	// src/hsi/convertHsiToRgb.js
	function convertHsiToRgb({ h, s: s2, i, alpha }) {
		h = normalizeHue_default(h);
		let f3 = Math.abs(((h / 60) % 2) - 1);
		let res;
		switch (Math.floor(h / 60)) {
			case 0:
				res = {
					r: i * (1 + s2 * (3 / (2 - f3) - 1)),
					g: i * (1 + s2 * ((3 * (1 - f3)) / (2 - f3) - 1)),
					b: i * (1 - s2)
				};
				break;
			case 1:
				res = {
					r: i * (1 + s2 * ((3 * (1 - f3)) / (2 - f3) - 1)),
					g: i * (1 + s2 * (3 / (2 - f3) - 1)),
					b: i * (1 - s2)
				};
				break;
			case 2:
				res = {
					r: i * (1 - s2),
					g: i * (1 + s2 * (3 / (2 - f3) - 1)),
					b: i * (1 + s2 * ((3 * (1 - f3)) / (2 - f3) - 1))
				};
				break;
			case 3:
				res = {
					r: i * (1 - s2),
					g: i * (1 + s2 * ((3 * (1 - f3)) / (2 - f3) - 1)),
					b: i * (1 + s2 * (3 / (2 - f3) - 1))
				};
				break;
			case 4:
				res = {
					r: i * (1 + s2 * ((3 * (1 - f3)) / (2 - f3) - 1)),
					g: i * (1 - s2),
					b: i * (1 + s2 * (3 / (2 - f3) - 1))
				};
				break;
			case 5:
				res = {
					r: i * (1 + s2 * (3 / (2 - f3) - 1)),
					g: i * (1 - s2),
					b: i * (1 + s2 * ((3 * (1 - f3)) / (2 - f3) - 1))
				};
				break;
			default:
				res = { r: i * (1 - s2), g: i * (1 - s2), b: i * (1 - s2) };
		}
		res.mode = 'rgb';
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	}

	// src/hsi/convertRgbToHsi.js
	function convertRgbToHsi({ r: r2, g, b, alpha }) {
		let M2 = Math.max(r2, g, b),
			m = Math.min(r2, g, b);
		let res = {
			mode: 'hsi',
			s: r2 + g + b === 0 ? 0 : 1 - (3 * m) / (r2 + g + b),
			i: (r2 + g + b) / 3
		};
		if (M2 - m !== 0)
			res.h =
				(M2 === r2
					? (g - b) / (M2 - m) + (g < b) * 6
					: M2 === g
					? (b - r2) / (M2 - m) + 2
					: (r2 - g) / (M2 - m) + 4) * 60;
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	}

	// src/hsi/definition.js
	var definition6 = {
		mode: 'hsi',
		toMode: {
			rgb: convertHsiToRgb
		},
		parse: ['--hsi'],
		serialize: '--hsi',
		fromMode: {
			rgb: convertRgbToHsi
		},
		channels: ['h', 's', 'i', 'alpha'],
		ranges: {
			h: [0, 360]
		},
		interpolate: {
			h: { use: interpolatorLinear, fixup: fixupHueShorter },
			s: interpolatorLinear,
			i: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		},
		difference: {
			h: differenceHueSaturation
		},
		average: {
			h: averageAngle
		}
	};
	var definition_default6 = definition6;

	// src/hsl/convertHslToRgb.js
	function convertHslToRgb({ h, s: s2, l, alpha }) {
		h = normalizeHue_default(h);
		let m1 = l + s2 * (l < 0.5 ? l : 1 - l);
		let m2 = m1 - (m1 - l) * 2 * Math.abs(((h / 60) % 2) - 1);
		let res;
		switch (Math.floor(h / 60)) {
			case 0:
				res = { r: m1, g: m2, b: 2 * l - m1 };
				break;
			case 1:
				res = { r: m2, g: m1, b: 2 * l - m1 };
				break;
			case 2:
				res = { r: 2 * l - m1, g: m1, b: m2 };
				break;
			case 3:
				res = { r: 2 * l - m1, g: m2, b: m1 };
				break;
			case 4:
				res = { r: m2, g: 2 * l - m1, b: m1 };
				break;
			case 5:
				res = { r: m1, g: 2 * l - m1, b: m2 };
				break;
			default:
				res = { r: 2 * l - m1, g: 2 * l - m1, b: 2 * l - m1 };
		}
		res.mode = 'rgb';
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	}

	// src/hsl/convertRgbToHsl.js
	function convertRgbToHsl({ r: r2, g, b, alpha }) {
		let M2 = Math.max(r2, g, b),
			m = Math.min(r2, g, b);
		let res = {
			mode: 'hsl',
			s: M2 === m ? 0 : (M2 - m) / (1 - Math.abs(M2 + m - 1)),
			l: 0.5 * (M2 + m)
		};
		if (M2 - m !== 0)
			res.h =
				(M2 === r2
					? (g - b) / (M2 - m) + (g < b) * 6
					: M2 === g
					? (b - r2) / (M2 - m) + 2
					: (r2 - g) / (M2 - m) + 4) * 60;
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	}

	// src/util/hue.js
	var hueToDeg = (val, unit) => {
		switch (unit) {
			case 'deg':
				return +val;
			case 'rad':
				return (val / Math.PI) * 180;
			case 'grad':
				return (val / 10) * 9;
			case 'turn':
				return val * 360;
		}
	};
	var hue_default = hueToDeg;

	// src/hsl/parseHsl.js
	var hsl_old = new RegExp(
		`^hsla?\\(\\s*${hue}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
	);
	var hsl_new = new RegExp(
		`^hsla?\\(\\s*${hue_none}${s}${per_none}${s}${per_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
	);
	var parseHsl = color => {
		let match = color.match(hsl_old) || color.match(hsl_new);
		if (!match) return;
		let res = { mode: 'hsl' };
		if (match[3] !== void 0) {
			res.h = +match[3];
		} else if (match[1] !== void 0 && match[2] !== void 0) {
			res.h = hue_default(match[1], match[2]);
		}
		if (match[4] !== void 0) {
			res.s = Math.min(Math.max(0, match[4] / 100), 1);
		}
		if (match[5] !== void 0) {
			res.l = Math.min(Math.max(0, match[5] / 100), 1);
		}
		if (match[6] !== void 0) {
			res.alpha = match[6] / 100;
		} else if (match[7] !== void 0) {
			res.alpha = +match[7];
		}
		return res;
	};
	var parseHsl_default = parseHsl;

	// src/hsl/definition.js
	var definition7 = {
		mode: 'hsl',
		toMode: {
			rgb: convertHslToRgb
		},
		fromMode: {
			rgb: convertRgbToHsl
		},
		channels: ['h', 's', 'l', 'alpha'],
		ranges: {
			h: [0, 360]
		},
		parse: [parseHsl_default],
		serialize: c4 =>
			`hsl(${c4.h || 0} ${c4.s !== void 0 ? c4.s * 100 + '%' : 'none'} ${
				c4.l !== void 0 ? c4.l * 100 + '%' : 'none'
			}${c4.alpha < 1 ? ` / ${c4.alpha}` : ''})`,
		interpolate: {
			h: { use: interpolatorLinear, fixup: fixupHueShorter },
			s: interpolatorLinear,
			l: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		},
		difference: {
			h: differenceHueSaturation
		},
		average: {
			h: averageAngle
		}
	};
	var definition_default7 = definition7;

	// src/hsv/convertHsvToRgb.js
	function convertHsvToRgb({ h, s: s2, v, alpha }) {
		h = normalizeHue_default(h);
		let f3 = Math.abs(((h / 60) % 2) - 1);
		let res;
		switch (Math.floor(h / 60)) {
			case 0:
				res = { r: v, g: v * (1 - s2 * f3), b: v * (1 - s2) };
				break;
			case 1:
				res = { r: v * (1 - s2 * f3), g: v, b: v * (1 - s2) };
				break;
			case 2:
				res = { r: v * (1 - s2), g: v, b: v * (1 - s2 * f3) };
				break;
			case 3:
				res = { r: v * (1 - s2), g: v * (1 - s2 * f3), b: v };
				break;
			case 4:
				res = { r: v * (1 - s2 * f3), g: v * (1 - s2), b: v };
				break;
			case 5:
				res = { r: v, g: v * (1 - s2), b: v * (1 - s2 * f3) };
				break;
			default:
				res = { r: v * (1 - s2), g: v * (1 - s2), b: v * (1 - s2) };
		}
		res.mode = 'rgb';
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	}

	// src/hsv/convertRgbToHsv.js
	function convertRgbToHsv({ r: r2, g, b, alpha }) {
		let M2 = Math.max(r2, g, b),
			m = Math.min(r2, g, b);
		let res = {
			mode: 'hsv',
			s: M2 === 0 ? 0 : 1 - m / M2,
			v: M2
		};
		if (M2 - m !== 0)
			res.h =
				(M2 === r2
					? (g - b) / (M2 - m) + (g < b) * 6
					: M2 === g
					? (b - r2) / (M2 - m) + 2
					: (r2 - g) / (M2 - m) + 4) * 60;
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	}

	// src/hsv/definition.js
	var definition8 = {
		mode: 'hsv',
		toMode: {
			rgb: convertHsvToRgb
		},
		parse: ['--hsv'],
		serialize: '--hsv',
		fromMode: {
			rgb: convertRgbToHsv
		},
		channels: ['h', 's', 'v', 'alpha'],
		ranges: {
			h: [0, 360]
		},
		interpolate: {
			h: { use: interpolatorLinear, fixup: fixupHueShorter },
			s: interpolatorLinear,
			v: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		},
		difference: {
			h: differenceHueSaturation
		},
		average: {
			h: averageAngle
		}
	};
	var definition_default8 = definition8;

	// src/hwb/convertHwbToRgb.js
	function convertHwbToRgb({ h, w, b, alpha }) {
		if (w + b > 1) {
			let s2 = w + b;
			w /= s2;
			b /= s2;
		}
		return convertHsvToRgb({
			h,
			s: b === 1 ? 1 : 1 - w / (1 - b),
			v: 1 - b,
			alpha
		});
	}

	// src/hwb/convertRgbToHwb.js
	function convertRgbToHwb(rgba) {
		let hsv2 = convertRgbToHsv(rgba);
		if (hsv2 === void 0) return void 0;
		let res = {
			mode: 'hwb',
			w: (1 - hsv2.s) * hsv2.v,
			b: 1 - hsv2.v
		};
		if (hsv2.h !== void 0) res.h = hsv2.h;
		if (hsv2.alpha !== void 0) res.alpha = hsv2.alpha;
		return res;
	}

	// src/hwb/parseHwb.js
	var hwb = new RegExp(
		`^hwb\\(\\s*${hue_none}${s}${per_none}${s}${per_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
	);
	var parseHwb = color => {
		let match = color.match(hwb);
		if (!match) {
			return void 0;
		}
		let res = { mode: 'hwb' };
		if (match[3] !== void 0) {
			res.h = +match[3];
		} else if (match[1] !== void 0 && match[2] !== void 0) {
			res.h = hue_default(match[1], match[2]);
		}
		if (match[4] !== void 0) {
			res.w = match[4] / 100;
		}
		if (match[5] !== void 0) {
			res.b = match[5] / 100;
		}
		if (match[6] !== void 0) {
			res.alpha = match[6] / 100;
		} else if (match[7] !== void 0) {
			res.alpha = +match[7];
		}
		return res;
	};
	var parseHwb_default = parseHwb;

	// src/hwb/definition.js
	var definition9 = {
		mode: 'hwb',
		toMode: {
			rgb: convertHwbToRgb
		},
		fromMode: {
			rgb: convertRgbToHwb
		},
		channels: ['h', 'w', 'b', 'alpha'],
		ranges: {
			h: [0, 360]
		},
		parse: [parseHwb_default],
		serialize: c4 =>
			`hwb(${c4.h || 0} ${c4.w * 100}% ${c4.b * 100}%${
				c4.alpha < 1 ? ` / ${c4.alpha}` : ''
			})`,
		interpolate: {
			h: { use: interpolatorLinear, fixup: fixupHueShorter },
			w: interpolatorLinear,
			b: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		},
		difference: {
			h: differenceHueNaive
		},
		average: {
			h: averageAngle
		}
	};
	var definition_default9 = definition9;

	// src/jab/convertXyz65ToJab.js
	var n = 0.1593017578125;
	var p = 134.03437499999998;
	var c1 = 0.8359375;
	var c2 = 18.8515625;
	var c3 = 18.6875;
	var d0 = 16295499532821565e-27;
	var pq = v => {
		let vn3 = Math.pow(v / 1e4, n);
		return Math.pow((c1 + c2 * vn3) / (1 + c3 * vn3), p) || 0;
	};
	var abs = v => Math.max(v * 203, 0);
	var convertXyz65ToJab = ({ x, y, z, alpha }) => {
		x = abs(x);
		y = abs(y);
		z = abs(z);
		let xp = 1.15 * x - 0.15 * z;
		let yp = 0.66 * y + 0.34 * x;
		let l = pq(0.41478972 * xp + 0.579999 * yp + 0.014648 * z);
		let m = pq(-0.20151 * xp + 1.120649 * yp + 0.0531008 * z);
		let s2 = pq(-0.0166008 * xp + 0.2648 * yp + 0.6684799 * z);
		let i = (l + m) / 2;
		let res = {
			mode: 'jab',
			j: (0.44 * i) / (1 - 0.56 * i) - d0,
			a: 3.524 * l - 4.066708 * m + 0.542708 * s2,
			b: 0.199076 * l + 1.096799 * m - 1.295875 * s2
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz65ToJab_default = convertXyz65ToJab;

	// src/jab/convertJabToXyz65.js
	var n2 = 0.1593017578125;
	var p2 = 134.03437499999998;
	var c12 = 0.8359375;
	var c22 = 18.8515625;
	var c32 = 18.6875;
	var d02 = 16295499532821565e-27;
	var pq_inv = v => {
		let vp = Math.pow(v, 1 / p2);
		return 1e4 * Math.pow((c12 - vp) / (c32 * vp - c22), 1 / n2) || 0;
	};
	var rel = v => v / 203;
	var convertJabToXyz65 = ({ j, a, b, alpha }) => {
		let i = (j + d02) / (0.44 + 0.56 * (j + d02));
		let l = pq_inv(i + 0.13860504 * a + 0.058047316 * b);
		let m = pq_inv(i - 0.13860504 * a - 0.058047316 * b);
		let s2 = pq_inv(i - 0.096019242 * a - 0.8118919 * b);
		let res = {
			mode: 'xyz65',
			x: rel(
				1.661373024652174 * l -
					0.914523081304348 * m +
					0.23136208173913045 * s2
			),
			y: rel(
				-0.3250758611844533 * l +
					1.571847026732543 * m -
					0.21825383453227928 * s2
			),
			z: rel(-0.090982811 * l - 0.31272829 * m + 1.5227666 * s2)
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertJabToXyz65_default = convertJabToXyz65;

	// src/jab/convertRgbToJab.js
	var convertRgbToJab = rgb5 => {
		let res = convertXyz65ToJab_default(convertRgbToXyz65_default(rgb5));
		if (rgb5.r === rgb5.b && rgb5.b === rgb5.g) {
			res.a = res.b = 0;
		}
		return res;
	};
	var convertRgbToJab_default = convertRgbToJab;

	// src/jab/convertJabToRgb.js
	var convertJabToRgb = color =>
		convertXyz65ToRgb_default(convertJabToXyz65_default(color));
	var convertJabToRgb_default = convertJabToRgb;

	// src/jab/definition.js
	var definition10 = {
		mode: 'jab',
		channels: ['j', 'a', 'b', 'alpha'],
		parse: ['--jzazbz'],
		serialize: '--jzazbz',
		fromMode: {
			rgb: convertRgbToJab_default,
			xyz65: convertXyz65ToJab_default
		},
		toMode: {
			rgb: convertJabToRgb_default,
			xyz65: convertJabToXyz65_default
		},
		ranges: {
			j: [0, 0.222],
			a: [-0.109, 0.129],
			b: [-0.185, 0.134]
		},
		interpolate: {
			j: interpolatorLinear,
			a: interpolatorLinear,
			b: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		}
	};
	var definition_default10 = definition10;

	// src/jch/convertJabToJch.js
	var convertJabToJch = ({ j, a, b, alpha }) => {
		let c4 = Math.sqrt(a * a + b * b);
		let res = {
			mode: 'jch',
			j,
			c: c4
		};
		if (c4) {
			res.h = normalizeHue_default((Math.atan2(b, a) * 180) / Math.PI);
		}
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertJabToJch_default = convertJabToJch;

	// src/jch/convertJchToJab.js
	var convertJchToJab = ({ j, c: c4, h, alpha }) => {
		let res = {
			mode: 'jab',
			j,
			a: c4 ? c4 * Math.cos((h / 180) * Math.PI) : 0,
			b: c4 ? c4 * Math.sin((h / 180) * Math.PI) : 0
		};
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertJchToJab_default = convertJchToJab;

	// src/jch/definition.js
	var definition11 = {
		mode: 'jch',
		parse: ['--jzczhz'],
		serialize: '--jzczhz',
		toMode: {
			jab: convertJchToJab_default,
			rgb: c4 => convertJabToRgb_default(convertJchToJab_default(c4))
		},
		fromMode: {
			rgb: c4 => convertJabToJch_default(convertRgbToJab_default(c4)),
			jab: convertJabToJch_default
		},
		channels: ['j', 'c', 'h', 'alpha'],
		ranges: {
			j: [0, 0.221],
			c: [0, 0.19],
			h: [0, 360]
		},
		interpolate: {
			h: { use: interpolatorLinear, fixup: fixupHueShorter },
			c: interpolatorLinear,
			j: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		},
		difference: {
			h: differenceHueChroma
		},
		average: {
			h: averageAngle
		}
	};
	var definition_default11 = definition11;

	// src/xyz50/constants.js
	var k3 = Math.pow(29, 3) / Math.pow(3, 3);
	var e3 = Math.pow(6, 3) / Math.pow(29, 3);

	// src/lab/convertLabToXyz50.js
	var fn4 = v => (Math.pow(v, 3) > e3 ? Math.pow(v, 3) : (116 * v - 16) / k3);
	var convertLabToXyz50 = ({ l, a, b, alpha }) => {
		let fy = (l + 16) / 116;
		let fx = a / 500 + fy;
		let fz = fy - b / 200;
		let res = {
			mode: 'xyz50',
			x: fn4(fx) * D50.X,
			y: fn4(fy) * D50.Y,
			z: fn4(fz) * D50.Z
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertLabToXyz50_default = convertLabToXyz50;

	// src/xyz50/convertXyz50ToRgb.js
	var convertXyz50ToRgb = ({ x, y, z, alpha }) => {
		let res = convertLrgbToRgb_default({
			r:
				x * 3.1341359569958707 -
				y * 1.6173863321612538 -
				0.4906619460083532 * z,
			g:
				x * -0.978795502912089 +
				y * 1.916254567259524 +
				0.03344273116131949 * z,
			b:
				x * 0.07195537988411677 -
				y * 0.2289768264158322 +
				1.405386058324125 * z
		});
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz50ToRgb_default = convertXyz50ToRgb;

	// src/lab/convertLabToRgb.js
	var convertLabToRgb = lab3 =>
		convertXyz50ToRgb_default(convertLabToXyz50_default(lab3));
	var convertLabToRgb_default = convertLabToRgb;

	// src/xyz50/convertRgbToXyz50.js
	var convertRgbToXyz50 = rgb5 => {
		let { r: r2, g, b, alpha } = convertRgbToLrgb_default(rgb5);
		let res = {
			mode: 'xyz50',
			x:
				0.436065742824811 * r2 +
				0.3851514688337912 * g +
				0.14307845442264197 * b,
			y:
				0.22249319175623702 * r2 +
				0.7168870538238823 * g +
				0.06061979053616537 * b,
			z:
				0.013923904500943465 * r2 +
				0.09708128566574634 * g +
				0.7140993584005155 * b
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertRgbToXyz50_default = convertRgbToXyz50;

	// src/lab/convertXyz50ToLab.js
	var f2 = value => (value > e3 ? Math.cbrt(value) : (k3 * value + 16) / 116);
	var convertXyz50ToLab = ({ x, y, z, alpha }) => {
		let f0 = f2(x / D50.X);
		let f1 = f2(y / D50.Y);
		let f22 = f2(z / D50.Z);
		let res = {
			mode: 'lab',
			l: 116 * f1 - 16,
			a: 500 * (f0 - f1),
			b: 200 * (f1 - f22)
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz50ToLab_default = convertXyz50ToLab;

	// src/lab/convertRgbToLab.js
	var convertRgbToLab = rgb5 => {
		let res = convertXyz50ToLab_default(convertRgbToXyz50_default(rgb5));
		if (rgb5.r === rgb5.b && rgb5.b === rgb5.g) {
			res.a = res.b = 0;
		}
		return res;
	};
	var convertRgbToLab_default = convertRgbToLab;

	// src/lab/parseLab.js
	var lab = new RegExp(
		`^lab\\(\\s*${per_none}${s}${num_none}${s}${num_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
	);
	var parseLab = color => {
		let match = color.match(lab);
		if (!match) {
			return void 0;
		}
		let res = { mode: 'lab' };
		if (match[1] !== void 0) {
			res.l = +match[1];
		}
		if (match[2] !== void 0) {
			res.a = +match[2];
		}
		if (match[3] !== void 0) {
			res.b = +match[3];
		}
		if (match[4] !== void 0) {
			res.alpha = match[4] / 100;
		} else if (match[5] !== void 0) {
			res.alpha = +match[5];
		}
		return res;
	};
	var parseLab_default = parseLab;

	// src/lab/definition.js
	var definition12 = {
		mode: 'lab',
		toMode: {
			xyz50: convertLabToXyz50_default,
			rgb: convertLabToRgb_default
		},
		fromMode: {
			xyz50: convertXyz50ToLab_default,
			rgb: convertRgbToLab_default
		},
		channels: ['l', 'a', 'b', 'alpha'],
		ranges: {
			l: [0, 100],
			a: [-79.287, 93.55],
			b: [-112.029, 93.388]
		},
		parse: [parseLab_default],
		serialize: c4 =>
			`lab(${c4.l !== void 0 ? c4.l + '%' : 'none'} ${
				c4.a !== void 0 ? c4.a : 'none'
			} ${c4.b !== void 0 ? c4.b : 'none'}${
				c4.alpha < 1 ? ` / ${c4.alpha}` : ''
			})`,
		interpolate: {
			l: interpolatorLinear,
			a: interpolatorLinear,
			b: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		}
	};
	var definition_default12 = definition12;

	// src/lab65/definition.js
	var definition13 = {
		...definition_default12,
		mode: 'lab65',
		parse: ['--lab-d65'],
		serialize: '--lab-d65',
		toMode: {
			xyz65: convertLab65ToXyz65_default,
			rgb: convertLab65ToRgb_default
		},
		fromMode: {
			xyz65: convertXyz65ToLab65_default,
			rgb: convertRgbToLab65_default
		},
		ranges: {
			l: [0, 100],
			a: [-86.182, 98.234],
			b: [-107.86, 94.477]
		}
	};
	var definition_default13 = definition13;

	// src/lch/parseLch.js
	var lch = new RegExp(
		`^lch\\(\\s*${per_none}${s}${num_none}${s}${hue_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
	);
	var parseLch = color => {
		let match = color.match(lch);
		if (!match) {
			return void 0;
		}
		let res = { mode: 'lch' };
		if (match[1] !== void 0) {
			res.l = +match[1];
		}
		if (match[2] !== void 0) {
			res.c = Math.max(0, +match[2]);
		}
		if (match[5] !== void 0) {
			res.h = +match[5];
		} else if (match[3] !== void 0 && match[4] !== void 0) {
			res.h = hue_default(match[3], match[4]);
		}
		if (match[6] !== void 0) {
			res.alpha = match[6] / 100;
		} else if (match[7] !== void 0) {
			res.alpha = +match[7];
		}
		return res;
	};
	var parseLch_default = parseLch;

	// src/lch/definition.js
	var definition14 = {
		mode: 'lch',
		toMode: {
			lab: convertLchToLab_default,
			rgb: c4 => convertLabToRgb_default(convertLchToLab_default(c4))
		},
		fromMode: {
			rgb: c4 => convertLabToLch_default(convertRgbToLab_default(c4)),
			lab: convertLabToLch_default
		},
		channels: ['l', 'c', 'h', 'alpha'],
		ranges: {
			l: [0, 100],
			c: [0, 131.207],
			h: [0, 360]
		},
		parse: [parseLch_default],
		serialize: c4 =>
			`lch(${c4.l !== void 0 ? c4.l + '%' : 'none'} ${
				c4.c !== void 0 ? c4.c : 'none'
			} ${c4.h || 0}${c4.alpha < 1 ? ` / ${c4.alpha}` : ''})`,
		interpolate: {
			h: { use: interpolatorLinear, fixup: fixupHueShorter },
			c: interpolatorLinear,
			l: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		},
		difference: {
			h: differenceHueChroma
		},
		average: {
			h: averageAngle
		}
	};
	var definition_default14 = definition14;

	// src/lch65/definition.js
	var definition15 = {
		...definition_default14,
		mode: 'lch65',
		parse: ['--lch-d65'],
		serialize: '--lch-d65',
		toMode: {
			lab65: c4 => convertLchToLab_default(c4, 'lab65'),
			rgb: c4 =>
				convertLab65ToRgb_default(convertLchToLab_default(c4, 'lab65'))
		},
		fromMode: {
			rgb: c4 =>
				convertLabToLch_default(convertRgbToLab65_default(c4), 'lch65'),
			lab65: c4 => convertLabToLch_default(c4, 'lch65')
		},
		ranges: {
			l: [0, 100],
			c: [0, 133.807],
			h: [0, 360]
		}
	};
	var definition_default15 = definition15;

	// src/lchuv/convertLuvToLchuv.js
	var convertLuvToLchuv = ({ l, u, v, alpha }) => {
		let c4 = Math.sqrt(u * u + v * v);
		let res = {
			mode: 'lchuv',
			l,
			c: c4
		};
		if (c4) {
			res.h = normalizeHue_default((Math.atan2(v, u) * 180) / Math.PI);
		}
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertLuvToLchuv_default = convertLuvToLchuv;

	// src/lchuv/convertLchuvToLuv.js
	var convertLchuvToLuv = ({ l, c: c4, h, alpha }) => {
		let res = {
			mode: 'luv',
			l,
			u: c4 ? c4 * Math.cos((h / 180) * Math.PI) : 0,
			v: c4 ? c4 * Math.sin((h / 180) * Math.PI) : 0
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertLchuvToLuv_default = convertLchuvToLuv;

	// src/luv/convertXyz50ToLuv.js
	var u_fn = (x, y, z) => (4 * x) / (x + 15 * y + 3 * z);
	var v_fn = (x, y, z) => (9 * y) / (x + 15 * y + 3 * z);
	var un = u_fn(D50.X, D50.Y, D50.Z);
	var vn = v_fn(D50.X, D50.Y, D50.Z);
	var l_fn = value =>
		value <= e3 ? k3 * value : 116 * Math.cbrt(value) - 16;
	var convertXyz50ToLuv = ({ x, y, z, alpha }) => {
		let l = l_fn(y / D50.Y);
		let u = u_fn(x, y, z);
		let v = v_fn(x, y, z);
		if (!isFinite(u) || !isFinite(v)) {
			l = u = v = 0;
		} else {
			u = 13 * l * (u - un);
			v = 13 * l * (v - vn);
		}
		let res = {
			mode: 'luv',
			l,
			u,
			v
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz50ToLuv_default = convertXyz50ToLuv;

	// src/luv/convertLuvToXyz50.js
	var u_fn2 = (x, y, z) => (4 * x) / (x + 15 * y + 3 * z);
	var v_fn2 = (x, y, z) => (9 * y) / (x + 15 * y + 3 * z);
	var un2 = u_fn2(D50.X, D50.Y, D50.Z);
	var vn2 = v_fn2(D50.X, D50.Y, D50.Z);
	var convertLuvToXyz50 = ({ l, u, v, alpha }) => {
		let up = u / (13 * l) + un2;
		let vp = v / (13 * l) + vn2;
		let y = D50.Y * (l <= 8 ? l / k3 : Math.pow((l + 16) / 116, 3));
		let x = (y * (9 * up)) / (4 * vp);
		let z = (y * (12 - 3 * up - 20 * vp)) / (4 * vp);
		let res = { mode: 'xyz50', x, y, z };
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertLuvToXyz50_default = convertLuvToXyz50;

	// src/lchuv/definition.js
	var convertRgbToLchuv = rgb5 =>
		convertLuvToLchuv_default(
			convertXyz50ToLuv_default(convertRgbToXyz50_default(rgb5))
		);
	var convertLchuvToRgb = lchuv2 =>
		convertXyz50ToRgb_default(
			convertLuvToXyz50_default(convertLchuvToLuv_default(lchuv2))
		);
	var definition16 = {
		mode: 'lchuv',
		toMode: {
			luv: convertLchuvToLuv_default,
			rgb: convertLchuvToRgb
		},
		fromMode: {
			rgb: convertRgbToLchuv,
			luv: convertLuvToLchuv_default
		},
		channels: ['l', 'c', 'h', 'alpha'],
		parse: ['--lchuv'],
		serialize: '--lchuv',
		ranges: {
			l: [0, 100],
			c: [0, 176.956],
			h: [0, 360]
		},
		interpolate: {
			h: { use: interpolatorLinear, fixup: fixupHueShorter },
			c: interpolatorLinear,
			l: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		},
		difference: {
			h: differenceHueChroma
		},
		average: {
			h: averageAngle
		}
	};
	var definition_default16 = definition16;

	// src/lrgb/definition.js
	var definition17 = {
		...definition_default,
		mode: 'lrgb',
		toMode: {
			rgb: convertLrgbToRgb_default
		},
		fromMode: {
			rgb: convertRgbToLrgb_default
		},
		parse: ['--srgb-linear'],
		serialize: '--srgb-linear'
	};
	var definition_default17 = definition17;

	// src/luv/definition.js
	var definition18 = {
		mode: 'luv',
		toMode: {
			xyz50: convertLuvToXyz50_default,
			rgb: luv2 =>
				convertXyz50ToRgb_default(convertLuvToXyz50_default(luv2))
		},
		fromMode: {
			xyz50: convertXyz50ToLuv_default,
			rgb: rgb5 =>
				convertXyz50ToLuv_default(convertRgbToXyz50_default(rgb5))
		},
		channels: ['l', 'u', 'v', 'alpha'],
		parse: ['--luv'],
		serialize: '--luv',
		ranges: {
			l: [0, 100],
			u: [-84.936, 175.042],
			v: [-125.882, 87.243]
		},
		interpolate: {
			l: interpolatorLinear,
			u: interpolatorLinear,
			v: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		}
	};
	var definition_default18 = definition18;

	// src/oklab/convertLrgbToOklab.js
	var convertLrgbToOklab = ({ r: r2, g, b, alpha }) => {
		let L = Math.cbrt(
			0.41222147079999993 * r2 + 0.5363325363 * g + 0.0514459929 * b
		);
		let M2 = Math.cbrt(
			0.2119034981999999 * r2 + 0.6806995450999999 * g + 0.1073969566 * b
		);
		let S = Math.cbrt(
			0.08830246189999998 * r2 + 0.2817188376 * g + 0.6299787005000002 * b
		);
		let res = {
			mode: 'oklab',
			l: 0.2104542553 * L + 0.793617785 * M2 - 0.0040720468 * S,
			a: 1.9779984951 * L - 2.428592205 * M2 + 0.4505937099 * S,
			b: 0.0259040371 * L + 0.7827717662 * M2 - 0.808675766 * S
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertLrgbToOklab_default = convertLrgbToOklab;

	// src/oklab/convertRgbToOklab.js
	var convertRgbToOklab = rgb5 => {
		let res = convertLrgbToOklab_default(convertRgbToLrgb_default(rgb5));
		if (rgb5.r === rgb5.b && rgb5.b === rgb5.g) {
			res.a = res.b = 0;
		}
		return res;
	};
	var convertRgbToOklab_default = convertRgbToOklab;

	// src/oklab/convertOklabToLrgb.js
	var convertOklabToLrgb = ({ l, a, b, alpha }) => {
		let L = Math.pow(
			l * 0.9999999984505198 +
				0.39633779217376786 * a +
				0.2158037580607588 * b,
			3
		);
		let M2 = Math.pow(
			l * 1.0000000088817609 -
				0.10556134232365635 * a -
				0.06385417477170591 * b,
			3
		);
		let S = Math.pow(
			l * 1.0000000546724108 -
				0.08948418209496575 * a -
				1.2914855378640917 * b,
			3
		);
		let res = {
			mode: 'lrgb',
			r:
				4.076741661347994 * L -
				3.307711590408193 * M2 +
				0.230969928729428 * S,
			g:
				-1.2684380040921763 * L +
				2.6097574006633715 * M2 -
				0.3413193963102197 * S,
			b:
				-0.004196086541837188 * L -
				0.7034186144594493 * M2 +
				1.7076147009309444 * S
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertOklabToLrgb_default = convertOklabToLrgb;

	// src/oklab/convertOklabToRgb.js
	var convertOklabToRgb = c4 =>
		convertLrgbToRgb_default(convertOklabToLrgb_default(c4));
	var convertOklabToRgb_default = convertOklabToRgb;

	// src/okhsl/helpers.js
	function toe(x) {
		const k_1 = 0.206;
		const k_2 = 0.03;
		const k_3 = (1 + k_1) / (1 + k_2);
		return (
			0.5 *
			(k_3 * x -
				k_1 +
				Math.sqrt(
					(k_3 * x - k_1) * (k_3 * x - k_1) + 4 * k_2 * k_3 * x
				))
		);
	}
	function toe_inv(x) {
		const k_1 = 0.206;
		const k_2 = 0.03;
		const k_3 = (1 + k_1) / (1 + k_2);
		return (x * x + k_1 * x) / (k_3 * (x + k_2));
	}
	function compute_max_saturation(a, b) {
		let k0, k1, k22, k32, k4, wl, wm, ws;
		if (-1.88170328 * a - 0.80936493 * b > 1) {
			k0 = 1.19086277;
			k1 = 1.76576728;
			k22 = 0.59662641;
			k32 = 0.75515197;
			k4 = 0.56771245;
			wl = 4.0767416621;
			wm = -3.3077115913;
			ws = 0.2309699292;
		} else if (1.81444104 * a - 1.19445276 * b > 1) {
			k0 = 0.73956515;
			k1 = -0.45954404;
			k22 = 0.08285427;
			k32 = 0.1254107;
			k4 = 0.14503204;
			wl = -1.2684380046;
			wm = 2.6097574011;
			ws = -0.3413193965;
		} else {
			k0 = 1.35733652;
			k1 = -915799e-8;
			k22 = -1.1513021;
			k32 = -0.50559606;
			k4 = 692167e-8;
			wl = -0.0041960863;
			wm = -0.7034186147;
			ws = 1.707614701;
		}
		let S = k0 + k1 * a + k22 * b + k32 * a * a + k4 * a * b;
		let k_l = 0.3963377774 * a + 0.2158037573 * b;
		let k_m = -0.1055613458 * a - 0.0638541728 * b;
		let k_s = -0.0894841775 * a - 1.291485548 * b;
		{
			let l_ = 1 + S * k_l;
			let m_ = 1 + S * k_m;
			let s_ = 1 + S * k_s;
			let l = l_ * l_ * l_;
			let m = m_ * m_ * m_;
			let s2 = s_ * s_ * s_;
			let l_dS = 3 * k_l * l_ * l_;
			let m_dS = 3 * k_m * m_ * m_;
			let s_dS = 3 * k_s * s_ * s_;
			let l_dS2 = 6 * k_l * k_l * l_;
			let m_dS2 = 6 * k_m * k_m * m_;
			let s_dS2 = 6 * k_s * k_s * s_;
			let f3 = wl * l + wm * m + ws * s2;
			let f1 = wl * l_dS + wm * m_dS + ws * s_dS;
			let f22 = wl * l_dS2 + wm * m_dS2 + ws * s_dS2;
			S = S - (f3 * f1) / (f1 * f1 - 0.5 * f3 * f22);
		}
		return S;
	}
	function find_cusp(a, b) {
		let S_cusp = compute_max_saturation(a, b);
		let rgb5 = convertOklabToLrgb_default({
			l: 1,
			a: S_cusp * a,
			b: S_cusp * b
		});
		let L_cusp = Math.cbrt(1 / Math.max(rgb5.r, rgb5.g, rgb5.b));
		let C_cusp = L_cusp * S_cusp;
		return [L_cusp, C_cusp];
	}
	function find_gamut_intersection(a, b, L1, C1, L0, cusp = null) {
		if (!cusp) {
			cusp = find_cusp(a, b);
		}
		let t;
		if ((L1 - L0) * cusp[1] - (cusp[0] - L0) * C1 <= 0) {
			t = (cusp[1] * L0) / (C1 * cusp[0] + cusp[1] * (L0 - L1));
		} else {
			t =
				(cusp[1] * (L0 - 1)) /
				(C1 * (cusp[0] - 1) + cusp[1] * (L0 - L1));
			{
				let dL = L1 - L0;
				let dC = C1;
				let k_l = 0.3963377774 * a + 0.2158037573 * b;
				let k_m = -0.1055613458 * a - 0.0638541728 * b;
				let k_s = -0.0894841775 * a - 1.291485548 * b;
				let l_dt = dL + dC * k_l;
				let m_dt = dL + dC * k_m;
				let s_dt = dL + dC * k_s;
				{
					let L = L0 * (1 - t) + t * L1;
					let C = t * C1;
					let l_ = L + C * k_l;
					let m_ = L + C * k_m;
					let s_ = L + C * k_s;
					let l = l_ * l_ * l_;
					let m = m_ * m_ * m_;
					let s2 = s_ * s_ * s_;
					let ldt = 3 * l_dt * l_ * l_;
					let mdt = 3 * m_dt * m_ * m_;
					let sdt = 3 * s_dt * s_ * s_;
					let ldt2 = 6 * l_dt * l_dt * l_;
					let mdt2 = 6 * m_dt * m_dt * m_;
					let sdt2 = 6 * s_dt * s_dt * s_;
					let r2 =
						4.0767416621 * l -
						3.3077115913 * m +
						0.2309699292 * s2 -
						1;
					let r1 =
						4.0767416621 * ldt -
						3.3077115913 * mdt +
						0.2309699292 * sdt;
					let r22 =
						4.0767416621 * ldt2 -
						3.3077115913 * mdt2 +
						0.2309699292 * sdt2;
					let u_r = r1 / (r1 * r1 - 0.5 * r2 * r22);
					let t_r = -r2 * u_r;
					let g =
						-1.2684380046 * l +
						2.6097574011 * m -
						0.3413193965 * s2 -
						1;
					let g1 =
						-1.2684380046 * ldt +
						2.6097574011 * mdt -
						0.3413193965 * sdt;
					let g2 =
						-1.2684380046 * ldt2 +
						2.6097574011 * mdt2 -
						0.3413193965 * sdt2;
					let u_g = g1 / (g1 * g1 - 0.5 * g * g2);
					let t_g = -g * u_g;
					let b2 =
						-0.0041960863 * l -
						0.7034186147 * m +
						1.707614701 * s2 -
						1;
					let b1 =
						-0.0041960863 * ldt -
						0.7034186147 * mdt +
						1.707614701 * sdt;
					let b22 =
						-0.0041960863 * ldt2 -
						0.7034186147 * mdt2 +
						1.707614701 * sdt2;
					let u_b = b1 / (b1 * b1 - 0.5 * b2 * b22);
					let t_b = -b2 * u_b;
					t_r = u_r >= 0 ? t_r : 1e6;
					t_g = u_g >= 0 ? t_g : 1e6;
					t_b = u_b >= 0 ? t_b : 1e6;
					t += Math.min(t_r, Math.min(t_g, t_b));
				}
			}
		}
		return t;
	}
	function get_ST_max(a_, b_, cusp = null) {
		if (!cusp) {
			cusp = find_cusp(a_, b_);
		}
		let L = cusp[0];
		let C = cusp[1];
		return [C / L, C / (1 - L)];
	}
	function get_Cs(L, a_, b_) {
		let cusp = find_cusp(a_, b_);
		let C_max = find_gamut_intersection(a_, b_, L, 1, L, cusp);
		let ST_max = get_ST_max(a_, b_, cusp);
		let S_mid =
			0.11516993 +
			1 /
				(7.4477897 +
					4.1590124 * b_ +
					a_ *
						(-2.19557347 +
							1.75198401 * b_ +
							a_ *
								(-2.13704948 -
									10.02301043 * b_ +
									a_ *
										(-4.24894561 +
											5.38770819 * b_ +
											4.69891013 * a_))));
		let T_mid =
			0.11239642 +
			1 /
				(1.6132032 -
					0.68124379 * b_ +
					a_ *
						(0.40370612 +
							0.90148123 * b_ +
							a_ *
								(-0.27087943 +
									0.6122399 * b_ +
									a_ *
										(299215e-8 -
											0.45399568 * b_ -
											0.14661872 * a_))));
		let k4 = C_max / Math.min(L * ST_max[0], (1 - L) * ST_max[1]);
		let C_a = L * S_mid;
		let C_b = (1 - L) * T_mid;
		let C_mid =
			0.9 *
			k4 *
			Math.sqrt(
				Math.sqrt(
					1 /
						(1 / (C_a * C_a * C_a * C_a) +
							1 / (C_b * C_b * C_b * C_b))
				)
			);
		C_a = L * 0.4;
		C_b = (1 - L) * 0.8;
		let C_0 = Math.sqrt(1 / (1 / (C_a * C_a) + 1 / (C_b * C_b)));
		return [C_0, C_mid, C_max];
	}

	// src/okhsl/convertOklabToOkhsl.js
	function convertOklabToOkhsl(lab3) {
		const ret = { mode: 'okhsl', l: toe(lab3.l) };
		if (lab3.alpha !== void 0) {
			ret.alpha = lab3.alpha;
		}
		let c4 = Math.sqrt(lab3.a * lab3.a + lab3.b * lab3.b);
		if (!c4) {
			ret.s = 0;
			return ret;
		}
		let [C_0, C_mid, C_max] = get_Cs(lab3.l, lab3.a / c4, lab3.b / c4);
		let s2;
		if (c4 < C_mid) {
			let k_0 = 0;
			let k_1 = 0.8 * C_0;
			let k_2 = 1 - k_1 / C_mid;
			let t = (c4 - k_0) / (k_1 + k_2 * (c4 - k_0));
			s2 = t * 0.8;
		} else {
			let k_0 = C_mid;
			let k_1 = (0.2 * C_mid * C_mid * 1.25 * 1.25) / C_0;
			let k_2 = 1 - k_1 / (C_max - C_mid);
			let t = (c4 - k_0) / (k_1 + k_2 * (c4 - k_0));
			s2 = 0.8 + 0.2 * t;
		}
		if (s2) {
			ret.s = s2;
			ret.h = normalizeHue_default(
				(Math.atan2(lab3.b, lab3.a) * 180) / Math.PI
			);
		}
		return ret;
	}

	// src/okhsl/convertOkhslToOklab.js
	function convertOkhslToOklab(hsl2) {
		let l = toe_inv(hsl2.l);
		const ret = { mode: 'oklab', l };
		if (hsl2.alpha !== void 0) {
			ret.alpha = hsl2.alpha;
		}
		if (!hsl2.s || hsl2.l === 1) {
			ret.a = ret.b = 0;
			return ret;
		}
		let a_ = Math.cos((hsl2.h / 180) * Math.PI);
		let b_ = Math.sin((hsl2.h / 180) * Math.PI);
		let [C_0, C_mid, C_max] = get_Cs(l, a_, b_);
		let t, k_0, k_1, k_2;
		if (hsl2.s < 0.8) {
			t = 1.25 * hsl2.s;
			k_0 = 0;
			k_1 = 0.8 * C_0;
			k_2 = 1 - k_1 / C_mid;
		} else {
			t = 5 * (hsl2.s - 0.8);
			k_0 = C_mid;
			k_1 = (0.2 * C_mid * C_mid * 1.25 * 1.25) / C_0;
			k_2 = 1 - k_1 / (C_max - C_mid);
		}
		let C = k_0 + (t * k_1) / (1 - k_2 * t);
		ret.a = C * a_;
		ret.b = C * b_;
		return ret;
	}

	// src/okhsl/modeOkhsl.js
	var modeOkhsl = {
		...definition_default7,
		mode: 'okhsl',
		channels: ['h', 's', 'l', 'alpha'],
		parse: ['--okhsl'],
		serialize: '--okhsl',
		fromMode: {
			oklab: convertOklabToOkhsl,
			rgb: c4 => convertOklabToOkhsl(convertRgbToOklab_default(c4))
		},
		toMode: {
			oklab: convertOkhslToOklab,
			rgb: c4 => convertOklabToRgb_default(convertOkhslToOklab(c4))
		}
	};
	var modeOkhsl_default = modeOkhsl;

	// src/okhsv/convertOklabToOkhsv.js
	function convertOklabToOkhsv(lab3) {
		let c4 = Math.sqrt(lab3.a * lab3.a + lab3.b * lab3.b);
		let l = lab3.l;
		let a_ = c4 ? lab3.a / c4 : 1;
		let b_ = c4 ? lab3.b / c4 : 1;
		let [S_max, T] = get_ST_max(a_, b_);
		let S_0 = 0.5;
		let k4 = 1 - S_0 / S_max;
		let t = T / (c4 + l * T);
		let L_v = t * l;
		let C_v = t * c4;
		let L_vt = toe_inv(L_v);
		let C_vt = (C_v * L_vt) / L_v;
		let rgb_scale = convertOklabToLrgb_default({
			l: L_vt,
			a: a_ * C_vt,
			b: b_ * C_vt
		});
		let scale_L = Math.cbrt(
			1 / Math.max(rgb_scale.r, rgb_scale.g, rgb_scale.b, 0)
		);
		l = l / scale_L;
		c4 = ((c4 / scale_L) * toe(l)) / l;
		l = toe(l);
		const ret = {
			mode: 'okhsv',
			s: c4 ? ((S_0 + T) * C_v) / (T * S_0 + T * k4 * C_v) : 0,
			v: l ? l / L_v : 0
		};
		if (ret.s) {
			ret.h = normalizeHue_default(
				(Math.atan2(lab3.b, lab3.a) * 180) / Math.PI
			);
		}
		if (lab3.alpha !== void 0) {
			ret.alpha = lab3.alpha;
		}
		return ret;
	}

	// src/okhsv/convertOkhsvToOklab.js
	function convertOkhsvToOklab(hsv2) {
		const ret = { mode: 'oklab' };
		if (hsv2.alpha !== void 0) {
			ret.alpha = hsv2.alpha;
		}
		const h = hsv2.h || 0;
		const a_ = Math.cos((h / 180) * Math.PI);
		const b_ = Math.sin((h / 180) * Math.PI);
		const [S_max, T] = get_ST_max(a_, b_);
		const S_0 = 0.5;
		const k4 = 1 - S_0 / S_max;
		const L_v = 1 - (hsv2.s * S_0) / (S_0 + T - T * k4 * hsv2.s);
		const C_v = (hsv2.s * T * S_0) / (S_0 + T - T * k4 * hsv2.s);
		const L_vt = toe_inv(L_v);
		const C_vt = (C_v * L_vt) / L_v;
		const rgb_scale = convertOklabToLrgb_default({
			l: L_vt,
			a: a_ * C_vt,
			b: b_ * C_vt
		});
		const scale_L = Math.cbrt(
			1 / Math.max(rgb_scale.r, rgb_scale.g, rgb_scale.b, 0)
		);
		const L_new = toe_inv(hsv2.v * L_v);
		const C = (C_v * L_new) / L_v;
		ret.l = L_new * scale_L;
		ret.a = C * a_ * scale_L;
		ret.b = C * b_ * scale_L;
		return ret;
	}

	// src/okhsv/modeOkhsv.js
	var modeOkhsv = {
		...definition_default8,
		mode: 'okhsv',
		channels: ['h', 's', 'v', 'alpha'],
		parse: ['--okhsv'],
		serialize: '--okhsv',
		fromMode: {
			oklab: convertOklabToOkhsv,
			rgb: c4 => convertOklabToOkhsv(convertRgbToOklab_default(c4))
		},
		toMode: {
			oklab: convertOkhsvToOklab,
			rgb: c4 => convertOklabToRgb_default(convertOkhsvToOklab(c4))
		}
	};
	var modeOkhsv_default = modeOkhsv;

	// src/oklab/definition.js
	var definition19 = {
		...definition_default12,
		mode: 'oklab',
		toMode: {
			lrgb: convertOklabToLrgb_default,
			rgb: convertOklabToRgb_default
		},
		fromMode: {
			lrgb: convertLrgbToOklab_default,
			rgb: convertRgbToOklab_default
		},
		ranges: {
			l: [0, 0.999],
			a: [-0.233, 0.276],
			b: [-0.311, 0.198]
		},
		parse: ['--oklab'],
		serialize: '--oklab'
	};
	var definition_default19 = definition19;

	// src/oklch/definition.js
	var definition20 = {
		...definition_default14,
		mode: 'oklch',
		toMode: {
			oklab: c4 => convertLchToLab_default(c4, 'oklab'),
			rgb: c4 =>
				convertOklabToRgb_default(convertLchToLab_default(c4, 'oklab'))
		},
		fromMode: {
			rgb: c4 =>
				convertLabToLch_default(convertRgbToOklab_default(c4), 'oklch'),
			oklab: c4 => convertLabToLch_default(c4, 'oklch')
		},
		parse: ['--oklch'],
		serialize: '--oklch',
		ranges: {
			l: [0, 0.999],
			c: [0, 0.322],
			h: [0, 360]
		}
	};
	var definition_default20 = definition20;

	// src/p3/convertP3ToXyz65.js
	var convertP3ToXyz65 = rgb5 => {
		let { r: r2, g, b, alpha } = convertRgbToLrgb_default(rgb5);
		let res = {
			mode: 'xyz65',
			x:
				0.486570948648216 * r2 +
				0.265667693169093 * g +
				0.1982172852343625 * b,
			y:
				0.2289745640697487 * r2 +
				0.6917385218365062 * g +
				0.079286914093745 * b,
			z: 0 * r2 + 0.0451133818589026 * g + 1.043944368900976 * b
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertP3ToXyz65_default = convertP3ToXyz65;

	// src/p3/convertXyz65ToP3.js
	var convertXyz65ToP3 = ({ x, y, z, alpha }) => {
		let res = convertLrgbToRgb_default(
			{
				r:
					x * 2.4934969119414263 -
					y * 0.9313836179191242 -
					0.402710784450717 * z,
				g:
					x * -0.8294889695615749 +
					y * 1.7626640603183465 +
					0.0236246858419436 * z,
				b:
					x * 0.0358458302437845 -
					y * 0.0761723892680418 +
					0.9568845240076871 * z
			},
			'p3'
		);
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz65ToP3_default = convertXyz65ToP3;

	// src/p3/definition.js
	var definition21 = {
		...definition_default,
		mode: 'p3',
		parse: ['display-p3'],
		serialize: 'display-p3',
		fromMode: {
			rgb: color =>
				convertXyz65ToP3_default(convertRgbToXyz65_default(color)),
			xyz65: convertXyz65ToP3_default
		},
		toMode: {
			rgb: color =>
				convertXyz65ToRgb_default(convertP3ToXyz65_default(color)),
			xyz65: convertP3ToXyz65_default
		}
	};
	var definition_default21 = definition21;

	// src/prophoto/convertXyz50ToProphoto.js
	var gamma2 = v => {
		let abs3 = Math.abs(v);
		if (abs3 >= 1 / 512) {
			return Math.sign(v) * Math.pow(abs3, 1 / 1.8);
		}
		return 16 * v;
	};
	var convertXyz50ToProphoto = ({ x, y, z, alpha }) => {
		let res = {
			mode: 'prophoto',
			r: gamma2(
				x * 1.3457868816471585 -
					y * 0.2555720873797946 -
					0.0511018649755453 * z
			),
			g: gamma2(
				x * -0.5446307051249019 +
					y * 1.5082477428451466 +
					0.0205274474364214 * z
			),
			b: gamma2(x * 0 + y * 0 + 1.2119675456389452 * z)
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz50ToProphoto_default = convertXyz50ToProphoto;

	// src/prophoto/convertProphotoToXyz50.js
	var linearize2 = v => {
		let abs3 = Math.abs(v);
		if (abs3 >= 16 / 512) {
			return Math.sign(v) * Math.pow(abs3, 1.8);
		}
		return v / 16;
	};
	var convertProphotoToXyz50 = prophoto2 => {
		let r2 = linearize2(prophoto2.r);
		let g = linearize2(prophoto2.g);
		let b = linearize2(prophoto2.b);
		let res = {
			mode: 'xyz50',
			x:
				0.7977666449006423 * r2 +
				0.1351812974005331 * g +
				0.0313477341283922 * b,
			y:
				0.2880748288194013 * r2 +
				0.7118352342418731 * g +
				899369387256e-16 * b,
			z: 0 * r2 + 0 * g + 0.8251046025104602 * b
		};
		if (prophoto2.alpha !== void 0) {
			res.alpha = prophoto2.alpha;
		}
		return res;
	};
	var convertProphotoToXyz50_default = convertProphotoToXyz50;

	// src/prophoto/definition.js
	var definition22 = {
		...definition_default,
		mode: 'prophoto',
		parse: ['prophoto-rgb'],
		serialize: 'prophoto-rgb',
		fromMode: {
			xyz50: convertXyz50ToProphoto_default,
			rgb: color =>
				convertXyz50ToProphoto_default(convertRgbToXyz50_default(color))
		},
		toMode: {
			xyz50: convertProphotoToXyz50_default,
			rgb: color =>
				convertXyz50ToRgb_default(convertProphotoToXyz50_default(color))
		}
	};
	var definition_default22 = definition22;

	// src/rec2020/convertXyz65ToRec2020.js
	var α = 1.09929682680944;
	var β = 0.018053968510807;
	var gamma3 = v => {
		const abs3 = Math.abs(v);
		if (abs3 > β) {
			return (Math.sign(v) || 1) * (α * Math.pow(abs3, 0.45) - (α - 1));
		}
		return 4.5 * v;
	};
	var convertXyz65ToRec2020 = ({ x, y, z, alpha }) => {
		let res = {
			mode: 'rec2020',
			r: gamma3(
				x * 1.7166511879712683 -
					y * 0.3556707837763925 -
					0.2533662813736599 * z
			),
			g: gamma3(
				x * -0.6666843518324893 +
					y * 1.6164812366349395 +
					0.0157685458139111 * z
			),
			b: gamma3(
				x * 0.0176398574453108 -
					y * 0.0427706132578085 +
					0.9421031212354739 * z
			)
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz65ToRec2020_default = convertXyz65ToRec2020;

	// src/rec2020/convertRec2020ToXyz65.js
	var α2 = 1.09929682680944;
	var β2 = 0.018053968510807;
	var linearize3 = v => {
		let abs3 = Math.abs(v);
		if (abs3 < β2 * 4.5) {
			return v / 4.5;
		}
		return (Math.sign(v) || 1) * Math.pow((abs3 + α2 - 1) / α2, 1 / 0.45);
	};
	var convertRec2020ToXyz65 = rec20202 => {
		let r2 = linearize3(rec20202.r);
		let g = linearize3(rec20202.g);
		let b = linearize3(rec20202.b);
		let res = {
			mode: 'xyz65',
			x:
				0.6369580483012911 * r2 +
				0.1446169035862083 * g +
				0.1688809751641721 * b,
			y:
				0.262700212011267 * r2 +
				0.6779980715188708 * g +
				0.059301716469862 * b,
			z: 0 * r2 + 0.0280726930490874 * g + 1.0609850577107909 * b
		};
		if (rec20202.alpha !== void 0) {
			res.alpha = rec20202.alpha;
		}
		return res;
	};
	var convertRec2020ToXyz65_default = convertRec2020ToXyz65;

	// src/rec2020/definition.js
	var definition23 = {
		...definition_default,
		mode: 'rec2020',
		fromMode: {
			xyz65: convertXyz65ToRec2020_default,
			rgb: color =>
				convertXyz65ToRec2020_default(convertRgbToXyz65_default(color))
		},
		toMode: {
			xyz65: convertRec2020ToXyz65_default,
			rgb: color =>
				convertXyz65ToRgb_default(convertRec2020ToXyz65_default(color))
		},
		parse: ['rec2020'],
		serialize: 'rec2020'
	};
	var definition_default23 = definition23;

	// src/xyz50/definition.js
	var definition24 = {
		mode: 'xyz50',
		parse: ['xyz-d50', '--xyz-d50'],
		serialize: 'xyz-d50',
		toMode: {
			rgb: convertXyz50ToRgb_default,
			lab: convertXyz50ToLab_default
		},
		fromMode: {
			rgb: convertRgbToXyz50_default,
			lab: convertLabToXyz50_default
		},
		channels: ['x', 'y', 'z', 'alpha'],
		ranges: {
			x: [0, 0.964],
			y: [0, 0.999],
			z: [0, 0.825]
		},
		interpolate: {
			x: interpolatorLinear,
			y: interpolatorLinear,
			z: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		}
	};
	var definition_default24 = definition24;

	// src/xyz65/convertXyz65ToXyz50.js
	var convertXyz65ToXyz50 = xyz652 => {
		let { x, y, z, alpha } = xyz652;
		let res = {
			mode: 'xyz50',
			x:
				1.0479298208405488 * x +
				0.0229467933410191 * y -
				0.0501922295431356 * z,
			y:
				0.0296278156881593 * x +
				0.990434484573249 * y -
				0.0170738250293851 * z,
			z:
				-0.0092430581525912 * x +
				0.0150551448965779 * y +
				0.7518742899580008 * z
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz65ToXyz50_default = convertXyz65ToXyz50;

	// src/xyz65/convertXyz50ToXyz65.js
	var convertXyz50ToXyz65 = xyz502 => {
		let { x, y, z, alpha } = xyz502;
		let res = {
			mode: 'xyz65',
			x:
				0.9554734527042182 * x -
				0.0230985368742614 * y +
				0.0632593086610217 * z,
			y:
				-0.0283697069632081 * x +
				1.0099954580058226 * y +
				0.021041398966943 * z,
			z:
				0.0123140016883199 * x -
				0.0205076964334779 * y +
				1.3303659366080753 * z
		};
		if (alpha !== void 0) {
			res.alpha = alpha;
		}
		return res;
	};
	var convertXyz50ToXyz65_default = convertXyz50ToXyz65;

	// src/xyz65/definition.js
	var definition25 = {
		mode: 'xyz65',
		toMode: {
			rgb: convertXyz65ToRgb_default,
			xyz50: convertXyz65ToXyz50_default
		},
		fromMode: {
			rgb: convertRgbToXyz65_default,
			xyz50: convertXyz50ToXyz65_default
		},
		ranges: {
			x: [0, 0.95],
			y: [0, 1],
			z: [0, 1.088]
		},
		channels: ['x', 'y', 'z', 'alpha'],
		parse: ['xyz', 'xyz-d65', '--xyz-d65'],
		serialize: 'xyz-d65',
		interpolate: {
			x: interpolatorLinear,
			y: interpolatorLinear,
			z: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		}
	};
	var definition_default25 = definition25;

	// src/yiq/convertRgbToYiq.js
	var convertRgbToYiq = rgb5 => {
		let { r: r2, g, b, alpha } = convertRgbToLrgb_default(rgb5);
		let res = {
			mode: 'yiq',
			y: 0.29889531 * r2 + 0.58662247 * g + 0.11448223 * b,
			i: 0.59597799 * r2 - 0.2741761 * g - 0.32180189 * b,
			q: 0.21147017 * r2 - 0.52261711 * g + 0.31114694 * b
		};
		if (alpha !== void 0) res.alpha = alpha;
		return res;
	};
	var convertRgbToYiq_default = convertRgbToYiq;

	// src/yiq/convertYiqToRgb.js
	var convertYiqToRgb = ({ y, i, q, alpha }) =>
		convertLrgbToRgb_default({
			r: y + 0.95608445 * i + 0.6208885 * q,
			g: y - 0.27137664 * i - 0.6486059 * q,
			b: y - 1.10561724 * i + 1.70250126 * q,
			alpha
		});
	var convertYiqToRgb_default = convertYiqToRgb;

	// src/yiq/definition.js
	var definition26 = {
		mode: 'yiq',
		toMode: {
			rgb: convertYiqToRgb_default
		},
		fromMode: {
			rgb: convertRgbToYiq_default
		},
		channels: ['y', 'i', 'q', 'alpha'],
		parse: ['--yiq'],
		serialize: '--yiq',
		ranges: {
			i: [-0.595, 0.595],
			q: [-0.522, 0.522]
		},
		interpolate: {
			y: interpolatorLinear,
			i: interpolatorLinear,
			q: interpolatorLinear,
			alpha: { use: interpolatorLinear, fixup: fixupAlpha }
		}
	};
	var definition_default26 = definition26;

	// src/round.js
	var r = (value, precision) =>
		Math.round(value * (precision = Math.pow(10, precision))) / precision;
	var round =
		(precision = 4) =>
		value =>
			typeof value === 'number' ? r(value, precision) : value;
	var round_default = round;

	// src/formatter.js
	var twoDecimals = round_default(2);
	var clamp = value => Math.max(0, Math.min(1, value));
	var fixup = value => Math.round(clamp(value) * 255);
	var serializeHex = color => {
		if (color === void 0) {
			return void 0;
		}
		let r2 = fixup(color.r);
		let g = fixup(color.g);
		let b = fixup(color.b);
		return (
			'#' + ((1 << 24) | (r2 << 16) | (g << 8) | b).toString(16).slice(1)
		);
	};
	var serializeHex8 = color => {
		if (color === void 0) {
			return void 0;
		}
		let a = fixup(color.alpha !== void 0 ? color.alpha : 1);
		return serializeHex(color) + ((1 << 8) | a).toString(16).slice(1);
	};
	var serializeRgb = color => {
		if (color === void 0) {
			return void 0;
		}
		let r2 = color.r !== void 0 ? fixup(color.r) : 'none';
		let g = color.g !== void 0 ? fixup(color.g) : 'none';
		let b = color.b !== void 0 ? fixup(color.b) : 'none';
		if (color.alpha === void 0 || color.alpha === 1) {
			return `rgb(${r2}, ${g}, ${b})`;
		} else {
			return `rgba(${r2}, ${g}, ${b}, ${twoDecimals(
				clamp(color.alpha)
			)})`;
		}
	};
	var serializeHsl = color => {
		if (color === void 0) {
			return void 0;
		}
		const h = twoDecimals(color.h || 0);
		const s2 =
			color.s !== void 0
				? twoDecimals(clamp(color.s) * 100) + '%'
				: 'none';
		const l =
			color.l !== void 0
				? twoDecimals(clamp(color.l) * 100) + '%'
				: 'none';
		if (color.alpha === void 0 || color.alpha === 1) {
			return `hsl(${h}, ${s2}, ${l})`;
		} else {
			return `hsla(${h}, ${s2}, ${l}, ${twoDecimals(
				clamp(color.alpha)
			)})`;
		}
	};
	var formatCss = c4 => {
		const color = prepare_default(c4);
		if (!color) {
			return void 0;
		}
		const def = getMode(color.mode);
		if (!def.serialize || typeof def.serialize === 'string') {
			let res = `color(${def.serialize || `--${color.mode}`} `;
			def.channels.forEach((ch, i) => {
				if (ch !== 'alpha') {
					res +=
						(i ? ' ' : '') +
						(color[ch] !== void 0 ? color[ch] : 'none');
				}
			});
			if (color.alpha !== void 0 && color.alpha < 1) {
				res += ` / ${color.alpha}`;
			}
			return res + ')';
		}
		if (typeof def.serialize === 'function') {
			return def.serialize(color);
		}
		return void 0;
	};
	var formatHex = c4 => serializeHex(converter_default('rgb')(c4));
	var formatHex8 = c4 => serializeHex8(converter_default('rgb')(c4));
	var formatRgb = c4 => serializeRgb(converter_default('rgb')(c4));
	var formatHsl = c4 => serializeHsl(converter_default('hsl')(c4));

	// src/blend.js
	var BLENDS = {
		normal: (b, s2) => s2,
		multiply: (b, s2) => b * s2,
		screen: (b, s2) => b + s2 - b * s2,
		'hard-light': (b, s2) => (s2 < 0.5 ? b * 2 * s2 : 2 * s2 * (1 - b) - 1),
		overlay: (b, s2) => (b < 0.5 ? s2 * 2 * b : 2 * b * (1 - s2) - 1),
		darken: (b, s2) => Math.min(b, s2),
		lighten: (b, s2) => Math.max(b, s2),
		'color-dodge': (b, s2) =>
			b === 0 ? 0 : s2 === 1 ? 1 : Math.min(1, b / (1 - s2)),
		'color-burn': (b, s2) =>
			b === 1 ? 1 : s2 === 0 ? 0 : 1 - Math.min(1, (1 - b) / s2),
		'soft-light': (b, s2) =>
			s2 < 0.5
				? b - (1 - 2 * s2) * b * (1 - b)
				: b +
				  (2 * s2 - 1) *
						((b < 0.25
							? ((16 * b - 12) * b + 4) * b
							: Math.sqrt(b)) -
							b),
		difference: (b, s2) => Math.abs(b - s2),
		exclusion: (b, s2) => b + s2 - 2 * b * s2
	};
	var blend = (colors, type = 'normal', mode = 'rgb') => {
		let fn5 = typeof type === 'function' ? type : BLENDS[type];
		let conv = converter_default(mode);
		let channels = getMode(mode).channels;
		let converted = colors.map(c4 => {
			let cc = conv(c4);
			if (cc.alpha === void 0) {
				cc.alpha = 1;
			}
			return cc;
		});
		return converted.reduce((b, s2) => {
			if (b === void 0) return s2;
			let alpha = s2.alpha + b.alpha * (1 - s2.alpha);
			return channels.reduce(
				(res, ch) => {
					if (ch !== 'alpha') {
						if (alpha === 0) {
							res[ch] = 0;
						} else {
							res[ch] =
								s2.alpha * (1 - b.alpha) * s2[ch] +
								s2.alpha * b.alpha * fn5(b[ch], s2[ch]) +
								(1 - s2.alpha) * b.alpha * b[ch];
							res[ch] = Math.max(0, Math.min(1, res[ch] / alpha));
						}
					}
					return res;
				},
				{ mode, alpha }
			);
		});
	};
	var blend_default = blend;

	// src/random.js
	var rand = ([min2, max]) => min2 + Math.random() * (max - min2);
	var to_intervals = constraints =>
		Object.keys(constraints).reduce((o, k4) => {
			let v = constraints[k4];
			o[k4] = Array.isArray(v) ? v : [v, v];
			return o;
		}, {});
	var random = (mode = 'rgb', constraints = {}) => {
		let def = getMode(mode);
		let limits = to_intervals(constraints);
		return def.channels.reduce(
			(res, ch) => {
				if (limits.alpha || ch !== 'alpha') {
					res[ch] = rand(limits[ch] || def.ranges[ch]);
				}
				return res;
			},
			{ mode }
		);
	};
	var random_default = random;

	// src/map.js
	var mapper = (fn5, mode = 'rgb', preserve_mode = false) => {
		let channels = mode ? getMode(mode).channels : null;
		let conv = mode ? converter_default(mode) : prepare_default;
		return color => {
			let conv_color = conv(color);
			let _mode = mode === null ? conv_color.mode : mode;
			let _channels = channels || getMode(_mode).channels;
			let res = _channels.reduce(
				(res2, ch) => {
					let v = fn5(conv_color[ch], ch, conv_color, _mode);
					if (v !== void 0 && !isNaN(v)) {
						res2[ch] = v;
					}
					return res2;
				},
				{ mode: _mode }
			);
			if (!preserve_mode) {
				return res;
			}
			let prep = prepare_default(color);
			if (prep && prep.mode !== res.mode) {
				return converter_default(prep.mode)(res);
			}
			return res;
		};
	};
	var mapAlphaMultiply = (v, ch, c4) => {
		if (ch !== 'alpha') {
			return (v || 0) * (c4.alpha !== void 0 ? c4.alpha : 1);
		}
		return v;
	};
	var mapAlphaDivide = (v, ch, c4) => {
		if (ch !== 'alpha' && c4.alpha !== 0) {
			return (v || 0) / (c4.alpha !== void 0 ? c4.alpha : 1);
		}
		return v;
	};
	var mapTransferLinear =
		(slope = 1, intercept = 0) =>
		(v, ch) => {
			if (ch !== 'alpha') {
				return v * slope + intercept;
			}
			return v;
		};
	var mapTransferGamma =
		(amplitude = 1, exponent = 1, offset = 0) =>
		(v, ch) => {
			if (ch !== 'alpha') {
				return amplitude * Math.pow(v, exponent) + offset;
			}
			return v;
		};

	// src/util/normalizePositions.js
	var normalizePositions = arr => {
		if (arr[0] === void 0) {
			arr[0] = 0;
		}
		if (arr[arr.length - 1] === void 0) {
			arr[arr.length - 1] = 1;
		}
		let i = 1;
		let j;
		let from_idx;
		let from_pos;
		let inc;
		while (i < arr.length) {
			if (arr[i] === void 0) {
				from_idx = i;
				from_pos = arr[i - 1];
				j = i;
				while (arr[j] === void 0) j++;
				inc = (arr[j] - from_pos) / (j - i + 1);
				while (i < j) {
					arr[i] = from_pos + (i + 1 - from_idx) * inc;
					i++;
				}
			} else if (arr[i] < arr[i - 1]) {
				arr[i] = arr[i - 1];
			}
			i++;
		}
		return arr;
	};
	var normalizePositions_default = normalizePositions;

	// src/easing/midpoint.js
	var midpoint =
		(H = 0.5) =>
		t =>
			H <= 0 ? 1 : H >= 1 ? 0 : Math.pow(t, Math.log(0.5) / Math.log(H));
	var midpoint_default = midpoint;

	// src/interpolate/interpolate.js
	var isfn2 = o => typeof o === 'function';
	var isobj = o => o && typeof o === 'object';
	var isnum = o => typeof o === 'number';
	var interpolate_fn = (colors, mode = 'rgb', overrides, premap) => {
		let def = getMode(mode);
		let conv = converter_default(mode);
		let conv_colors = [];
		let positions = [];
		let fns = {};
		colors.forEach(val => {
			if (Array.isArray(val)) {
				conv_colors.push(conv(val[0]));
				positions.push(val[1]);
			} else if (isnum(val) || isfn2(val)) {
				fns[positions.length] = val;
			} else {
				conv_colors.push(conv(val));
				positions.push(void 0);
			}
		});
		normalizePositions_default(positions);
		let fixed = def.channels.reduce((res, ch) => {
			let ffn;
			if (
				isobj(overrides) &&
				isobj(overrides[ch]) &&
				overrides[ch].fixup
			) {
				ffn = overrides[ch].fixup;
			} else if (
				isobj(def.interpolate[ch]) &&
				def.interpolate[ch].fixup
			) {
				ffn = def.interpolate[ch].fixup;
			} else {
				ffn = v => v;
			}
			res[ch] = ffn(conv_colors.map(color => color[ch]));
			return res;
		}, {});
		if (premap) {
			let ccolors = conv_colors.map((color, idx) => {
				return def.channels.reduce(
					(c4, ch) => {
						c4[ch] = fixed[ch][idx];
						return c4;
					},
					{ mode }
				);
			});
			fixed = def.channels.reduce((res, ch) => {
				res[ch] = ccolors.map(c4 => {
					let v = premap(c4[ch], ch, c4, mode);
					return isNaN(v) ? void 0 : v;
				});
				return res;
			}, {});
		}
		let interpolators = def.channels.reduce((res, ch) => {
			let ifn;
			if (isfn2(overrides)) {
				ifn = overrides;
			} else if (isobj(overrides) && isfn2(overrides[ch])) {
				ifn = overrides[ch];
			} else if (
				isobj(overrides) &&
				isobj(overrides[ch]) &&
				overrides[ch].use
			) {
				ifn = overrides[ch].use;
			} else if (isfn2(def.interpolate[ch])) {
				ifn = def.interpolate[ch];
			} else if (isobj(def.interpolate[ch])) {
				ifn = def.interpolate[ch].use;
			}
			res[ch] = ifn(fixed[ch]);
			return res;
		}, {});
		let n3 = conv_colors.length - 1;
		return t => {
			t = Math.min(Math.max(0, t), 1);
			if (t <= positions[0]) {
				return conv_colors[0];
			}
			if (t > positions[n3]) {
				return conv_colors[n3];
			}
			let idx = 0;
			while (positions[idx] < t) idx++;
			let start = positions[idx - 1];
			let delta = positions[idx] - start;
			let P = (t - start) / delta;
			let fn5 = fns[idx] || fns[0];
			if (fn5 !== void 0) {
				if (isnum(fn5)) {
					fn5 = midpoint_default((fn5 - start) / delta);
				}
				P = fn5(P);
			}
			let t0 = (idx - 1 + P) / n3;
			return def.channels.reduce(
				(res, channel) => {
					let val = interpolators[channel](t0);
					if (val !== void 0) {
						res[channel] = val;
					}
					return res;
				},
				{ mode }
			);
		};
	};
	var interpolate = (colors, mode = 'rgb', overrides) =>
		interpolate_fn(colors, mode, overrides);
	var interpolateWith =
		(premap, postmap) =>
		(colors, mode = 'rgb', overrides) => {
			let post = postmap ? mapper(postmap, mode) : void 0;
			let it = interpolate_fn(colors, mode, overrides, premap);
			return post ? t => post(it(t)) : it;
		};
	var interpolateWithPremultipliedAlpha = interpolateWith(
		mapAlphaMultiply,
		mapAlphaDivide
	);

	// src/interpolate/splineBasis.js
	var mod = (v, l) => (v + l) % l;
	var bspline = (Vim2, Vim1, Vi, Vip1, t) => {
		let t2 = t * t;
		let t3 = t2 * t;
		return (
			((1 - 3 * t + 3 * t2 - t3) * Vim2 +
				(4 - 6 * t2 + 3 * t3) * Vim1 +
				(1 + 3 * t + 3 * t2 - 3 * t3) * Vi +
				t3 * Vip1) /
			6
		);
	};
	var interpolatorSplineBasis = arr => t => {
		let classes = arr.length - 1;
		let i = t >= 1 ? classes - 1 : Math.max(0, Math.floor(t * classes));
		return bspline(
			i > 0 ? arr[i - 1] : 2 * arr[i] - arr[i + 1],
			arr[i],
			arr[i + 1],
			i < classes - 1 ? arr[i + 2] : 2 * arr[i + 1] - arr[i],
			(t - i / classes) * classes
		);
	};
	var interpolatorSplineBasisClosed = arr => t => {
		const classes = arr.length - 1;
		const i = Math.floor(t * classes);
		return bspline(
			arr[mod(i - 1, arr.length)],
			arr[mod(i, arr.length)],
			arr[mod(i + 1, arr.length)],
			arr[mod(i + 2, arr.length)],
			(t - i / classes) * classes
		);
	};

	// src/interpolate/splineNatural.js
	var solve = v => {
		let i;
		let n3 = v.length - 1;
		let c4 = new Array(n3);
		let _v = new Array(n3);
		let sol = new Array(n3);
		c4[1] = 1 / 4;
		_v[1] = (6 * v[1] - v[0]) / 4;
		for (i = 2; i < n3; ++i) {
			c4[i] = 1 / (4 - c4[i - 1]);
			_v[i] = (6 * v[i] - (i == n3 - 1 ? v[n3] : 0) - _v[i - 1]) * c4[i];
		}
		sol[0] = v[0];
		sol[n3] = v[n3];
		if (n3 - 1 > 0) {
			sol[n3 - 1] = _v[n3 - 1];
		}
		for (i = n3 - 2; i > 0; --i) {
			sol[i] = _v[i] - c4[i] * sol[i + 1];
		}
		return sol;
	};
	var interpolatorSplineNatural = arr => interpolatorSplineBasis(solve(arr));
	var interpolatorSplineNaturalClosed = arr =>
		interpolatorSplineBasisClosed(solve(arr));

	// src/interpolate/splineMonotone.js
	var sgn = Math.sign;
	var min = Math.min;
	var abs2 = Math.abs;
	var mono = arr => {
		let n3 = arr.length - 1;
		let s2 = [];
		let p4 = [];
		let yp = [];
		for (let i = 0; i < n3; i++) {
			s2.push((arr[i + 1] - arr[i]) * n3);
			p4.push(i > 0 ? 0.5 * (arr[i + 1] - arr[i - 1]) * n3 : void 0);
			yp.push(
				i > 0
					? (sgn(s2[i - 1]) + sgn(s2[i])) *
							min(abs2(s2[i - 1]), abs2(s2[i]), 0.5 * abs2(p4[i]))
					: void 0
			);
		}
		return [s2, p4, yp];
	};
	var interpolator = (arr, yp, s2) => {
		let n3 = arr.length - 1;
		let n22 = n3 * n3;
		return t => {
			let i;
			if (t >= 1) {
				i = n3 - 1;
			} else {
				i = Math.max(0, Math.floor(t * n3));
			}
			let t1 = t - i / n3;
			let t2 = t1 * t1;
			let t3 = t2 * t1;
			return (
				(yp[i] + yp[i + 1] - 2 * s2[i]) * n22 * t3 +
				(3 * s2[i] - 2 * yp[i] - yp[i + 1]) * n3 * t2 +
				yp[i] * t1 +
				arr[i]
			);
		};
	};
	var interpolatorSplineMonotone = arr => {
		if (arr.length < 3) {
			return interpolatorLinear(arr);
		}
		let n3 = arr.length - 1;
		let [s2, , yp] = mono(arr);
		yp[0] = s2[0];
		yp[n3] = s2[n3 - 1];
		return interpolator(arr, yp, s2);
	};
	var interpolatorSplineMonotone2 = arr => {
		if (arr.length < 3) {
			return interpolatorLinear(arr);
		}
		let n3 = arr.length - 1;
		let [s2, p4, yp] = mono(arr);
		p4[0] = (arr[1] * 2 - arr[0] * 1.5 - arr[2] * 0.5) * n3;
		p4[n3] = (arr[n3] * 1.5 - arr[n3 - 1] * 2 + arr[n3 - 2] * 0.5) * n3;
		yp[0] =
			p4[0] * s2[0] <= 0
				? 0
				: abs2(p4[0]) > 2 * abs2(s2[0])
				? 2 * s2[0]
				: p4[0];
		yp[n3] =
			p4[n3] * s2[n3 - 1] <= 0
				? 0
				: abs2(p4[n3]) > 2 * abs2(s2[n3 - 1])
				? 2 * s2[n3 - 1]
				: p4[n3];
		return interpolator(arr, yp, s2);
	};
	var interpolatorSplineMonotoneClosed = arr => {
		let n3 = arr.length - 1;
		let [s2, p4, yp] = mono(arr);
		p4[0] = 0.5 * (arr[1] - arr[n3]) * n3;
		p4[n3] = 0.5 * (arr[0] - arr[n3 - 1]) * n3;
		let s_m1 = (arr[0] - arr[n3]) * n3;
		let s_n = s_m1;
		yp[0] =
			(sgn(s_m1) + sgn(s2[0])) *
			min(abs2(s_m1), abs2(s2[0]), 0.5 * abs2(p4[0]));
		yp[n3] =
			(sgn(s2[n3 - 1]) + sgn(s_n)) *
			min(abs2(s2[n3 - 1]), abs2(s_n), 0.5 * abs2(p4[n3]));
		return interpolator(arr, yp, s2);
	};

	// src/easing/gamma.js
	var gamma4 = (γ = 1) => (γ === 1 ? t => t : t => Math.pow(t, γ));
	var gamma_default = gamma4;

	// src/samples.js
	var samples = (n3 = 2, γ = 1) => {
		let ease = gamma_default(γ);
		if (n3 < 2) {
			return n3 < 1 ? [] : [ease(0.5)];
		}
		let res = [];
		for (let i = 0; i < n3; i++) {
			res.push(ease(i / (n3 - 1)));
		}
		return res;
	};
	var samples_default = samples;

	// src/displayable.js
	var rgb = converter_default('rgb');
	var displayable = color => {
		let c4 = rgb(color);
		return (
			c4 !== void 0 &&
			c4.r >= 0 &&
			c4.r <= 1 &&
			c4.g >= 0 &&
			c4.g <= 1 &&
			c4.b >= 0 &&
			c4.b <= 1
		);
	};
	var displayable_default = displayable;

	// src/clamp.js
	var rgb2 = converter_default('rgb');
	var fixup_rgb = color => {
		let c4 = rgb2(color);
		c4.r = Math.max(0, Math.min(c4.r, 1));
		c4.g = Math.max(0, Math.min(c4.g, 1));
		c4.b = Math.max(0, Math.min(c4.b, 1));
		return c4;
	};
	var clampRgb = color => {
		color = prepare_default(color);
		if (color === void 0 || displayable_default(color)) return color;
		let conv = converter_default(color.mode);
		return conv(fixup_rgb(color));
	};
	var clampChroma = (color, mode = 'lch') => {
		color = prepare_default(color);
		if (color === void 0 || displayable_default(color)) return color;
		let conv = converter_default(color.mode);
		color = converter_default(mode)(color);
		let clamped = { ...color, c: 0 };
		if (!displayable_default(clamped)) {
			return conv(fixup_rgb(clamped));
		}
		let start = 0;
		let end = color.c;
		let range = getMode(mode).ranges.c;
		let resolution = (range[1] - range[0]) / Math.pow(2, 13);
		let _last_good_c;
		while (end - start > resolution) {
			clamped.c = start + (end - start) * 0.5;
			if (displayable_default(clamped)) {
				_last_good_c = clamped.c;
				start = clamped.c;
			} else {
				end = clamped.c;
			}
		}
		return conv(
			displayable_default(clamped)
				? clamped
				: { ...clamped, c: _last_good_c }
		);
	};

	// src/nearest.js
	var nearest = (
		colors,
		metric = differenceEuclidean(),
		accessor = d => d
	) => {
		let arr = colors.map((c4, idx) => ({ color: accessor(c4), i: idx }));
		return (color, n3 = 1, τ = Infinity) => {
			if (isFinite(n3)) {
				n3 = Math.max(1, Math.min(n3, arr.length - 1));
			}
			arr.forEach(c4 => {
				c4.d = metric(color, c4.color);
			});
			return arr
				.sort((a, b) => a.d - b.d)
				.slice(0, n3)
				.filter(c4 => c4.d < τ)
				.map(c4 => colors[c4.i]);
		};
	};
	var nearest_default = nearest;

	// src/util/lerp.js
	var lerp2 = (a, b, t) =>
		a === void 0 || b === void 0 ? void 0 : a + t * (b - a);
	var lerp_default2 = lerp2;

	// src/filter.js
	var minzero = v => Math.max(v, 0);
	var clamp2 = v => Math.max(Math.min(v, 1), 0);
	var matrixSepia = amount => {
		let a = 1 - clamp2(amount);
		return [
			0.393 + 0.607 * a,
			0.769 - 0.769 * a,
			0.189 - 0.189 * a,
			0,
			0.349 - 0.349 * a,
			0.686 + 0.314 * a,
			0.168 - 0.168 * a,
			0,
			0.272 - 0.272 * a,
			0.534 - 0.534 * a,
			0.131 + 0.869 * a,
			0,
			0,
			0,
			0,
			1
		];
	};
	var matrixSaturate = sat => {
		let s2 = minzero(sat);
		return [
			0.213 + 0.787 * s2,
			0.715 - 0.715 * s2,
			0.072 - 0.072 * s2,
			0,
			0.213 - 0.213 * s2,
			0.715 + 0.285 * s2,
			0.072 - 0.072 * s2,
			0,
			0.213 - 0.213 * s2,
			0.715 - 0.715 * s2,
			0.072 + 0.928 * s2,
			0,
			0,
			0,
			0,
			1
		];
	};
	var matrixGrayscale = amount => {
		let a = 1 - clamp2(amount);
		return [
			0.2126 + 0.7874 * a,
			0.7152 - 0.7152 * a,
			0.0722 - 0.0722 * a,
			0,
			0.2126 - 0.2126 * a,
			0.7152 + 0.2848 * a,
			0.0722 - 0.0722 * a,
			0,
			0.2126 - 0.2126 * a,
			0.7152 - 0.7152 * a,
			0.0722 + 0.9278 * a,
			0,
			0,
			0,
			0,
			1
		];
	};
	var matrixHueRotate = degrees => {
		let rad = (Math.PI * degrees) / 180;
		let c4 = Math.cos(rad);
		let s2 = Math.sin(rad);
		return [
			0.213 + c4 * 0.787 - s2 * 0.213,
			0.715 - c4 * 0.715 - s2 * 0.715,
			0.072 - c4 * 0.072 + s2 * 0.928,
			0,
			0.213 - c4 * 0.213 + s2 * 0.143,
			0.715 + c4 * 0.285 + s2 * 0.14,
			0.072 - c4 * 0.072 - s2 * 0.283,
			0,
			0.213 - c4 * 0.213 - s2 * 0.787,
			0.715 - c4 * 0.715 + s2 * 0.715,
			0.072 + c4 * 0.928 + s2 * 0.072,
			0,
			0,
			0,
			0,
			1
		];
	};
	var matrix = (values, mode, preserve_mode = false) => {
		let conv = converter_default(mode);
		let channels = getMode(mode).channels;
		return color => {
			let c4 = conv(color);
			if (!c4) {
				return void 0;
			}
			let res = { mode };
			let ch;
			let count = channels.length;
			for (let i = 0; i < values.length; i++) {
				ch = channels[Math.floor(i / count)];
				if (c4[ch] === void 0) {
					continue;
				}
				res[ch] =
					(res[ch] || 0) + values[i] * (c4[channels[i % count]] || 0);
			}
			if (!preserve_mode) {
				return res;
			}
			let prep = prepare_default(color);
			return prep && res.mode !== prep.mode
				? converter_default(prep.mode)(res)
				: res;
		};
	};
	var filterBrightness = (amt = 1, mode = 'rgb') => {
		let a = minzero(amt);
		return mapper(mapTransferLinear(a), mode, true);
	};
	var filterContrast = (amt = 1, mode = 'rgb') => {
		let a = minzero(amt);
		return mapper(mapTransferLinear(a, (1 - a) / 2), mode, true);
	};
	var filterSepia = (amt = 1, mode = 'rgb') =>
		matrix(matrixSepia(amt), mode, true);
	var filterSaturate = (amt = 1, mode = 'rgb') =>
		matrix(matrixSaturate(amt), mode, true);
	var filterGrayscale = (amt = 1, mode = 'rgb') =>
		matrix(matrixGrayscale(amt), mode, true);
	var filterInvert = (amt = 1, mode = 'rgb') => {
		let a = clamp2(amt);
		return mapper(
			(v, ch) => (ch === 'alpha' ? v : lerp_default2(a, 1 - a, v)),
			mode,
			true
		);
	};
	var filterHueRotate = (deg = 0, mode = 'rgb') =>
		matrix(matrixHueRotate(deg), mode, true);

	// src/deficiency.js
	var rgb3 = converter_default('rgb');
	var PROT = [
		[1, 0, -0, 0, 1, 0, -0, -0, 1],
		[
			0.856167, 0.182038, -0.038205, 0.029342, 0.955115, 0.015544,
			-288e-5, -1563e-6, 1.004443
		],
		[
			0.734766, 0.334872, -0.069637, 0.05184, 0.919198, 0.028963,
			-4928e-6, -4209e-6, 1.009137
		],
		[
			0.630323, 0.465641, -0.095964, 0.069181, 0.890046, 0.040773,
			-6308e-6, -7724e-6, 1.014032
		],
		[
			0.539009, 0.579343, -0.118352, 0.082546, 0.866121, 0.051332,
			-7136e-6, -0.011959, 1.019095
		],
		[
			0.458064, 0.679578, -0.137642, 0.092785, 0.846313, 0.060902,
			-7494e-6, -0.016807, 1.024301
		],
		[
			0.38545, 0.769005, -0.154455, 0.100526, 0.829802, 0.069673,
			-7442e-6, -0.02219, 1.029632
		],
		[
			0.319627, 0.849633, -0.169261, 0.106241, 0.815969, 0.07779,
			-7025e-6, -0.028051, 1.035076
		],
		[
			0.259411, 0.923008, -0.18242, 0.110296, 0.80434, 0.085364, -6276e-6,
			-0.034346, 1.040622
		],
		[
			0.203876, 0.990338, -0.194214, 0.112975, 0.794542, 0.092483,
			-5222e-6, -0.041043, 1.046265
		],
		[
			0.152286, 1.052583, -0.204868, 0.114503, 0.786281, 0.099216,
			-3882e-6, -0.048116, 1.051998
		]
	];
	var DEUTER = [
		[1, 0, -0, 0, 1, 0, -0, -0, 1],
		[
			0.866435, 0.177704, -0.044139, 0.049567, 0.939063, 0.01137,
			-3453e-6, 7233e-6, 0.99622
		],
		[
			0.760729, 0.319078, -0.079807, 0.090568, 0.889315, 0.020117,
			-6027e-6, 0.013325, 0.992702
		],
		[
			0.675425, 0.43385, -0.109275, 0.125303, 0.847755, 0.026942, -795e-5,
			0.018572, 0.989378
		],
		[
			0.605511, 0.52856, -0.134071, 0.155318, 0.812366, 0.032316,
			-9376e-6, 0.023176, 0.9862
		],
		[
			0.547494, 0.607765, -0.155259, 0.181692, 0.781742, 0.036566,
			-0.01041, 0.027275, 0.983136
		],
		[
			0.498864, 0.674741, -0.173604, 0.205199, 0.754872, 0.039929,
			-0.011131, 0.030969, 0.980162
		],
		[
			0.457771, 0.731899, -0.18967, 0.226409, 0.731012, 0.042579,
			-0.011595, 0.034333, 0.977261
		],
		[
			0.422823, 0.781057, -0.203881, 0.245752, 0.709602, 0.044646,
			-0.011843, 0.037423, 0.974421
		],
		[
			0.392952, 0.82361, -0.216562, 0.263559, 0.69021, 0.046232, -0.01191,
			0.040281, 0.97163
		],
		[
			0.367322, 0.860646, -0.227968, 0.280085, 0.672501, 0.047413,
			-0.01182, 0.04294, 0.968881
		]
	];
	var TRIT = [
		[1, 0, -0, 0, 1, 0, -0, -0, 1],
		[
			0.92667, 0.092514, -0.019184, 0.021191, 0.964503, 0.014306, 8437e-6,
			0.054813, 0.93675
		],
		[
			0.89572, 0.13333, -0.02905, 0.029997, 0.9454, 0.024603, 0.013027,
			0.104707, 0.882266
		],
		[
			0.905871, 0.127791, -0.033662, 0.026856, 0.941251, 0.031893,
			0.01341, 0.148296, 0.838294
		],
		[
			0.948035, 0.08949, -0.037526, 0.014364, 0.946792, 0.038844,
			0.010853, 0.193991, 0.795156
		],
		[
			1.017277, 0.027029, -0.044306, -6113e-6, 0.958479, 0.047634,
			6379e-6, 0.248708, 0.744913
		],
		[
			1.104996, -0.046633, -0.058363, -0.032137, 0.971635, 0.060503,
			1336e-6, 0.317922, 0.680742
		],
		[
			1.193214, -0.109812, -0.083402, -0.058496, 0.97941, 0.079086,
			-2346e-6, 0.403492, 0.598854
		],
		[
			1.257728, -0.139648, -0.118081, -0.078003, 0.975409, 0.102594,
			-3316e-6, 0.501214, 0.502102
		],
		[
			1.278864, -0.125333, -0.153531, -0.084748, 0.957674, 0.127074,
			-989e-6, 0.601151, 0.399838
		],
		[
			1.255528, -0.076749, -0.178779, -0.078411, 0.930809, 0.147602,
			4733e-6, 0.691367, 0.3039
		]
	];
	var deficiency = (lut, t) => {
		let tt = Math.max(0, Math.min(1, t));
		let i = Math.round(tt / 0.1);
		let w = Math.round(tt % 0.1);
		let arr = lut[i];
		if (w > 0 && i < lut.length - 1) {
			let arr_2 = lut[i + 1];
			arr = arr.map((v, idx) => lerp_default(arr[idx], arr_2[idx], w));
		}
		return color => {
			let c4 = prepare_default(color);
			if (c4 === void 0) {
				return void 0;
			}
			let { r: r2, g, b } = rgb3(c4);
			let ret = {
				mode: 'rgb',
				r: arr[0] * r2 + arr[1] * g + arr[2] * b,
				g: arr[3] * r2 + arr[4] * g + arr[5] * b,
				b: arr[6] * r2 + arr[7] * g + arr[8] * b
			};
			if (c4.alpha !== void 0) {
				ret.alpha = c4.alpha;
			}
			return converter_default(c4.mode)(ret);
		};
	};
	var filterDeficiencyProt = (severity = 1) => deficiency(PROT, severity);
	var filterDeficiencyDeuter = (severity = 1) => deficiency(DEUTER, severity);
	var filterDeficiencyTrit = (severity = 1) => deficiency(TRIT, severity);

	// src/easing/smoothstep.js
	var smoothstep = t => t * t * (3 - 2 * t);
	var smoothstep_default = smoothstep;

	// src/easing/smootherstep.js
	var smootherstep = t => t * t * t * (t * (t * 6 - 15) + 10);
	var smootherstep_default = smootherstep;

	// src/easing/inOutSine.js
	var inOutSine = t => (1 - Math.cos(t * Math.PI)) / 2;
	var inOutSine_default = inOutSine;

	// src/wcag.js
	function luminance(color) {
		let c4 = converter_default('lrgb')(color);
		return 0.2126 * c4.r + 0.7152 * c4.g + 0.0722 * c4.b;
	}
	function contrast(a, b) {
		let L1 = luminance(a);
		let L2 = luminance(b);
		return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
	}

	// src/index.js
	var a98 = useMode(definition_default2);
	var cubehelix = useMode(definition_default3);
	var dlab = useMode(definition_default4);
	var dlch = useMode(definition_default5);
	var hsi = useMode(definition_default6);
	var hsl = useMode(definition_default7);
	var hsv = useMode(definition_default8);
	var hwb2 = useMode(definition_default9);
	var jab = useMode(definition_default10);
	var jch = useMode(definition_default11);
	var lab2 = useMode(definition_default12);
	var lab65 = useMode(definition_default13);
	var lch2 = useMode(definition_default14);
	var lch65 = useMode(definition_default15);
	var lchuv = useMode(definition_default16);
	var lrgb = useMode(definition_default17);
	var luv = useMode(definition_default18);
	var okhsl = useMode(modeOkhsl_default);
	var okhsv = useMode(modeOkhsv_default);
	var oklab = useMode(definition_default19);
	var oklch = useMode(definition_default20);
	var p3 = useMode(definition_default21);
	var prophoto = useMode(definition_default22);
	var rec2020 = useMode(definition_default23);
	var rgb4 = useMode(definition_default);
	var xyz50 = useMode(definition_default24);
	var xyz65 = useMode(definition_default25);
	var yiq = useMode(definition_default26);
	return __toCommonJS(src_exports);
})();
