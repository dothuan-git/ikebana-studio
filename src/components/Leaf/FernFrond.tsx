import React from 'react';

interface FernFrondProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
}

export const FernFrond: React.FC<FernFrondProps> = ({
  color,
  scale = 1,
  rotation = 0,
  className = ''
}) => {
  return (
    <svg
      width={100 * scale}
      height={150 * scale}
      viewBox="0 0 100 150"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main stem with curve */}
      <path
        d="M 50 150 Q 48 100 50 50 Q 51 25 50 10"
        stroke="#556B2F"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Multiple delicate frond segments on both sides */}
      {Array.from({ length: 12 }).map((_, i) => {
        const y = 20 + i * 10;
        const leftX = 50 - (8 + i * 0.5);
        const rightX = 50 + (8 + i * 0.5);
        return (
          <g key={i}>
            {/* Left frond segment */}
            <ellipse
              cx={leftX}
              cy={y}
              rx="2"
              ry="8"
              fill={color}
              opacity="0.85"
              transform={`rotate(-45 ${leftX} ${y})`}
            />
            {/* Right frond segment */}
            <ellipse
              cx={rightX}
              cy={y}
              rx="2"
              ry="8"
              fill={color}
              opacity="0.85"
              transform={`rotate(45 ${rightX} ${y})`}
            />
            {/* Sub-segments for detail */}
            {Array.from({ length: 3 }).map((_, j) => {
              const subY = y + (j - 1) * 2.5;
              const subLeftX = leftX - j * 1.5;
              const subRightX = rightX + j * 1.5;
              return (
                <g key={`sub-${j}`}>
                  <ellipse
                    cx={subLeftX}
                    cy={subY}
                    rx="1"
                    ry="3"
                    fill={color}
                    opacity="0.7"
                    transform={`rotate(-60 ${subLeftX} ${subY})`}
                  />
                  <ellipse
                    cx={subRightX}
                    cy={subY}
                    rx="1"
                    ry="3"
                    fill={color}
                    opacity="0.7"
                    transform={`rotate(60 ${subRightX} ${subY})`}
                  />
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
};
