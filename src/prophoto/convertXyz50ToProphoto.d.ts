import type { Xyz50 } from '../xyz50/types';
import type { Prophoto } from './types';

declare function convertXyz50ToProphoto(color: Omit<Xyz50, 'mode'>): Prophoto;

export default convertXyz50ToProphoto;
