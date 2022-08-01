import React from "react";
import "./DoctorHeader.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function DoctorHeader() {
  const [doctor, setDoctor] = useState("Doctor");
  useEffect(() => {
    setDoctor("Dr. " + JSON.parse(localStorage.getItem("doctor")).name);
  }, []);

  const logout = () => {
    localStorage.setItem("doctor", null);
  };
  return (
    <div className="doctor__header">
      <div>
        Welcome <b>{doctor}</b>
      </div>
      <div>
        <Link className="link" to="/doctor">
          Patient Records
        </Link>
        <Link className="link" to="/doctor/appointments">
          Appointments
        </Link>
        <Link onClick={logout} className="link" to="/">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default DoctorHeader;
