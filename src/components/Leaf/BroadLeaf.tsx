import React from 'react';

interface BroadLeafProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
  leafSize?: number;
}

export const BroadLeaf: React.FC<BroadLeafProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = '',
  leafSize = 1
}) => {
  return (
    <svg
      width={80 * scale}
      height={110 * scale}
      viewBox="0 0 80 110"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* All leaf elements */}
      <g transform={`scale(${leafSize})`} transformOrigin="40 55">
        {/* Stem */}
        <path
          d="M 40 110 L 40 60"
          stroke="#6B8E23"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Simple oval leaf */}
        <ellipse
          cx="40"
          cy="35"
          rx="30"
          ry="40"
          fill={color}
          stroke={color}
          strokeWidth="1"
        />

        {/* Central vein */}
        <path
          d="M 40 60 L 40 10"
          stroke="#556B2F"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Side veins */}
        {Array.from({ length: 6 }).map((_, i) => {
          const y = 20 + i * 7;
          const width = 15 - Math.abs(i - 2.5) * 3;
          return (
            <g key={i}>
              <path
                d={`M 40 ${y} Q 45 ${y + 2} ${40 + width} ${y + 5}`}
                stroke="#556B2F"
                strokeWidth="0.8"
                fill="none"
                opacity="0.4"
              />
              <path
                d={`M 40 ${y} Q 35 ${y + 2} ${40 - width} ${y + 5}`}
                stroke="#556B2F"
                strokeWidth="0.8"
                fill="none"
                opacity="0.4"
              />
            </g>
          );
        })}

        {/* Highlight */}
        <ellipse
          cx="30"
          cy="25"
          rx="8"
          ry="12"
          fill="white"
          opacity="0.2"
        />
      </g>
    </svg>
  );
};
