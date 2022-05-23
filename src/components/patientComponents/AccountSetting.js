import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { connect } from "react-redux";
import "./AccountSetting.css";
function AccountSetting(props) {
  const { user } = props;
  return (
    <div>
      <Header user={user} />
      <SideMenu user={user} />
      <h1 className="test_acount_setting_section">This is Account settings</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(AccountSetting);
