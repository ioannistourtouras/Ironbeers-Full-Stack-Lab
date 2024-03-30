import React from "react";
import home_icon from "../assets/home-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>      
      <nav style={{ backgroundColor: "blue" }}>
        <Link to={"/"}>
          <img src={home_icon} alt="home icon img" />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
