import React from "react";

const Plane = () => {
  return (
    <div className="rotate-45">
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
        d="M10.5 4.5v4.667a.6.6 0 0 1-.282.51l-7.436 4.647a.6.6 0 0 0-.282.508v.9a.6.6 0 0 0 .746.582l6.508-1.628a.6.6 0 0 1 .746.582v2.96a.6.6 0 0 1-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 0 1 .214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 0 1-.205-.452v-2.96a.6.6 0 0 1 .745-.582l6.51 1.628a.6.6 0 0 0 .745-.582v-.9a.6.6 0 0 0-.282-.508l-7.436-4.648a.6.6 0 0 1-.282-.509V4.5a1.5 1.5 0 0 0-3 0Z"
      ></path>
    </svg>
    </div>
  );
};

export default Plane;
