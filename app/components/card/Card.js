"use client";

import { useState } from "react";
import FlexBox from "../flex/flexBox";
import "./card.scss";

function Card({ data, style = null, index }) {
  if (!index) {
    console.error("index is null in card card section");
    return;
  }
  const [bookmarked, setBookmarked] = useState(data.bookmarked);

  const clickBookmarkHandler = () => {
    setBookmarked((prev) => !prev);
  };

  return (
    <FlexBox className="my-card-container" style={style}>
      <img
        className="prof-card"
        src={"/assets/images/" + data.img}
        alt="worker image"
        style={{ width: "79px", height: "82px" }}
      />

      <div className="center">
        <p className="name">{data.name}</p>
        <p className="job">{data.job}</p>
        <p className="payment">$ {data.payment}</p>

        <FlexBox className="foo-card">
          <p className="rate">{data.rate}</p>
          <div className="hr-line"></div>
          <p>{data.views} views</p>
        </FlexBox>
      </div>

      <img
        onClick={clickBookmarkHandler}
        className="bookmark-icon"
        src={
          bookmarked
            ? "/assets/images/image 32.png"
            : "/assets/images/image 5.png"
        }
        alt="bookmark icon"
        style={{ width: "12px", height: "15px" }}
      />
    </FlexBox>
  );
}

export default Card;
