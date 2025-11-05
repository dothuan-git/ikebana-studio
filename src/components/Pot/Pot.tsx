import React from 'react';
import { Pot as PotType } from '../../types';
import { ShallowBowl } from './ShallowBowl';
import { TallVase } from './TallVase';
import { RectangularContainer } from './RectangularContainer';
import { AsymmetricVessel } from './AsymmetricVessel';
import { RusticPot } from './RusticPot';

interface PotProps {
  pot: PotType;
  className?: string;
}

export const Pot: React.FC<PotProps> = ({ pot, className = '' }) => {
  const commonProps = {
    color: pot.color,
    width: pot.width,
    height: pot.height,
    className,
  };

  switch (pot.type) {
    case 'shallow-bowl':
      return <ShallowBowl {...commonProps} />;
    case 'tall-vase':
      return <TallVase {...commonProps} />;
    case 'rectangular':
      return <RectangularContainer {...commonProps} />;
    case 'asymmetric':
      return <AsymmetricVessel {...commonProps} />;
    case 'rustic':
      return <RusticPot {...commonProps} />;
    default:
      return null;
  }
};
