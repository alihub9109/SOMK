import React from "react";

/****
 * A crisp geometric starburst logo mark rendered in SVG.
 * The mark is neutral and brand-safe and can be tinted via currentColor.
 */
export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <g transform="translate(50,50)">
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x={-6}
            y={-40}
            rx={3}
            ry={3}
            width={12}
            height={30}
            transform={`rotate(${i * 45})`}
          />
        ))}
      </g>
    </svg>
  );
}

export default LogoMark;
