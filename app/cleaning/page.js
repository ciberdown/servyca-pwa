import { cardProfiles } from "@/public/constants/cardInfos";
import "./cleaning.scss";
import Card from "../components/card/Card";
import FlexBox from "../components/flex/flexBox";
import BackHeader from "../components/backHeader/BackHeader";

function page() {
  const data = cardProfiles;
  return (
    <div className="cleaning">
      <BackHeader text="cleaning" />

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
