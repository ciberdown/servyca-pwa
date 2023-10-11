import "./notifImage.scss";

function NotifImage({ color }) {
  return (
    <div className="notif-image">
      <Circle color={color} size="48px" bottom="-23px" />
      <Circle color={color} size="12px" bottom="25px" />
      <Circle color={color} size="16px" bottom="-25px" left="-10px" />
      <Circle color={color} size="14px" right="-55px" top="17px" />
      <Circle color={color} size="14px" right="-62px" top="-15px" />

      <Circle color={color} size="6px" right="-45px" top="-35px" />
      <Circle color={color} size="6px" right="-30px" top="-30px" />
      <Circle color={color} size="6px" right="8px" top="-10px" />
    </div>
  );
}

export default NotifImage;

const Circle = ({
  size,
  color,
  top = null,
  left = null,
  right = null,
  bottom = null,
}) => {
  return (
    <div
      style={{
        height: size,
        width: size,
        position: "absolute",
        backgroundColor: color,
        left,
        top,
        right,
        bottom,
        borderRadius: "50%",
      }}
    ></div>
  );
};
