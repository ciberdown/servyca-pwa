import "./cus-input.scss";

function CustomInput({ placeholder, iconSrc }) {
  return (
    <div className="input-container">
      <input type="text" placeholder={placeholder} />
      <img src={iconSrc} alt="input icon" />
    </div>
  );
}

export default CustomInput;
