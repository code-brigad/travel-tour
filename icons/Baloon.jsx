import React from "react";

const Baloon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      fill="none"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      color="#000000"
    >
      <path
        className="stroke-white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        d="M4 9.5c0 4.571 5.714 8 5.714 8h4.572S20 14.071 20 9.5s-3.582-8-8-8-8 3.429-8 8Z"
      ></path>
      <path
        className="stroke-white"
        stroke-width="1.5"
        stroke-linejoin="round"
        d="M9 2c-3 6 1 15.5 1 15.5M14.884 2c3 6-1 15.5-1 15.5"
      ></path>
      <path
        className="stroke-white"
        stroke-width="1.5"
        stroke-linecap="round"
        d="M13.4 23h-2.8a.6.6 0 0 1-.6-.6v-1.8a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 1-.6.6Z"
      ></path>
    </svg>
  );
};

export default Baloon;
