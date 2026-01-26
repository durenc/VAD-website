
export type Flavor = 'Consensual Grape' | 'Juicy Jiggle Juice';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  flavors: Flavor[];
  image: string;
}
