import { average } from '../src/average';
import type { Rgb } from '../src/rgb/types';

// THROWS Expected 1-3 arguments, but got 0.
const c1 = average();

// THROWS Argument of type '[]' is not assignable to parameter of type 'NonEmptyArray<string | Color>'.
const c2 = average([]);

// THROWS No overload matches this call.
const c3: Rgb = average(['#ff0000', '#0000ff'], undefined, {
	r: 1
});

// THROWS No overload matches this call.
const c4: Rgb = average(['#ff0000', '#0000ff'], 'hsl', {
	r: () => 1
});

// THROWS Type 'Hsl' is missing the following properties from type 'Rgb': r, g, b
const c5: Rgb = average(['#ff0000', '#0000ff'], 'hsl', {
	h: () => 1
});
