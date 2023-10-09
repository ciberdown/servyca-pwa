import Link from "next/link";
import SocialSignIn from "../socialSignIn/SocialSignIn";
import LineContainer from "../lineContainer/lineContainer";
import "./start.scss";
import CustomStartBtn from "../custom-start-btn/CustomStartBtn";

function Start() {
  return (
    <div className="start">
      <img src="/assets/images/prof-start.png" alt="start image" />
      <h1>Lets you in</h1>

      <section className="social-container">
        <SocialSignIn
          text="continue with Facebook"
          icon_src="./assets/images/Facebook.svg"
        />
        <SocialSignIn
          text="continue with Google"
          icon_src="./assets/images/Google Plus.svg"
        />
        <SocialSignIn
          text="continue with Apple"
          icon_src="./assets/images/Apple.svg"
        />
      </section>

      <LineContainer text="or" />

      <CustomStartBtn text="Sign in with password" />

      <section className="footer">
        <p>Don't have an account?</p>
        <Link href="/start/sign-up">Sign up</Link>
      </section>
    </div>
  );
}

export default Start;
