import React from "react";

const Bid: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#828BA1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="18.9496"
        y1="18.9498"
        x2="9.94963"
        y2="9.94978"
        stroke="#828BA1"
        strokeWidth="2"
      />
      <line
        x1="10.6567"
        y1="17.7281"
        x2="5.70692"
        y2="12.7784"
        stroke="#828BA1"
        strokeWidth="2"
      />
      <line
        x1="17.728"
        y1="10.6568"
        x2="12.7782"
        y2="5.70707"
        stroke="#828BA1"
        strokeWidth="2"
      />
      <rect
        x="5.70703"
        y="14.1924"
        width="4"
        height="5"
        transform="rotate(-45 5.70703 14.1924)"
        fill="#828BA1"
      />
      <rect
        x="11.3638"
        y="8.53564"
        width="4"
        height="5"
        transform="rotate(-45 11.3638 8.53564)"
        fill="#828BA1"
      />
    </svg>
  );
};

export default Bid;
