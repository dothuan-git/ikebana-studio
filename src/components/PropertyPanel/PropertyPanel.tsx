import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlacedElement } from '../../types';
import { useArrangementStore } from '../../contexts/useArrangementStore';
import { FLOWERS, LEAVES } from '../../constants';

interface PropertyPanelProps {
  element: PlacedElement | null;
}

export const PropertyPanel: React.FC<PropertyPanelProps> = ({ element }) => {
  const { updateElement } = useArrangementStore();

  if (!element) return null;

  // Get element name
  let elementName = '';
  let elementColor = '#000000';
  if (element.type === 'flower') {
    const flower = FLOWERS.find((f) => f.type === element.elementType);
    elementName = flower?.name || element.elementType;
    elementColor = flower?.color || elementColor;
  } else {
    const leaf = LEAVES.find((l) => l.type === element.elementType);
    elementName = leaf?.name || element.elementType;
    elementColor = leaf?.color || elementColor;
  }

  const handleScaleChange = (newScale: number) => {
    updateElement(element.id, { scale: newScale });
  };

  const handleRotationChange = (newRotation: number) => {
    updateElement(element.id, { rotation: newRotation });
  };

  const handleBranchSizeChange = (newSize: number) => {
    updateElement(element.id, { branchSize: newSize });
  };

  const handleFlowerSizeChange = (newSize: number) => {
    updateElement(element.id, { flowerSize: newSize });
  };

  const handleLeafSizeChange = (newSize: number) => {
    updateElement(element.id, { leafSize: newSize });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 0.3 }}
        className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-72 bg-white shadow-lg border-l border-gray-200 overflow-y-auto z-30"
      >
        <div className="p-6">
          {/* Header */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-6 h-6 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: elementColor }}
              />
              <h2 className="text-lg font-semibold text-gray-900">{elementName}</h2>
            </div>
            <p className="text-sm text-gray-500">{element.type.charAt(0).toUpperCase() + element.type.slice(1)}</p>
          </div>

          {/* Scale Property */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Overall Size: {element.scale.toFixed(2)}x
            </label>
            <input
              type="range"
              min="0.3"
              max="3"
              step="0.1"
              value={element.scale}
              onChange={(e) => handleScaleChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.3x</span>
              <span>3x</span>
            </div>
          </div>

          {/* Rotation Property */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rotation: {element.rotation}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              step="15"
              value={element.rotation}
              onChange={(e) => handleRotationChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0°</span>
              <span>360°</span>
            </div>
          </div>

          <div className="border-t border-gray-200 my-6" />

          {/* Branch Size (for flowers) */}
          {element.type === 'flower' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Branch Size: {element.branchSize !== undefined ? element.branchSize.toFixed(2) : '1.00'}
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={element.branchSize !== undefined ? element.branchSize : 1}
                onChange={(e) => handleBranchSizeChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-accent-indigo/30 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.5x</span>
                <span>2x</span>
              </div>
            </div>
          )}

          {/* Flower Size */}
          {element.type === 'flower' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Flower Size: {element.flowerSize !== undefined ? element.flowerSize.toFixed(2) : '1.00'}
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={element.flowerSize !== undefined ? element.flowerSize : 1}
                onChange={(e) => handleFlowerSizeChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-accent-indigo/30 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.5x</span>
                <span>2x</span>
              </div>
            </div>
          )}

          {/* Leaf Size */}
          {element.type === 'leaf' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leaf Size: {element.leafSize !== undefined ? element.leafSize.toFixed(2) : '1.00'}
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={element.leafSize !== undefined ? element.leafSize : 1}
                onChange={(e) => handleLeafSizeChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-accent-indigo/30 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.5x</span>
                <span>2x</span>
              </div>
            </div>
          )}

          {/* Info */}
          <div className="border-t border-gray-200 mt-6 pt-4">
            <p className="text-xs text-gray-500">
              • Scroll or +/- to adjust overall size
              <br />
              • [ / ] keys to rotate
              <br />
              • Delete or drag to trash to remove
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
