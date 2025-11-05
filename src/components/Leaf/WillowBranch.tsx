import React from 'react';

interface WillowBranchProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const WillowBranch: React.FC<WillowBranchProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={100 * scale}
      height={180 * scale}
      viewBox="0 0 100 180"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main drooping branch */}
      <path
        d="M 50 0 Q 52 40 48 80 Q 45 120 50 160 Q 52 170 50 180"
        stroke="#8B7355"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Drooping side branches with leaves */}
      {Array.from({ length: 10 }).map((_, i) => {
        const y = 20 + i * 15;
        const isLeft = i % 2 === 0;
        const curve = isLeft ? -15 : 15;
        const startX = 50;
        const endX = 50 + curve;
        const endY = y + 25;
        return (
          <g key={i}>
            {/* Drooping branch segment */}
            <path
              d={`M ${startX} ${y} Q ${startX + curve / 2} ${y + 10} ${endX} ${endY}`}
              stroke="#8B7355"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
            {/* Thin leaves along the branch */}
            {Array.from({ length: 5 }).map((_, j) => {
              const t = j / 4;
              const leafX = startX + (endX - startX) * t;
              const leafY = y + (endY - y) * t;
              const leafAngle = isLeft ? -20 : 20;
              return (
                <ellipse
                  key={j}
                  cx={leafX}
                  cy={leafY}
                  rx="2"
                  ry="8"
                  fill={color}
                  opacity="0.85"
                  transform={`rotate(${leafAngle + (t * 30)} ${leafX} ${leafY})`}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
};
