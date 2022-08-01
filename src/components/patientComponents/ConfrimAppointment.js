import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./ConfrimAppointment.css";
function ConfrimAppointment(props) {
  const toggleNotification = async () => {
    await deleteDoc(doc(db, "confrim_appointments", props.info.id));
  };
  return (
    <div className="confrim__appointment">
      <span>
        Your Appointment with <b>Dr. {props.info.doctor}</b> is on{" "}
        {props.info.date} at {props.info.time} and meeting link is{" "}
        <a href={props.info.link}>{props.info.link}</a>
      </span>
      <div className="confrim__buttons">
        <button className="btn__primary" onClick={toggleNotification}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tick__svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ConfrimAppointment;
