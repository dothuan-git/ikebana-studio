export type FlowerType =
  | 'cherry-blossom'
  | 'chrysanthemum'
  | 'iris'
  | 'plum-blossom'
  | 'forsythia'
  | 'lily'
  | 'peony'
  | 'jasmine'
  | 'lotus'
  | 'camellia'
  | 'hydrangea'
  | 'magnolia'
  | 'wisteria';

export interface Flower {
  id: string;
  type: FlowerType;
  name: string;
  color: string;
  petalCount: number;
  size: 'small' | 'medium' | 'large';
  description: string;
}

export type LeafType =
  | 'bamboo'
  | 'maple'
  | 'fern'
  | 'broad'
  | 'pine'
  | 'willow';

export interface Leaf {
  id: string;
  type: LeafType;
  name: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  description: string;
}
