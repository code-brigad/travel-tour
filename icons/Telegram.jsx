import React from "react";

const Telegram = ({ childClass, parentClass }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      fill="none"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      className={parentClass}
    >
      <path
        className={`${childClass} stroke-white`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 5 2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5 9 13.5m0 0V19l3.249-3.277"
      ></path>
    </svg>
  );
};

export default Telegram;
