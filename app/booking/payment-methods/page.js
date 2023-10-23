"use client";

import FlexBox from "@/app/components/flex/flexBox";
import "./paymentMethods.scss";
import BackHeader from "@/app/components/backHeader/BackHeader";
import PaymentItem from "./paymentItem";
import { useState } from "react";
import CustomStartBtn from "@/app/components/custom-start-btn/CustomStartBtn";
import IphoneHeaderImg from "@/app/components/iphoneHeaderImg/IphoneHeaderImg";

function PaymentMethods() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const paymentMethods = [
    { icon: "pay1.png", method: "Paypal", id: 0 },
    { icon: "pay2.png", method: "Google pay", id: 1 },
    { icon: "pay3.png", method: "Apple pay", id: 2 },
    { icon: "pay4.png", method: "Cash money", id: 3 },
  ];

  return (
    <div className="payment-methods">
      <IphoneHeaderImg />
      <BackHeader text="payment methods" />

      <p id="sel-foo-bar">Select the payment method you want to use</p>

      <FlexBox gap="30px" flexDirection="column" alignItems="stretch">
        {paymentMethods.map((item, index) => {
          return (
            <PaymentItem
              item={item}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              key={index}
            />
          );
        })}
      </FlexBox>

      <CustomStartBtn
        text={"Countinue"}
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

export default PaymentMethods;
