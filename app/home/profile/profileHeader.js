import Back from "@/app/components/back/back";
import "./profile.scss";
import React from "react";
import FlexBox from "@/app/components/flex/flexBox";

function ProfileHeader({ data }) {
  return (
    <div>
      <FlexBox justifyContent="start" alignItems="center" gap="20px">
        <Back
          href="/home"
          style={{
            position: "static",
            margin: "0",
            padding: "0",
            width: "15px",
            height: "15px",
            marginTop: "8px",
          }}
        />
        <h1 className="head-mb-foo">profile</h1>
      </FlexBox>

      <FlexBox justifyContent="center">
        <FlexBox
          style={{ width: "150px", marginBottom: "25px" }}
          className="profile-head-container"
          flexDirection="column"
          gap="20px"
        >
          <img
            className="profile-image"
            src={data.profileImg}
            alt="profile image"
          />
          {data?.verified && (
            <section className="tick-con">
              <img
                className="profile-tick-image"
                src="/assets/images/tick12.png"
                alt="tick image"
              />
            </section>
          )}
          <h1 className="profile-name">{data?.name}</h1>
        </FlexBox>
      </FlexBox>
    </div>
  );
}

export default ProfileHeader;
