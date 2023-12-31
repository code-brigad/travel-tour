import React from "react";

const Folder = ({ fatherClass, childClass }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      fill="none"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      color="#000000"
      className={`${fatherClass}`}
    >
      <path
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`${childClass}`}
        d="M18 3v4M18 11.01l.01-.011M22 7v12.4a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V11"
      ></path>
      <path
        className={`${childClass}`}
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14 7h-1.278a.6.6 0 0 1-.39-.144L9.168 4.144A.6.6 0 0 0 8.778 4H2.6a.6.6 0 0 0-.6.6V11h12"
      ></path>
    </svg>
  );
};

export default Folder;
