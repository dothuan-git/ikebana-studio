import React from 'react';

interface RectangularContainerProps {
  color: string;
  width: number;
  height: number;
  className?: string;
}

export const RectangularContainer: React.FC<RectangularContainerProps> = ({
  color,
  width,
  height,
  className = ''
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <rect x="20" y="92" width="220" height="6" fill="black" opacity="0.12" rx="2" />

      {/* Base */}
      <rect x="30" y="75" width="200" height="15" fill={color} opacity="0.6" rx="2" />

      {/* Front face */}
      <rect x="25" y="25" width="210" height="50" fill={color} rx="3" />

      {/* Top face (perspective) */}
      <path
        d="M 25 25 L 30 20 L 240 20 L 235 25 Z"
        fill={color}
        opacity="0.8"
      />

      {/* Right side face */}
      <path
        d="M 235 25 L 240 20 L 240 70 L 235 75 Z"
        fill={color}
        opacity="0.5"
      />

      {/* Inner shadow (opening) */}
      <rect x="30" y="27" width="200" height="8" fill="black" opacity="0.2" rx="1" />

      {/* Decorative lines */}
      <line x1="25" y1="35" x2="235" y2="35" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="25" y1="65" x2="235" y2="65" stroke="black" strokeWidth="1" opacity="0.1" />
    </svg>
  );
};
