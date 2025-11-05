import React from 'react';

interface CamelliaProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const Camellia: React.FC<CamelliaProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={100 * scale}
      height={130 * scale}
      viewBox="0 0 100 130"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M 50 130 Q 49 100 50 70 Q 51 50 50 35"
        stroke="#6B8E23"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <ellipse cx="44" cy="85" rx="10" ry="5" fill="#556B2F" transform="rotate(-30 44 85)" />
      <ellipse cx="56" cy="95" rx="10" ry="5" fill="#556B2F" transform="rotate(30 56 95)" />

      {/* Rounded petals - 7 petals */}
      {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((angle, i) => {
        const x = 50 + 18 * Math.cos((angle * Math.PI) / 180);
        const y = 35 + 18 * Math.sin((angle * Math.PI) / 180);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="11"
            fill={color}
            opacity="0.9"
          />
        );
      })}

      {/* Inner petals overlay */}
      <circle cx="50" cy="35" r="15" fill={color} opacity="0.95" />

      {/* Center stamens */}
      <circle cx="50" cy="35" r="6" fill="#F4D03F" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        const x = 50 + 4 * Math.cos((angle * Math.PI) / 180);
        const y = 35 + 4 * Math.sin((angle * Math.PI) / 180);
        return (
          <line
            key={`stamen-${i}`}
            x1="50"
            y1="35"
            x2={x}
            y2={y}
            stroke="#8B4513"
            strokeWidth="0.8"
          />
        );
      })}
    </svg>
  );
};
