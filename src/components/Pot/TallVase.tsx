import React from 'react';

interface TallVaseProps {
  color: string;
  width: number;
  height: number;
  className?: string;
}

export const TallVase: React.FC<TallVaseProps> = ({ color, width, height, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="60" cy="275" rx="50" ry="6" fill="black" opacity="0.15" />

      {/* Base */}
      <path
        d="M 30 260 Q 30 270 60 270 Q 90 270 90 260 L 90 250 L 30 250 Z"
        fill={color}
        opacity="0.7"
      />

      {/* Body - cylindrical */}
      <rect
        x="35"
        y="30"
        width="50"
        height="220"
        fill={color}
        rx="5"
      />

      {/* Left highlight */}
      <rect
        x="38"
        y="35"
        width="8"
        height="210"
        fill="white"
        opacity="0.2"
        rx="3"
      />

      {/* Right shadow */}
      <rect
        x="74"
        y="35"
        width="8"
        height="210"
        fill="black"
        opacity="0.1"
        rx="3"
      />

      {/* Rim */}
      <ellipse cx="60" cy="30" rx="25" ry="8" fill={color} />
      <ellipse cx="60" cy="28" rx="23" ry="6" fill="white" opacity="0.3" />

      {/* Inner opening */}
      <ellipse cx="60" cy="30" rx="20" ry="5" fill="black" opacity="0.2" />
    </svg>
  );
};
