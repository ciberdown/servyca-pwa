import { notifs } from "@/public/constants/notifications";
import Back from "../../components/back/back";
import FlexBox from "../../components/flex/flexBox";
import "./notifications.scss";
import NotifCard from "../../components/card/notifCard";

function Notifications() {
  return (
    <div className="notifications-con">
      <FlexBox
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
        <h1 className="head-mb-foo">notifications</h1>
      </FlexBox>

      <div className="notif-card-con">
        <p className="notif-today-p">today</p>
        {notifs.map((item, index) => {
          if (item.time === "today") {
            return <NotifCard key={index} data={item} />;
          }
        })}
      </div>
      <div className="notif-card-con">
        <p className="notif-today-p">yesterday</p>
        {notifs.map((item, index) => {
          if (item.time === "yesterday") {
            return <NotifCard key={index} data={item} />;
          }
        })}
      </div>
      <div className="notif-card-con">
        <p className="notif-today-p">other</p>
        {notifs.map((item, index) => {
          if (item.time !== "today" && item.time !== "yesterday") {
            return <NotifCard key={index} data={item} />;
          }
        })}
      </div>
    </div>
  );
}

export default Notifications;
