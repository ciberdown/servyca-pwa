"use client";
import { useState } from "react";
import "./houseCleaning.scss";
import FlexBox from "@/app/components/flex/flexBox";

function HouseCleanItem({ text, style = null }) {
  const [number, setNumber] = useState(0);
  function increase() {
    setNumber((prev) => {
      return prev + 1;
    });
  }
  function decrease() {
    number > 0 &&
      setNumber((prev) => {
        return prev - 1;
      });
  }
  return (
    <FlexBox
      style={style}
      className="house-item-bar"
      justifyContent="space-between"
    >
      <p>{text}</p>
      <FlexBox gap="10px">
        <section onClick={decrease} className="circle-btn">
          <p>-</p>
        </section>
        <p className="num-bar">{number}</p>
        <section onClick={increase} className="circle-btn">
          <p>+</p>
        </section>
      </FlexBox>
    </FlexBox>
  );
}

export default HouseCleanItem;
