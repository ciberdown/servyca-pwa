import React from "react";
import GirdSystem from "../grid/girdSystem";
import ServiceItem from "@/app/components/servicesPart/service-item";
import { serviceItemsConst } from "@/public/constants/serviceConstants";

function ServicesPart() {
  const serviceItems = serviceItemsConst;
  return (
    <GirdSystem gridTemplateColumns={4} rowGap="35px">
      <ServiceItem
        imgSrc="image 8.png"
        bColor="#7410ff24"
        text={serviceItems[0]}
      />
      <ServiceItem
        imgSrc="image 9.png"
        bColor="#ffee002e"
        text={serviceItems[1]}
        width="20px"
      />
      <ServiceItem
        imgSrc="image 10.png"
        bColor="#10d7ff42"
        text={serviceItems[2]}
        width="20px"
      />
      <ServiceItem
        imgSrc="image 11.png"
        bColor="#7410ff19"
        text={serviceItems[3]}
        width="20px"
      />
      <ServiceItem
        imgSrc="image 15.png"
        bColor="#10ffc715"
        text={serviceItems[4]}
        width="19px"
      />
      <ServiceItem
        imgSrc="image 14.png"
        bColor="#10ff201a"
        text={serviceItems[5]}
        width="20px"
      />
      <ServiceItem
        imgSrc="image 13.png"
        bColor="#10ffb718"
        text={serviceItems[6]}
        width="24px"
      />
      <ServiceItem
        imgSrc="image 12.png"
        bColor="#ffee003f"
        text={serviceItems[7]}
        width="20px"
      />
    </GirdSystem>
  );
}

export default ServicesPart;
