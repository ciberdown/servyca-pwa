"use client";
import Back from "../components/back/back";
import CustomStartBtn from "../components/custom-start-btn/CustomStartBtn";
import FlexBox from "../components/flex/flexBox";
import IphoneHeaderImg from "../components/iphoneHeaderImg/IphoneHeaderImg";
import ProfItemInput from "./edit-profile-item";
import "./edit-profile.scss";
import CalendarSelect from "./calendar-select";
import { useRef, useState } from "react";

function EditProfile() {
  const [openPicker, setOpenPicker] = useState(false);
  const [date, setDate] = useState("1990/12/02");

  const data = {
    name: "Andrew Kidman",
    location: "Torento",
    email: "Andrew.kidman@gmail.com",
    birthday: date,
  };

  const show = () => {
    setOpenPicker(true);
  };

  const onClose = () => {
    setOpenPicker(false);
  };

  const dataHandle = (obj) => {
    setDate(
      obj.date.getYear() +
        1900 +
        "/" +
        obj.date.getDate() +
        "/" +
        obj.date.getMonth()
    );
    onClose();
  };
  const focusInputHandle = () => {
    show();
  };
  return (
    <div className="edit-profile-part">
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
        <h1 className="head-mb-foo">edit profile</h1>
      </FlexBox>

      <FlexBox className="inputs-part-con" flexDirection="column" gap="20px">
        <ProfItemInput icon="edit-name.png" text={data.name} />
        <ProfItemInput icon="password-icon.png" text="password" />
        <ProfItemInput icon="email-icon.png" text={data.email} />
        <ProfItemInput
          icon="birthday-icon.png"
          text={data.birthday}
          focusInputHandle={focusInputHandle}
        >
          <img
            onClick={show}
            src="/assets/images/calendar-icon.png"
            alt="calendar icon"
            style={{
              position: "absolute",
              right: "22px",
              width: "22px",
            }}
          />
        </ProfItemInput>
        <ProfItemInput icon="loc-icon.png" text={data.location} />
        <ProfItemInput icon="password-icon.png" text="password" />
        <ProfItemInput icon="password-icon.png" text="password" />
      </FlexBox>

      <FlexBox justifyContent="center">
        <CustomStartBtn
          text="Update"
          reference="/"
          style={{ marginTop: "70px" }}
        />
      </FlexBox>

      {openPicker && (
        <CalendarSelect
          classname="calendar-select-con"
          close={onClose}
          date={date}
          setDate={setDate}
        />
      )}
    </div>
  );
}

export default EditProfile;
