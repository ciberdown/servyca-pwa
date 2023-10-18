import FlexBox from "@/app/components/flex/flexBox";
import Forward from "@/app/components/forward/forward";
import "./profile.scss";

function ProfileItem({ text, icon, href, children }) {
  return (
    <FlexBox justifyContent="space-between" style={{ marginTop: "-120px" }}>
      <FlexBox style={{ display: "flex" }} gap="20px">
        <img src={"/assets/images/" + icon} />
        <h1 className="prof-setting-text">{text}</h1>
      </FlexBox>

      {!children ? (
        <Forward href={href} style={{ marginBottom: "60px" }} />
      ) : (
        <FlexBox>{children}</FlexBox>
      )}
    </FlexBox>
  );
}

export default ProfileItem;
