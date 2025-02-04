import type { DiffFn } from './difference';

type PositiveNumber = number;

declare function nearest<T, T2 extends Color | string>(
	colors: T[],
	metric: DiffFn,
	accessor?: (c: T) => T2
): (color: Color | string, n?: number, τ: PositiveNumber) => T[];

export default nearest;
