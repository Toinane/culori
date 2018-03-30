import {
	rgb_legacy, 
	rgb_current
} from '../util/regex';

import { IS_CULORI, IS_RGB, IS_ALPHA_IMPLIED } from '../api/flags';
import with_flags from '../util/with_flags';

export default (color, additional_flags = 0) => {
	var match = match = color.match(rgb_legacy) || color.match(rgb_current);
	if (!match) return;
	let res = {
		r: match[1] === undefined ? match[2] / 255 : match[1] / 100, 
		g: match[3] === undefined ? match[4] / 255 : match[3] / 100, 
		b: match[5] === undefined ? match[6] / 255 : match[5] / 100
	};

	let flags = IS_CULORI | IS_RGB | additional_flags;
	if (match[7] !== undefined) {
		res['a'] = match[7] / 100;
	} else if (match[8] !== undefined) {
		res['a'] = +match[8];
	} else {
		flags |= IS_ALPHA_IMPLIED;
	}
	
	return with_flags(res, flags);
};