import Link from "next/link";
import "./profile.scss";

function Profile({ style = null }) {
  return (
    <div style={style} className="profile">
      <div className="left-prof">
        <img
          id="profile-img"
          src="./assets/images/prof.svg"
          alt="profile image"
        />

        <section className="prof-container">
          <p>Good morning</p>
          <h1>Andrew kidman</h1>
        </section>
      </div>

      <div className="right-prof">
        <Link href="/my-bookmarks">
          <img src="./assets/images/image 5.png" alt="tags" />
        </Link>
        <Link href="/notifications">
          <img src="./assets/images/image 6.png" alt="alert" />
        </Link>
      </div>
    </div>
  );
}

export default Profile;
