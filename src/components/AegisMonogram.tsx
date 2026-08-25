import React from 'react';

interface AegisMonogramProps {
  className?: string;
  size?: number;
  color?: string; // default to currentColor or deep charcoal
}

export const AegisMonogram: React.FC<AegisMonogramProps> = ({
  className = 'w-6 h-6',
  size = 24,
  color = 'currentColor'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AEGIS Architectural Monogram"
    >
      {/* Architectural Geometric A with Protective Chevron & Pillar */}
      <path
        d="M24 6L40 40H32L24 22L16 40H8L24 6Z"
        fill={color}
      />
      {/* Precision horizontal beam */}
      <rect
        x="15"
        y="29"
        width="18"
        height="3.5"
        fill={color}
      />
      {/* Subtle protective inner diamond apex */}
      <polygon
        points="24,12 28,21 20,21"
        fill="#F8F5EF"
      />
    </svg>
  );
};
