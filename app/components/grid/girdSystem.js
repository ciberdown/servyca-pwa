import "./grid.scss";

function GirdSystem({
  children,
  gridTemplateRows = null,
  style = null,
  rowGap = null,
  columnGap = null,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
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
