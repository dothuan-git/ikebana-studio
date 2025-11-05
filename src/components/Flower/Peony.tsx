import React from 'react';

interface PeonyProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const Peony: React.FC<PeonyProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={120 * scale}
      height={150 * scale}
      viewBox="0 0 120 150"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M 60 150 Q 58 110 60 80 Q 61 60 60 45"
        stroke="#6B8E23"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Large leaves */}
      <g>
        <path
          d="M 55 100 Q 40 95 30 100 Q 25 103 32 107 Q 45 112 55 108"
          fill="#8B9D83"
        />
        <path
          d="M 65 115 Q 80 110 90 115 Q 95 118 88 122 Q 75 127 65 123"
          fill="#8B9D83"
        />
      </g>

      {/* Outer ruffled petals - 10 petals */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i * 360) / 10;
        const x = 60 + 25 * Math.cos((angle * Math.PI) / 180);
        const y = 45 + 25 * Math.sin((angle * Math.PI) / 180);
        return (
          <path
            key={`outer-${i}`}
            d={`M ${x} ${y} Q ${x + 8 * Math.cos((angle * Math.PI) / 180)} ${y + 8 * Math.sin((angle * Math.PI) / 180)} ${x + 5 * Math.cos(((angle + 30) * Math.PI) / 180)} ${y + 5 * Math.sin(((angle + 30) * Math.PI) / 180)} Q ${x} ${y - 2} ${x + 5 * Math.cos(((angle - 30) * Math.PI) / 180)} ${y + 5 * Math.sin(((angle - 30) * Math.PI) / 180)} Z`}
            fill={color}
            opacity="0.8"
          />
        );
      })}

      {/* Middle layer - 8 petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        const x = 60 + 16 * Math.cos((angle * Math.PI) / 180);
        const y = 45 + 16 * Math.sin((angle * Math.PI) / 180);
        return (
          <ellipse
            key={`mid-${i}`}
            cx={x}
            cy={y}
            rx="7"
            ry="11"
            fill={color}
            opacity="0.9"
            transform={`rotate(${angle + 15} ${x} ${y})`}
          />
        );
      })}

      {/* Inner layer - 6 petals */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 360) / 6;
        const x = 60 + 8 * Math.cos((angle * Math.PI) / 180);
        const y = 45 + 8 * Math.sin((angle * Math.PI) / 180);
        return (
          <ellipse
            key={`inner-${i}`}
            cx={x}
            cy={y}
            rx="5"
            ry="9"
            fill={color}
            opacity="0.95"
            transform={`rotate(${angle - 10} ${x} ${y})`}
          />
        );
      })}

      {/* Center */}
      <circle cx="60" cy="45" r="6" fill="#F4D03F" />
      <circle cx="60" cy="45" r="4" fill="#F39C12" />
    </svg>
  );
};
