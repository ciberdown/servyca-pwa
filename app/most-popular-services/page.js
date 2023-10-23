import FlexBox from "@/app/components/flex/flexBox";
import "./mostPopularServices.scss";
import SelectionPart from "@/app/components/selectionPart/SelectionPart";
import { cardProfiles } from "@/public/constants/cardInfos";
import Card from "@/app/components/card/Card";
import IphoneHeaderImg from "../components/iphoneHeaderImg/IphoneHeaderImg";
import BackHeader from "../components/backHeader/BackHeader";

function MostPopularServices() {
  const data = cardProfiles;
  return (
    <div className="most-popular-services">
      <IphoneHeaderImg />

      <BackHeader text="most popular services" />

      <SelectionPart marginTop="30px" />

      <FlexBox
        flexDirection="column"
        gap="20px"
        style={{ marginTop: "30px", marginBottom: "100px" }}
      >
        {data.map((info, index) => {
          return <Card key={index} data={info} index={index} />;
        })}
      </FlexBox>
    </div>
  );
}

export default MostPopularServices;
