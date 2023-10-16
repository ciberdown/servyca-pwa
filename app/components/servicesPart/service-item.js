import React from "react";
import FlexBox from "../flex/flexBox";

function ServiceItem({ text, imgSrc, bColor, width = "27px" }) {
  return (
    <FlexBox flexDirection="column" gap="8px">
      <div
        style={{
          backgroundColor: bColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          borderRadius: "100%",
        }}
      >
        <img style={{ width }} src={"/assets/images/" + imgSrc} alt="image" />
      </div>
      <p
        className="font-tahoma"
        style={{
          textTransform: "capitalize",
          fontSize: "15px",
          letterSpacing: ".84px",
        }}
      >
        {text}
      </p>
    </FlexBox>
  );
}

export default ServiceItem;
