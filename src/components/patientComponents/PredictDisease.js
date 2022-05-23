import React from "react";
import "./PredictDisease.css";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { connect } from "react-redux";
function PredictDisease(props) {
  const { user } = props;
  return (
    <div>
      <Header user={user} />
      <SideMenu user={user} />
      <h1 className="test_predict_section">This is Predict disease Section</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(PredictDisease);
