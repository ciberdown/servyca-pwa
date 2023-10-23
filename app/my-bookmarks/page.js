import React from "react";
import FlexBox from "../components/flex/flexBox";
import "./myBookmarks.scss";
import SelectionPart from "../components/selectionPart/SelectionPart";
import { cardProfiles } from "@/public/constants/cardInfos";
import Card from "../components/card/Card";
import IphoneHeaderImg from "../components/iphoneHeaderImg/IphoneHeaderImg";
import BackHeader from "../components/backHeader/BackHeader";

function MyBookmarks() {
  const data = cardProfiles;
  return (
    <div className="my-bookmarks">
      <IphoneHeaderImg />

      <BackHeader text="my bookmarks" />

      <SelectionPart marginTop="25px" />

      <FlexBox style={{ marginTop: "30px" }} flexDirection="column" gap="20px">
        {data.map((item, index) => {
          if (item.bookmarked)
            return <Card data={item} key={index} index={index} />;
        })}
      </FlexBox>
    </div>
  );
}

export default MyBookmarks;
