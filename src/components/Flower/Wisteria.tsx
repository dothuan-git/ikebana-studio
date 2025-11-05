import React from 'react';

interface WisteriaProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const Wisteria: React.FC<WisteriaProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={90 * scale}
      height={180 * scale}
      viewBox="0 0 90 180"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main cascading stem */}
      <path
        d="M 45 0 Q 46 30 44 60 Q 43 90 45 120 Q 46 150 45 180"
        stroke="#8B7355"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Cascading flower clusters */}
      {Array.from({ length: 12 }).map((_, i) => {
        const y = 20 + i * 13;
        const sway = Math.sin(i * 0.5) * 4;
        return (
          <g key={i}>
            {/* Small 5-petal flower */}
            {[0, 72, 144, 216, 288].map((angle, j) => {
              const x = 45 + sway + 4 * Math.cos((angle * Math.PI) / 180);
              const flowerY = y + 4 * Math.sin((angle * Math.PI) / 180);
              return (
                <ellipse
                  key={j}
                  cx={x}
                  cy={flowerY}
                  rx="2.5"
                  ry="4"
                  fill={color}
                  opacity={0.9 - i * 0.05}
                  transform={`rotate(${angle} ${x} ${flowerY})`}
                />
              );
            })}
            <circle cx={45 + sway} cy={y} r="1.5" fill="#F4D03F" opacity={0.9 - i * 0.05} />
          </g>
        );
      })}

      {/* Small leaves */}
      <ellipse cx="38" cy="40" rx="6" ry="3" fill="#8B9D83" transform="rotate(-20 38 40)" />
      <ellipse cx="52" cy="60" rx="6" ry="3" fill="#8B9D83" transform="rotate(20 52 60)" />
    </svg>
  );
};
