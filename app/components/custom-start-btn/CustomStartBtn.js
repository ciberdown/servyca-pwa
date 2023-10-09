import "./cus-start-btn.scss";
import Link from "next/link";

function CustomStartBtn({ text, style = null }) {
  return (
    <Link style={style} className="sign-in-btn" href="/start/login">
      {text}
    </Link>
  );
}

export default CustomStartBtn;
