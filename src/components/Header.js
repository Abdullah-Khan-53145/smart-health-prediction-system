import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [hamclass, setHamclass] = useState("not-active");
  const toggleNavBar = () => {
    if (hamclass === "not-active") {
      setHamclass("active");
    } else if (hamclass === "active") {
      setHamclass("not-active");
    }
    console.log(hamclass);
  };

  return (
    <div className="header__section">
      <div className="header">
        <div className="left__section">
          <img src="./imgs/LogoSample_ByTailorBrands (2).jpg" alt="" />
        </div>
        <div className={`right_section ${hamclass}`}>
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
          <button className="btn__primary">
            <span>Login</span>
            <small>as a Admin</small>
          </button>
        </div>
        <div className="hamburger__menu">
          <label for="check">
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
          <button className="btn__primary">
            <span>Login</span>
            <small>as a Admin</small>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
