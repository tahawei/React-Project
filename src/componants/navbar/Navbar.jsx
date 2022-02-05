import React, { useState } from "react";
// import { RiMenu3Line, RiCloseLine } from "./react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import menu from "../../assets/bx-menu.svg";
// import x_menu from "../../assets/bx-x.svg";
const Navbar = () => {
  const [Active, setActive] = useState(false);
  const toggleClass = () => {
    Active ? setActive(false) : setActive(true);

    console.log(Active);
  };
  return (
    <div className={Active ? "active" : "nonActive"}>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgpt3?">What Is GPT3?</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
            <div className="gpt3__navbar-sign-sm">
              <p>Sign in</p>
              <button>Sign up</button>
            </div>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button>Sign up</button>
        </div>
        <img
          src={menu}
          alt="menu"
          className="gpt3__menu m"
          onClick={toggleClass}
        />
        {/* <img
          src={x_menu}
          className="gpt3__menu x"
          onClick={toggleClass}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Navbar;
