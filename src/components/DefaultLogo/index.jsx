import React from "react";

function DefaultLogo({ width, height }) {
  return (
    <img
      src="/img/logo/type-1-3.png"
      alt="default-logo"
      width={width || "49px"}
      height={height || "15px"}
    />
  );
}

export default DefaultLogo;
