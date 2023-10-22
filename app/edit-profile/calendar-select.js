import * as React from "react";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./edit-profile.scss";

function CalendarSelect({
  classname = null,
  close,
  date = new Date(),
  setDate,
  style = undefined,
}) {
  const changeCalendarHandle = (newDate) => {
    setDate(newDate.$y + "/" + newDate.$M + "/" + newDate.$D);

    close();
  };
  return (
    <div style={style} className={"calendar " + classname}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoItem>
          <DateCalendar
            value={dayjs(date)}
            onChange={(newVal) => changeCalendarHandle(newVal)}
          />
        </DemoItem>
      </LocalizationProvider>
    </div>
  );
}

export default CalendarSelect;
