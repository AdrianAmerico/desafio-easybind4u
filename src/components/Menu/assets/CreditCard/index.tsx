import React from "react";

const CreditCard: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
        stroke="#828BA1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 10H23"
        stroke="#828BA1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CreditCard;
