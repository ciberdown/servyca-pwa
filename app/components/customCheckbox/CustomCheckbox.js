"use client";
import { useState } from "react";
import "./CustomCheckbox.scss";

function CustomCheckbox({ text, checked = false, style = null }) {
  const [ischecked, setIschecked] = useState(checked);
  const checkHHandler = () => {
    setIschecked((prev) => !prev);
  };
  return (
    <section className="remember-con" style={style}>
      <div onClick={checkHHandler} className="foo">
        <img
          className={ischecked ? "some" : "hidden"}
          src="/assets/images/tick2.png"
          alt="tick"
        />
        <input type="checkbox" checked={checked} />
      </div>
      <p>{text}</p>
    </section>
  );
}

export default CustomCheckbox;
