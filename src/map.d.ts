import type { Color, ColorToColor, Find, Mode } from './common';

type Channel = string;

type Fn<ConvertMode> = (
	v: number,
	ch: string,
	conv_color: ConvertMode extends Mode
		? Find<Color, ConvertMode>
		: ConvertMode extends null
		? Color
		: never,
	mode: ConvertMode
) => number;

declare function mapper(
	fn: Fn<null>,
	mod?: null,
	preserve_mode?: boolean
): ColorToColor;
declare function mapper<M extends Mode>(
	fn: Fn<M>,
	mod?: M,
	preserve_mode?: boolean
): ColorToColor;

declare function mapAlphaMultiply(v: number, ch: Channel, c: Color): number;

declare function mapAlphaDivide(v: number, ch: Channel, c: Color): number;

declare function mapTransferLinear(
	slope?: number,
	intercept?: number
): (v: number, ch: Channel) => number;

declare function mapTransferGamma(
	amplitude?: number,
	exponent?: number,
	offset?: number
): (v: number, ch: Channel) => number;

export {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	mapTransferGamma
};
