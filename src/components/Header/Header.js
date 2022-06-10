import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Me from "../../assets/me.jpg";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Hossain Rafi</h1>
        <h5 className="text-light">Front-end Web Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="" />
        </div>

        {/* <div>
          <a href="#contact" className="scroll-down">
            Scroll Down
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
