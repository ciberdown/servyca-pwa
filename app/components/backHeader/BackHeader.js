import "./backHeader.scss";
import FlexBox from "../flex/flexBox";
import Back from "../back/back";

function BackHeader({ text }) {
  return (
    <FlexBox justifyContent="start" alignItems="center" gap="20px">
      <Back
        href="/home"
        style={{
          position: "static",
          margin: "0",
          padding: "0",
          width: "15px",
          height: "15px",
          marginTop: "10px",
        }}
      />
      <h1 className="head-mb-foo">{text}</h1>
    </FlexBox>
  );
}

export default BackHeader;
