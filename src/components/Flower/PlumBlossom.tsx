import React from 'react';

interface PlumBlossomProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
  branchSize?: number;
  flowerSize?: number;
}

export const PlumBlossom: React.FC<PlumBlossomProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = '',
  branchSize = 1,
  flowerSize = 1
}) => {
  return (
    <svg
      width={85 * scale}
      height={125 * scale}
      viewBox="0 0 85 125"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem with slight curve */}
      <g transform={`scale(1, ${branchSize})`} transform-origin="42 125">
        <path
          d="M 42 125 Q 40 95 42 65 Q 43 45 42 25"
          stroke="#5D4E37"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Small leaves */}
        <ellipse cx="38" cy="75" rx="7" ry="3" fill="#8B9D83" transform="rotate(-40 38 75)" />
        <ellipse cx="46" cy="90" rx="7" ry="3" fill="#8B9D83" transform="rotate(40 46 90)" />
      </g>

      {/* Flower bloom */}
      <g transform={`translate(42, 25) scale(${flowerSize}) translate(-42, -25)`}>
        {/* 5 rounded petals */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const x = 42 + 13 * Math.cos((angle * Math.PI) / 180);
          const y = 25 + 13 * Math.sin((angle * Math.PI) / 180);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="9"
              fill={color}
              opacity="0.9"
            />
          );
        })}

        {/* Petal highlights */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const x = 42 + 13 * Math.cos((angle * Math.PI) / 180);
          const y = 25 + 13 * Math.sin((angle * Math.PI) / 180);
          return (
            <ellipse
              key={`h-${i}`}
              cx={x - 2}
              cy={y - 2}
              rx="3"
              ry="2"
              fill="white"
              opacity="0.5"
            />
          );
        })}

        {/* Center with stamens */}
        <circle cx="42" cy="25" r="5" fill="#F4D03F" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const x = 42 + 3 * Math.cos((angle * Math.PI) / 180);
          const y = 25 + 3 * Math.sin((angle * Math.PI) / 180);
          return (
            <line
              key={`stamen-${i}`}
              x1="42"
              y1="25"
              x2={x}
              y2={y}
              stroke="#8B4513"
              strokeWidth="0.5"
            />
          );
        })}
      </g>
    </svg>
  );
};
