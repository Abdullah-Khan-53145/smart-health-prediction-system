import React from "react";
import { useState } from "react";
import "./Appointment.css";
function Appointment() {
  const [display, setDisplay] = useState("flex");
  const patient = {
    displayName: "Usama baig",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/smart-health-prediction-7dbeb.appspot.com/o/user%2FUntitled.png?alt=media&token=165bd4ab-1861-42df-b5e9-d949df8b4194",
  };
  const toggleNotification = () => {
    setDisplay("none");
  };
  return (
    <div className="doctor__appointment" style={{ display: display }}>
      <img src={patient.photoURL} alt="" />
      <div className="doctor__appointment__info">
        <h2>Appointment from {patient.displayName}</h2>
        <p>Usama has a skin infection and he booked an appointment</p>
        <div className="buttons">
          <button className="accept" onClick={toggleNotification}>
            Accept
          </button>
          <button className="deny" onClick={toggleNotification}>
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
