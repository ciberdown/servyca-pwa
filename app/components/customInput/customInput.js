import "./cus-input.scss";

function CustomInput({ placeholder, iconSrc, style = null }) {
  return (
    <div className="input-container">
      <input type="text" placeholder={placeholder} style={style} />
      <img src={iconSrc} alt="input icon" />
    </div>
  );
}

export default CustomInput;
