import React from 'react';

interface AsymmetricVesselProps {
  color: string;
  width: number;
  height: number;
  className?: string;
}

export const AsymmetricVessel: React.FC<AsymmetricVesselProps> = ({
  color,
  width,
  height,
  className = ''
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 180"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="100" cy="175" rx="80" ry="8" fill="black" opacity="0.15" />

      {/* Base */}
      <ellipse cx="100" cy="160" rx="60" ry="10" fill={color} opacity="0.6" />

      {/* Organic body shape */}
      <path
        d="M 40 140 Q 30 100 45 60 Q 50 30 80 20 Q 100 15 120 20 Q 155 30 160 70 Q 165 110 155 140 Q 150 155 100 160 Q 50 155 40 140 Z"
        fill={color}
        stroke={color}
        strokeWidth="1"
      />

      {/* Highlight on left */}
      <path
        d="M 50 130 Q 45 100 55 70 Q 60 50 75 40"
        fill="none"
        stroke="white"
        strokeWidth="12"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Shadow on right */}
      <path
        d="M 150 130 Q 155 100 150 70 Q 145 50 130 40"
        fill="none"
        stroke="black"
        strokeWidth="10"
        opacity="0.1"
        strokeLinecap="round"
      />

      {/* Opening */}
      <ellipse cx="100" cy="25" rx="35" ry="12" fill={color} />
      <ellipse cx="100" cy="23" rx="32" ry="10" fill="white" opacity="0.2" />
      <ellipse cx="100" cy="25" rx="28" ry="8" fill="black" opacity="0.2" />
    </svg>
  );
};
