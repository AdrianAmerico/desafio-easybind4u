import React from "react";

const CircleOneEmpty: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="1.5rem" height="1.5rem" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#828BA1" strokeWidth="2" />
      <path
        d="M12.6663 13.172V14H7.96234V13.172H9.82234V6.764L8.33434 7.7L7.87834 6.944L10.0983 5.54H10.8063V13.172H12.6663Z"
        fill="#828BA1"
      />
    </svg>
  );
};

export default CircleOneEmpty;
