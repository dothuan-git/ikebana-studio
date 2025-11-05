export type PotType = 'shallow-bowl' | 'tall-vase' | 'rectangular' | 'asymmetric' | 'rustic';

export interface Pot {
  id: string;
  type: PotType;
  name: string;
  color: string;
  width: number;
  height: number;
  description: string;
}
