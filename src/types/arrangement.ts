import { FlowerType, LeafType } from './flower';

export interface PlacedElement {
  id: string;
  type: 'flower' | 'leaf';
  elementType: FlowerType | LeafType;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  zIndex: number;
}

export interface ArrangementState {
  selectedPotId: string;
  placedElements: PlacedElement[];
  selectedElementId: string | null;
  isDragging: boolean;
  draggedElementId: string | null;
}
