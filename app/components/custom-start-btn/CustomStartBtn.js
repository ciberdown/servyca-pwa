import "./cus-start-btn.scss";
import Link from "next/link";

function CustomStartBtn({ text, style = null }) {
  return (
    <Link style={style} className="sign-in-btn" href="/home">
      {text}
    </Link>
  );
}

export default CustomStartBtn;
