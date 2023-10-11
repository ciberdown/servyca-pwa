import FlexBox from "../flex/flexBox";
import "./card.scss";
import NotifImage from "./notifImage";

function NotifCard({ data }) {
  return (
    <FlexBox className="notif-card" justifyContent="start" gap="20px">
      <NotifImage color={data.color} />

      <FlexBox
        gap="12px"
        flexDirection="column"
        style={{ marginLeft: "60px" }}
        alignItems="start"
      >
        <h1 className="title-card-notif">{data.title}</h1>
        <p className="info-card-notif">{data.info}</p>
      </FlexBox>
    </FlexBox>
  );
}

export default NotifCard;
