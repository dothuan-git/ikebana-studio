import React from 'react';

interface ForsythiaProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const Forsythia: React.FC<ForsythiaProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={75 * scale}
      height={130 * scale}
      viewBox="0 0 75 130"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M 37 130 Q 36 100 37 70 Q 38 50 37 30"
        stroke="#6B8E23"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Small leaves */}
      <ellipse cx="33" cy="80" rx="6" ry="3" fill="#8B9D83" transform="rotate(-35 33 80)" />
      <ellipse cx="41" cy="95" rx="6" ry="3" fill="#8B9D83" transform="rotate(35 41 95)" />

      {/* Main flower - 4 petals in cross pattern */}
      {[0, 90, 180, 270].map((angle, i) => {
        const x = 37 + 10 * Math.cos((angle * Math.PI) / 180);
        const y = 30 + 10 * Math.sin((angle * Math.PI) / 180);
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="5"
            ry="10"
            fill={color}
            stroke={color}
            strokeWidth="1"
            opacity="0.95"
            transform={`rotate(${angle} ${x} ${y})`}
          />
        );
      })}

      {/* Center */}
      <circle cx="37" cy="30" r="3" fill="#F39C12" />

      {/* Additional small buds on stem */}
      <g>
        <ellipse cx="30" cy="50" rx="3" ry="5" fill={color} opacity="0.8" />
        <ellipse cx="44" cy="60" rx="3" ry="5" fill={color} opacity="0.8" />
      </g>
    </svg>
  );
};
