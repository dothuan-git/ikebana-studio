import React from 'react';

interface ChrysanthemumProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
  branchSize?: number;
  flowerSize?: number;
}

export const Chrysanthemum: React.FC<ChrysanthemumProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = '',
  branchSize = 1,
  flowerSize = 1
}) => {
  return (
    <svg
      width={100 * scale}
      height={140 * scale}
      viewBox="0 0 100 140"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <g transform={`scale(1, ${branchSize})`} transform-origin="50 30">
        <path
          d="M 50 140 Q 48 100 50 70 Q 51 50 50 30"
          stroke="#6B8E23"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Leaves */}
        <path
          d="M 48 90 Q 35 88 28 92 Q 25 94 30 96 Q 40 98 48 95"
          fill="#8B9D83"
        />
        <path
          d="M 52 105 Q 65 103 72 107 Q 75 109 70 111 Q 60 113 52 110"
          fill="#8B9D83"
        />
      </g>

      {/* Flower bloom */}
      <g transform={`translate(50, 30) scale(${flowerSize}) translate(-50, -30)`}>
        {/* Multiple layers of petals */}
        {/* Outer layer - 12 petals */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const x = 50 + 20 * Math.cos((angle * Math.PI) / 180);
          const y = 30 + 20 * Math.sin((angle * Math.PI) / 180);
          return (
            <ellipse
              key={`outer-${i}`}
              cx={x}
              cy={y}
              rx="6"
              ry="12"
              fill={color}
              opacity="0.85"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}

        {/* Middle layer - 8 petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8 + 22.5;
          const x = 50 + 12 * Math.cos((angle * Math.PI) / 180);
          const y = 30 + 12 * Math.sin((angle * Math.PI) / 180);
          return (
            <ellipse
              key={`mid-${i}`}
              cx={x}
              cy={y}
              rx="5"
              ry="10"
              fill={color}
              opacity="0.9"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}

        {/* Inner layer - 6 petals */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 6;
          const x = 50 + 6 * Math.cos((angle * Math.PI) / 180);
          const y = 30 + 6 * Math.sin((angle * Math.PI) / 180);
          return (
            <ellipse
              key={`inner-${i}`}
              cx={x}
              cy={y}
              rx="4"
              ry="8"
              fill={color}
              opacity="0.95"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}

        {/* Center */}
        <circle cx="50" cy="30" r="5" fill="#F4D03F" />
      </g>
    </svg>
  );
};
