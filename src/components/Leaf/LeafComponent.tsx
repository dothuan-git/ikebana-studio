import React from 'react';
import { LeafType } from '../../types';
import { BambooLeaves } from './BambooLeaves';
import { MapleLeaf } from './MapleLeaf';
import { FernFrond } from './FernFrond';
import { BroadLeaf } from './BroadLeaf';
import { PineNeedles } from './PineNeedles';
import { WillowBranch } from './WillowBranch';

interface LeafProps {
  type: LeafType;
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const LeafComponent: React.FC<LeafProps> = ({
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
    case 'bamboo':
      return <BambooLeaves {...commonProps} />;
    case 'maple':
      return <MapleLeaf {...commonProps} />;
    case 'fern':
      return <FernFrond {...commonProps} />;
    case 'broad':
      return <BroadLeaf {...commonProps} />;
    case 'pine':
      return <PineNeedles {...commonProps} />;
    case 'willow':
      return <WillowBranch {...commonProps} />;
    default:
      return null;
  }
};
