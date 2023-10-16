import { serviceItemsConst } from "@/public/constants/serviceConstants";
import GirdSystem from "../grid/girdSystem";
import ServiceItem from "@/app/components/servicesPart/service-item";
import Link from "next/link";

function ServicesPart({ marginTop }) {
  const serviceItems = serviceItemsConst;
  return (
    <GirdSystem rowGap="35px" style={{ marginTop }}>
      {serviceItems.map((item, index) => {
        return (
          <Link href={item.href} style={{ textDecoration: "none" }}>
            <ServiceItem
              key={index}
              imgSrc={item.imgSrc}
              bColor={item.bgColor}
              text={item.text}
              width="20px"
            />
          </Link>
        );
      })}
    </GirdSystem>
  );
}

export default ServicesPart;
