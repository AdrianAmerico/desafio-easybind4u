import React from "react";

const Line: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="1rem" height="1rem" viewBox="0 0 9 2" fill="none">
      <line
        x1="1"
        y1="1"
        x2="8"
        y2="1"
        stroke="#E1E8F3"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Line;
