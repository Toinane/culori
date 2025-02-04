import type { Hsi } from './types';
import type { Rgb } from '../rgb/types';

export default function convertHsiToRgb(color: Omit<Hsi, 'mode'>): Rgb;
