import IphoneHeaderImg from "@/app/components/iphoneHeaderImg/IphoneHeaderImg";
import "./addPromo.scss";
import FlexBox from "@/app/components/flex/flexBox";
import CustomStartBtn from "@/app/components/custom-start-btn/CustomStartBtn";
import NotifCard from "@/app/components/card/notifCard";
import { promos } from "@/public/constants/promos";
import BackHeader from "@/app/components/backHeader/BackHeader";

function AddPromo() {
  return (
    <div className="add-promo-con">
      <IphoneHeaderImg />

      <BackHeader text="add promo" />

      <FlexBox flexDirection="column" gap="20px" style={{ marginTop: "30px" }}>
        {promos.map((item, index) => {
          return <NotifCard key={index} data={item} />;
        })}
      </FlexBox>

      <CustomStartBtn
        text="Apply Promo"
        style={{
          position: "fixed",
          bottom: "20px",
          width: "350px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}

export default AddPromo;
