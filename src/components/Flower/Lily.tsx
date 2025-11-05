import React from 'react';

interface LilyProps {
  color: string;
  scale?: number;
  rotation?: number;
  className?: string;
  branchSize?: number;
  flowerSize?: number;
}

export const Lily: React.FC<LilyProps> = ({
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
      height={160 * scale}
      viewBox="0 0 110 160"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem and branch */}
      <g transform={`scale(1, ${branchSize})`} transformOrigin="55 40">
        <path
          d="M 55 160 Q 53 120 55 85 Q 56 60 55 40"
          stroke="#6B8E23"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Leaves on stem */}
        <ellipse cx="48" cy="100" rx="12" ry="5" fill="#8B9D83" transform="rotate(-30 48 100)" />
        <ellipse cx="62" cy="115" rx="12" ry="5" fill="#8B9D83" transform="rotate(30 62 115)" />
        <ellipse cx="50" cy="130" rx="11" ry="4" fill="#8B9D83" transform="rotate(-25 50 130)" />
      </g>

      {/* Flower petals and center */}
      <g transform={`translate(55, 40) scale(${flowerSize}) translate(-55, -40)`}>
        {/* 6 elongated petals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 55 + 18 * Math.cos((angle * Math.PI) / 180);
          const y = 40 + 18 * Math.sin((angle * Math.PI) / 180);
          const petalAngle = angle + 90;
          return (
            <g key={i}>
              {/* Petal */}
              <ellipse
                cx={x}
                cy={y}
                rx="8"
                ry="22"
                fill={color}
                opacity="0.9"
                transform={`rotate(${petalAngle} ${x} ${y})`}
              />
              {/* Petal highlight */}
              <ellipse
                cx={x - 1}
                cy={y - 5}
                rx="3"
                ry="10"
                fill="white"
                opacity="0.3"
                transform={`rotate(${petalAngle} ${x} ${y})`}
              />
              {/* Petal spots */}
              <circle
                cx={x + 2 * Math.cos((petalAngle * Math.PI) / 180)}
                cy={y + 5 * Math.sin((petalAngle * Math.PI) / 180)}
                r="1.5"
                fill="#8B4513"
                opacity="0.6"
              />
            </g>
          );
        })}

        {/* Center with stamens */}
        <circle cx="55" cy="40" r="4" fill="#8B4513" />
        {/* Long stamens */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 6;
          const x = 55 + 12 * Math.cos((angle * Math.PI) / 180);
          const y = 40 + 12 * Math.sin((angle * Math.PI) / 180);
          return (
            <g key={`stamen-${i}`}>
              <line x1="55" y1="40" x2={x} y2={y} stroke="#8B4513" strokeWidth="1" />
              <circle cx={x} cy={y} r="2" fill="#F4D03F" />
            </g>
          );
        })}
      </g>
    </svg>
  );
};
