"use client";

import IphoneHeaderImg from "@/app/components/iphoneHeaderImg/IphoneHeaderImg";
import "./bookingDetails.scss";
import FlexBox from "@/app/components/flex/flexBox";
import CalendarSelect from "@/app/edit-profile/calendar-select";
import { useState } from "react";
import HouseCleanItem from "../house-cleaning/HouseCleanItem";
import SelectionPart from "@/app/components/selectionPart/SelectionPart";
import PromoCodeEnter from "./promoCodeEnter";
import CustomStartBtn from "@/app/components/custom-start-btn/CustomStartBtn";
import BackHeader from "@/app/components/backHeader/BackHeader";

function BookingDetails() {
  const totalPrice = "123$";
  const [date, setDate] = useState(null);
  return (
    <div className="booking-details-con">
      <IphoneHeaderImg />
      =
      <BackHeader text="booking details" />
      <h2 id="book-details-text">Select date</h2>
      <FlexBox justifyContent="center">
        <CalendarSelect
          date={date}
          setDate={setDate}
          style={{ marginTop: "20px" }}
        />
      </FlexBox>
      <HouseCleanItem style={{ marginTop: "25px" }} text="working hours" />
      <h2 id="book-details-text">Choose start time</h2>
      <SelectionPart
        marginTop="20px"
        inputList={[
          { text: "9:00 AM" },
          { text: "9:30 AM" },
          { text: "10:00 AM" },
          { text: "10:30 AM" },
          { text: "11:00 AM" },
        ]}
      />
      <h2 id="book-details-text">Promo code</h2>
      <PromoCodeEnter />
      <CustomStartBtn
        text={"Countinue" + totalPrice}
        style={{
          position: "fixed",
          bottom: "20px",
          width: "350px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}

export default BookingDetails;
