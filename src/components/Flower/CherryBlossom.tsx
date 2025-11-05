import React from 'react';

interface CherryBlossomProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
  branchSize?: number;
  flowerSize?: number;
}

export const CherryBlossom: React.FC<CherryBlossomProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = '',
  branchSize = 1,
  flowerSize = 1
}) => {
  return (
    <svg
      width={80 * scale}
      height={120 * scale}
      viewBox="0 0 80 120"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <g transform={`scale(1, ${branchSize})`} transform-origin="40 20">
        <path
          d="M 40 120 Q 38 90 40 60 Q 41 40 40 20"
          stroke="#6B8E23"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Leaves on stem */}
        <ellipse cx="35" cy="70" rx="8" ry="4" fill="#8B9D83" transform="rotate(-30 35 70)" />
        <ellipse cx="45" cy="85" rx="8" ry="4" fill="#8B9D83" transform="rotate(30 45 85)" />
      </g>

      {/* Flower bloom */}
      <g transform={`translate(40, 20) scale(${flowerSize}) translate(-40, -20)`}>
        {/* Flower center */}
        <circle cx="40" cy="20" r="4" fill="#F4D03F" />

        {/* 5 Petals arranged in circle */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const x = 40 + 12 * Math.cos((angle * Math.PI) / 180);
          const y = 20 + 12 * Math.sin((angle * Math.PI) / 180);
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="8"
              ry="6"
              fill={color}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.9"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}

        {/* Petal highlights */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const x = 40 + 12 * Math.cos((angle * Math.PI) / 180);
          const y = 20 + 12 * Math.sin((angle * Math.PI) / 180);
          return (
            <ellipse
              key={`h-${i}`}
              cx={x - 1}
              cy={y - 1}
              rx="3"
              ry="2"
              fill="white"
              opacity="0.4"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}
      </g>
    </svg>
  );
};
