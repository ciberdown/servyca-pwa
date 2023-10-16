"use client";
import { serviceItemsConst } from "@/public/constants/serviceConstants";
import FlexBox from "../flex/flexBox";
import "./selectionPart.scss";
import { useState } from "react";

function SelectionPart({ marginTop = null }) {
  const [selcetedIndex, setSelcetedIndex] = useState(0);
  const serviceItems = serviceItemsConst;
  return (
    <FlexBox gap="10px" style={{ overflowX: "scroll", marginTop }}>
      <p
        onClick={() => setSelcetedIndex(0)}
        className={selcetedIndex === 0 ? "item selected" : "item none-selected"}
      >
        all
      </p>
      {serviceItems.map((item, index) => {
        return (
          <div
            onClick={() => setSelcetedIndex(index + 1)}
            key={index}
            className={
              selcetedIndex === index + 1
                ? "item selected"
                : "item none-selected"
            }
          >
            <p>{item.text}</p>
          </div>
        );
      })}
    </FlexBox>
  );
}

export default SelectionPart;
