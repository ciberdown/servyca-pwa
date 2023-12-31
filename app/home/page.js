import FlexBox from "../components/flex/flexBox";
import LineContainer from "../components/lineContainer/lineContainer";
import Profile from "../components/profileHome/profileHome";
import SelectionPart from "../components/selectionPart/SelectionPart";
import "./home.scss";
import ServicesPart from "../components/servicesPart/Services";
import Card from "../components/card/Card";
import { cardProfiles } from "@/public/constants/cardInfos";
import Link from "next/link";

function Home() {
  //you need sign in validation here!

  const profiles = cardProfiles;
  return (
    <div className="home">

      <Profile />

      <section className="input-con">
        <input type="text" placeholder="Search" />
        <img src="/assets/images/image 7.png" alt="search icon" />
      </section>

      <FlexBox className="special-con">
        <h1 className="head-l">Special offers</h1>
        <Link className="link" href="/special-offers">
          <p className="see-all">See All</p>
        </Link>
      </FlexBox>

      <img src="/assets/images/untitled233.png" alt="off today special" />

      <FlexBox className="special-con">
        <h1 className="head-l">Services</h1>
        <Link className="link" href="all-services">
          <p className="see-all">See All</p>
        </Link>
      </FlexBox>

      <ServicesPart />

      <LineContainer hrStyle={{ backgroundColor: "#9797971d" }} />

      <FlexBox className="special-con">
        <h1 className="head-l">Most Popular Services</h1>
        <Link
          style={{ textDecoration: "none" }}
          href="/most-popular-services"
        >
          <p className="see-all">See All</p>
        </Link>
      </FlexBox>

      <SelectionPart />

      <FlexBox
        flexDirection="column"
        gap="20px"
        style={{
          marginTop: "20px",
          marginBottom: "100px",
        }}
      >
        <Card data={profiles[1]} index={1} />
        <Card data={profiles[2]} index={2} />
        <Card data={profiles[3]} index={3} />
      </FlexBox>
    </div>
  );
}

export default Home;
