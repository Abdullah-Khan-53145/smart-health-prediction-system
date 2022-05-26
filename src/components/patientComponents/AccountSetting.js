import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { connect } from "react-redux";
import Signup from "../Signup";
import "./AccountSetting.css";
function AccountSetting(props) {
  const { user } = props;
  return (
    <div className="__account__setting">
      <Header user={user} />
      <SideMenu user={user} />
      <Signup
        userinfo={{
          name: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
        }}
        heading="Edit Account"
        role="editAccount"
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(AccountSetting);
