import { notifs } from "@/public/constants/notifications";
import "./notifications.scss";
import NotifCard from "../components/card/notifCard";
import IphoneHeaderImg from "../components/iphoneHeaderImg/IphoneHeaderImg";
import BackHeader from "../components/backHeader/BackHeader";

function Notifications() {
  return (
    <div className="notifications-con">
      <IphoneHeaderImg />

      <BackHeader text="notifications" />

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
