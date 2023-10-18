import Link from "next/link";

function Forward({ href, style = null }) {
  return (
    <Link href={href}>
      <img
        className="back-icon"
        src="/assets/images/image 1.png"
        style={{ ...style, rotate: "180deg" }}
      />
    </Link>
  );
}

export default Forward;
