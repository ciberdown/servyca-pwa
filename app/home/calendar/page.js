"use client";

import BackHeader from "@/app/components/backHeader/BackHeader";
import "./calendar.scss";
import CalendarSelect from "@/app/edit-profile/calendar-select";
import CustomStartBtn from "../../components/custom-start-btn/CustomStartBtn";
import FlexBox from "../../components/flex/flexBox";

function Calendar() {
  const selectedServices = [];
  return (
    <div className="calendar-con">
      <BackHeader text="my calender" />
      <CalendarSelect style={{ marginTop: "20px" }} />

      <FlexBox>
        <h2 className="service-booking-head-foo">Service Booking+({selectedServices.length})</h2>
        {selectedServices.length !== 0 && <p id="see all">See All</p>}
      </FlexBox>
      {selectedServices.length === 0 && (
        <FlexBox flexDirection="column">
          <img
            src="/assets/images/no-service-image.png"
            alt="no service image"
          />

          <h2 className="no-ser-foo">You have no service booking</h2>
          <p className="you-dont-book-foo">You don't book services at this date.</p>

          <CustomStartBtn text="+ Booking new service" />
        </FlexBox>
      )}
    </div>
  );
}

export default Calendar;
