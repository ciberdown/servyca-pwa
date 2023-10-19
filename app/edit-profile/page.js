import Back from "../components/back/back";
import CustomStartBtn from "../components/custom-start-btn/CustomStartBtn";
import FlexBox from "../components/flex/flexBox";
import IphoneHeaderImg from "../components/iphoneHeaderImg/IphoneHeaderImg";
import ProfItemInput from "./edit-profile-item";
import "./edit-profile.scss";

function EditProfile() {
  const data = {
    name: "Andrew Kidman",
    location: "Torento",
    email: "Andrew.kidman@gmail.com",
    birthday: "1990/12/02",
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
        <ProfItemInput icon="birthday-icon.png" text={data.birthday}>
          <img
            src="/"
            alt="calendar"
            style={{
              position: "absolute",
              right: "20px",
              width: "20px",
            }}
          />
        </ProfItemInput>
        <ProfItemInput icon="loc-icon.png" text={data.location} />
        <ProfItemInput icon="password-icon.png" text="password" />
        <ProfItemInput icon="password-icon.png" text="password" />
      </FlexBox>

      <CustomStartBtn
        text="Update"
        reference="/"
        style={{ marginTop: "70px" }}
      />
    </div>
  );
}

export default EditProfile;
