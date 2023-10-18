import Back from "@/app/components/back/back";
import "./profile.scss";
import FlexBox from "@/app/components/flex/flexBox";
import ProfileHeader from "./profileHeader";
import ProfileMain from "./profileMain";

function Profile() {
  const data = {
    profileImg: "/assets/images/prof.svg",
    verified: true,
    name: "andrew kidman",
  };
  return (
    <div className="profile-container">
      <ProfileHeader data={data} />
      <hr />
      <ProfileMain />
    </div>
  );
}

export default Profile;
