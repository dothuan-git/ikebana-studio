import React, { useState } from 'react';
import { POTS, FLOWERS, LEAVES } from '../../constants';
import { ItemCard } from './ItemCard';

export const Sidebar: React.FC = () => {
  const [openSection, setOpenSection] = useState<'pots' | 'flowers' | 'leaves'>('flowers');

  const toggleSection = (section: 'pots' | 'flowers' | 'leaves') => {
    setOpenSection(openSection === section ? openSection : section);
  };

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 bg-primary-sand border-r-2 border-primary-clay overflow-y-auto shadow-zen z-20">
      {/* Header */}
      <div className="p-4 border-b border-primary-clay">
        <h2 className="text-2xl font-serif text-primary-charcoal">Elements</h2>
        <p className="text-sm text-neutral-darkGray mt-1">Select items to arrange</p>
      </div>

      {/* Pots Section */}
      <div className="border-b border-primary-clay">
        <button
          onClick={() => toggleSection('pots')}
          className="w-full px-4 py-3 text-left font-serif text-lg text-primary-charcoal hover:bg-primary-clay/20 transition-colors flex justify-between items-center"
        >
          <span>Pots</span>
          <span className="text-2xl">{openSection === 'pots' ? '−' : '+'}</span>
        </button>
        {openSection === 'pots' && (
          <div className="p-3 space-y-2">
            {POTS.map((pot) => (
              <ItemCard key={pot.id} item={pot} itemType="pot" />
            ))}
          </div>
        )}
      </div>

      {/* Flowers Section */}
      <div className="border-b border-primary-clay">
        <button
          onClick={() => toggleSection('flowers')}
          className="w-full px-4 py-3 text-left font-serif text-lg text-primary-charcoal hover:bg-primary-clay/20 transition-colors flex justify-between items-center"
        >
          <span>Flowers</span>
          <span className="text-2xl">{openSection === 'flowers' ? '−' : '+'}</span>
        </button>
        {openSection === 'flowers' && (
          <div className="p-3 space-y-2">
            {FLOWERS.map((flower) => (
              <ItemCard key={flower.id} item={flower} itemType="flower" />
            ))}
          </div>
        )}
      </div>

      {/* Leaves Section */}
      <div className="border-b border-primary-clay">
        <button
          onClick={() => toggleSection('leaves')}
          className="w-full px-4 py-3 text-left font-serif text-lg text-primary-charcoal hover:bg-primary-clay/20 transition-colors flex justify-between items-center"
        >
          <span>Leaves & Foliage</span>
          <span className="text-2xl">{openSection === 'leaves' ? '−' : '+'}</span>
        </button>
        {openSection === 'leaves' && (
          <div className="p-3 space-y-2">
            {LEAVES.map((leaf) => (
              <ItemCard key={leaf.id} item={leaf} itemType="leaf" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
