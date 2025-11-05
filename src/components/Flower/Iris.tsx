import React from 'react';

interface IrisProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const Iris: React.FC<IrisProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={90 * scale}
      height={150 * scale}
      viewBox="0 0 90 150"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M 45 150 Q 44 110 45 80 Q 46 60 45 40"
        stroke="#6B8E23"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Long leaves */}
      <path
        d="M 40 120 Q 25 100 22 70 Q 21 50 23 45"
        stroke="#556B2F"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 50 125 Q 65 105 68 75 Q 69 55 67 50"
        stroke="#556B2F"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* 3 upright petals */}
      {[0, 120, 240].map((angle, i) => {
        const x = 45 + 8 * Math.cos((angle * Math.PI) / 180);
        const y = 30 + 8 * Math.sin((angle * Math.PI) / 180);
        return (
          <ellipse
            key={`up-${i}`}
            cx={x}
            cy={y - 10}
            rx="6"
            ry="15"
            fill={color}
            stroke={color}
            strokeWidth="1"
            opacity="0.9"
            transform={`rotate(${angle} ${x} ${y})`}
          />
        );
      })}

      {/* 3 drooping petals */}
      {[60, 180, 300].map((angle, i) => {
        const x = 45 + 14 * Math.cos((angle * Math.PI) / 180);
        const y = 30 + 14 * Math.sin((angle * Math.PI) / 180);
        return (
          <path
            key={`down-${i}`}
            d={`M ${x} ${y} Q ${x + 5 * Math.cos((angle * Math.PI) / 180)} ${y + 15} ${x} ${y + 20}`}
            fill={color}
            opacity="0.85"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
          />
        );
      })}

      {/* Center */}
      <circle cx="45" cy="30" r="4" fill="#F4D03F" />
    </svg>
  );
};
