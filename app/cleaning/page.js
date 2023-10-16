import { cardProfiles } from "@/public/constants/cardInfos";
import "./cleaning.scss";
import Card from "../components/card/Card";
import FlexBox from "../components/flex/flexBox";
import Back from "../components/back/back";

function page() {
  const data = cardProfiles;
  return (
    <div className="cleaning">
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
        <h1 className="head-mb-foo">cleaning</h1>
      </FlexBox>

      <FlexBox
        flexDirection="column"
        gap="30px"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        {data?.map((item, index) => {
          return <Card data={item} index={index} key={index} />;
        })}
      </FlexBox>
    </div>
  );
}

export default page;
