import "./cus-start-btn.scss";
import Link from "next/link";

function CustomStartBtn({ text, style = null, reference }) {
  return (
    <Link
      style={style}
      className="sign-in-btn"
      href={reference ? reference : "/home"}
    >
      {text}
    </Link>
  );
}

export default CustomStartBtn;
