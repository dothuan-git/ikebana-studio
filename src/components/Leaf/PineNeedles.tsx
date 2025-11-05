import React from 'react';

interface PineNeedlesProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
  leafSize?: number;
}

export const PineNeedles: React.FC<PineNeedlesProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = '',
  leafSize = 1
}) => {
  return (
    <svg
      width={90 * scale}
      height={130 * scale}
      viewBox="0 0 90 130"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* All leaf elements */}
      <g transform={`scale(${leafSize})`} transformOrigin="45 65">
        {/* Branch */}
        <path
          d="M 45 130 Q 44 100 45 70 Q 46 40 45 20"
          stroke="#5D4E37"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Clusters of pine needles along the branch */}
        {Array.from({ length: 8 }).map((_, i) => {
          const y = 30 + i * 12;
          const isLeft = i % 2 === 0;
          const baseX = 45;
          return (
            <g key={i}>
              {/* Cluster of 5-7 needles */}
              {Array.from({ length: 6 }).map((_, j) => {
                const angle = -60 + j * 20 + (isLeft ? 180 : 0);
                const length = 18 + Math.random() * 8;
                const x2 = baseX + length * Math.cos((angle * Math.PI) / 180);
                const y2 = y + length * Math.sin((angle * Math.PI) / 180);
                return (
                  <line
                    key={j}
                    x1={baseX}
                    y1={y}
                    x2={x2}
                    y2={y2}
                    stroke={color}
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                );
              })}
              {/* Cluster base */}
              <circle cx={baseX} cy={y} r="2" fill="#5D4E37" />
            </g>
          );
        })}
      </g>
    </svg>
  );
};
