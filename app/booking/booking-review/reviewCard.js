import FlexBox from "@/app/components/flex/flexBox";
import "./bookingReview.scss";

function ReviewCard({ children }) {
  return (
    <FlexBox
      flexDirection="column"
      alignItems="stretch"
      gap="20px"
      className="rev-card"
    >
      {children}
    </FlexBox>
  );
}

export default ReviewCard;
