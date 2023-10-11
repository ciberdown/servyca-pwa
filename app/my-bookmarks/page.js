import React from "react";
import FlexBox from "../components/flex/flexBox";
import Back from "../components/back/back";
import "./myBookmarks.scss";
import SelectionPart from "../components/selectionPart/SelectionPart";
import { cardProfiles } from "@/public/constants/cardInfos";
import Card from "../components/card/Card";

function MyBookmarks() {
  const data = cardProfiles;
  return (
    <div className="my-bookmarks">
      <img
        className="head-mb-img-moz"
        src="/assets/images/untitled.png"
        alt="mobile header"
      />
      <FlexBox
        style={{ marginTop: "20px" }}
        justifyContent="start"
        alignItems="center"
        gap="20px"
      >
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
        <h1 className="head-mb-foo">my bookmarks</h1>
      </FlexBox>

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
