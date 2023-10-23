import FlexBox from "@/app/components/flex/flexBox";
import "./paymentMethods.scss";

function PaymentItem({
  item: { method, icon, id },
  selectedIndex,
  setSelectedIndex,
}) {
  return (
    <FlexBox className="method-item" justifyContent="space-between">
      <FlexBox gap="10px" justifyContent="start">
        <img src={"/assets/images/" + icon} alt={method} />
        <h1 className="method">{method}</h1>
      </FlexBox>

      <section
        onClick={() => setSelectedIndex(id)}
        className={selectedIndex === id ? "circle-foo selected" : "circle-foo"}
      />
    </FlexBox>
  );
}

export default PaymentItem;
