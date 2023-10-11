"use client";

import Link from "next/link";
import FlexBox from "../flex/flexBox";
import "./navbar.scss";
import { useState } from "react";

function Navbar() {
  const [selectedIndex, setselectedIndex] = useState(0);
  const navbarInfo = [
    { itemName: "home", image: "image 16.png", href: "/home" },
    { itemName: "booking", image: "image 17.png", href: "/home/booking" },
    { itemName: "calendar", image: "image 19.png", href: "/home/calendar" },
    { itemName: "inbox", image: "image 21.png", href: "/home/inbox" },
    { itemName: "profile", image: "image 23.png", href: "/home/profile" },
  ];
  return (
    <div className="navbar">
      <FlexBox justifyContent="space-around">
        {navbarInfo.map((item, index) => {
          return (
            <Link
              key={index}
              className="nav-item"
              href={item.href}
              onClick={() => setselectedIndex(index)}
            >
              <img src={"/assets/images/" + item.image} alt={item.itemName} />
              <p
                className={
                  selectedIndex === index ? "p-selected" : "p-none-selected"
                }
              >
                {item.itemName}
              </p>
            </Link>
          );
        })}
      </FlexBox>
    </div>
  );
}

export default Navbar;
