import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSideMenu } from "../../actions";
import { SignOutAPI } from "../../actions";
import "./Header.css";
function Header(props) {
  const { user } = props;
  const navigate = useNavigate();

  const handleLogOut = () => {
    props.signOut();
    navigate("/");
  };
  return (
    <div>
      <div className="_header__containter">
        <div className="left">
          <button className="_btn_" onClick={() => props.toggleSideMenu(true)}>
            MENU
          </button>
        </div>
        <div className="mid">
          <img src="./imgs/LogoSample_ByTailorBrands (2).jpg" alt="" />
        </div>
        <div className="_right">
          <button className="profile _btn_">
            <img src={user.photoURL} alt="" />

            <div className="_user__info">
              <div className="open">
                <span className="ref__btn"></span>
              </div>
              <h2>
                Welcome <b>{user.displayName.split(" ")[0]}</b>
              </h2>
              <small>{user.email}</small>
              <button className="_btn_user">
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Account settings
              </button>
            </div>
          </button>
          <button className="logout _btn_" onClick={handleLogOut}>
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

const mapStateToProps = (state) => ({
  showSideMenu: state.toggleSideMenuState.showSideMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSideMenu: (status) => dispatch(toggleSideMenu(status)),
  signOut: () => dispatch(SignOutAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
