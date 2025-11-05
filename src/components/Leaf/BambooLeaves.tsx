import React from 'react';

interface BambooLeavesProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const BambooLeaves: React.FC<BambooLeavesProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={80 * scale}
      height={140 * scale}
      viewBox="0 0 80 140"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main bamboo stalk with segments */}
      <rect x="37" y="0" width="6" height="140" fill="#6B8E23" rx="2" />

      {/* Segment lines */}
      <line x1="35" y1="30" x2="45" y2="30" stroke="#556B2F" strokeWidth="2" />
      <line x1="35" y1="60" x2="45" y2="60" stroke="#556B2F" strokeWidth="2" />
      <line x1="35" y1="90" x2="45" y2="90" stroke="#556B2F" strokeWidth="2" />
      <line x1="35" y1="120" x2="45" y2="120" stroke="#556B2F" strokeWidth="2" />

      {/* Long narrow leaves */}
      {[15, 45, 75, 105].map((y, i) => {
        const isLeft = i % 2 === 0;
        const x = isLeft ? 25 : 55;
        const rotation = isLeft ? -35 : 35;
        return (
          <g key={i}>
            <ellipse
              cx={x}
              cy={y}
              rx="3"
              ry="20"
              fill={color}
              transform={`rotate(${rotation} ${x} ${y})`}
            />
            <path
              d={`M ${x} ${y - 18} L ${x} ${y + 18}`}
              stroke="#556B2F"
              strokeWidth="0.5"
              opacity="0.6"
              transform={`rotate(${rotation} ${x} ${y})`}
            />
          </g>
        );
      })}
    </svg>
  );
};
