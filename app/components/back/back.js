import Link from "next/link";
import "./back.scss";

function Back({ href = "/", style = null }) {
  return (
    <Link href={href}>
      <img
        className="back-icon"
        src="/assets/images/image 1.png"
        style={style}
      />
    </Link>
  );
}

export default Back;
