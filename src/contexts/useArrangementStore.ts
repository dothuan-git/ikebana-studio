import { create } from 'zustand';
import { PlacedElement } from '../types';

interface ArrangementStore {
  // Selected pot
  selectedPotId: string;
  setSelectedPotId: (id: string) => void;

  // Placed elements (flowers and leaves)
  placedElements: PlacedElement[];
  addElement: (element: Omit<PlacedElement, 'id' | 'zIndex'>) => void;
  updateElement: (id: string, updates: Partial<PlacedElement>) => void;
  removeElement: (id: string) => void;
  clearElements: () => void;

  // Selection
  selectedElementId: string | null;
  setSelectedElementId: (id: string | null) => void;

  // Drag state
  isDragging: boolean;
  draggedElementId: string | null;
  setDragState: (isDragging: boolean, elementId: string | null) => void;

  // Next z-index for layering
  nextZIndex: number;
}

export const useArrangementStore = create<ArrangementStore>((set, get) => ({
  selectedPotId: 'shallow-bowl-1', // Default pot
  setSelectedPotId: (id) => set({ selectedPotId: id }),

  placedElements: [],
  addElement: (element) => {
    const { nextZIndex } = get();
    const newElement: PlacedElement = {
      ...element,
      id: `element-${Date.now()}-${Math.random()}`,
      zIndex: nextZIndex,
    };
    set({
      placedElements: [...get().placedElements, newElement],
      nextZIndex: nextZIndex + 1,
    });
  },
  updateElement: (id, updates) =>
    set({
      placedElements: get().placedElements.map((el) =>
        el.id === id ? { ...el, ...updates } : el
      ),
    }),
  removeElement: (id) =>
    set({
      placedElements: get().placedElements.filter((el) => el.id !== id),
      selectedElementId: get().selectedElementId === id ? null : get().selectedElementId,
    }),
  clearElements: () => set({ placedElements: [], selectedElementId: null }),

  selectedElementId: null,
  setSelectedElementId: (id) => set({ selectedElementId: id }),

  isDragging: false,
  draggedElementId: null,
  setDragState: (isDragging, elementId) =>
    set({ isDragging, draggedElementId: elementId }),

  nextZIndex: 1,
}));
