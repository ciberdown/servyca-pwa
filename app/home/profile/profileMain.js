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
        <ProfileItem text="Edit profile" icon="profile-icon.png" href="/edit-profile" />
        <ProfileItem
          text="Notification"
          icon="notification-icon.png"
          href="/"
        />
        <ProfileItem text="Payment" icon="payment-icon.png" href="/" />
        <ProfileItem text="Security" icon="security-icon.png" href="/" />
        <ProfileItem text="Language" icon="lan-icon.png">
          <p>{data.lang}</p>
          <Forward href="/" style={{ marginBottom: "60px" }} />
        </ProfileItem>
        <ProfileItem text="Dark mode" icon="dark-mode-icon.png" href="/" />
        <ProfileItem
          text="Privacy policy"
          icon="privacy-policy-icon.png"
          href="/"
        />
        <ProfileItem text="Help center" icon="help-icon.png" href="/" />
        <ProfileItem
          text="Invite friends"
          icon="add-friends-icon.png"
          href="/"
        />
      </FlexBox>
      <FlexBox
        justifyContent="start"
        gap="20px"
        style={{
          marginTop: "-30px",
          marginBottom: "100px",
          paddingInline: "14px",
        }}
      >
        <img
          style={{ width: "22px" }}
          src="/assets/images/log-out-icon.png"
          alt=" "
        />
        <p style={{ color: "red" }} className="prof-setting-text">
          Logout
        </p>
      </FlexBox>
    </>
  );
}

export default ProfileMain;
