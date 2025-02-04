import type {
	Color,
	Find,
	Mode,
	NonEmptyArray,
	OverridesFunction,
	OverridesObject
} from './common';
import type { Rgb } from './rgb/types';

declare function averageAngle(val: number[]): number;

declare function averageNumber(val: number[]): number;

declare function average(colors: NonEmptyArray<Color | string>): Rgb;
declare function average(
	colors: NonEmptyArray<Color | string>,
	mode: undefined,
	overrides?: OverridesFunction | OverridesObject<'rgb'>
): Rgb;
declare function average<M extends Mode>(
	colors: NonEmptyArray<Color | string>,
	mode: M,
	overrides?: OverridesFunction | OverridesObject<M>
): Find<Color, M>;

export { average, averageAngle, averageNumber };
