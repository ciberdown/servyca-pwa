import React from "react";

function GirdSystem({
  children,
  gridTemplateColumns,
  gridTemplateRows = null,
  style = null,
  rowGap = null,
  columnGap = null,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridTemplateColumns},1fr)`,
        gridTemplateRows,
        columnGap,
        rowGap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default GirdSystem;
