import React from 'react';
import { Pot, Flower, Leaf } from '../../types';
import { useArrangementStore } from '../../contexts/useArrangementStore';
import { Pot as PotComponent } from '../Pot';
import { FlowerComponent } from '../Flower';
import { LeafComponent } from '../Leaf';

interface ItemCardProps {
  item: Pot | Flower | Leaf;
  itemType: 'pot' | 'flower' | 'leaf';
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, itemType }) => {
  const { selectedPotId, setSelectedPotId, addElement } = useArrangementStore();

  const handleClick = () => {
    if (itemType === 'pot') {
      setSelectedPotId(item.id);
    } else if (itemType === 'flower') {
      const flower = item as Flower;
      addElement({
        type: 'flower',
        elementType: flower.type,
        x: 400, // Default position in canvas center
        y: 300,
        rotation: 0,
        scale: 1,
      });
    } else if (itemType === 'leaf') {
      const leaf = item as Leaf;
      addElement({
        type: 'leaf',
        elementType: leaf.type,
        x: 400,
        y: 300,
        rotation: 0,
        scale: 1,
      });
    }
  };

  const isSelected = itemType === 'pot' && selectedPotId === item.id;

  return (
    <div
      onClick={handleClick}
      className={`
        p-3 rounded-zen cursor-pointer transition-all duration-200
        ${isSelected ? 'bg-accent-sakura border-2 border-accent-indigo' : 'bg-white hover:bg-primary-clay/30 border-2 border-transparent'}
        shadow-sm hover:shadow-zen
      `}
    >
      <div className="flex items-center space-x-3">
        {/* Preview */}
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-neutral-lightGray rounded-lg">
          {itemType === 'pot' && (
            <div className="scale-[0.2]">
              <PotComponent pot={item as Pot} />
            </div>
          )}
          {itemType === 'flower' && (
            <div className="scale-[0.3]">
              <FlowerComponent type={(item as Flower).type} color={(item as Flower).color} />
            </div>
          )}
          {itemType === 'leaf' && (
            <div className="scale-[0.3]">
              <LeafComponent type={(item as Leaf).type} color={(item as Leaf).color} />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-sm text-primary-charcoal font-medium truncate">
            {item.name}
          </h3>
          <p className="text-xs text-neutral-darkGray mt-0.5 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
