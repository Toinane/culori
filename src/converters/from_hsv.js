// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
import { IS_CULORI, IS_RGB, IS_ALPHA_IMPLIED, IS_NORMALIZED } from '../api/flags';
import with_flags from '../util/with_flags';

export default function({ h, s, v, a }, additional_flags = 0) {
	let f = Math.abs(h/60 % 2 - 1);
	let res;
	switch (Math.floor(h/60)) {
		case 0: res = { r: v, g: v * (1 - s * f), b: v * (1 - s) }; break;
		case 1: res = { r: v * (1 - s * f), g: v, b: v * (1 - s) }; break;
		case 2: res = { r: v * (1 - s), g: v, b: v * (1 - s * f) }; break;
		case 3: res = { r: v * (1 - s), g: v * (1 - s * f), b: v }; break;
		case 4: res = { r: v * (1 - s * f), g: v * (1 - s), b: v }; break;
		case 5: res = { r: v, g: v * (1 - s), b: v * (1 - s * f) }; break;
	}
	let proposed_flags = IS_CULORI | IS_RGB | IS_NORMALIZED | additional_flags;
	if (a !== undefined) {
		res['a'] = a;
	} else {
		proposed_flags |= IS_ALPHA_IMPLIED;
	}
	return with_flags(res, proposed_flags);
};