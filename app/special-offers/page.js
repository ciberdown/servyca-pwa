import Back from "../components/back/back";
import BackHeader from "../components/backHeader/BackHeader";
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
      <BackHeader text='special offers' />


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
