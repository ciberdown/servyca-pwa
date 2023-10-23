import BackHeader from "@/app/components/backHeader/BackHeader";
import "./bookingReview.scss";
import IphoneHeaderImg from "@/app/components/iphoneHeaderImg/IphoneHeaderImg";
import ReviewCard from "./reviewCard";
import FlexBox from "@/app/components/flex/flexBox";
import {
  data,
  data2,
  data3,
  selectedPayment,
  totalPayment,
} from "./data.services";
import CustomStartBtn from "@/app/components/custom-start-btn/CustomStartBtn";

function BookingReview() {
  return (
    <div className="booking-review">
      <IphoneHeaderImg />
      <BackHeader text="booking review" />

      <FlexBox
        style={{ marginTop: "30px" }}
        flexDirection="column"
        alignItems="stretch"
        gap="30px"
      >
        <ReviewCard>
          {data.map((item, index) => {
            return (
              <FlexBox key={index}>
                <p>{item.item}</p>
                <h2>{item.ans}</h2>
              </FlexBox>
            );
          })}
        </ReviewCard>

        <ReviewCard>
          <p>{data2.text}</p>
        </ReviewCard>

        <ReviewCard>
          {data3.map((item, index) => {
            return (
              <div key={index}>
                <FlexBox>
                  <p>{item.item}</p>
                  <h2>{item.pay} $</h2>
                </FlexBox>
              </div>
            );
          })}
          <hr />
          <FlexBox>
            <p>Total</p>
            <h2>{totalPayment} $</h2>
          </FlexBox>
        </ReviewCard>

        <ReviewCard>
          <FlexBox>
            <FlexBox gap="15px" justifyContent="start">
              <img
                src={"/assets/images/" + selectedPayment.icon}
                alt="payment icon"
              />
              <p>{selectedPayment.method}</p>
            </FlexBox>

            <h3>Change</h3>
          </FlexBox>
        </ReviewCard>
      </FlexBox>
      <CustomStartBtn
        text="Confirm Order"
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

export default BookingReview;
