import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../actions";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import "./DiseaseModal.css";
function DiseaseModal(props) {
  const navigate = useNavigate();
  const { doctor, desease } = props;
  const [feedback, setFeedBack] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [appBook, setappBook] = useState("");
  const handleClick = () => {
    props.toggleModal(false);
    setFeedBack("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "feedbacks"), {
      patientName: props.user.displayName,
      patientProfile: props.user.photoURL,
      email: props.user.email,
      Feedback: feedback,
    });
    console.log("Document written with ID: ", docRef.id);
    setShowMessage(true);
    setFeedBack("");
    setTimeout(() => {
      setShowMessage(false);
      props.toggleModal(false);
    }, 2000);
  };
  const AppointmentSend = async () => {
    const docRef = await addDoc(collection(db, "appointments"), {
      doctor: doctor,
      patientName: props.user.displayName,
      patientProfile: props.user.photoURL,
      desease: desease,
      email: props.user.email,
    });
    console.log("Document written with ID: ", docRef.id);
    setappBook("Appointment request sent successfully");
    setTimeout(() => {
      setappBook("");
      handleClick();
      navigate("/patient");
    }, 2000);
  };
  return (
    <div
      className="main__page"
      style={{ display: props.showModal ? "flex" : "none" }}
    >
      <Link to="/patient" className="__modal__close" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Link>
      <div className="disease__modal">
        <h2>Your Disease is {desease}</h2>
        <div className="doc__sug">
          <h3 className="doc__name">Suggested Doctor is Dr. {props.doctor}</h3>
          <button onClick={AppointmentSend} className="appointment">
            Book appointment
          </button>
          <br />
          <span style={{ color: "green" }}>{appBook}</span>
        </div>
        <form onSubmit={handleSubmit} className="__feed__back__form">
          <label htmlFor="__feed__back">Enter your feed back (optional)</label>
          <textarea
            name="__feed__back"
            id="__feed__back"
            cols="25"
            placeholder="Enter message here"
            rows="5"
            value={feedback}
            onChange={(e) => setFeedBack(e.target.value)}
            required
          ></textarea>
          {showMessage && (
            <small style={{ color: "green" }}>
              Feedback submitted successfully
            </small>
          )}

          <input type="submit" value="Submit Feedback" />
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  showModal: state.toggleModalState.showModal,
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (status) => dispatch(toggleModal(status)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DiseaseModal);
