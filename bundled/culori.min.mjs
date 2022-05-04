var Bo = (e, t) => {
		if (typeof e == 'number') {
			if (t === 3)
				return {
					mode: 'rgb',
					r: (((e >> 8) & 15) | ((e >> 4) & 240)) / 255,
					g: (((e >> 4) & 15) | (e & 240)) / 255,
					b: ((e & 15) | ((e << 4) & 240)) / 255
				};
			if (t === 4)
				return {
					mode: 'rgb',
					r: (((e >> 12) & 15) | ((e >> 8) & 240)) / 255,
					g: (((e >> 8) & 15) | ((e >> 4) & 240)) / 255,
					b: (((e >> 4) & 15) | (e & 240)) / 255,
					alpha: ((e & 15) | ((e << 4) & 240)) / 255
				};
			if (t === 6)
				return {
					mode: 'rgb',
					r: ((e >> 16) & 255) / 255,
					g: ((e >> 8) & 255) / 255,
					b: (e & 255) / 255
				};
			if (t === 8)
				return {
					mode: 'rgb',
					r: ((e >> 24) & 255) / 255,
					g: ((e >> 16) & 255) / 255,
					b: ((e >> 8) & 255) / 255,
					alpha: (e & 255) / 255
				};
		}
	},
	dt = Bo;
var Zo = {
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
	},
	Bt = Zo;
var Go = e => dt(Bt[e.toLowerCase()], 6),
	Zt = Go;
var Fo = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,
	Wo = e => {
		let t;
		return (t = e.match(Fo)) ? dt(parseInt(t[1], 16), t[1].length) : void 0;
	},
	Gt = Wo;
var C = '([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)',
	ee = `(?:${C}|none)`,
	ce = `${C}%`,
	A = `(?:${C}%|none)`,
	je = `(?:${C}%|${C})`,
	G = `(?:${C}%|${C}|none)`,
	Gr = `(?:${C}(deg|grad|rad|turn)|${C})`,
	Le = `(?:${C}(deg|grad|rad|turn)|${C}|none)`,
	ie = '\\s*,\\s*';
var $ = '\\s+',
	Ft = new RegExp('^' + G + '$');
var Uo = new RegExp(
		`^rgba?\\(\\s*${C}${ie}${C}${ie}${C}\\s*(?:,\\s*${je}\\s*)?\\)$`
	),
	Ko = new RegExp(
		`^rgba?\\(\\s*${ce}${ie}${ce}${ie}${ce}\\s*(?:,\\s*${je}\\s*)?\\)$`
	),
	Qo = new RegExp(
		`^rgba?\\(\\s*${ee}${$}${ee}${$}${ee}\\s*(?:\\/\\s*${G}\\s*)?\\)$`
	),
	Vo = new RegExp(
		`^rgba?\\(\\s*${A}${$}${A}${$}${A}\\s*(?:\\/\\s*${G}\\s*)?\\)$`
	),
	e0 = e => {
		let t = { mode: 'rgb' },
			r;
		if ((r = e.match(Uo) || e.match(Qo)))
			r[1] !== void 0 && (t.r = r[1] / 255),
				r[2] !== void 0 && (t.g = r[2] / 255),
				r[3] !== void 0 && (t.b = r[3] / 255);
		else if ((r = e.match(Ko) || e.match(Vo)))
			r[1] !== void 0 && (t.r = r[1] / 100),
				r[2] !== void 0 && (t.g = r[2] / 100),
				r[3] !== void 0 && (t.b = r[3] / 100);
		else return;
		return (
			r[4] !== void 0
				? (t.alpha = r[4] / 100)
				: r[5] !== void 0 && (t.alpha = +r[5]),
			t
		);
	},
	Wt = e0;
var t0 = e =>
		e === 'transparent'
			? { mode: 'rgb', r: 0, g: 0, b: 0, alpha: 0 }
			: void 0,
	Ut = t0;
var r0 = (e, t, r) => e + r * (t - e),
	Ne = r0;
var o0 = e => {
		let t = [];
		for (let r = 0; r < e.length - 1; r++) {
			let o = e[r],
				n = e[r + 1];
			o === void 0 && n === void 0
				? t.push(void 0)
				: o !== void 0 && n !== void 0
				? t.push([o, n])
				: t.push(o !== void 0 ? [o, o] : [n, n]);
		}
		return t;
	},
	Kt = e => t => {
		let r = o0(t);
		return o => {
			let n = o * r.length,
				a = o >= 1 ? r.length - 1 : Math.max(Math.floor(n), 0),
				f = r[a];
			return f === void 0 ? void 0 : e(f[0], f[1], n - a);
		};
	};
var p = Kt(Ne);
var M = e => {
	let t = !1,
		r = e.map(o => (o !== void 0 ? ((t = !0), o) : 1));
	return t ? r : e;
};
var n0 = {
		mode: 'rgb',
		channels: ['r', 'g', 'b', 'alpha'],
		parse: [Gt, Wt, Zt, Ut, 'srgb'],
		serialize: 'srgb',
		interpolate: { r: p, g: p, b: p, alpha: { use: p, fixup: M } }
	},
	F = n0;
var Qt = e => Math.pow(Math.abs(e), 2.19921875) * Math.sign(e),
	a0 = e => {
		let t = Qt(e.r),
			r = Qt(e.g),
			o = Qt(e.b),
			n = {
				mode: 'xyz65',
				x:
					0.5766690429101305 * t +
					0.1855582379065463 * r +
					0.1882286462349947 * o,
				y:
					0.297344975250536 * t +
					0.6273635662554661 * r +
					0.0752914584939979 * o,
				z:
					0.0270313613864123 * t +
					0.0706888525358272 * r +
					0.9913375368376386 * o
			};
		return e.alpha !== void 0 && (n.alpha = e.alpha), n;
	},
	ut = a0;
var Vt = e => Math.pow(Math.abs(e), 0.4547069271758437) * Math.sign(e),
	f0 = ({ x: e, y: t, z: r, alpha: o }) => {
		let n = {
			mode: 'a98',
			r: Vt(
				e * 2.0415879038107465 -
					t * 0.5650069742788597 -
					0.3447313507783297 * r
			),
			g: Vt(
				e * -0.9692436362808798 +
					t * 1.8759675015077206 +
					0.0415550574071756 * r
			),
			b: Vt(
				e * 0.0134442806320312 -
					t * 0.1183623922310184 +
					1.0151749943912058 * r
			)
		};
		return o !== void 0 && (n.alpha = o), n;
	},
	ct = f0;
var er = e => {
		let t = Math.abs(e);
		return t < 0.04045
			? e / 12.92
			: (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
	},
	l0 = ({ r: e, g: t, b: r, alpha: o }) => {
		let n = { mode: 'lrgb', r: er(e), g: er(t), b: er(r) };
		return o !== void 0 && (n.alpha = o), n;
	},
	E = l0;
var i0 = e => {
		let { r: t, g: r, b: o, alpha: n } = E(e),
			a = {
				mode: 'xyz65',
				x:
					0.4123907992659593 * t +
					0.357584339383878 * r +
					0.1804807884018343 * o,
				y:
					0.2126390058715102 * t +
					0.715168678767756 * r +
					0.0721923153607337 * o,
				z:
					0.0193308187155918 * t +
					0.119194779794626 * r +
					0.9505321522496607 * o
			};
		return n !== void 0 && (a.alpha = n), a;
	},
	j = i0;
var tr = e => {
		let t = Math.abs(e);
		return t > 0.0031308
			? (Math.sign(e) || 1) *
					(1.055 * Math.pow(t, 0.4166666666666667) - 0.055)
			: e * 12.92;
	},
	p0 = ({ r: e, g: t, b: r, alpha: o }, n = 'rgb') => {
		let a = { mode: n, r: tr(e), g: tr(t), b: tr(r) };
		return o !== void 0 && (a.alpha = o), a;
	},
	N = p0;
var m0 = ({ x: e, y: t, z: r, alpha: o }) => {
		let n = N({
			r:
				e * 3.2409699419045226 -
				t * 1.537383177570094 -
				0.4986107602930034 * r,
			g:
				e * -0.9692436362808796 +
				t * 1.8759675015077204 +
				0.0415550574071756 * r,
			b:
				e * 0.0556300796969936 -
				t * 0.2039769588889765 +
				1.0569715142428784 * r
		});
		return o !== void 0 && (n.alpha = o), n;
	},
	Y = m0;
var s0 = {
		...F,
		mode: 'a98',
		parse: ['a98-rgb'],
		serialize: 'a98-rgb',
		fromMode: { rgb: e => ct(j(e)), xyz65: ct },
		toMode: { rgb: e => Y(ut(e)), xyz65: ut }
	},
	Fr = s0;
var d0 = e => ((e = e % 360) < 0 ? e + 360 : e),
	T = d0;
var ht = (e, t) =>
		e
			.map((r, o, n) => {
				if (r === void 0) return r;
				let a = T(r);
				return o === 0 || e[o - 1] === void 0 ? a : t(a - T(n[o - 1]));
			})
			.reduce(
				(r, o) =>
					!r.length || o === void 0 || r[r.length - 1] === void 0
						? (r.push(o), r)
						: (r.push(o + r[r.length - 1]), r),
				[]
			),
	w = e => ht(e, t => (Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t))),
	u0 = e =>
		ht(e, t =>
			Math.abs(t) >= 180 || t === 0 ? t : t - 360 * Math.sign(t)
		),
	c0 = e => ht(e, t => (t >= 0 ? t : t + 360)),
	h0 = e => ht(e, t => (t <= 0 ? t : t - 360));
var L = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0],
	Wr = Math.PI / 180,
	Ur = 180 / Math.PI;
var Kr = L[3] * L[4],
	Qr = L[1] * L[4],
	Vr = L[1] * L[2] - L[0] * L[3],
	b0 = ({ r: e, g: t, b: r, alpha: o }) => {
		let n = (Vr * r + e * Kr - t * Qr) / (Vr + Kr - Qr),
			a = r - n,
			f = (L[4] * (t - n) - L[2] * a) / L[3],
			l = {
				mode: 'cubehelix',
				l: n,
				s:
					n === 0 || n === 1
						? void 0
						: Math.sqrt(a * a + f * f) / (L[4] * n * (1 - n))
			};
		return (
			l.s && (l.h = Math.atan2(f, a) * Ur - 120),
			o !== void 0 && (l.alpha = o),
			l
		);
	},
	rr = b0;
var x0 = ({ h: e, s: t, l: r, alpha: o }) => {
		let n = { mode: 'rgb' };
		e = (e === void 0 ? 0 : e + 120) * Wr;
		let a = t === void 0 ? 0 : t * r * (1 - r),
			f = Math.cos(e),
			l = Math.sin(e);
		return (
			(n.r = r + a * (L[0] * f + L[1] * l)),
			(n.g = r + a * (L[2] * f + L[3] * l)),
			(n.b = r + a * (L[4] * f + L[5] * l)),
			o !== void 0 && (n.alpha = o),
			n
		);
	},
	or = x0;
function g0(e) {
	let t = e.match(/^color\(\s*([a-z0-9-]+)\s*(.*?)\s*\)$/);
	if (!t) return;
	let r = ar[t[1]];
	if (!r) return;
	let o = { mode: r },
		[n, a] = t[2].split(/\s*\/\s*/),
		f;
	if (a !== void 0) {
		if (((f = a.match(Ft)), !f)) return;
		f[1] !== void 0
			? (o.alpha = f[1] / 100)
			: f[2] !== void 0 && (o.alpha = +f[2]);
	}
	let l = n.split(/\s+/),
		i = k(r).channels;
	for (let m = 0, s; m < i.length; m++)
		if (((s = i[m]), s !== 'alpha')) {
			if (m >= l.length || !l[m]) {
				o[s] = 0;
				continue;
			}
			if (!(f = l[m].match(Ft))) return;
			f[1] !== void 0
				? (o[s] = f[1] / 100)
				: f[2] !== void 0 && (o[s] = +f[2]);
		}
	return o;
}
var M0 = e => {
		if (typeof e != 'string') return;
		let t,
			r = 0,
			o = he.length;
		for (; r < o; ) if ((t = he[r++](e)) !== void 0) return t;
		return g0(e);
	},
	nr = M0;
var v0 = (e, t) =>
		e === void 0
			? void 0
			: typeof e != 'object'
			? nr(e)
			: e.mode !== void 0
			? e
			: t
			? { ...e, mode: t }
			: void 0,
	I = v0;
var T0 =
		(e = 'rgb') =>
		t =>
			(t = I(t, e)) !== void 0
				? t.mode === e
					? t
					: W[t.mode][e]
					? W[t.mode][e](t)
					: e === 'rgb'
					? W[t.mode].rgb(t)
					: W.rgb[e](W[t.mode].rgb(t))
				: void 0,
	b = T0;
var W = {},
	eo = {},
	he = [],
	ar = {},
	y0 = e => e,
	v = e => (
		(W[e.mode] = { ...W[e.mode], ...e.toMode }),
		Object.keys(e.fromMode || {}).forEach(t => {
			W[t] || (W[t] = {}), (W[t][e.mode] = e.fromMode[t]);
		}),
		e.ranges || (e.ranges = {}),
		e.difference || (e.difference = {}),
		e.channels.forEach(t => {
			if (
				(e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]),
				!e.interpolate[t])
			)
				throw new Error(`Missing interpolator for: ${t}`);
			typeof e.interpolate[t] == 'function' &&
				(e.interpolate[t] = { use: e.interpolate[t] }),
				e.interpolate[t].fixup || (e.interpolate[t].fixup = y0);
		}),
		(eo[e.mode] = e),
		(e.parse || []).forEach(t => {
			typeof t == 'function'
				? to(t)
				: typeof t == 'string' && (ar[t] = e.mode);
		}),
		b(e.mode)
	),
	k = e => eo[e],
	to = e => {
		he.indexOf(e) < 0 && he.push(e);
	},
	z0 = e => {
		let t = he.indexOf(e);
		t > 0 && he.splice(t, 1);
	};
var te = (e, t) => {
		if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
		let r = T(e.h),
			o = T(t.h),
			n = Math.sin((((o - r + 360) / 2) * Math.PI) / 180);
		return 2 * Math.sqrt(e.s * t.s) * n;
	},
	fr = (e, t) => {
		if (e.h === void 0 || t.h === void 0) return 0;
		let r = T(e.h),
			o = T(t.h);
		return Math.abs(o - r) > 180 ? r - (o - 360 * Math.sign(o - r)) : o - r;
	},
	re = (e, t) => {
		if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
		let r = T(e.h),
			o = T(t.h),
			n = Math.sin((((o - r + 360) / 2) * Math.PI) / 180);
		return 2 * Math.sqrt(e.c * t.c) * n;
	},
	Ye = (e = 'rgb', t = [1, 1, 1, 0]) => {
		let r = k(e),
			o = r.channels,
			n = r.difference,
			a = b(e);
		return (f, l) => {
			let i = a(f),
				m = a(l);
			return Math.sqrt(
				o.reduce((s, u, h) => {
					let d = n[u] ? n[u](i, m) : i[u] - m[u];
					return s + (t[h] || 0) * Math.pow(isNaN(d) ? 0 : d, 2);
				}, 0)
			);
		};
	},
	k0 = () => Ye('lab65'),
	L0 = (e = 1, t = 0.045, r = 0.015) => {
		let o = b('lab65');
		return (n, a) => {
			let f = o(n),
				l = o(a),
				i = f.l,
				m = f.a,
				s = f.b,
				u = Math.sqrt(m * m + s * s),
				h = l.l,
				d = l.a,
				c = l.b,
				x = Math.sqrt(d * d + c * c),
				g = Math.pow(i - h, 2),
				z = Math.pow(u - x, 2),
				R = Math.pow(m - d, 2) + Math.pow(s - c, 2) - z;
			return Math.sqrt(
				g / Math.pow(e, 2) +
					z / Math.pow(1 + t * u, 2) +
					R / Math.pow(1 + r * u, 2)
			);
		};
	},
	R0 = (e = 1, t = 1, r = 1) => {
		let o = b('lab65');
		return (n, a) => {
			let f = o(n),
				l = o(a),
				i = f.l,
				m = f.a,
				s = f.b,
				u = Math.sqrt(m * m + s * s),
				h = l.l,
				d = l.a,
				c = l.b,
				x = Math.sqrt(d * d + c * c),
				g = (u + x) / 2,
				z =
					0.5 *
					(1 -
						Math.sqrt(
							Math.pow(g, 7) / (Math.pow(g, 7) + Math.pow(25, 7))
						)),
				R = m * (1 + z),
				_ = d * (1 + z),
				X = Math.sqrt(R * R + s * s),
				H = Math.sqrt(_ * _ + c * c),
				P = Math.abs(R) + Math.abs(s) === 0 ? 0 : Math.atan2(s, R);
			P += (P < 0) * 2 * Math.PI;
			let O = Math.abs(_) + Math.abs(c) === 0 ? 0 : Math.atan2(c, _);
			O += (O < 0) * 2 * Math.PI;
			let se = h - i,
				le = H - X,
				Z = X * H === 0 ? 0 : O - P;
			(Z -= (Z > Math.PI) * 2 * Math.PI),
				(Z += (Z < -Math.PI) * 2 * Math.PI);
			let V = 2 * Math.sqrt(X * H) * Math.sin(Z / 2),
				de = (i + h) / 2,
				ue = (X + H) / 2,
				q;
			X * H === 0
				? (q = P + O)
				: ((q = (P + O) / 2),
				  (q -= (Math.abs(P - O) > Math.PI) * Math.PI),
				  (q += (q < 0) * 2 * Math.PI));
			let pt = Math.pow(de - 50, 2),
				mt =
					1 -
					0.17 * Math.cos(q - Math.PI / 6) +
					0.24 * Math.cos(2 * q) +
					0.32 * Math.cos(3 * q + Math.PI / 30) -
					0.2 * Math.cos(4 * q - (63 * Math.PI) / 180),
				De = 1 + (0.015 * pt) / Math.sqrt(20 + pt),
				Je = 1 + 0.045 * ue,
				ke = 1 + 0.015 * ue * mt,
				jt =
					((30 * Math.PI) / 180) *
					Math.exp(
						-1 * Math.pow(((180 / Math.PI) * q - 275) / 25, 2)
					),
				st =
					2 *
					Math.sqrt(
						Math.pow(ue, 7) / (Math.pow(ue, 7) + Math.pow(25, 7))
					),
				Ee = -1 * Math.sin(2 * jt) * st;
			return Math.sqrt(
				Math.pow(se / (e * De), 2) +
					Math.pow(le / (t * Je), 2) +
					Math.pow(V / (r * ke), 2) +
					(((Ee * le) / (t * Je)) * V) / (r * ke)
			);
		};
	},
	_0 = (e = 1, t = 1) => {
		let r = b('lab65');
		return (o, n) => {
			let a = r(o),
				f = a.l,
				l = a.a,
				i = a.b,
				m = Math.sqrt(l * l + i * i),
				s = Math.atan2(i, l);
			s = s + 2 * Math.PI * (s < 0);
			let u = r(n),
				h = u.l,
				d = u.a,
				c = u.b,
				x = Math.sqrt(d * d + c * c),
				g = Math.pow(f - h, 2),
				z = Math.pow(m - x, 2),
				R = Math.pow(l - d, 2) + Math.pow(i - c, 2) - z,
				_ = Math.sqrt(Math.pow(m, 4) / (Math.pow(m, 4) + 1900)),
				X =
					s >= (164 / 180) * Math.PI && s <= (345 / 180) * Math.PI
						? 0.56 +
						  Math.abs(0.2 * Math.cos(s + (168 / 180) * Math.PI))
						: 0.36 +
						  Math.abs(0.4 * Math.cos(s + (35 / 180) * Math.PI)),
				H = f < 16 ? 0.511 : (0.040975 * f) / (1 + 0.01765 * f),
				P = (0.0638 * m) / (1 + 0.0131 * m) + 0.638,
				O = P * (_ * X + 1 - _);
			return Math.sqrt(
				g / Math.pow(e * H, 2) +
					z / Math.pow(t * P, 2) +
					R / Math.pow(O, 2)
			);
		};
	},
	w0 = () => {
		let e = b('lab65');
		return (t, r) => {
			let o = e(t),
				n = e(r),
				a = o.l - n.l,
				f = o.a - n.a,
				l = o.b - n.b;
			return Math.abs(a) + Math.sqrt(f * f + l * l);
		};
	},
	S0 = () => Ye('yiq', [0.5053, 0.299, 0.1957]);
var S = e => {
		let t = e.reduce(
			(r, o) => {
				if (o !== void 0) {
					let n = (o * Math.PI) / 180;
					(r.sin += Math.sin(n)), (r.cos += Math.cos(n));
				}
				return r;
			},
			{ sin: 0, cos: 0 }
		);
		return (Math.atan2(t.sin, t.cos) * 180) / Math.PI;
	},
	ro = e => {
		let t = e.filter(r => r !== void 0);
		return t.length ? t.reduce((r, o) => r + o, 0) / t.length : void 0;
	},
	lr = e => typeof e == 'function';
function $0(e, t = 'rgb', r) {
	let o = k(t),
		n = e.map(b(t));
	return o.channels.reduce(
		(a, f) => {
			let l = n.map(i => i[f]).filter(i => i !== void 0);
			if (l.length) {
				let i;
				lr(r)
					? (i = r)
					: r && lr(r[f])
					? (i = r[f])
					: o.average && lr(o.average[f])
					? (i = o.average[f])
					: (i = ro),
					(a[f] = i(l, f));
			}
			return a;
		},
		{ mode: t }
	);
}
var X0 = {
		mode: 'cubehelix',
		channels: ['h', 's', 'l', 'alpha'],
		parse: ['--cubehelix'],
		serialize: '--cubehelix',
		ranges: { h: [0, 360], s: [0, 4.614], l: [0, 1] },
		fromMode: { rgb: rr },
		toMode: { rgb: or },
		interpolate: {
			h: { use: p, fixup: w },
			s: p,
			l: p,
			alpha: { use: p, fixup: M }
		},
		difference: { h: te },
		average: { h: S }
	},
	oo = X0;
var H0 = ({ l: e, a: t, b: r, alpha: o }, n = 'lch') => {
		let a = Math.sqrt(t * t + r * r),
			f = { mode: n, l: e, c: a };
		return (
			a && (f.h = T((Math.atan2(r, t) * 180) / Math.PI)),
			o !== void 0 && (f.alpha = o),
			f
		);
	},
	D = H0;
var P0 = ({ l: e, c: t, h: r, alpha: o }, n = 'lab') => {
		let a = {
			mode: n,
			l: e,
			a: t ? t * Math.cos((r / 180) * Math.PI) : 0,
			b: t ? t * Math.sin((r / 180) * Math.PI) : 0
		};
		return o !== void 0 && (a.alpha = o), a;
	},
	J = P0;
var bt = Math.pow(29, 3) / Math.pow(3, 3),
	xt = Math.pow(6, 3) / Math.pow(29, 3);
var y = { X: 0.9642956764295677, Y: 1, Z: 0.8251046025104602 },
	pe = { X: 0.3127 / 0.329, Y: 1, Z: (1 - 0.3127 - 0.329) / 0.329 },
	Ul = Math.pow(29, 3) / Math.pow(3, 3),
	Kl = Math.pow(6, 3) / Math.pow(29, 3);
var ir = e => (Math.pow(e, 3) > xt ? Math.pow(e, 3) : (116 * e - 16) / bt),
	C0 = ({ l: e, a: t, b: r, alpha: o }) => {
		let n = (e + 16) / 116,
			a = t / 500 + n,
			f = n - r / 200,
			l = {
				mode: 'xyz65',
				x: ir(a) * pe.X,
				y: ir(n) * pe.Y,
				z: ir(f) * pe.Z
			};
		return o !== void 0 && (l.alpha = o), l;
	},
	Be = C0;
var O0 = e => Y(Be(e)),
	oe = O0;
var pr = e => (e > xt ? Math.cbrt(e) : (bt * e + 16) / 116),
	q0 = ({ x: e, y: t, z: r, alpha: o }) => {
		let n = pr(e / pe.X),
			a = pr(t / pe.Y),
			f = pr(r / pe.Z),
			l = {
				mode: 'lab65',
				l: 116 * a - 16,
				a: 500 * (n - a),
				b: 200 * (a - f)
			};
		return o !== void 0 && (l.alpha = o), l;
	},
	Ze = q0;
var A0 = e => {
		let t = Ze(j(e));
		return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
	},
	ne = A0;
var be = 0.14444444444444443 * Math.PI,
	Re = Math.cos(be),
	_e = Math.sin(be),
	gt = 100 / Math.log(139 / 100);
var I0 = ({ l: e, c: t, h: r, alpha: o }) => {
		let n = { mode: 'lab65', l: (Math.exp((e * 1) / gt) - 1) / 0.0039 };
		if (r === void 0) n.a = n.b = 0;
		else {
			let a = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075,
				f = a * Math.cos((r / 180) * Math.PI - be),
				l = a * Math.sin((r / 180) * Math.PI - be);
			(n.a = f * Re - (l / 0.83) * _e), (n.b = f * _e + (l / 0.83) * Re);
		}
		return o !== void 0 && (n.alpha = o), n;
	},
	we = I0;
var D0 = ({ l: e, a: t, b: r, alpha: o }) => {
		let n = t * Re + r * _e,
			a = 0.83 * (r * Re - t * _e),
			f = Math.sqrt(n * n + a * a),
			l = {
				mode: 'dlch',
				l: (gt / 1) * Math.log(1 + 0.0039 * e),
				c: Math.log(1 + 0.075 * f) / (0.0435 * 1 * 1)
			};
		return (
			l.c && (l.h = T(((Math.atan2(a, n) + be) / Math.PI) * 180)),
			o !== void 0 && (l.alpha = o),
			l
		);
	},
	Se = D0;
var no = e => we(D(e, 'dlch')),
	ao = e => J(Se(e), 'dlab'),
	J0 = {
		mode: 'dlab',
		parse: ['--din99o-lab'],
		serialize: '--din99o-lab',
		toMode: { lab65: no, rgb: e => oe(no(e)) },
		fromMode: { lab65: ao, rgb: e => ao(ne(e)) },
		channels: ['l', 'a', 'b', 'alpha'],
		ranges: { l: [0, 100], a: [-40.09, 45.501], b: [-40.469, 44.344] },
		interpolate: { l: p, a: p, b: p, alpha: { use: p, fixup: M } }
	},
	fo = J0;
var E0 = {
		mode: 'dlch',
		parse: ['--din99o-lch'],
		serialize: '--din99o-lch',
		toMode: { lab65: we, dlab: e => J(e, 'dlab'), rgb: e => oe(we(e)) },
		fromMode: { lab65: Se, dlab: e => D(e, 'dlch'), rgb: e => Se(ne(e)) },
		channels: ['l', 'c', 'h', 'alpha'],
		ranges: { l: [0, 100], c: [0, 51.484], h: [0, 360] },
		interpolate: {
			l: p,
			c: p,
			h: { use: p, fixup: w },
			alpha: { use: p, fixup: M }
		},
		difference: { h: re },
		average: { h: S }
	},
	lo = E0;
function Mt({ h: e, s: t, i: r, alpha: o }) {
	e = T(e);
	let n = Math.abs(((e / 60) % 2) - 1),
		a;
	switch (Math.floor(e / 60)) {
		case 0:
			a = {
				r: r * (1 + t * (3 / (2 - n) - 1)),
				g: r * (1 + t * ((3 * (1 - n)) / (2 - n) - 1)),
				b: r * (1 - t)
			};
			break;
		case 1:
			a = {
				r: r * (1 + t * ((3 * (1 - n)) / (2 - n) - 1)),
				g: r * (1 + t * (3 / (2 - n) - 1)),
				b: r * (1 - t)
			};
			break;
		case 2:
			a = {
				r: r * (1 - t),
				g: r * (1 + t * (3 / (2 - n) - 1)),
				b: r * (1 + t * ((3 * (1 - n)) / (2 - n) - 1))
			};
			break;
		case 3:
			a = {
				r: r * (1 - t),
				g: r * (1 + t * ((3 * (1 - n)) / (2 - n) - 1)),
				b: r * (1 + t * (3 / (2 - n) - 1))
			};
			break;
		case 4:
			a = {
				r: r * (1 + t * ((3 * (1 - n)) / (2 - n) - 1)),
				g: r * (1 - t),
				b: r * (1 + t * (3 / (2 - n) - 1))
			};
			break;
		case 5:
			a = {
				r: r * (1 + t * (3 / (2 - n) - 1)),
				g: r * (1 - t),
				b: r * (1 + t * ((3 * (1 - n)) / (2 - n) - 1))
			};
			break;
		default:
			a = { r: r * (1 - t), g: r * (1 - t), b: r * (1 - t) };
	}
	return (a.mode = 'rgb'), o !== void 0 && (a.alpha = o), a;
}
function vt({ r: e, g: t, b: r, alpha: o }) {
	let n = Math.max(e, t, r),
		a = Math.min(e, t, r),
		f = {
			mode: 'hsi',
			s: e + t + r === 0 ? 0 : 1 - (3 * a) / (e + t + r),
			i: (e + t + r) / 3
		};
	return (
		n - a !== 0 &&
			(f.h =
				(n === e
					? (t - r) / (n - a) + (t < r) * 6
					: n === t
					? (r - e) / (n - a) + 2
					: (e - t) / (n - a) + 4) * 60),
		o !== void 0 && (f.alpha = o),
		f
	);
}
var j0 = {
		mode: 'hsi',
		toMode: { rgb: Mt },
		parse: ['--hsi'],
		serialize: '--hsi',
		fromMode: { rgb: vt },
		channels: ['h', 's', 'i', 'alpha'],
		ranges: { h: [0, 360] },
		interpolate: {
			h: { use: p, fixup: w },
			s: p,
			i: p,
			alpha: { use: p, fixup: M }
		},
		difference: { h: te },
		average: { h: S }
	},
	io = j0;
function Tt({ h: e, s: t, l: r, alpha: o }) {
	e = T(e);
	let n = r + t * (r < 0.5 ? r : 1 - r),
		a = n - (n - r) * 2 * Math.abs(((e / 60) % 2) - 1),
		f;
	switch (Math.floor(e / 60)) {
		case 0:
			f = { r: n, g: a, b: 2 * r - n };
			break;
		case 1:
			f = { r: a, g: n, b: 2 * r - n };
			break;
		case 2:
			f = { r: 2 * r - n, g: n, b: a };
			break;
		case 3:
			f = { r: 2 * r - n, g: a, b: n };
			break;
		case 4:
			f = { r: a, g: 2 * r - n, b: n };
			break;
		case 5:
			f = { r: n, g: 2 * r - n, b: a };
			break;
		default:
			f = { r: 2 * r - n, g: 2 * r - n, b: 2 * r - n };
	}
	return (f.mode = 'rgb'), o !== void 0 && (f.alpha = o), f;
}
function yt({ r: e, g: t, b: r, alpha: o }) {
	let n = Math.max(e, t, r),
		a = Math.min(e, t, r),
		f = {
			mode: 'hsl',
			s: n === a ? 0 : (n - a) / (1 - Math.abs(n + a - 1)),
			l: 0.5 * (n + a)
		};
	return (
		n - a !== 0 &&
			(f.h =
				(n === e
					? (t - r) / (n - a) + (t < r) * 6
					: n === t
					? (r - e) / (n - a) + 2
					: (e - t) / (n - a) + 4) * 60),
		o !== void 0 && (f.alpha = o),
		f
	);
}
var N0 = (e, t) => {
		switch (t) {
			case 'deg':
				return +e;
			case 'rad':
				return (e / Math.PI) * 180;
			case 'grad':
				return (e / 10) * 9;
			case 'turn':
				return e * 360;
		}
	},
	$e = N0;
var Y0 = new RegExp(
		`^hsla?\\(\\s*${Gr}${ie}${ce}${ie}${ce}\\s*(?:,\\s*${je}\\s*)?\\)$`
	),
	B0 = new RegExp(
		`^hsla?\\(\\s*${Le}${$}${A}${$}${A}\\s*(?:\\/\\s*${G}\\s*)?\\)$`
	),
	Z0 = e => {
		let t = e.match(Y0) || e.match(B0);
		if (!t) return;
		let r = { mode: 'hsl' };
		return (
			t[3] !== void 0
				? (r.h = +t[3])
				: t[1] !== void 0 && t[2] !== void 0 && (r.h = $e(t[1], t[2])),
			t[4] !== void 0 && (r.s = Math.min(Math.max(0, t[4] / 100), 1)),
			t[5] !== void 0 && (r.l = Math.min(Math.max(0, t[5] / 100), 1)),
			t[6] !== void 0
				? (r.alpha = t[6] / 100)
				: t[7] !== void 0 && (r.alpha = +t[7]),
			r
		);
	},
	sr = Z0;
var G0 = {
		mode: 'hsl',
		toMode: { rgb: Tt },
		fromMode: { rgb: yt },
		channels: ['h', 's', 'l', 'alpha'],
		ranges: { h: [0, 360] },
		parse: [sr],
		serialize: e =>
			`hsl(${e.h || 0} ${e.s !== void 0 ? e.s * 100 + '%' : 'none'} ${
				e.l !== void 0 ? e.l * 100 + '%' : 'none'
			}${e.alpha < 1 ? ` / ${e.alpha}` : ''})`,
		interpolate: {
			h: { use: p, fixup: w },
			s: p,
			l: p,
			alpha: { use: p, fixup: M }
		},
		difference: { h: te },
		average: { h: S }
	},
	zt = G0;
function Xe({ h: e, s: t, v: r, alpha: o }) {
	e = T(e);
	let n = Math.abs(((e / 60) % 2) - 1),
		a;
	switch (Math.floor(e / 60)) {
		case 0:
			a = { r, g: r * (1 - t * n), b: r * (1 - t) };
			break;
		case 1:
			a = { r: r * (1 - t * n), g: r, b: r * (1 - t) };
			break;
		case 2:
			a = { r: r * (1 - t), g: r, b: r * (1 - t * n) };
			break;
		case 3:
			a = { r: r * (1 - t), g: r * (1 - t * n), b: r };
			break;
		case 4:
			a = { r: r * (1 - t * n), g: r * (1 - t), b: r };
			break;
		case 5:
			a = { r, g: r * (1 - t), b: r * (1 - t * n) };
			break;
		default:
			a = { r: r * (1 - t), g: r * (1 - t), b: r * (1 - t) };
	}
	return (a.mode = 'rgb'), o !== void 0 && (a.alpha = o), a;
}
function He({ r: e, g: t, b: r, alpha: o }) {
	let n = Math.max(e, t, r),
		a = Math.min(e, t, r),
		f = { mode: 'hsv', s: n === 0 ? 0 : 1 - a / n, v: n };
	return (
		n - a !== 0 &&
			(f.h =
				(n === e
					? (t - r) / (n - a) + (t < r) * 6
					: n === t
					? (r - e) / (n - a) + 2
					: (e - t) / (n - a) + 4) * 60),
		o !== void 0 && (f.alpha = o),
		f
	);
}
var F0 = {
		mode: 'hsv',
		toMode: { rgb: Xe },
		parse: ['--hsv'],
		serialize: '--hsv',
		fromMode: { rgb: He },
		channels: ['h', 's', 'v', 'alpha'],
		ranges: { h: [0, 360] },
		interpolate: {
			h: { use: p, fixup: w },
			s: p,
			v: p,
			alpha: { use: p, fixup: M }
		},
		difference: { h: te },
		average: { h: S }
	},
	kt = F0;
function Lt({ h: e, w: t, b: r, alpha: o }) {
	if (t + r > 1) {
		let n = t + r;
		(t /= n), (r /= n);
	}
	return Xe({ h: e, s: r === 1 ? 1 : 1 - t / (1 - r), v: 1 - r, alpha: o });
}
function Rt(e) {
	let t = He(e);
	if (t === void 0) return;
	let r = { mode: 'hwb', w: (1 - t.s) * t.v, b: 1 - t.v };
	return (
		t.h !== void 0 && (r.h = t.h),
		t.alpha !== void 0 && (r.alpha = t.alpha),
		r
	);
}
var W0 = new RegExp(
		`^hwb\\(\\s*${Le}${$}${A}${$}${A}\\s*(?:\\/\\s*${G}\\s*)?\\)$`
	),
	U0 = e => {
		let t = e.match(W0);
		if (!t) return;
		let r = { mode: 'hwb' };
		return (
			t[3] !== void 0
				? (r.h = +t[3])
				: t[1] !== void 0 && t[2] !== void 0 && (r.h = $e(t[1], t[2])),
			t[4] !== void 0 && (r.w = t[4] / 100),
			t[5] !== void 0 && (r.b = t[5] / 100),
			t[6] !== void 0
				? (r.alpha = t[6] / 100)
				: t[7] !== void 0 && (r.alpha = +t[7]),
			r
		);
	},
	dr = U0;
var K0 = {
		mode: 'hwb',
		toMode: { rgb: Lt },
		fromMode: { rgb: Rt },
		channels: ['h', 'w', 'b', 'alpha'],
		ranges: { h: [0, 360] },
		parse: [dr],
		serialize: e =>
			`hwb(${e.h || 0} ${e.w * 100}% ${e.b * 100}%${
				e.alpha < 1 ? ` / ${e.alpha}` : ''
			})`,
		interpolate: {
			h: { use: p, fixup: w },
			w: p,
			b: p,
			alpha: { use: p, fixup: M }
		},
		difference: { h: fr },
		average: { h: S }
	},
	po = K0;
var Q0 = 0.1593017578125,
	V0 = 134.03437499999998,
	en = 0.8359375,
	tn = 18.8515625,
	rn = 18.6875,
	on = 16295499532821565e-27,
	ur = e => {
		let t = Math.pow(e / 1e4, Q0);
		return Math.pow((en + tn * t) / (1 + rn * t), V0) || 0;
	},
	cr = e => Math.max(e * 203, 0),
	nn = ({ x: e, y: t, z: r, alpha: o }) => {
		(e = cr(e)), (t = cr(t)), (r = cr(r));
		let n = 1.15 * e - 0.15 * r,
			a = 0.66 * t + 0.34 * e,
			f = ur(0.41478972 * n + 0.579999 * a + 0.014648 * r),
			l = ur(-0.20151 * n + 1.120649 * a + 0.0531008 * r),
			i = ur(-0.0166008 * n + 0.2648 * a + 0.6684799 * r),
			m = (f + l) / 2,
			s = {
				mode: 'jab',
				j: (0.44 * m) / (1 - 0.56 * m) - on,
				a: 3.524 * f - 4.066708 * l + 0.542708 * i,
				b: 0.199076 * f + 1.096799 * l - 1.295875 * i
			};
		return o !== void 0 && (s.alpha = o), s;
	},
	Fe = nn;
var an = 0.1593017578125,
	fn = 134.03437499999998,
	ln = 0.8359375,
	pn = 18.8515625,
	mn = 18.6875,
	mo = 16295499532821565e-27,
	hr = e => {
		let t = Math.pow(e, 1 / fn);
		return 1e4 * Math.pow((ln - t) / (mn * t - pn), 1 / an) || 0;
	},
	br = e => e / 203,
	sn = ({ j: e, a: t, b: r, alpha: o }) => {
		let n = (e + mo) / (0.44 + 0.56 * (e + mo)),
			a = hr(n + 0.13860504 * t + 0.058047316 * r),
			f = hr(n - 0.13860504 * t - 0.058047316 * r),
			l = hr(n - 0.096019242 * t - 0.8118919 * r),
			i = {
				mode: 'xyz65',
				x: br(
					1.661373024652174 * a -
						0.914523081304348 * f +
						0.23136208173913045 * l
				),
				y: br(
					-0.3250758611844533 * a +
						1.571847026732543 * f -
						0.21825383453227928 * l
				),
				z: br(-0.090982811 * a - 0.31272829 * f + 1.5227666 * l)
			};
		return o !== void 0 && (i.alpha = o), i;
	},
	We = sn;
var dn = e => {
		let t = Fe(j(e));
		return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
	},
	Ue = dn;
var un = e => Y(We(e)),
	Ke = un;
var cn = {
		mode: 'jab',
		channels: ['j', 'a', 'b', 'alpha'],
		parse: ['--jzazbz'],
		serialize: '--jzazbz',
		fromMode: { rgb: Ue, xyz65: Fe },
		toMode: { rgb: Ke, xyz65: We },
		ranges: { j: [0, 0.222], a: [-0.109, 0.129], b: [-0.185, 0.134] },
		interpolate: { j: p, a: p, b: p, alpha: { use: p, fixup: M } }
	},
	so = cn;
var hn = ({ j: e, a: t, b: r, alpha: o }) => {
		let n = Math.sqrt(t * t + r * r),
			a = { mode: 'jch', j: e, c: n };
		return (
			n && (a.h = T((Math.atan2(r, t) * 180) / Math.PI)),
			o !== void 0 && (a.alpha = o),
			a
		);
	},
	_t = hn;
var bn = ({ j: e, c: t, h: r, alpha: o }) => {
		let n = {
			mode: 'jab',
			j: e,
			a: t ? t * Math.cos((r / 180) * Math.PI) : 0,
			b: t ? t * Math.sin((r / 180) * Math.PI) : 0
		};
		return o !== void 0 && (n.alpha = o), n;
	},
	wt = bn;
var xn = {
		mode: 'jch',
		parse: ['--jzczhz'],
		serialize: '--jzczhz',
		toMode: { jab: wt, rgb: e => Ke(wt(e)) },
		fromMode: { rgb: e => _t(Ue(e)), jab: _t },
		channels: ['j', 'c', 'h', 'alpha'],
		ranges: { j: [0, 0.221], c: [0, 0.19], h: [0, 360] },
		interpolate: {
			h: { use: p, fixup: w },
			c: p,
			j: p,
			alpha: { use: p, fixup: M }
		},
		difference: { h: re },
		average: { h: S }
	},
	uo = xn;
var me = Math.pow(29, 3) / Math.pow(3, 3),
	Pe = Math.pow(6, 3) / Math.pow(29, 3);
var xr = e => (Math.pow(e, 3) > Pe ? Math.pow(e, 3) : (116 * e - 16) / me),
	gn = ({ l: e, a: t, b: r, alpha: o }) => {
		let n = (e + 16) / 116,
			a = t / 500 + n,
			f = n - r / 200,
			l = {
				mode: 'xyz50',
				x: xr(a) * y.X,
				y: xr(n) * y.Y,
				z: xr(f) * y.Z
			};
		return o !== void 0 && (l.alpha = o), l;
	},
	xe = gn;
var Mn = ({ x: e, y: t, z: r, alpha: o }) => {
		let n = N({
			r:
				e * 3.1341359569958707 -
				t * 1.6173863321612538 -
				0.4906619460083532 * r,
			g:
				e * -0.978795502912089 +
				t * 1.916254567259524 +
				0.03344273116131949 * r,
			b:
				e * 0.07195537988411677 -
				t * 0.2289768264158322 +
				1.405386058324125 * r
		});
		return o !== void 0 && (n.alpha = o), n;
	},
	U = Mn;
var vn = e => U(xe(e)),
	Qe = vn;
var Tn = e => {
		let { r: t, g: r, b: o, alpha: n } = E(e),
			a = {
				mode: 'xyz50',
				x:
					0.436065742824811 * t +
					0.3851514688337912 * r +
					0.14307845442264197 * o,
				y:
					0.22249319175623702 * t +
					0.7168870538238823 * r +
					0.06061979053616537 * o,
				z:
					0.013923904500943465 * t +
					0.09708128566574634 * r +
					0.7140993584005155 * o
			};
		return n !== void 0 && (a.alpha = n), a;
	},
	K = Tn;
var gr = e => (e > Pe ? Math.cbrt(e) : (me * e + 16) / 116),
	yn = ({ x: e, y: t, z: r, alpha: o }) => {
		let n = gr(e / y.X),
			a = gr(t / y.Y),
			f = gr(r / y.Z),
			l = {
				mode: 'lab',
				l: 116 * a - 16,
				a: 500 * (n - a),
				b: 200 * (a - f)
			};
		return o !== void 0 && (l.alpha = o), l;
	},
	ge = yn;
var zn = e => {
		let t = ge(K(e));
		return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
	},
	Ve = zn;
var kn = new RegExp(
		`^lab\\(\\s*${A}${$}${ee}${$}${ee}\\s*(?:\\/\\s*${G}\\s*)?\\)$`
	),
	Ln = e => {
		let t = e.match(kn);
		if (!t) return;
		let r = { mode: 'lab' };
		return (
			t[1] !== void 0 && (r.l = +t[1]),
			t[2] !== void 0 && (r.a = +t[2]),
			t[3] !== void 0 && (r.b = +t[3]),
			t[4] !== void 0
				? (r.alpha = t[4] / 100)
				: t[5] !== void 0 && (r.alpha = +t[5]),
			r
		);
	},
	Mr = Ln;
var Rn = {
		mode: 'lab',
		toMode: { xyz50: xe, rgb: Qe },
		fromMode: { xyz50: ge, rgb: Ve },
		channels: ['l', 'a', 'b', 'alpha'],
		ranges: { l: [0, 100], a: [-79.287, 93.55], b: [-112.029, 93.388] },
		parse: [Mr],
		serialize: e =>
			`lab(${e.l !== void 0 ? e.l + '%' : 'none'} ${
				e.a !== void 0 ? e.a : 'none'
			} ${e.b !== void 0 ? e.b : 'none'}${
				e.alpha < 1 ? ` / ${e.alpha}` : ''
			})`,
		interpolate: { l: p, a: p, b: p, alpha: { use: p, fixup: M } }
	},
	Ce = Rn;
var _n = {
		...Ce,
		mode: 'lab65',
		parse: ['--lab-d65'],
		serialize: '--lab-d65',
		toMode: { xyz65: Be, rgb: oe },
		fromMode: { xyz65: Ze, rgb: ne },
		ranges: { l: [0, 100], a: [-86.182, 98.234], b: [-107.86, 94.477] }
	},
	co = _n;
var wn = new RegExp(
		`^lch\\(\\s*${A}${$}${ee}${$}${Le}\\s*(?:\\/\\s*${G}\\s*)?\\)$`
	),
	Sn = e => {
		let t = e.match(wn);
		if (!t) return;
		let r = { mode: 'lch' };
		return (
			t[1] !== void 0 && (r.l = +t[1]),
			t[2] !== void 0 && (r.c = Math.max(0, +t[2])),
			t[5] !== void 0
				? (r.h = +t[5])
				: t[3] !== void 0 && t[4] !== void 0 && (r.h = $e(t[3], t[4])),
			t[6] !== void 0
				? (r.alpha = t[6] / 100)
				: t[7] !== void 0 && (r.alpha = +t[7]),
			r
		);
	},
	vr = Sn;
var $n = {
		mode: 'lch',
		toMode: { lab: J, rgb: e => Qe(J(e)) },
		fromMode: { rgb: e => D(Ve(e)), lab: D },
		channels: ['l', 'c', 'h', 'alpha'],
		ranges: { l: [0, 100], c: [0, 131.207], h: [0, 360] },
		parse: [vr],
		serialize: e =>
			`lch(${e.l !== void 0 ? e.l + '%' : 'none'} ${
				e.c !== void 0 ? e.c : 'none'
			} ${e.h || 0}${e.alpha < 1 ? ` / ${e.alpha}` : ''})`,
		interpolate: {
			h: { use: p, fixup: w },
			c: p,
			l: p,
			alpha: { use: p, fixup: M }
		},
		difference: { h: re },
		average: { h: S }
	},
	Oe = $n;
var Xn = {
		...Oe,
		mode: 'lch65',
		parse: ['--lch-d65'],
		serialize: '--lch-d65',
		toMode: { lab65: e => J(e, 'lab65'), rgb: e => oe(J(e, 'lab65')) },
		fromMode: { rgb: e => D(ne(e), 'lch65'), lab65: e => D(e, 'lch65') },
		ranges: { l: [0, 100], c: [0, 133.807], h: [0, 360] }
	},
	ho = Xn;
var Hn = ({ l: e, u: t, v: r, alpha: o }) => {
		let n = Math.sqrt(t * t + r * r),
			a = { mode: 'lchuv', l: e, c: n };
		return (
			n && (a.h = T((Math.atan2(r, t) * 180) / Math.PI)),
			o !== void 0 && (a.alpha = o),
			a
		);
	},
	St = Hn;
var Pn = ({ l: e, c: t, h: r, alpha: o }) => {
		let n = {
			mode: 'luv',
			l: e,
			u: t ? t * Math.cos((r / 180) * Math.PI) : 0,
			v: t ? t * Math.sin((r / 180) * Math.PI) : 0
		};
		return o !== void 0 && (n.alpha = o), n;
	},
	$t = Pn;
var bo = (e, t, r) => (4 * e) / (e + 15 * t + 3 * r),
	xo = (e, t, r) => (9 * t) / (e + 15 * t + 3 * r),
	Cn = bo(y.X, y.Y, y.Z),
	On = xo(y.X, y.Y, y.Z),
	qn = e => (e <= Pe ? me * e : 116 * Math.cbrt(e) - 16),
	An = ({ x: e, y: t, z: r, alpha: o }) => {
		let n = qn(t / y.Y),
			a = bo(e, t, r),
			f = xo(e, t, r);
		!isFinite(a) || !isFinite(f)
			? (n = a = f = 0)
			: ((a = 13 * n * (a - Cn)), (f = 13 * n * (f - On)));
		let l = { mode: 'luv', l: n, u: a, v: f };
		return o !== void 0 && (l.alpha = o), l;
	},
	qe = An;
var In = (e, t, r) => (4 * e) / (e + 15 * t + 3 * r),
	Dn = (e, t, r) => (9 * t) / (e + 15 * t + 3 * r),
	Jn = In(y.X, y.Y, y.Z),
	En = Dn(y.X, y.Y, y.Z),
	jn = ({ l: e, u: t, v: r, alpha: o }) => {
		let n = t / (13 * e) + Jn,
			a = r / (13 * e) + En,
			f = y.Y * (e <= 8 ? e / me : Math.pow((e + 16) / 116, 3)),
			l = (f * (9 * n)) / (4 * a),
			i = (f * (12 - 3 * n - 20 * a)) / (4 * a),
			m = { mode: 'xyz50', x: l, y: f, z: i };
		return o !== void 0 && (m.alpha = o), m;
	},
	Ae = jn;
var Nn = e => St(qe(K(e))),
	Yn = e => U(Ae($t(e))),
	Bn = {
		mode: 'lchuv',
		toMode: { luv: $t, rgb: Yn },
		fromMode: { rgb: Nn, luv: St },
		channels: ['l', 'c', 'h', 'alpha'],
		parse: ['--lchuv'],
		serialize: '--lchuv',
		ranges: { l: [0, 100], c: [0, 176.956], h: [0, 360] },
		interpolate: {
			h: { use: p, fixup: w },
			c: p,
			l: p,
			alpha: { use: p, fixup: M }
		},
		difference: { h: re },
		average: { h: S }
	},
	go = Bn;
var Zn = {
		...F,
		mode: 'lrgb',
		toMode: { rgb: N },
		fromMode: { rgb: E },
		parse: ['--srgb-linear'],
		serialize: '--srgb-linear'
	},
	Mo = Zn;
var Gn = {
		mode: 'luv',
		toMode: { xyz50: Ae, rgb: e => U(Ae(e)) },
		fromMode: { xyz50: qe, rgb: e => qe(K(e)) },
		channels: ['l', 'u', 'v', 'alpha'],
		parse: ['--luv'],
		serialize: '--luv',
		ranges: { l: [0, 100], u: [-84.936, 175.042], v: [-125.882, 87.243] },
		interpolate: { l: p, u: p, v: p, alpha: { use: p, fixup: M } }
	},
	vo = Gn;
var Fn = ({ r: e, g: t, b: r, alpha: o }) => {
		let n = Math.cbrt(
				0.41222147079999993 * e + 0.5363325363 * t + 0.0514459929 * r
			),
			a = Math.cbrt(
				0.2119034981999999 * e +
					0.6806995450999999 * t +
					0.1073969566 * r
			),
			f = Math.cbrt(
				0.08830246189999998 * e +
					0.2817188376 * t +
					0.6299787005000002 * r
			),
			l = {
				mode: 'oklab',
				l: 0.2104542553 * n + 0.793617785 * a - 0.0040720468 * f,
				a: 1.9779984951 * n - 2.428592205 * a + 0.4505937099 * f,
				b: 0.0259040371 * n + 0.7827717662 * a - 0.808675766 * f
			};
		return o !== void 0 && (l.alpha = o), l;
	},
	et = Fn;
var Wn = e => {
		let t = et(E(e));
		return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
	},
	ae = Wn;
var Un = ({ l: e, a: t, b: r, alpha: o }) => {
		let n = Math.pow(
				e * 0.9999999984505198 +
					0.39633779217376786 * t +
					0.2158037580607588 * r,
				3
			),
			a = Math.pow(
				e * 1.0000000088817609 -
					0.10556134232365635 * t -
					0.06385417477170591 * r,
				3
			),
			f = Math.pow(
				e * 1.0000000546724108 -
					0.08948418209496575 * t -
					1.2914855378640917 * r,
				3
			),
			l = {
				mode: 'lrgb',
				r:
					4.076741661347994 * n -
					3.307711590408193 * a +
					0.230969928729428 * f,
				g:
					-1.2684380040921763 * n +
					2.6097574006633715 * a -
					0.3413193963102197 * f,
				b:
					-0.004196086541837188 * n -
					0.7034186144594493 * a +
					1.7076147009309444 * f
			};
		return o !== void 0 && (l.alpha = o), l;
	},
	Q = Un;
var Kn = e => N(Q(e)),
	fe = Kn;
function tt(e) {
	let o = 1.170873786407767;
	return (
		0.5 *
		(o * e -
			0.206 +
			Math.sqrt((o * e - 0.206) * (o * e - 0.206) + 4 * 0.03 * o * e))
	);
}
function Me(e) {
	let o = 1.170873786407767;
	return (e * e + 0.206 * e) / (o * (e + 0.03));
}
function Qn(e, t) {
	let r, o, n, a, f, l, i, m;
	-1.88170328 * e - 0.80936493 * t > 1
		? ((r = 1.19086277),
		  (o = 1.76576728),
		  (n = 0.59662641),
		  (a = 0.75515197),
		  (f = 0.56771245),
		  (l = 4.0767416621),
		  (i = -3.3077115913),
		  (m = 0.2309699292))
		: 1.81444104 * e - 1.19445276 * t > 1
		? ((r = 0.73956515),
		  (o = -0.45954404),
		  (n = 0.08285427),
		  (a = 0.1254107),
		  (f = 0.14503204),
		  (l = -1.2684380046),
		  (i = 2.6097574011),
		  (m = -0.3413193965))
		: ((r = 1.35733652),
		  (o = -0.00915799),
		  (n = -1.1513021),
		  (a = -0.50559606),
		  (f = 0.00692167),
		  (l = -0.0041960863),
		  (i = -0.7034186147),
		  (m = 1.707614701));
	let s = r + o * e + n * t + a * e * e + f * e * t,
		u = 0.3963377774 * e + 0.2158037573 * t,
		h = -0.1055613458 * e - 0.0638541728 * t,
		d = -0.0894841775 * e - 1.291485548 * t;
	{
		let c = 1 + s * u,
			x = 1 + s * h,
			g = 1 + s * d,
			z = c * c * c,
			R = x * x * x,
			_ = g * g * g,
			X = 3 * u * c * c,
			H = 3 * h * x * x,
			P = 3 * d * g * g,
			O = 6 * u * u * c,
			se = 6 * h * h * x,
			le = 6 * d * d * g,
			Z = l * z + i * R + m * _,
			V = l * X + i * H + m * P,
			de = l * O + i * se + m * le;
		s = s - (Z * V) / (V * V - 0.5 * Z * de);
	}
	return s;
}
function Tr(e, t) {
	let r = Qn(e, t),
		o = Q({ l: 1, a: r * e, b: r * t }),
		n = Math.cbrt(1 / Math.max(o.r, o.g, o.b)),
		a = n * r;
	return [n, a];
}
function Vn(e, t, r, o, n, a = null) {
	a || (a = Tr(e, t));
	let f;
	if ((r - n) * a[1] - (a[0] - n) * o <= 0)
		f = (a[1] * n) / (o * a[0] + a[1] * (n - r));
	else {
		f = (a[1] * (n - 1)) / (o * (a[0] - 1) + a[1] * (n - r));
		{
			let l = r - n,
				i = o,
				m = 0.3963377774 * e + 0.2158037573 * t,
				s = -0.1055613458 * e - 0.0638541728 * t,
				u = -0.0894841775 * e - 1.291485548 * t,
				h = l + i * m,
				d = l + i * s,
				c = l + i * u;
			{
				let x = n * (1 - f) + f * r,
					g = f * o,
					z = x + g * m,
					R = x + g * s,
					_ = x + g * u,
					X = z * z * z,
					H = R * R * R,
					P = _ * _ * _,
					O = 3 * h * z * z,
					se = 3 * d * R * R,
					le = 3 * c * _ * _,
					Z = 6 * h * h * z,
					V = 6 * d * d * R,
					de = 6 * c * c * _,
					ue =
						4.0767416621 * X -
						3.3077115913 * H +
						0.2309699292 * P -
						1,
					q =
						4.0767416621 * O -
						3.3077115913 * se +
						0.2309699292 * le,
					pt =
						4.0767416621 * Z - 3.3077115913 * V + 0.2309699292 * de,
					mt = q / (q * q - 0.5 * ue * pt),
					De = -ue * mt,
					Je =
						-1.2684380046 * X +
						2.6097574011 * H -
						0.3413193965 * P -
						1,
					ke =
						-1.2684380046 * O +
						2.6097574011 * se -
						0.3413193965 * le,
					jt =
						-1.2684380046 * Z +
						2.6097574011 * V -
						0.3413193965 * de,
					st = ke / (ke * ke - 0.5 * Je * jt),
					Ee = -Je * st,
					Br =
						-0.0041960863 * X -
						0.7034186147 * H +
						1.707614701 * P -
						1,
					Nt =
						-0.0041960863 * O -
						0.7034186147 * se +
						1.707614701 * le,
					Yo =
						-0.0041960863 * Z - 0.7034186147 * V + 1.707614701 * de,
					Zr = Nt / (Nt * Nt - 0.5 * Br * Yo),
					Yt = -Br * Zr;
				(De = mt >= 0 ? De : 1e6),
					(Ee = st >= 0 ? Ee : 1e6),
					(Yt = Zr >= 0 ? Yt : 1e6),
					(f += Math.min(De, Math.min(Ee, Yt)));
			}
		}
	}
	return f;
}
function rt(e, t, r = null) {
	r || (r = Tr(e, t));
	let o = r[0],
		n = r[1];
	return [n / o, n / (1 - o)];
}
function Xt(e, t, r) {
	let o = Tr(t, r),
		n = Vn(t, r, e, 1, e, o),
		a = rt(t, r, o),
		f =
			0.11516993 +
			1 /
				(7.4477897 +
					4.1590124 * r +
					t *
						(-2.19557347 +
							1.75198401 * r +
							t *
								(-2.13704948 -
									10.02301043 * r +
									t *
										(-4.24894561 +
											5.38770819 * r +
											4.69891013 * t)))),
		l =
			0.11239642 +
			1 /
				(1.6132032 -
					0.68124379 * r +
					t *
						(0.40370612 +
							0.90148123 * r +
							t *
								(-0.27087943 +
									0.6122399 * r +
									t *
										(0.00299215 -
											0.45399568 * r -
											0.14661872 * t)))),
		i = n / Math.min(e * a[0], (1 - e) * a[1]),
		m = e * f,
		s = (1 - e) * l,
		u =
			0.9 *
			i *
			Math.sqrt(
				Math.sqrt(1 / (1 / (m * m * m * m) + 1 / (s * s * s * s)))
			);
	return (
		(m = e * 0.4),
		(s = (1 - e) * 0.8),
		[Math.sqrt(1 / (1 / (m * m) + 1 / (s * s))), u, n]
	);
}
function ot(e) {
	let t = { mode: 'okhsl', l: tt(e.l) };
	e.alpha !== void 0 && (t.alpha = e.alpha);
	let r = Math.sqrt(e.a * e.a + e.b * e.b);
	if (!r) return (t.s = 0), t;
	let [o, n, a] = Xt(e.l, e.a / r, e.b / r),
		f;
	if (r < n) {
		let l = 0,
			i = 0.8 * o,
			m = 1 - i / n;
		f = ((r - l) / (i + m * (r - l))) * 0.8;
	} else {
		let l = n,
			i = (0.2 * n * n * 1.25 * 1.25) / o,
			m = 1 - i / (a - n),
			s = (r - l) / (i + m * (r - l));
		f = 0.8 + 0.2 * s;
	}
	return (
		f && ((t.s = f), (t.h = T((Math.atan2(e.b, e.a) * 180) / Math.PI))), t
	);
}
function nt(e) {
	let t = Me(e.l),
		r = { mode: 'oklab', l: t };
	if ((e.alpha !== void 0 && (r.alpha = e.alpha), !e.s || e.l === 1))
		return (r.a = r.b = 0), r;
	let o = Math.cos((e.h / 180) * Math.PI),
		n = Math.sin((e.h / 180) * Math.PI),
		[a, f, l] = Xt(t, o, n),
		i,
		m,
		s,
		u;
	e.s < 0.8
		? ((i = 1.25 * e.s), (m = 0), (s = 0.8 * a), (u = 1 - s / f))
		: ((i = 5 * (e.s - 0.8)),
		  (m = f),
		  (s = (0.2 * f * f * 1.25 * 1.25) / a),
		  (u = 1 - s / (l - f)));
	let h = m + (i * s) / (1 - u * i);
	return (r.a = h * o), (r.b = h * n), r;
}
var ea = {
		...zt,
		mode: 'okhsl',
		channels: ['h', 's', 'l', 'alpha'],
		parse: ['--okhsl'],
		serialize: '--okhsl',
		fromMode: { oklab: ot, rgb: e => ot(ae(e)) },
		toMode: { oklab: nt, rgb: e => fe(nt(e)) }
	},
	To = ea;
function at(e) {
	let t = Math.sqrt(e.a * e.a + e.b * e.b),
		r = e.l,
		o = t ? e.a / t : 1,
		n = t ? e.b / t : 1,
		[a, f] = rt(o, n),
		l = 0.5,
		i = 1 - l / a,
		m = f / (t + r * f),
		s = m * r,
		u = m * t,
		h = Me(s),
		d = (u * h) / s,
		c = Q({ l: h, a: o * d, b: n * d }),
		x = Math.cbrt(1 / Math.max(c.r, c.g, c.b, 0));
	(r = r / x), (t = ((t / x) * tt(r)) / r), (r = tt(r));
	let g = {
		mode: 'okhsv',
		s: t ? ((l + f) * u) / (f * l + f * i * u) : 0,
		v: r ? r / s : 0
	};
	return (
		g.s && (g.h = T((Math.atan2(e.b, e.a) * 180) / Math.PI)),
		e.alpha !== void 0 && (g.alpha = e.alpha),
		g
	);
}
function ft(e) {
	let t = { mode: 'oklab' };
	e.alpha !== void 0 && (t.alpha = e.alpha);
	let r = e.h || 0,
		o = Math.cos((r / 180) * Math.PI),
		n = Math.sin((r / 180) * Math.PI),
		[a, f] = rt(o, n),
		l = 0.5,
		i = 1 - l / a,
		m = 1 - (e.s * l) / (l + f - f * i * e.s),
		s = (e.s * f * l) / (l + f - f * i * e.s),
		u = Me(m),
		h = (s * u) / m,
		d = Q({ l: u, a: o * h, b: n * h }),
		c = Math.cbrt(1 / Math.max(d.r, d.g, d.b, 0)),
		x = Me(e.v * m),
		g = (s * x) / m;
	return (t.l = x * c), (t.a = g * o * c), (t.b = g * n * c), t;
}
var ta = {
		...kt,
		mode: 'okhsv',
		channels: ['h', 's', 'v', 'alpha'],
		parse: ['--okhsv'],
		serialize: '--okhsv',
		fromMode: { oklab: at, rgb: e => at(ae(e)) },
		toMode: { oklab: ft, rgb: e => fe(ft(e)) }
	},
	yo = ta;
var ra = {
		...Ce,
		mode: 'oklab',
		toMode: { lrgb: Q, rgb: fe },
		fromMode: { lrgb: et, rgb: ae },
		ranges: { l: [0, 0.999], a: [-0.233, 0.276], b: [-0.311, 0.198] },
		parse: ['--oklab'],
		serialize: '--oklab'
	},
	zo = ra;
var oa = {
		...Oe,
		mode: 'oklch',
		toMode: { oklab: e => J(e, 'oklab'), rgb: e => fe(J(e, 'oklab')) },
		fromMode: { rgb: e => D(ae(e), 'oklch'), oklab: e => D(e, 'oklch') },
		parse: ['--oklch'],
		serialize: '--oklch',
		ranges: { l: [0, 0.999], c: [0, 0.322], h: [0, 360] }
	},
	ko = oa;
var na = e => {
		let { r: t, g: r, b: o, alpha: n } = E(e),
			a = {
				mode: 'xyz65',
				x:
					0.486570948648216 * t +
					0.265667693169093 * r +
					0.1982172852343625 * o,
				y:
					0.2289745640697487 * t +
					0.6917385218365062 * r +
					0.079286914093745 * o,
				z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * o
			};
		return n !== void 0 && (a.alpha = n), a;
	},
	Ht = na;
var aa = ({ x: e, y: t, z: r, alpha: o }) => {
		let n = N(
			{
				r:
					e * 2.4934969119414263 -
					t * 0.9313836179191242 -
					0.402710784450717 * r,
				g:
					e * -0.8294889695615749 +
					t * 1.7626640603183465 +
					0.0236246858419436 * r,
				b:
					e * 0.0358458302437845 -
					t * 0.0761723892680418 +
					0.9568845240076871 * r
			},
			'p3'
		);
		return o !== void 0 && (n.alpha = o), n;
	},
	Pt = aa;
var fa = {
		...F,
		mode: 'p3',
		parse: ['display-p3'],
		serialize: 'display-p3',
		fromMode: { rgb: e => Pt(j(e)), xyz65: Pt },
		toMode: { rgb: e => Y(Ht(e)), xyz65: Ht }
	},
	Lo = fa;
var yr = e => {
		let t = Math.abs(e);
		return t >= 0.001953125
			? Math.sign(e) * Math.pow(t, 0.5555555555555556)
			: 16 * e;
	},
	la = ({ x: e, y: t, z: r, alpha: o }) => {
		let n = {
			mode: 'prophoto',
			r: yr(
				e * 1.3457868816471585 -
					t * 0.2555720873797946 -
					0.0511018649755453 * r
			),
			g: yr(
				e * -0.5446307051249019 +
					t * 1.5082477428451466 +
					0.0205274474364214 * r
			),
			b: yr(e * 0 + t * 0 + 1.2119675456389452 * r)
		};
		return o !== void 0 && (n.alpha = o), n;
	},
	Ct = la;
var zr = e => {
		let t = Math.abs(e);
		return t >= 0.03125 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
	},
	ia = e => {
		let t = zr(e.r),
			r = zr(e.g),
			o = zr(e.b),
			n = {
				mode: 'xyz50',
				x:
					0.7977666449006423 * t +
					0.1351812974005331 * r +
					0.0313477341283922 * o,
				y:
					0.2880748288194013 * t +
					0.7118352342418731 * r +
					899369387256e-16 * o,
				z: 0 * t + 0 * r + 0.8251046025104602 * o
			};
		return e.alpha !== void 0 && (n.alpha = e.alpha), n;
	},
	Ot = ia;
var pa = {
		...F,
		mode: 'prophoto',
		parse: ['prophoto-rgb'],
		serialize: 'prophoto-rgb',
		fromMode: { xyz50: Ct, rgb: e => Ct(K(e)) },
		toMode: { xyz50: Ot, rgb: e => U(Ot(e)) }
	},
	Ro = pa;
var _o = 1.09929682680944,
	ma = 0.018053968510807,
	kr = e => {
		let t = Math.abs(e);
		return t > ma
			? (Math.sign(e) || 1) * (_o * Math.pow(t, 0.45) - (_o - 1))
			: 4.5 * e;
	},
	sa = ({ x: e, y: t, z: r, alpha: o }) => {
		let n = {
			mode: 'rec2020',
			r: kr(
				e * 1.7166511879712683 -
					t * 0.3556707837763925 -
					0.2533662813736599 * r
			),
			g: kr(
				e * -0.6666843518324893 +
					t * 1.6164812366349395 +
					0.0157685458139111 * r
			),
			b: kr(
				e * 0.0176398574453108 -
					t * 0.0427706132578085 +
					0.9421031212354739 * r
			)
		};
		return o !== void 0 && (n.alpha = o), n;
	},
	qt = sa;
var wo = 1.09929682680944,
	da = 0.018053968510807,
	Lr = e => {
		let t = Math.abs(e);
		return t < da * 4.5
			? e / 4.5
			: (Math.sign(e) || 1) * Math.pow((t + wo - 1) / wo, 1 / 0.45);
	},
	ua = e => {
		let t = Lr(e.r),
			r = Lr(e.g),
			o = Lr(e.b),
			n = {
				mode: 'xyz65',
				x:
					0.6369580483012911 * t +
					0.1446169035862083 * r +
					0.1688809751641721 * o,
				y:
					0.262700212011267 * t +
					0.6779980715188708 * r +
					0.059301716469862 * o,
				z: 0 * t + 0.0280726930490874 * r + 1.0609850577107909 * o
			};
		return e.alpha !== void 0 && (n.alpha = e.alpha), n;
	},
	At = ua;
var ca = {
		...F,
		mode: 'rec2020',
		fromMode: { xyz65: qt, rgb: e => qt(j(e)) },
		toMode: { xyz65: At, rgb: e => Y(At(e)) },
		parse: ['rec2020'],
		serialize: 'rec2020'
	},
	So = ca;
var ha = {
		mode: 'xyz50',
		parse: ['xyz-d50', '--xyz-d50'],
		serialize: 'xyz-d50',
		toMode: { rgb: U, lab: ge },
		fromMode: { rgb: K, lab: xe },
		channels: ['x', 'y', 'z', 'alpha'],
		ranges: { x: [0, 0.964], y: [0, 0.999], z: [0, 0.825] },
		interpolate: { x: p, y: p, z: p, alpha: { use: p, fixup: M } }
	},
	$o = ha;
var ba = e => {
		let { x: t, y: r, z: o, alpha: n } = e,
			a = {
				mode: 'xyz50',
				x:
					1.0479298208405488 * t +
					0.0229467933410191 * r -
					0.0501922295431356 * o,
				y:
					0.0296278156881593 * t +
					0.990434484573249 * r -
					0.0170738250293851 * o,
				z:
					-0.0092430581525912 * t +
					0.0150551448965779 * r +
					0.7518742899580008 * o
			};
		return n !== void 0 && (a.alpha = n), a;
	},
	Rr = ba;
var xa = e => {
		let { x: t, y: r, z: o, alpha: n } = e,
			a = {
				mode: 'xyz65',
				x:
					0.9554734527042182 * t -
					0.0230985368742614 * r +
					0.0632593086610217 * o,
				y:
					-0.0283697069632081 * t +
					1.0099954580058226 * r +
					0.021041398966943 * o,
				z:
					0.0123140016883199 * t -
					0.0205076964334779 * r +
					1.3303659366080753 * o
			};
		return n !== void 0 && (a.alpha = n), a;
	},
	_r = xa;
var ga = {
		mode: 'xyz65',
		toMode: { rgb: Y, xyz50: Rr },
		fromMode: { rgb: j, xyz50: _r },
		ranges: { x: [0, 0.95], y: [0, 1], z: [0, 1.088] },
		channels: ['x', 'y', 'z', 'alpha'],
		parse: ['xyz', 'xyz-d65', '--xyz-d65'],
		serialize: 'xyz-d65',
		interpolate: { x: p, y: p, z: p, alpha: { use: p, fixup: M } }
	},
	Xo = ga;
var Ma = e => {
		let { r: t, g: r, b: o, alpha: n } = E(e),
			a = {
				mode: 'yiq',
				y: 0.29889531 * t + 0.58662247 * r + 0.11448223 * o,
				i: 0.59597799 * t - 0.2741761 * r - 0.32180189 * o,
				q: 0.21147017 * t - 0.52261711 * r + 0.31114694 * o
			};
		return n !== void 0 && (a.alpha = n), a;
	},
	wr = Ma;
var va = ({ y: e, i: t, q: r, alpha: o }) =>
		N({
			r: e + 0.95608445 * t + 0.6208885 * r,
			g: e - 0.27137664 * t - 0.6486059 * r,
			b: e - 1.10561724 * t + 1.70250126 * r,
			alpha: o
		}),
	Sr = va;
var Ta = {
		mode: 'yiq',
		toMode: { rgb: Sr },
		fromMode: { rgb: wr },
		channels: ['y', 'i', 'q', 'alpha'],
		parse: ['--yiq'],
		serialize: '--yiq',
		ranges: { i: [-0.595, 0.595], q: [-0.522, 0.522] },
		interpolate: { y: p, i: p, q: p, alpha: { use: p, fixup: M } }
	},
	Ho = Ta;
var ya = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t,
	za =
		(e = 4) =>
		t =>
			typeof t == 'number' ? ya(t, e) : t,
	$r = za;
var lt = $r(2),
	it = e => Math.max(0, Math.min(1, e)),
	ve = e => Math.round(it(e) * 255),
	Xr = e => {
		if (e === void 0) return;
		let t = ve(e.r),
			r = ve(e.g),
			o = ve(e.b);
		return (
			'#' + ((1 << 24) | (t << 16) | (r << 8) | o).toString(16).slice(1)
		);
	},
	Po = e => {
		if (e === void 0) return;
		let t = ve(e.alpha !== void 0 ? e.alpha : 1);
		return Xr(e) + ((1 << 8) | t).toString(16).slice(1);
	},
	Co = e => {
		if (e === void 0) return;
		let t = e.r !== void 0 ? ve(e.r) : 'none',
			r = e.g !== void 0 ? ve(e.g) : 'none',
			o = e.b !== void 0 ? ve(e.b) : 'none';
		return e.alpha === void 0 || e.alpha === 1
			? `rgb(${t}, ${r}, ${o})`
			: `rgba(${t}, ${r}, ${o}, ${lt(it(e.alpha))})`;
	},
	Oo = e => {
		if (e === void 0) return;
		let t = lt(e.h || 0),
			r = e.s !== void 0 ? lt(it(e.s) * 100) + '%' : 'none',
			o = e.l !== void 0 ? lt(it(e.l) * 100) + '%' : 'none';
		return e.alpha === void 0 || e.alpha === 1
			? `hsl(${t}, ${r}, ${o})`
			: `hsla(${t}, ${r}, ${o}, ${lt(it(e.alpha))})`;
	},
	ka = e => {
		let t = I(e);
		if (!t) return;
		let r = k(t.mode);
		if (!r.serialize || typeof r.serialize == 'string') {
			let o = `color(${r.serialize || `--${t.mode}`} `;
			return (
				r.channels.forEach((n, a) => {
					n !== 'alpha' &&
						(o +=
							(a ? ' ' : '') + (t[n] !== void 0 ? t[n] : 'none'));
				}),
				t.alpha !== void 0 && t.alpha < 1 && (o += ` / ${t.alpha}`),
				o + ')'
			);
		}
		if (typeof r.serialize == 'function') return r.serialize(t);
	},
	La = e => Xr(b('rgb')(e)),
	Ra = e => Po(b('rgb')(e)),
	_a = e => Co(b('rgb')(e)),
	wa = e => Oo(b('hsl')(e));
var Sa = {
		normal: (e, t) => t,
		multiply: (e, t) => e * t,
		screen: (e, t) => e + t - e * t,
		'hard-light': (e, t) => (t < 0.5 ? e * 2 * t : 2 * t * (1 - e) - 1),
		overlay: (e, t) => (e < 0.5 ? t * 2 * e : 2 * e * (1 - t) - 1),
		darken: (e, t) => Math.min(e, t),
		lighten: (e, t) => Math.max(e, t),
		'color-dodge': (e, t) =>
			e === 0 ? 0 : t === 1 ? 1 : Math.min(1, e / (1 - t)),
		'color-burn': (e, t) =>
			e === 1 ? 1 : t === 0 ? 0 : 1 - Math.min(1, (1 - e) / t),
		'soft-light': (e, t) =>
			t < 0.5
				? e - (1 - 2 * t) * e * (1 - e)
				: e +
				  (2 * t - 1) *
						((e < 0.25
							? ((16 * e - 12) * e + 4) * e
							: Math.sqrt(e)) -
							e),
		difference: (e, t) => Math.abs(e - t),
		exclusion: (e, t) => e + t - 2 * e * t
	},
	$a = (e, t = 'normal', r = 'rgb') => {
		let o = typeof t == 'function' ? t : Sa[t],
			n = b(r),
			a = k(r).channels;
		return e
			.map(l => {
				let i = n(l);
				return i.alpha === void 0 && (i.alpha = 1), i;
			})
			.reduce((l, i) => {
				if (l === void 0) return i;
				let m = i.alpha + l.alpha * (1 - i.alpha);
				return a.reduce(
					(s, u) => (
						u !== 'alpha' &&
							(m === 0
								? (s[u] = 0)
								: ((s[u] =
										i.alpha * (1 - l.alpha) * i[u] +
										i.alpha * l.alpha * o(l[u], i[u]) +
										(1 - i.alpha) * l.alpha * l[u]),
								  (s[u] = Math.max(0, Math.min(1, s[u] / m))))),
						s
					),
					{ mode: r, alpha: m }
				);
			});
	},
	Xa = $a;
var Ha = ([e, t]) => e + Math.random() * (t - e),
	Pa = e =>
		Object.keys(e).reduce((t, r) => {
			let o = e[r];
			return (t[r] = Array.isArray(o) ? o : [o, o]), t;
		}, {}),
	Ca = (e = 'rgb', t = {}) => {
		let r = k(e),
			o = Pa(t);
		return r.channels.reduce(
			(n, a) => (
				(o.alpha || a !== 'alpha') && (n[a] = Ha(o[a] || r.ranges[a])),
				n
			),
			{ mode: e }
		);
	},
	Oa = Ca;
var Te = (e, t = 'rgb', r = !1) => {
		let o = t ? k(t).channels : null,
			n = t ? b(t) : I;
		return a => {
			let f = n(a),
				l = t === null ? f.mode : t,
				m = (o || k(l).channels).reduce(
					(u, h) => {
						let d = e(f[h], h, f, l);
						return d !== void 0 && !isNaN(d) && (u[h] = d), u;
					},
					{ mode: l }
				);
			if (!r) return m;
			let s = I(a);
			return s && s.mode !== m.mode ? b(s.mode)(m) : m;
		};
	},
	Hr = (e, t, r) =>
		t !== 'alpha' ? (e || 0) * (r.alpha !== void 0 ? r.alpha : 1) : e,
	Pr = (e, t, r) =>
		t !== 'alpha' && r.alpha !== 0
			? (e || 0) / (r.alpha !== void 0 ? r.alpha : 1)
			: e,
	It =
		(e = 1, t = 0) =>
		(r, o) =>
			o !== 'alpha' ? r * e + t : r,
	qa =
		(e = 1, t = 1, r = 0) =>
		(o, n) =>
			n !== 'alpha' ? e * Math.pow(o, t) + r : o;
var Aa = e => {
		e[0] === void 0 && (e[0] = 0),
			e[e.length - 1] === void 0 && (e[e.length - 1] = 1);
		let t = 1,
			r,
			o,
			n,
			a;
		for (; t < e.length; ) {
			if (e[t] === void 0) {
				for (o = t, n = e[t - 1], r = t; e[r] === void 0; ) r++;
				for (a = (e[r] - n) / (r - t + 1); t < r; )
					(e[t] = n + (t + 1 - o) * a), t++;
			} else e[t] < e[t - 1] && (e[t] = e[t - 1]);
			t++;
		}
		return e;
	},
	qo = Aa;
var Ia =
		(e = 0.5) =>
		t =>
			e <= 0 ? 1 : e >= 1 ? 0 : Math.pow(t, Math.log(0.5) / Math.log(e)),
	Cr = Ia;
var Dt = e => typeof e == 'function',
	ye = e => e && typeof e == 'object',
	Ao = e => typeof e == 'number',
	Io = (e, t = 'rgb', r, o) => {
		let n = k(t),
			a = b(t),
			f = [],
			l = [],
			i = {};
		e.forEach(h => {
			Array.isArray(h)
				? (f.push(a(h[0])), l.push(h[1]))
				: Ao(h) || Dt(h)
				? (i[l.length] = h)
				: (f.push(a(h)), l.push(void 0));
		}),
			qo(l);
		let m = n.channels.reduce((h, d) => {
			let c;
			return (
				ye(r) && ye(r[d]) && r[d].fixup
					? (c = r[d].fixup)
					: ye(n.interpolate[d]) && n.interpolate[d].fixup
					? (c = n.interpolate[d].fixup)
					: (c = x => x),
				(h[d] = c(f.map(x => x[d]))),
				h
			);
		}, {});
		if (o) {
			let h = f.map((d, c) =>
				n.channels.reduce((x, g) => ((x[g] = m[g][c]), x), { mode: t })
			);
			m = n.channels.reduce(
				(d, c) => (
					(d[c] = h.map(x => {
						let g = o(x[c], c, x, t);
						return isNaN(g) ? void 0 : g;
					})),
					d
				),
				{}
			);
		}
		let s = n.channels.reduce((h, d) => {
				let c;
				return (
					Dt(r)
						? (c = r)
						: ye(r) && Dt(r[d])
						? (c = r[d])
						: ye(r) && ye(r[d]) && r[d].use
						? (c = r[d].use)
						: Dt(n.interpolate[d])
						? (c = n.interpolate[d])
						: ye(n.interpolate[d]) && (c = n.interpolate[d].use),
					(h[d] = c(m[d])),
					h
				);
			}, {}),
			u = f.length - 1;
		return h => {
			if (((h = Math.min(Math.max(0, h), 1)), h <= l[0])) return f[0];
			if (h > l[u]) return f[u];
			let d = 0;
			for (; l[d] < h; ) d++;
			let c = l[d - 1],
				x = l[d] - c,
				g = (h - c) / x,
				z = i[d] || i[0];
			z !== void 0 && (Ao(z) && (z = Cr((z - c) / x)), (g = z(g)));
			let R = (d - 1 + g) / u;
			return n.channels.reduce(
				(_, X) => {
					let H = s[X](R);
					return H !== void 0 && (_[X] = H), _;
				},
				{ mode: t }
			);
		};
	},
	Da = (e, t = 'rgb', r) => Io(e, t, r),
	Do =
		(e, t) =>
		(r, o = 'rgb', n) => {
			let a = t ? Te(t, o) : void 0,
				f = Io(r, o, n, e);
			return a ? l => a(f(l)) : f;
		},
	Ja = Do(Hr, Pr);
var Jt = (e, t) => (e + t) % t,
	Jo = (e, t, r, o, n) => {
		let a = n * n,
			f = a * n;
		return (
			((1 - 3 * n + 3 * a - f) * e +
				(4 - 6 * a + 3 * f) * t +
				(1 + 3 * n + 3 * a - 3 * f) * r +
				f * o) /
			6
		);
	},
	Or = e => t => {
		let r = e.length - 1,
			o = t >= 1 ? r - 1 : Math.max(0, Math.floor(t * r));
		return Jo(
			o > 0 ? e[o - 1] : 2 * e[o] - e[o + 1],
			e[o],
			e[o + 1],
			o < r - 1 ? e[o + 2] : 2 * e[o + 1] - e[o],
			(t - o / r) * r
		);
	},
	qr = e => t => {
		let r = e.length - 1,
			o = Math.floor(t * r);
		return Jo(
			e[Jt(o - 1, e.length)],
			e[Jt(o, e.length)],
			e[Jt(o + 1, e.length)],
			e[Jt(o + 2, e.length)],
			(t - o / r) * r
		);
	};
var Eo = e => {
		let t,
			r = e.length - 1,
			o = new Array(r),
			n = new Array(r),
			a = new Array(r);
		for (o[1] = 1 / 4, n[1] = (6 * e[1] - e[0]) / 4, t = 2; t < r; ++t)
			(o[t] = 1 / (4 - o[t - 1])),
				(n[t] = (6 * e[t] - (t == r - 1 ? e[r] : 0) - n[t - 1]) * o[t]);
		for (
			a[0] = e[0],
				a[r] = e[r],
				r - 1 > 0 && (a[r - 1] = n[r - 1]),
				t = r - 2;
			t > 0;
			--t
		)
			a[t] = n[t] - o[t] * a[t + 1];
		return a;
	},
	Ea = e => Or(Eo(e)),
	ja = e => qr(Eo(e));
var Ie = Math.sign,
	Ar = Math.min,
	B = Math.abs,
	Ir = e => {
		let t = e.length - 1,
			r = [],
			o = [],
			n = [];
		for (let a = 0; a < t; a++)
			r.push((e[a + 1] - e[a]) * t),
				o.push(a > 0 ? 0.5 * (e[a + 1] - e[a - 1]) * t : void 0),
				n.push(
					a > 0
						? (Ie(r[a - 1]) + Ie(r[a])) *
								Ar(B(r[a - 1]), B(r[a]), 0.5 * B(o[a]))
						: void 0
				);
		return [r, o, n];
	},
	Dr = (e, t, r) => {
		let o = e.length - 1,
			n = o * o;
		return a => {
			let f;
			a >= 1 ? (f = o - 1) : (f = Math.max(0, Math.floor(a * o)));
			let l = a - f / o,
				i = l * l,
				m = i * l;
			return (
				(t[f] + t[f + 1] - 2 * r[f]) * n * m +
				(3 * r[f] - 2 * t[f] - t[f + 1]) * o * i +
				t[f] * l +
				e[f]
			);
		};
	},
	Na = e => {
		if (e.length < 3) return p(e);
		let t = e.length - 1,
			[r, , o] = Ir(e);
		return (o[0] = r[0]), (o[t] = r[t - 1]), Dr(e, o, r);
	},
	Ya = e => {
		if (e.length < 3) return p(e);
		let t = e.length - 1,
			[r, o, n] = Ir(e);
		return (
			(o[0] = (e[1] * 2 - e[0] * 1.5 - e[2] * 0.5) * t),
			(o[t] = (e[t] * 1.5 - e[t - 1] * 2 + e[t - 2] * 0.5) * t),
			(n[0] =
				o[0] * r[0] <= 0 ? 0 : B(o[0]) > 2 * B(r[0]) ? 2 * r[0] : o[0]),
			(n[t] =
				o[t] * r[t - 1] <= 0
					? 0
					: B(o[t]) > 2 * B(r[t - 1])
					? 2 * r[t - 1]
					: o[t]),
			Dr(e, n, r)
		);
	},
	Ba = e => {
		let t = e.length - 1,
			[r, o, n] = Ir(e);
		(o[0] = 0.5 * (e[1] - e[t]) * t), (o[t] = 0.5 * (e[0] - e[t - 1]) * t);
		let a = (e[0] - e[t]) * t,
			f = a;
		return (
			(n[0] = (Ie(a) + Ie(r[0])) * Ar(B(a), B(r[0]), 0.5 * B(o[0]))),
			(n[t] =
				(Ie(r[t - 1]) + Ie(f)) * Ar(B(r[t - 1]), B(f), 0.5 * B(o[t]))),
			Dr(e, n, r)
		);
	};
var Za = (e = 1) => (e === 1 ? t => t : t => Math.pow(t, e)),
	Jr = Za;
var Ga = (e = 2, t = 1) => {
		let r = Jr(t);
		if (e < 2) return e < 1 ? [] : [r(0.5)];
		let o = [];
		for (let n = 0; n < e; n++) o.push(r(n / (e - 1)));
		return o;
	},
	Fa = Ga;
var Wa = b('rgb'),
	Ua = e => {
		let t = Wa(e);
		return (
			t !== void 0 &&
			t.r >= 0 &&
			t.r <= 1 &&
			t.g >= 0 &&
			t.g <= 1 &&
			t.b >= 0 &&
			t.b <= 1
		);
	},
	ze = Ua;
var Ka = b('rgb'),
	jo = e => {
		let t = Ka(e);
		return (
			(t.r = Math.max(0, Math.min(t.r, 1))),
			(t.g = Math.max(0, Math.min(t.g, 1))),
			(t.b = Math.max(0, Math.min(t.b, 1))),
			t
		);
	},
	Qa = e => ((e = I(e)), e === void 0 || ze(e) ? e : b(e.mode)(jo(e))),
	Va = (e, t = 'lch') => {
		if (((e = I(e)), e === void 0 || ze(e))) return e;
		let r = b(e.mode);
		e = b(t)(e);
		let o = { ...e, c: 0 };
		if (!ze(o)) return r(jo(o));
		let n = 0,
			a = e.c,
			f = k(t).ranges.c,
			l = (f[1] - f[0]) / Math.pow(2, 13),
			i;
		for (; a - n > l; )
			(o.c = n + (a - n) * 0.5),
				ze(o) ? ((i = o.c), (n = o.c)) : (a = o.c);
		return r(ze(o) ? o : { ...o, c: i });
	};
var ef = (e, t = Ye(), r = o => o) => {
		let o = e.map((n, a) => ({ color: r(n), i: a }));
		return (n, a = 1, f = 1 / 0) => (
			isFinite(a) && (a = Math.max(1, Math.min(a, o.length - 1))),
			o.forEach(l => {
				l.d = t(n, l.color);
			}),
			o
				.sort((l, i) => l.d - i.d)
				.slice(0, a)
				.filter(l => l.d < f)
				.map(l => e[l.i])
		);
	},
	tf = ef;
var rf = (e, t, r) => (e === void 0 || t === void 0 ? void 0 : e + r * (t - e)),
	No = rf;
var Er = e => Math.max(e, 0),
	jr = e => Math.max(Math.min(e, 1), 0),
	of = e => {
		let t = 1 - jr(e);
		return [
			0.393 + 0.607 * t,
			0.769 - 0.769 * t,
			0.189 - 0.189 * t,
			0,
			0.349 - 0.349 * t,
			0.686 + 0.314 * t,
			0.168 - 0.168 * t,
			0,
			0.272 - 0.272 * t,
			0.534 - 0.534 * t,
			0.131 + 0.869 * t,
			0,
			0,
			0,
			0,
			1
		];
	},
	nf = e => {
		let t = Er(e);
		return [
			0.213 + 0.787 * t,
			0.715 - 0.715 * t,
			0.072 - 0.072 * t,
			0,
			0.213 - 0.213 * t,
			0.715 + 0.285 * t,
			0.072 - 0.072 * t,
			0,
			0.213 - 0.213 * t,
			0.715 - 0.715 * t,
			0.072 + 0.928 * t,
			0,
			0,
			0,
			0,
			1
		];
	},
	af = e => {
		let t = 1 - jr(e);
		return [
			0.2126 + 0.7874 * t,
			0.7152 - 0.7152 * t,
			0.0722 - 0.0722 * t,
			0,
			0.2126 - 0.2126 * t,
			0.7152 + 0.2848 * t,
			0.0722 - 0.0722 * t,
			0,
			0.2126 - 0.2126 * t,
			0.7152 - 0.7152 * t,
			0.0722 + 0.9278 * t,
			0,
			0,
			0,
			0,
			1
		];
	},
	ff = e => {
		let t = (Math.PI * e) / 180,
			r = Math.cos(t),
			o = Math.sin(t);
		return [
			0.213 + r * 0.787 - o * 0.213,
			0.715 - r * 0.715 - o * 0.715,
			0.072 - r * 0.072 + o * 0.928,
			0,
			0.213 - r * 0.213 + o * 0.143,
			0.715 + r * 0.285 + o * 0.14,
			0.072 - r * 0.072 - o * 0.283,
			0,
			0.213 - r * 0.213 - o * 0.787,
			0.715 - r * 0.715 + o * 0.715,
			0.072 + r * 0.928 + o * 0.072,
			0,
			0,
			0,
			0,
			1
		];
	},
	Et = (e, t, r = !1) => {
		let o = b(t),
			n = k(t).channels;
		return a => {
			let f = o(a);
			if (!f) return;
			let l = { mode: t },
				i,
				m = n.length;
			for (let u = 0; u < e.length; u++)
				(i = n[Math.floor(u / m)]),
					f[i] !== void 0 &&
						(l[i] = (l[i] || 0) + e[u] * (f[n[u % m]] || 0));
			if (!r) return l;
			let s = I(a);
			return s && l.mode !== s.mode ? b(s.mode)(l) : l;
		};
	},
	lf = (e = 1, t = 'rgb') => {
		let r = Er(e);
		return Te(It(r), t, !0);
	},
	pf = (e = 1, t = 'rgb') => {
		let r = Er(e);
		return Te(It(r, (1 - r) / 2), t, !0);
	},
	mf = (e = 1, t = 'rgb') => Et(of(e), t, !0),
	sf = (e = 1, t = 'rgb') => Et(nf(e), t, !0),
	df = (e = 1, t = 'rgb') => Et(af(e), t, !0),
	uf = (e = 1, t = 'rgb') => {
		let r = jr(e);
		return Te((o, n) => (n === 'alpha' ? o : No(r, 1 - r, o)), t, !0);
	},
	cf = (e = 0, t = 'rgb') => Et(ff(e), t, !0);
var hf = b('rgb'),
	bf = [
		[1, 0, -0, 0, 1, 0, -0, -0, 1],
		[
			0.856167, 0.182038, -0.038205, 0.029342, 0.955115, 0.015544,
			-0.00288, -0.001563, 1.004443
		],
		[
			0.734766, 0.334872, -0.069637, 0.05184, 0.919198, 0.028963,
			-0.004928, -0.004209, 1.009137
		],
		[
			0.630323, 0.465641, -0.095964, 0.069181, 0.890046, 0.040773,
			-0.006308, -0.007724, 1.014032
		],
		[
			0.539009, 0.579343, -0.118352, 0.082546, 0.866121, 0.051332,
			-0.007136, -0.011959, 1.019095
		],
		[
			0.458064, 0.679578, -0.137642, 0.092785, 0.846313, 0.060902,
			-0.007494, -0.016807, 1.024301
		],
		[
			0.38545, 0.769005, -0.154455, 0.100526, 0.829802, 0.069673,
			-0.007442, -0.02219, 1.029632
		],
		[
			0.319627, 0.849633, -0.169261, 0.106241, 0.815969, 0.07779,
			-0.007025, -0.028051, 1.035076
		],
		[
			0.259411, 0.923008, -0.18242, 0.110296, 0.80434, 0.085364,
			-0.006276, -0.034346, 1.040622
		],
		[
			0.203876, 0.990338, -0.194214, 0.112975, 0.794542, 0.092483,
			-0.005222, -0.041043, 1.046265
		],
		[
			0.152286, 1.052583, -0.204868, 0.114503, 0.786281, 0.099216,
			-0.003882, -0.048116, 1.051998
		]
	],
	xf = [
		[1, 0, -0, 0, 1, 0, -0, -0, 1],
		[
			0.866435, 0.177704, -0.044139, 0.049567, 0.939063, 0.01137,
			-0.003453, 0.007233, 0.99622
		],
		[
			0.760729, 0.319078, -0.079807, 0.090568, 0.889315, 0.020117,
			-0.006027, 0.013325, 0.992702
		],
		[
			0.675425, 0.43385, -0.109275, 0.125303, 0.847755, 0.026942,
			-0.00795, 0.018572, 0.989378
		],
		[
			0.605511, 0.52856, -0.134071, 0.155318, 0.812366, 0.032316,
			-0.009376, 0.023176, 0.9862
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
	],
	gf = [
		[1, 0, -0, 0, 1, 0, -0, -0, 1],
		[
			0.92667, 0.092514, -0.019184, 0.021191, 0.964503, 0.014306,
			0.008437, 0.054813, 0.93675
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
			1.017277, 0.027029, -0.044306, -0.006113, 0.958479, 0.047634,
			0.006379, 0.248708, 0.744913
		],
		[
			1.104996, -0.046633, -0.058363, -0.032137, 0.971635, 0.060503,
			0.001336, 0.317922, 0.680742
		],
		[
			1.193214, -0.109812, -0.083402, -0.058496, 0.97941, 0.079086,
			-0.002346, 0.403492, 0.598854
		],
		[
			1.257728, -0.139648, -0.118081, -0.078003, 0.975409, 0.102594,
			-0.003316, 0.501214, 0.502102
		],
		[
			1.278864, -0.125333, -0.153531, -0.084748, 0.957674, 0.127074,
			-989e-6, 0.601151, 0.399838
		],
		[
			1.255528, -0.076749, -0.178779, -0.078411, 0.930809, 0.147602,
			0.004733, 0.691367, 0.3039
		]
	],
	Nr = (e, t) => {
		let r = Math.max(0, Math.min(1, t)),
			o = Math.round(r / 0.1),
			n = Math.round(r % 0.1),
			a = e[o];
		if (n > 0 && o < e.length - 1) {
			let f = e[o + 1];
			a = a.map((l, i) => Ne(a[i], f[i], n));
		}
		return f => {
			let l = I(f);
			if (l === void 0) return;
			let { r: i, g: m, b: s } = hf(l),
				u = {
					mode: 'rgb',
					r: a[0] * i + a[1] * m + a[2] * s,
					g: a[3] * i + a[4] * m + a[5] * s,
					b: a[6] * i + a[7] * m + a[8] * s
				};
			return l.alpha !== void 0 && (u.alpha = l.alpha), b(l.mode)(u);
		};
	},
	Mf = (e = 1) => Nr(bf, e),
	vf = (e = 1) => Nr(xf, e),
	Tf = (e = 1) => Nr(gf, e);
var yf = e => e * e * (3 - 2 * e),
	zf = yf;
var kf = e => e * e * e * (e * (e * 6 - 15) + 10),
	Lf = kf;
var Rf = e => (1 - Math.cos(e * Math.PI)) / 2,
	_f = Rf;
function Yr(e) {
	let t = b('lrgb')(e);
	return 0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b;
}
function wf(e, t) {
	let r = Yr(e),
		o = Yr(t);
	return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
var pc = v(Fr),
	mc = v(oo),
	sc = v(fo),
	dc = v(lo),
	uc = v(io),
	cc = v(zt),
	hc = v(kt),
	bc = v(po),
	xc = v(so),
	gc = v(uo),
	Mc = v(Ce),
	vc = v(co),
	Tc = v(Oe),
	yc = v(ho),
	zc = v(go),
	kc = v(Mo),
	Lc = v(vo),
	Rc = v(To),
	_c = v(yo),
	wc = v(zo),
	Sc = v(ko),
	$c = v(Lo),
	Xc = v(Ro),
	Hc = v(So),
	Pc = v(F),
	Cc = v($o),
	Oc = v(Xo),
	qc = v(Ho);
export {
	pc as a98,
	$0 as average,
	S as averageAngle,
	ro as averageNumber,
	Xa as blend,
	Va as clampChroma,
	Qa as clampRgb,
	Bt as colorsNamed,
	ut as convertA98ToXyz65,
	or as convertCubehelixToRgb,
	we as convertDlchToLab65,
	Mt as convertHsiToRgb,
	Tt as convertHslToRgb,
	Xe as convertHsvToRgb,
	Lt as convertHwbToRgb,
	_t as convertJabToJch,
	Ke as convertJabToRgb,
	We as convertJabToXyz65,
	wt as convertJchToJab,
	Se as convertLab65ToDlch,
	oe as convertLab65ToRgb,
	Be as convertLab65ToXyz65,
	D as convertLabToLch,
	Qe as convertLabToRgb,
	xe as convertLabToXyz50,
	J as convertLchToLab,
	$t as convertLchuvToLuv,
	et as convertLrgbToOklab,
	N as convertLrgbToRgb,
	St as convertLuvToLchuv,
	Ae as convertLuvToXyz50,
	nt as convertOkhslToOklab,
	ft as convertOkhsvToOklab,
	Q as convertOklabToLrgb,
	ot as convertOklabToOkhsl,
	at as convertOklabToOkhsv,
	fe as convertOklabToRgb,
	Ht as convertP3ToXyz65,
	Ot as convertProphotoToXyz50,
	At as convertRec2020ToXyz65,
	rr as convertRgbToCubehelix,
	vt as convertRgbToHsi,
	yt as convertRgbToHsl,
	He as convertRgbToHsv,
	Rt as convertRgbToHwb,
	Ue as convertRgbToJab,
	Ve as convertRgbToLab,
	ne as convertRgbToLab65,
	E as convertRgbToLrgb,
	ae as convertRgbToOklab,
	K as convertRgbToXyz50,
	j as convertRgbToXyz65,
	wr as convertRgbToYiq,
	ge as convertXyz50ToLab,
	qe as convertXyz50ToLuv,
	Ct as convertXyz50ToProphoto,
	U as convertXyz50ToRgb,
	_r as convertXyz50ToXyz65,
	ct as convertXyz65ToA98,
	Fe as convertXyz65ToJab,
	Ze as convertXyz65ToLab65,
	Pt as convertXyz65ToP3,
	qt as convertXyz65ToRec2020,
	Y as convertXyz65ToRgb,
	Rr as convertXyz65ToXyz50,
	Sr as convertYiqToRgb,
	b as converter,
	mc as cubehelix,
	k0 as differenceCie76,
	L0 as differenceCie94,
	R0 as differenceCiede2000,
	_0 as differenceCmc,
	Ye as differenceEuclidean,
	re as differenceHueChroma,
	fr as differenceHueNaive,
	te as differenceHueSaturation,
	w0 as differenceHyab,
	S0 as differenceKotsarenkoRamos,
	ze as displayable,
	sc as dlab,
	dc as dlch,
	Jr as easingGamma,
	_f as easingInOutSine,
	Cr as easingMidpoint,
	Lf as easingSmootherstep,
	zf as easingSmoothstep,
	lf as filterBrightness,
	pf as filterContrast,
	vf as filterDeficiencyDeuter,
	Mf as filterDeficiencyProt,
	Tf as filterDeficiencyTrit,
	df as filterGrayscale,
	cf as filterHueRotate,
	uf as filterInvert,
	sf as filterSaturate,
	mf as filterSepia,
	M as fixupAlpha,
	h0 as fixupHueDecreasing,
	c0 as fixupHueIncreasing,
	u0 as fixupHueLonger,
	w as fixupHueShorter,
	ka as formatCss,
	La as formatHex,
	Ra as formatHex8,
	wa as formatHsl,
	_a as formatRgb,
	k as getMode,
	uc as hsi,
	cc as hsl,
	hc as hsv,
	bc as hwb,
	Da as interpolate,
	Do as interpolateWith,
	Ja as interpolateWithPremultipliedAlpha,
	p as interpolatorLinear,
	Kt as interpolatorPiecewise,
	Or as interpolatorSplineBasis,
	qr as interpolatorSplineBasisClosed,
	Na as interpolatorSplineMonotone,
	Ya as interpolatorSplineMonotone2,
	Ba as interpolatorSplineMonotoneClosed,
	Ea as interpolatorSplineNatural,
	ja as interpolatorSplineNaturalClosed,
	xc as jab,
	gc as jch,
	Mc as lab,
	vc as lab65,
	Tc as lch,
	yc as lch65,
	zc as lchuv,
	Ne as lerp,
	kc as lrgb,
	Lc as luv,
	Pr as mapAlphaDivide,
	Hr as mapAlphaMultiply,
	qa as mapTransferGamma,
	It as mapTransferLinear,
	Te as mapper,
	Fr as modeA98,
	oo as modeCubehelix,
	fo as modeDlab,
	lo as modeDlch,
	io as modeHsi,
	zt as modeHsl,
	kt as modeHsv,
	po as modeHwb,
	so as modeJab,
	uo as modeJch,
	Ce as modeLab,
	co as modeLab65,
	Oe as modeLch,
	ho as modeLch65,
	go as modeLchuv,
	Mo as modeLrgb,
	vo as modeLuv,
	To as modeOkhsl,
	yo as modeOkhsv,
	zo as modeOklab,
	ko as modeOklch,
	Lo as modeP3,
	Ro as modeProphoto,
	So as modeRec2020,
	F as modeRgb,
	$o as modeXyz50,
	Xo as modeXyz65,
	Ho as modeYiq,
	tf as nearest,
	Rc as okhsl,
	_c as okhsv,
	wc as oklab,
	Sc as oklch,
	$c as p3,
	nr as parse,
	Gt as parseHex,
	sr as parseHsl,
	dr as parseHwb,
	Mr as parseLab,
	vr as parseLch,
	Zt as parseNamed,
	Wt as parseRgb,
	Ut as parseTransparent,
	Xc as prophoto,
	Oa as random,
	Hc as rec2020,
	z0 as removeParser,
	Pc as rgb,
	$r as round,
	Fa as samples,
	Xr as serializeHex,
	Po as serializeHex8,
	Oo as serializeHsl,
	Co as serializeRgb,
	v as useMode,
	to as useParser,
	wf as wcagContrast,
	Yr as wcagLuminance,
	Cc as xyz50,
	Oc as xyz65,
	qc as yiq
};
