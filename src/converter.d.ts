import type { Color, Find, Mode } from './common';

type ConvertFn<M extends Mode> = (
	color: Color | string
) => Find<Color, M> | undefined;

declare function converter(): ConvertFn<'rgb'>;
declare function converter<M extends Mode>(target_mode: M): ConvertFn<M>;

export default converter;
