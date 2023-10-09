import CustomInput from "@/app/components/customInput/customInput";
import "./styles.scss";
import CustomCheckbox from "@/app/components/customCheckbox/CustomCheckbox";
import CustomStartBtn from "@/app/components/custom-start-btn/CustomStartBtn";
import LineContainer from "@/app/components/lineContainer/lineContainer";
import Link from "next/link";

function SignUp() {
  return (
    <div className="sign-up">
      <Link href="/">
        <img className="back-icon" src="/assets/images/image 1.png" />
      </Link>
      <h1>create your account</h1>

      <div className="input-containers">
        <CustomInput iconSrc="/assets/images/image 2.png" placeholder="Email" />
        <CustomInput
          iconSrc="/assets/images/image 3.png"
          placeholder="password"
        />
      </div>

      <CustomCheckbox text="remember me" />

      <section className="btn-foo">
        <CustomStartBtn style={{ marginBottom: "40px" }} text="sign up" />
      </section>

      <LineContainer text="or countinue with" pStyle={{ fontSize: "18px" }} />

      <section className="footer-container">
        <div className="social-sign">
          <img src="/assets/images/Apple.svg" alt="apple" />
        </div>
        <div className="social-sign">
          <img src="/assets/images/Google Plus.svg" alt="google plus" />
        </div>
        <div className="social-sign">
          <img src="/assets/images/Facebook.svg" alt="facebook" />
        </div>
      </section>

      <div className="foot-last">
        <p>Already have an account</p>
        <Link className="mox" href="/start/login">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
