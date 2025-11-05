import React from 'react';

interface RusticPotProps {
  color: string;
  width: number;
  height: number;
  className?: string;
}

export const RusticPot: React.FC<RusticPotProps> = ({ color, width, height, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 160"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="110" cy="155" rx="85" ry="8" fill="black" opacity="0.15" />

      {/* Base */}
      <ellipse cx="110" cy="145" rx="70" ry="10" fill={color} opacity="0.7" />

      {/* Body - tapered pot shape */}
      <path
        d="M 50 130 Q 45 110 45 90 L 50 50 Q 55 30 110 30 Q 165 30 170 50 L 175 90 Q 175 110 170 130 Q 165 142 110 145 Q 55 142 50 130 Z"
        fill={color}
      />

      {/* Texture lines (rustic effect) */}
      <path d="M 60 60 Q 110 58 160 60" stroke="black" strokeWidth="1" opacity="0.1" fill="none" />
      <path d="M 58 80 Q 110 78 162 80" stroke="black" strokeWidth="1" opacity="0.1" fill="none" />
      <path d="M 56 100 Q 110 98 164 100" stroke="black" strokeWidth="1" opacity="0.1" fill="none" />
      <path d="M 54 120 Q 110 118 166 120" stroke="black" strokeWidth="1" opacity="0.1" fill="none" />

      {/* Rim */}
      <ellipse cx="110" cy="35" rx="58" ry="12" fill={color} />
      <ellipse cx="110" cy="33" rx="55" ry="10" fill="white" opacity="0.2" />

      {/* Opening */}
      <ellipse cx="110" cy="35" rx="50" ry="8" fill="black" opacity="0.15" />

      {/* Highlight */}
      <ellipse cx="85" cy="70" rx="15" ry="40" fill="white" opacity="0.12" />

      {/* Shadow side */}
      <ellipse cx="140" cy="80" rx="12" ry="35" fill="black" opacity="0.08" />
    </svg>
  );
};
