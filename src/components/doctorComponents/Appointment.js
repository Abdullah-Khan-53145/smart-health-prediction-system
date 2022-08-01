import React from "react";
import { useState } from "react";
import { doc, deleteDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Appointment.css";
function Appointment(props) {
  const { patientData } = props;
  const [display, setDisplay] = useState("flex");
  const [reveal, setReveal] = useState("none");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");

  const toggleDenyNotification = async () => {
    await deleteDoc(doc(db, "appointments", patientData.id));
  };

  const AcceptNotification = () => {
    if (reveal === "block") {
      setReveal("none");
    } else if (reveal === "none") {
      setReveal("block");
    }
  };
  const handleAppointment = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "confrim_appointments"), {
      doctor: patientData.doctor,
      email: patientData.email,
      patient: patientData.patientName,
      date: date,
      time,
      link,
    });
    console.log({
      doctor: patientData.doctor,
      email: patientData.email,
      patient: patientData.patientName,
      date: date,
      time,
      link,
    });
    console.log("Document written with ID: ", docRef.id);
    await deleteDoc(doc(db, "appointments", patientData.id));
  };

  return (
    <div className="doctor__appointment" style={{ display: display }}>
      <img src={patientData.patientProfile} alt="" />
      <div className="doctor__appointment__info">
        <h2>Appointment from {patientData.patientName}</h2>
        <p>
          {patientData.patientName} has a {patientData.desease} infection and he
          booked an appointment
        </p>
        <div className="buttons">
          <button className="accept" onClick={AcceptNotification}>
            Accept
          </button>
          <button className="deny" onClick={toggleDenyNotification}>
            Deny
          </button>
        </div>
        <div className="dateTime" style={{ display: reveal }}>
          <form>
            <div className="input__container">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value.toString());
                  console.log(date);
                }}
                name="date"
                id="date"
                required
              />
            </div>
            <div className="input__container">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value.toString());
                  console.log(time);
                }}
                name="time"
                id="time"
                required
              />
            </div>
            <div className="input__container">
              <label htmlFor="time">Link</label>
              <input
                type="text"
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                  console.log(link);
                }}
                name="link"
                id="link"
                required
              />
            </div>
            <input
              className="btn__primary"
              type="submit"
              value="Confrim appointment"
              onClick={handleAppointment}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
