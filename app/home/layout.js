import React from "react";
import Navbar from "../components/navbar/navbar";
import "./home.scss";

function layout({ children }) {
  return (
    <div>
      <img src="/assets/images/untitled.png" className="head-iphone-img-moz" />
      <section>{children}</section>
      <Navbar />
    </div>
  );
}

export default layout;
