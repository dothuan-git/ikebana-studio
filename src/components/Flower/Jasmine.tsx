import React from 'react';

interface JasmineProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const Jasmine: React.FC<JasmineProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={70 * scale}
      height={110 * scale}
      viewBox="0 0 70 110"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Thin stem */}
      <path
        d="M 35 110 Q 34 85 35 60 Q 36 40 35 20"
        stroke="#6B8E23"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Tiny leaves */}
      <ellipse cx="32" cy="65" rx="5" ry="2" fill="#8B9D83" transform="rotate(-30 32 65)" />
      <ellipse cx="38" cy="75" rx="5" ry="2" fill="#8B9D83" transform="rotate(30 38 75)" />

      {/* Small 5-petal flower */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const x = 35 + 8 * Math.cos((angle * Math.PI) / 180);
        const y = 20 + 8 * Math.sin((angle * Math.PI) / 180);
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="4"
            ry="6"
            fill={color}
            opacity="0.95"
            transform={`rotate(${angle} ${x} ${y})`}
          />
        );
      })}

      {/* Center */}
      <circle cx="35" cy="20" r="2.5" fill="#F4D03F" />

      {/* Additional small buds */}
      <g opacity="0.7">
        <ellipse cx="28" cy="35" rx="2" ry="3" fill={color} />
        <ellipse cx="42" cy="42" rx="2" ry="3" fill={color} />
      </g>
    </svg>
  );
};
