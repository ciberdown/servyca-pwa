import React from "react";
import Navbar from "../components/navbar/navbar";

function layout({ children }) {
  return (
    <div>
      <section>{children}</section>
      <Navbar />
    </div>
  );
}

export default layout;
