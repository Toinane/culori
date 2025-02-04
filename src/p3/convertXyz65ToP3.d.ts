import type { Xyz65 } from '../xyz65/types';
import type { P3 } from './types';

declare function convertXyz65ToP3(color: Omit<Xyz65, 'mode'>): P3;

export default convertXyz65ToP3;
