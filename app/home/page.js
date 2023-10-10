import FlexBox from "../components/flex/flexBox";
import LineContainer from "../components/lineContainer/lineContainer";
import Profile from "../components/profile/profile";
import SelectionPart from "../components/selectionPart/SelectionPart";
import "./home.scss";
import ServicesPart from "../components/servicesPart/Services";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/navbar";
import { cardProfiles } from "@/public/constants/cardInfos";

function Home() {
  //you need sign in validation here!

  const profiles = cardProfiles;
  return (
    <div className="home">
      <img src="/assets/images/untitled.png" alt="header" />
      <Profile />
      <section className="input-con">
        <input type="text" placeholder="Search" />
        <img src="/assets/images/image 7.png" alt="search icon" />
      </section>

      <FlexBox className="special-con">
        <h1 className="head-l">Special offers</h1>
        <p className="see-all">See All</p>
      </FlexBox>

      <img src="/assets/images/untitled233.png" alt="off today special" />

      <FlexBox className="special-con">
        <h1 className="head-l">Services</h1>
        <p className="see-all">See All</p>
      </FlexBox>

      <ServicesPart />

      <LineContainer hrStyle={{ backgroundColor: "#9797971d" }} />

      <FlexBox className="special-con">
        <h1 className="head-l">Most Popular Services</h1>
        <p className="see-all">See All</p>
      </FlexBox>

      <SelectionPart />

      <FlexBox flexDirection="column" gap="20px" style={{ marginTop: "20px" }}>
        <Card profile={profiles[0]} />
        <Card profile={profiles[1]} />
        <Card profile={profiles[2]} />
      </FlexBox>

      <Navbar />
    </div>
  );
}

export default Home;
