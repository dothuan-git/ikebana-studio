import React from 'react';

interface HydrangeaProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
  branchSize?: number;
  flowerSize?: number;
}

export const Hydrangea: React.FC<HydrangeaProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = '',
  branchSize = 1,
  flowerSize = 1
}) => {
  return (
    <svg
      width={110 * scale}
      height={140 * scale}
      viewBox="0 0 110 140"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem and leaves */}
      <g transform={`scale(1, ${branchSize})`} transformOrigin="55 140">
        <path
          d="M 55 140 Q 54 110 55 80 Q 56 60 55 50"
          stroke="#6B8E23"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Large leaves */}
        <path
          d="M 50 100 Q 35 95 25 100 Q 20 103 27 107 Q 45 112 50 108"
          fill="#8B9D83"
        />
        <path
          d="M 60 110 Q 75 105 85 110 Q 90 113 83 117 Q 68 122 60 118"
          fill="#8B9D83"
        />
      </g>

      {/* Cluster of small 4-petal flowers */}
      <g transform={`translate(55, 42.5) scale(${flowerSize}) translate(-55, -42.5)`}>
        {[
          { x: 55, y: 35 },
          { x: 45, y: 40 },
          { x: 65, y: 40 },
          { x: 50, y: 48 },
          { x: 60, y: 48 },
          { x: 40, y: 50 },
          { x: 70, y: 50 },
          { x: 55, y: 56 },
        ].map((pos, idx) => (
          <g key={idx}>
            {[0, 90, 180, 270].map((angle, i) => {
              const x = pos.x + 4 * Math.cos((angle * Math.PI) / 180);
              const y = pos.y + 4 * Math.sin((angle * Math.PI) / 180);
              return (
                <ellipse
                  key={i}
                  cx={x}
                  cy={y}
                  rx="3"
                  ry="5"
                  fill={color}
                  opacity="0.9"
                  transform={`rotate(${angle} ${x} ${y})`}
                />
              );
            })}
            <circle cx={pos.x} cy={pos.y} r="2" fill="white" opacity="0.8" />
          </g>
        ))}
      </g>
    </svg>
  );
};
