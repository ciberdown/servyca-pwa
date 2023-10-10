import React from "react";

function FlexBox({
  children,
  gap = null,
  className = null,
  alignItems = "center",
  justifyContent = "space-between",
  flexDirection = "row",
  style,
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems,
        justifyContent,
        flexDirection,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default FlexBox;
