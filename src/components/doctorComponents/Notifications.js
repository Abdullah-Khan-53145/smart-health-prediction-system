import React from "react";
import { useEffect, useState } from "react";
import Appointment from "./Appointment";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import "./Notification.css";

function Notifications() {
  const doctor = JSON.parse(localStorage.getItem("doctor"));
  const [app, setApp] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "appointments"));
    onSnapshot(q, (querySnapshot) => {
      let appoint = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().doctor === doctor.name) {
          appoint.push({ ...doc.data(), id: doc.id });
        }
      });
      setApp(appoint);
    });
  }, []);
  return (
    <div className="notification__body">
      {app.length !== 0 ? (
        app.map((element) => (
          <>
            <Appointment patientData={element} />
          </>
        ))
      ) : (
        <span style={{ marginTop: "100px" }}>NO APPOINTMENTS CURRENTLY</span>
      )}
    </div>
  );
}

export default Notifications;
