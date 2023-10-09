import Link from "next/link";
import './back.scss';

function Back() {
  return (
    <Link href="/">
      <img className="back-icon" src="/assets/images/image 1.png" />
    </Link>
  );
}

export default Back;
