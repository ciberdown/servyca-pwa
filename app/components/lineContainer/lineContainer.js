import "./line-con-styles.scss";

function LineContainer({ text, hrStyle = null, pStyle = null, containerStyle= null }) {
  return (
    <div className="line-container">
      <hr style={hrStyle} />
      <p style={pStyle}>{text}</p>
    </div>
  );
}

export default LineContainer;
