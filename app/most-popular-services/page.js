import FlexBox from "@/app/components/flex/flexBox";
import "./mostPopularServices.scss";
import Back from "@/app/components/back/back";
import SelectionPart from "@/app/components/selectionPart/SelectionPart";
import { cardProfiles } from "@/public/constants/cardInfos";
import Card from "@/app/components/card/Card";

function MostPopularServices() {
  const data = cardProfiles;
  return (
    <div className="most-popular-services">
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
        <h1 className="head-mb-foo">most popular services</h1>
      </FlexBox>

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
