import "./styles.scss";

function SocialSignIn({ icon_src, text }) {
  return (
    <div className="social-media-sign-in">
      <img src={icon_src} alt={text} />
      <h3>{text}</h3>
    </div>
  );
}

export default SocialSignIn;
