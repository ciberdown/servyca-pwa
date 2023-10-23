"use client";
import { useState } from "react";
import FlexBox from "../flex/flexBox";
import "./card.scss";
import NotifImage from "./notifImage";

function NotifCard({ data }) {
  const [selected, setSelected] = useState(data.selected);
  return (
    <FlexBox
      className="notif-card"
      justifyContent="start"
      gap="20px"
      style={{ position: "relative" }}
    >
      <NotifImage color={data.color} />

      <FlexBox
        gap="12px"
        flexDirection="column"
        style={{ marginLeft: "60px" }}
        alignItems="start"
      >
        {selected !== undefined && (
          <section
            onClick={() => setSelected((prev) => !prev)}
            className={
              selected
                ? "selection-part selected-card"
                : "selection-part unselected-card"
            }
          ></section>
        )}
        <h1 className="title-card-notif">{data.title}</h1>
        <p className="info-card-notif">{data.info}</p>
      </FlexBox>
    </FlexBox>
  );
}

export default NotifCard;
