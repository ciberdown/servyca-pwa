"use client";

import { useState } from "react";
import FlexBox from "../flex/flexBox";
import "./card.scss";

function Card({
  profile: { img, name, job, payment, rate, views },
  bookmark = false,
}) {
  const [bookmarked, setBookmarked] = useState(bookmark);
  return (
    <FlexBox className="my-card-container">
      <img
        className="prof-card"
        src={"/assets/images/" + img}
        alt="worker image"
        style={{ width: "79px", height: "82px" }}
      />

      <div className="center">
        <p className="name">{name}</p>
        <p className="job">{job}</p>
        <p className="payment">$ {payment}</p>

        <FlexBox className="foo-card">
          <p className="rate">{rate}</p>
          <div className="hr-line"></div>
          <p>{views} views</p>
        </FlexBox>
      </div>

      <img
        onClick={() => setBookmarked((prev) => !prev)}
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
