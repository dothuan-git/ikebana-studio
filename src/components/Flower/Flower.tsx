import React from 'react';
import { FlowerType } from '../../types';
import { CherryBlossom } from './CherryBlossom';
import { Chrysanthemum } from './Chrysanthemum';
import { Iris } from './Iris';
import { PlumBlossom } from './PlumBlossom';
import { Forsythia } from './Forsythia';
import { Lily } from './Lily';
import { Peony } from './Peony';
import { Jasmine } from './Jasmine';
import { Lotus } from './Lotus';
import { Camellia } from './Camellia';
import { Hydrangea } from './Hydrangea';
import { Magnolia } from './Magnolia';
import { Wisteria } from './Wisteria';

interface FlowerProps {
  type: FlowerType;
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const FlowerComponent: React.FC<FlowerProps> = ({
  type,
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  const commonProps = {
    color,
    scale,
    rotation,
    className,
  };

  switch (type) {
    case 'cherry-blossom':
      return <CherryBlossom {...commonProps} />;
    case 'chrysanthemum':
      return <Chrysanthemum {...commonProps} />;
    case 'iris':
      return <Iris {...commonProps} />;
    case 'plum-blossom':
      return <PlumBlossom {...commonProps} />;
    case 'forsythia':
      return <Forsythia {...commonProps} />;
    case 'lily':
      return <Lily {...commonProps} />;
    case 'peony':
      return <Peony {...commonProps} />;
    case 'jasmine':
      return <Jasmine {...commonProps} />;
    case 'lotus':
      return <Lotus {...commonProps} />;
    case 'camellia':
      return <Camellia {...commonProps} />;
    case 'hydrangea':
      return <Hydrangea {...commonProps} />;
    case 'magnolia':
      return <Magnolia {...commonProps} />;
    case 'wisteria':
      return <Wisteria {...commonProps} />;
    default:
      return null;
  }
};
