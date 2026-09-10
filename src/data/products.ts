import { Product, ProductReview } from '../types';
import { CLEANSERS } from './products/cleansers';
import { SERUMS } from './products/serums';
import { MOISTURIZERS } from './products/moisturizers';
import { SUNSCREEN } from './products/sunscreen';
import { TREATMENTS } from './products/treatments';
import { EXFOLIATION } from './products/exfoliation';
import { MASKS } from './products/masks';
import { BODY } from './products/body';
import { BUNDLES } from './products/bundles';
import { REVIEWS } from './products/reviews';

export { REVIEWS };

export const PRODUCTS: Product[] = [
  ...CLEANSERS,
  ...SERUMS,
  ...MOISTURIZERS,
  ...SUNSCREEN,
  ...TREATMENTS,
  ...EXFOLIATION,
  ...MASKS,
  ...BODY,
  ...BUNDLES
];
