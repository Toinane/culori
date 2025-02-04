import type { Lab65 } from './types';
import type { Xyz65 } from '../xyz65/types';

declare function convertLab65ToXyz65(color: Omit<Lab65, 'mode'>): Xyz65;

export default convertLab65ToXyz65;
