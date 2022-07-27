import React from "react";
import PatientRecord from "../PatientRecord";
import DoctorHeader from "./DoctorHeader";
import Appointment from "./Appointment";

function Doctor() {
  return (
    <div>
      <DoctorHeader />
      <Appointment />
      <PatientRecord role="doctor" />
    </div>
  );
}

export default Doctor;
