import React from "react";
import "./DoctorHeader.css";
import { Link } from "react-router-dom";
function DoctorHeader() {
  return (
    <div className="doctor__header">
      <div>
        Welcome <b>Dr. Usama</b>
      </div>
      <Link className="link" to="/">
        Logout
      </Link>
    </div>
  );
}

export default DoctorHeader;
