import React from 'react';

interface ShallowBowlProps {
  color: string;
  width: number;
  height: number;
  className?: string;
}

export const ShallowBowl: React.FC<ShallowBowlProps> = ({ color, width, height, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="150" cy="75" rx="140" ry="8" fill="black" opacity="0.1" />

      {/* Base */}
      <ellipse cx="150" cy="60" rx="100" ry="8" fill={color} opacity="0.6" />

      {/* Body */}
      <path
        d="M 50 50 Q 50 60 150 60 Q 250 60 250 50 L 240 30 Q 240 25 150 25 Q 60 25 60 30 Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        filter="url(#potShading)"
      />

      {/* Rim highlight */}
      <ellipse cx="150" cy="27" rx="90" ry="6" fill="white" opacity="0.2" />

      {/* Inner shadow */}
      <ellipse cx="150" cy="30" rx="85" ry="5" fill="black" opacity="0.15" />

      {/* Filter for subtle shading */}
      <defs>
        <filter id="potShading">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};
