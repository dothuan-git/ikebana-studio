import React from 'react';

interface MapleLeafProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const MapleLeaf: React.FC<MapleLeafProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={90 * scale}
      height={100 * scale}
      viewBox="0 0 90 100"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M 45 100 L 45 60"
        stroke="#8B4513"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 5-pointed maple leaf shape */}
      <path
        d="M 45 20 L 50 35 L 65 30 L 55 45 L 70 55 L 52 55 L 50 70 L 45 55 L 40 70 L 38 55 L 20 55 L 35 45 L 25 30 L 40 35 Z"
        fill={color}
        stroke={color}
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Veins */}
      <path d="M 45 55 L 45 25" stroke="#556B2F" strokeWidth="1" opacity="0.4" />
      <path d="M 45 50 L 30 40" stroke="#556B2F" strokeWidth="0.8" opacity="0.4" />
      <path d="M 45 50 L 60 40" stroke="#556B2F" strokeWidth="0.8" opacity="0.4" />
      <path d="M 45 50 L 25 55" stroke="#556B2F" strokeWidth="0.8" opacity="0.4" />
      <path d="M 45 50 L 65 55" stroke="#556B2F" strokeWidth="0.8" opacity="0.4" />

      {/* Serrated edges effect */}
      <path
        d="M 50 35 L 65 30 L 55 45 L 70 55 L 52 55"
        fill="none"
        stroke="black"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
};
