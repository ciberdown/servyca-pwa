import IphoneHeaderImg from "@/app/components/iphoneHeaderImg/IphoneHeaderImg";
import "./addPromo.scss";
import FlexBox from "@/app/components/flex/flexBox";
import Back from "@/app/components/back/back";
import CustomStartBtn from "@/app/components/custom-start-btn/CustomStartBtn";
import Notifications from "@/app/notifications/page";
import NotifCard from "@/app/components/card/notifCard";
import { promos } from "@/public/constants/promos";

function AddPromo() {
  return (
    <div className="add-promo-con">
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
        <h1 className="head-mb-foo">add promo</h1>
      </FlexBox>

      <FlexBox flexDirection="column" gap="20px" style={{marginTop:'30px'}}>
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
