import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignOutAPI } from "../actions";
import Header from "./patientComponents/Header";
import Home from "./patientComponents/Home";
import SideMenu from "./patientComponents/SideMenu";
import AccountSetting from "./patientComponents/AccountSetting";
import PredictDisease from "./patientComponents/PredictDisease";
import PatientRecord from "./PatientRecord";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function PatientHome(props) {
  // for navigation
  const navigate = useNavigate();
  // functions
  const handleSignOut = () => {
    props.signOut();
    navigate("/login-patient");
  };
  const { user } = props;
  return (
    <div>
      <Header user={user} />
      <SideMenu user={user} />
      <Home user={user} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});
const dispatchStateToProps = (dispatch) => ({
  signOut: () => dispatch(SignOutAPI()),
});

export default connect(mapStateToProps, dispatchStateToProps)(PatientHome);
