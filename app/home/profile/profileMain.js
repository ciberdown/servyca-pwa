import ProfileItem from "./profileItemSetting";
import FlexBox from "../../components/flex/flexBox";
import Forward from "@/app/components/forward/forward";
import "./profile.scss";

function ProfileMain() {
  const data = { lang: "English(US)" };
  return (
    <>
      <FlexBox
        flexDirection="column"
        gap="20px"
        style={{
          marginTop: "80px",
          width: "100%",
          alignItems: "strech",
          paddingInline: "10px",
        }}
      >
        <ProfileItem text="Edit profile" icon="" href="/" />
        <ProfileItem text="Notification" icon="" href="/" />
        <ProfileItem text="Payment" icon="" href="/" />
        <ProfileItem text="Security" icon="" href="/" />
        <ProfileItem text="Language" icon="">
          <p>{data.lang}</p>
          <Forward href="/" style={{ marginBottom: "60px" }} />
        </ProfileItem>
        <ProfileItem text="Dark mode" icon="" href="/" />
        <ProfileItem text="Privacy policy" icon="" href="/" />
        <ProfileItem text="Help center" icon="" href="/" />
        <ProfileItem text="Invite friends" icon="" href="/" />
      </FlexBox>
      <FlexBox
        justifyContent="start"
        gap="20px"
        style={{
          marginTop: "-30px",
          marginBottom: "100px",
          paddingInline:'10px'
        }}
      >
        <img src="/assets/images/some" alt=" " />
        <p style={{ color: "red" }} className="prof-setting-text">
          Logout
        </p>
      </FlexBox>
    </>
  );
}

export default ProfileMain;
