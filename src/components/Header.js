import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const [hamclass, setHamclass] = useState("not-active");
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);
  const toggleNavBar = () => {
    if (hamclass === "not-active") {
      setHamclass("active");
    } else if (hamclass === "active") {
      setHamclass("not-active");
    }
    console.log(hamclass);
  };

  return (
    <div className={`header__section ${show && "active_nav"}`}>
      <div className="header">
        <div className="left__section">
          <img src="./imgs/LogoSample_ByTailorBrands (2).jpg" alt="" />
        </div>
        <div className={`right_section ${hamclass}`}>
          <div className="navlist ">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#footer">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hamburger__menu">
          <label htmlFor="check">
            <input type="checkbox" id="check" onClick={toggleNavBar} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className={`mobile__class ${hamclass}`}>
          <div className="navlist ">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
