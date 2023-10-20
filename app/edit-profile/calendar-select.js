import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, setOptions } from "@mobiscroll/react";
import "./edit-profile.scss";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

function CalendarSelect({ dataHandle, openPicker, onClose }) {
  return (
    <Page class="calendar-select-con">
      <Datepicker
        onCancel={onClose}
        onCellClick={dataHandle}
        controls={["calendar"]}
        isOpen={openPicker}
      />
    </Page>
  );
}

export default CalendarSelect;
