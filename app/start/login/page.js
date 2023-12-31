import CustomStartBtn from "@/app/components/custom-start-btn/CustomStartBtn";
import "../sign-up/styles.scss";
import CustomCheckbox from "@/app/components/customCheckbox/CustomCheckbox";
import CustomInput from "@/app/components/customInput/customInput";
import Link from "next/link";
import LineContainer from "@/app/components/lineContainer/lineContainer";
import Back from "@/app/components/back/back";

function Login() {
  return (
    <div className="sign-up">

      <Back />

      <h1>Login to your Account</h1>

      <div className="input-containers">
        <CustomInput iconSrc="/assets/images/image 2.png" placeholder="Email" />
        <CustomInput
          iconSrc="/assets/images/image 3.png"
          placeholder="password"
        />
      </div>

      <CustomCheckbox text="remember me" style={{marginTop:'0'}}/>

      <section className="btn-foo">
        <CustomStartBtn style={{ marginBottom: "40px" }} text="sign in" />
      </section>

      <p id="forget-pass-btn">Forget password?</p>

      <LineContainer text="or countinue with" pStyle={{ fontSize: "18px" }} />

      <section
        className="footer-container"
        style={{ marginBottom: "-15px", marginTop: "-30px" }}
      >
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
        <Link className="mox" href="/start/sign-up">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
