import React, { useRef } from 'react';
import { useArrangementStore } from '../../contexts/useArrangementStore';
import { POTS } from '../../constants';
import { Pot } from '../Pot';
import { PlacedElementComponent } from './PlacedElementComponent';

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { selectedPotId, placedElements } = useArrangementStore();
  const selectedPot = POTS.find((p) => p.id === selectedPotId);

  if (!selectedPot) return null;

  return (
    <div
      ref={canvasRef}
      id="arrangement-canvas"
      className="flex-1 ml-72 mt-16 h-[calc(100vh-4rem)] bg-primary-sand overflow-hidden relative"
    >
      {/* Main arrangement area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Pot */}
          <div className="relative z-0">
            <Pot pot={selectedPot} />
          </div>

          {/* Placed elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            {placedElements
              .sort((a, b) => a.zIndex - b.zIndex)
              .map((element) => (
                <PlacedElementComponent key={element.id} element={element} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
