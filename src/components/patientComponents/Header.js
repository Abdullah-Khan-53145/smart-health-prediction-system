import React from "react";
import "./Header.css";
function Header({ user }) {
  return (
    <div>
      <div className="_header__containter">
        <div className="left">
          <button>MENU</button>
        </div>
        <div className="mid">
          <img src="./imgs/LogoSample_ByTailorBrands (2).jpg" alt="" />
        </div>
        <div className="_right">
          <button className="profile">
            <img src={user.photoURL} alt="" />
          </button>
          <button className="logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
