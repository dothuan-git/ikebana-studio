import React from 'react';

interface LotusProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
  branchSize?: number;
  flowerSize?: number;
}

export const Lotus: React.FC<LotusProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = '',
  branchSize = 1,
  flowerSize = 1
}) => {
  return (
    <svg
      width={130 * scale}
      height={150 * scale}
      viewBox="0 0 130 150"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem and leaf */}
      <g transform={`scale(1, ${branchSize})`} transformOrigin="65 150">
        <path
          d="M 65 150 Q 64 110 65 80 Q 66 60 65 45"
          stroke="#6B8E23"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Large leaf on water */}
        <ellipse cx="30" cy="135" rx="20" ry="15" fill="#8B9D83" opacity="0.7" />
      </g>

      {/* Flower petals and center */}
      <g transform={`translate(65, 45) scale(${flowerSize}) translate(-65, -45)`}>
        {/* Outer petals - 8 petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const x = 65 + 28 * Math.cos((angle * Math.PI) / 180);
          const y = 45 + 28 * Math.sin((angle * Math.PI) / 180);
          return (
            <ellipse
              key={`outer-${i}`}
              cx={x}
              cy={y}
              rx="10"
              ry="20"
              fill={color}
              opacity="0.85"
              transform={`rotate(${angle + 90} ${x} ${y})`}
            />
          );
        })}

        {/* Middle petals - 6 petals */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 6 + 30;
          const x = 65 + 16 * Math.cos((angle * Math.PI) / 180);
          const y = 45 + 16 * Math.sin((angle * Math.PI) / 180);
          return (
            <ellipse
              key={`mid-${i}`}
              cx={x}
              cy={y}
              rx="8"
              ry="16"
              fill={color}
              opacity="0.9"
              transform={`rotate(${angle + 90} ${x} ${y})`}
            />
          );
        })}

        {/* Center - sacred seed pod */}
        <circle cx="65" cy="45" r="8" fill="#F4D03F" />
        {/* Seed dots */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const x = 65 + 4 * Math.cos((angle * Math.PI) / 180);
          const y = 45 + 4 * Math.sin((angle * Math.PI) / 180);
          return <circle key={`seed-${i}`} cx={x} cy={y} r="1.5" fill="#8B4513" />;
        })}
      </g>
    </svg>
  );
};
