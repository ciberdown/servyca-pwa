import FlexBox from "../components/flex/flexBox";
import "./edit-profile.scss";

function ProfItemInput({ icon, text, children }) {
  return (
    <FlexBox className="edit-prof-foo-con" gap="20px">
      <img id="edit-prof-img" src={"/assets/images/" + icon} alt={icon} />
      <input type="text" placeholder={text} />
      {children}
    </FlexBox>
  );
}

export default ProfItemInput;
