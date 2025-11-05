import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PlacedElement } from '../../types';
import { useArrangementStore } from '../../contexts/useArrangementStore';
import { FlowerComponent } from '../Flower';
import { LeafComponent } from '../Leaf';
import { FLOWERS, LEAVES } from '../../constants';

interface PlacedElementComponentProps {
  element: PlacedElement;
}

export const PlacedElementComponent: React.FC<PlacedElementComponentProps> = ({ element }) => {
  const {
    updateElement,
    removeElement,
    selectedElementId,
    setSelectedElementId,
    setDragState,
  } = useArrangementStore();

  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const isSelected = selectedElementId === element.id;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left click
    e.stopPropagation();
    setSelectedElementId(element.id);
    setIsDragging(true);
    setDragState(true, element.id);
    dragStartPos.current = { x: e.clientX - element.x, y: e.clientY - element.y };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newX = moveEvent.clientX - dragStartPos.current.x;
      const newY = moveEvent.clientY - dragStartPos.current.y;
      updateElement(element.id, { x: newX, y: newY });

      // Check if over trash zone
      const trashZone = document.getElementById('trash-zone');
      if (trashZone) {
        const rect = trashZone.getBoundingClientRect();
        const isOverTrash =
          moveEvent.clientX >= rect.left &&
          moveEvent.clientX <= rect.right &&
          moveEvent.clientY >= rect.top &&
          moveEvent.clientY <= rect.bottom;

        if (isOverTrash) {
          trashZone.setAttribute('data-hover', 'true');
        } else {
          trashZone.removeAttribute('data-hover');
        }
      }
    };

    const handleMouseUp = (upEvent: MouseEvent) => {
      // Check if released over trash zone
      const trashZone = document.getElementById('trash-zone');
      if (trashZone) {
        const rect = trashZone.getBoundingClientRect();
        const isOverTrash =
          upEvent.clientX >= rect.left &&
          upEvent.clientX <= rect.right &&
          upEvent.clientY >= rect.top &&
          upEvent.clientY <= rect.bottom;

        if (isOverTrash) {
          removeElement(element.id);
        }

        trashZone.removeAttribute('data-hover');
      }

      setIsDragging(false);
      setDragState(false, null);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!isSelected) return;
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    const newScale = Math.max(0.3, Math.min(3, element.scale + delta));
    updateElement(element.id, { scale: newScale });
  };

  React.useEffect(() => {
    if (!isSelected) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        removeElement(element.id);
      }
      // Resize with +/- keys
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        const newScale = Math.min(3, element.scale + 0.1);
        updateElement(element.id, { scale: newScale });
      }
      if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        const newScale = Math.max(0.3, element.scale - 0.1);
        updateElement(element.id, { scale: newScale });
      }
      // Rotate with [ and ] keys
      if (e.key === '[') {
        e.preventDefault();
        updateElement(element.id, { rotation: element.rotation - 15 });
      }
      if (e.key === ']') {
        e.preventDefault();
        updateElement(element.id, { rotation: element.rotation + 15 });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSelected, element.id, element.scale, element.rotation, removeElement, updateElement]);

  // Get the element details
  let color = '#000000';
  if (element.type === 'flower') {
    const flower = FLOWERS.find((f) => f.type === element.elementType);
    color = flower?.color || color;
  } else {
    const leaf = LEAVES.find((l) => l.type === element.elementType);
    color = leaf?.color || color;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'absolute',
        left: element.x,
        top: element.y,
        zIndex: isDragging ? 9999 : element.zIndex,
        cursor: isDragging ? 'grabbing' : 'grab',
        transform: `scale(${element.scale}) rotate(${element.rotation}deg)`,
        transformOrigin: 'center center',
      }}
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      className={`${isSelected ? 'ring-2 ring-accent-indigo ring-offset-2' : ''}`}
    >
      {element.type === 'flower' ? (
        <FlowerComponent
          type={element.elementType as any}
          color={color}
          branchSize={element.branchSize}
          flowerSize={element.flowerSize}
        />
      ) : (
        <LeafComponent
          type={element.elementType as any}
          color={color}
          leafSize={element.leafSize}
        />
      )}
    </motion.div>
  );
};
