import converter from '../src/converter';
import type { Lab } from '../src/lab/types';
import type { Rgb } from '../src/rgb/types';

const case_0_expect_success: Rgb | undefined = converter()('#f0f0f0');

const case_2_expect_success: Lab | undefined = converter('lab')('#f0f0f0');