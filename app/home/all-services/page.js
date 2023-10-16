import FlexBox from "@/app/components/flex/flexBox";
import "./allServices.scss";
import Back from "@/app/components/back/back";
import ServicesPart from "@/app/components/servicesPart/Services";

function AllServices() {
  return (
    <div className="all-services">
      <FlexBox
        className="mt-default"
        justifyContent="start"
        alignItems="center"
        gap="20px"
      >
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
        <h1 className="head-mb-foo">all services</h1>
      </FlexBox>

      <ServicesPart marginTop="30px" />
    </div>
  );
}

export default AllServices;
