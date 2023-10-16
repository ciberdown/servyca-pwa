import Back from "../components/back/back";
import FlexBox from "../components/flex/flexBox";
import IphoneHeaderImg from "../components/iphoneHeaderImg/IphoneHeaderImg";
import "./specialOffers.scss";

function SpecialOffers() {
  const data = [
    { src: "/assets/images/untitled233.png" },
    { src: "/assets/images/untitled3231.png" },
    { src: "/assets/images/untitled2223.png" },
    { src: "/assets/images/untitled3231.png" },
    { src: "/assets/images/untitled233.png" },
    { src: "/assets/images/untitled2223.png" },
  ];
  return (
    <div className="special-offers">
      <IphoneHeaderImg />

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
        <h1 className="head-mb-foo">special offers</h1>
      </FlexBox>

      <FlexBox
        flexDirection="column"
        gap="30px"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        {data.map((item, index) => {
          return <img key={index} src={item.src} alt="service item image" />;
        })}
      </FlexBox>
    </div>
  );
}

export default SpecialOffers;
