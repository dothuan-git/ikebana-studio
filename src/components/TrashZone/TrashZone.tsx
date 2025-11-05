import React, { useState } from 'react';
import { useArrangementStore } from '../../contexts/useArrangementStore';

export const TrashZone: React.FC = () => {
  const { draggedElementId, removeElement, selectedElementId } = useArrangementStore();
  const [isHovering, setIsHovering] = useState(false);
  const trashRef = React.useRef<HTMLDivElement>(null);

  // Monitor for hover state from dragging elements
  React.useEffect(() => {
    const checkHover = () => {
      if (trashRef.current) {
        const hasHover = trashRef.current.getAttribute('data-hover') === 'true';
        setIsHovering(hasHover);
      }
    };

    const interval = setInterval(checkHover, 50);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    // Delete currently selected element when trash is clicked
    if (selectedElementId) {
      removeElement(selectedElementId);
    }
  };

  return (
    <div
      id="trash-zone"
      ref={trashRef}
      className={`
        fixed bottom-8 right-8 w-20 h-20 rounded-full z-[100]
        flex items-center justify-center transition-all duration-300 pointer-events-auto
        ${isHovering || draggedElementId ? 'bg-red-400 scale-110 shadow-zen-lg' : 'bg-neutral-mediumGray shadow-zen'}
        ${isHovering ? 'ring-4 ring-red-300' : ''}
        cursor-pointer hover:scale-105
      `}
      onClick={handleClick}
    >
      {/* Trash icon */}
      <svg
        className={`w-10 h-10 ${isHovering ? 'text-white' : 'text-neutral-white'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  );
};
