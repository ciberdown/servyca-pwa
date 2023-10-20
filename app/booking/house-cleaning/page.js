"use client";

import IphoneHeaderImg from "@/app/components/iphoneHeaderImg/IphoneHeaderImg";
import "./houseCleaning.scss";
import FlexBox from "@/app/components/flex/flexBox";
import Back from "@/app/components/back/back";
import CustomStartBtn from "@/app/components/custom-start-btn/CustomStartBtn";
import { useState } from "react";
import HouseCleanItem from "./HouseCleanItem";

function HouseCleaning() {
  const data = [
    "Living room",
    "Terace",
    "Bedroom",
    "Bathroom",
    "Kitchen",
    "Diving room",
    "Rest room",
    "Garage",
    "Floors",
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="house-cleaning-moz">
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
        <h1 className="head-mb-foo">House cleaning</h1>
      </FlexBox>
      <p className="moz-foo-clean">Enter the number of terms to be cleaned</p>

      <FlexBox flexDirection="column" gap="25px" style={{marginTop:"20px"}}>
        {data.map((item, index) => {
          return <HouseCleanItem key={index} text={item} />;
        })}
      </FlexBox>

      <CustomStartBtn
        text={"Countinue - " + totalPrice + "$"}
        style={{ position: "fixed", bottom: "40px", width: "90%" }}
      />
    </div>
  );
}

export default HouseCleaning;
