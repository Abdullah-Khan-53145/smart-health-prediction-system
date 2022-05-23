import React from "react";
import { connect } from "react-redux";
import Header from "./patientComponents/Header";
import SideMenu from "./patientComponents/SideMenu";
import "./PatientRecord.css";
function PatientRecord(props) {
  const { user } = props;
  return (
    <div>
      <Header user={user} />
      <SideMenu user={user} />
      <h1 className="test_patient_record_section">
        This is Patient Record section
      </h1>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(PatientRecord);
