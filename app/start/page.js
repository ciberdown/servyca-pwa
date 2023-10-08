import SocialSignIn from "./SocialSignIn";
import "./styles.scss";

function Start() {
  return (
    <div className="start">
      <img src="/assets/images/prof-start.png" alt="start image" />
      <h1>lets you in</h1>

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
    </div>
  );
}

export default Start;
