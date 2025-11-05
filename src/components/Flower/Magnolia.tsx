import React from 'react';

interface MagnoliaProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
  branchSize?: number;
  flowerSize?: number;
}

export const Magnolia: React.FC<MagnoliaProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = '',
  branchSize = 1,
  flowerSize = 1
}) => {
  return (
    <svg
      width={120 * scale}
      height={160 * scale}
      viewBox="0 0 120 160"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem and leaves */}
      <g transform={`scale(1, ${branchSize})`} transformOrigin="60 160">
        <path
          d="M 60 160 Q 59 120 60 85 Q 61 65 60 50"
          stroke="#8B4513"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Large leaves */}
        <ellipse cx="52" cy="105" rx="14" ry="6" fill="#8B9D83" transform="rotate(-25 52 105)" />
        <ellipse cx="68" cy="120" rx="14" ry="6" fill="#8B9D83" transform="rotate(25 68 120)" />
      </g>

      {/* Flower petals and center */}
      <g transform={`translate(60, 50) scale(${flowerSize}) translate(-60, -50)`}>
        {/* Large elegant petals - 6 petals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 60 + 22 * Math.cos((angle * Math.PI) / 180);
          const y = 50 + 22 * Math.sin((angle * Math.PI) / 180);
          const petalAngle = angle + 90;
          return (
            <g key={i}>
              <ellipse
                cx={x}
                cy={y}
                rx="12"
                ry="26"
                fill={color}
                opacity="0.95"
                transform={`rotate(${petalAngle} ${x} ${y})`}
              />
              {/* Petal shading */}
              <ellipse
                cx={x - 2}
                cy={y - 8}
                rx="4"
                ry="12"
                fill="white"
                opacity="0.3"
                transform={`rotate(${petalAngle} ${x} ${y})`}
              />
            </g>
          );
        })}

        {/* Center */}
        <ellipse cx="60" cy="50" rx="6" ry="10" fill="#F4D03F" />
      </g>
    </svg>
  );
};
