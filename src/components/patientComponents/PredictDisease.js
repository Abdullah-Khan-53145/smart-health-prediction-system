import React, { useEffect, useState } from "react";
import "./PredictDisease.css";
import axios from "axios";
import Header from "./Header";
import SideMenu from "./SideMenu";
import DiseaseModal from "./DiseaseModal";
import { connect } from "react-redux";
import { toggleModal } from "../../actions";
import { db } from "../../firebase";
import { doc, onSnapshot, getDocs } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

function PredictDisease(props) {
  // states

  const [sym, setSym] = useState("");
  const [doctor, setDoctor] = useState([]);
  const [sugDoc, setSugDoc] = useState("");
  const [Answer, setAnswer] = useState(null);
  const [firstForm, setFirstForm] = useState("flex");
  const [secondForm, setSecondForm] = useState("none");
  const [diseaseObj, SetdiseaseObj] = useState({
    quest: "Uhmm... ",
    disease: 0,
  });

  const addToDataBase = async (data) => {
    const docRef = await addDoc(collection(db, "pateintRecord"), data);
    console.log("Document written with ID: ", docRef.id);
  };

  //dummy Deases to make the other logic
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/predictdisease`).then((res) => {
      const predData = res.data;
      SetdiseaseObj(predData);
    });
    let doctors = [];
    getDocs(collection(db, "doctors")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doctors.push(doc.data());
        setDoctor(doctors);
      });
    });

    // eslint-disable-next-line
  }, []);

  const handleLastSubmit = async (e) => {
    e.preventDefault();
    if (Answer === "1") {
      if (sym === "") {
        setSym(diseaseObj.quest);
      } else if (diseaseObj.quest !== 0) {
        setSym(`${sym}, ${diseaseObj.quest}`);
      }
    }
    if (diseaseObj.disease === 0) {
      axios
        .post(`http://127.0.0.1:5000/predictdisease`, {
          Answer: Answer,
        })
        .then((res) => {
          const predData = res.data;
          SetdiseaseObj(predData);
        });
    } else {
      console.log(sym);
      const current = new Date();
      addToDataBase({
        dateTime: current.toLocaleString(),
        disease: diseaseObj.disease,
        email: props.user.email,
        patientName: props.user.displayName,
        syms: sym,
      });
      setSugDoc(
        doctor[Math.floor(Math.random() * (doctor.length - 1 - 0 + 1) + 0)].name
      );
      props.toggleModal(true);
    }
  };
  const toggleForm = (e) => {
    e.preventDefault();
    setFirstForm("none");
    setSecondForm("flex");
  };
  const { user } = props;
  return (
    <div className="_patient_predict_disease_section">
      <DiseaseModal doctor={sugDoc} desease={diseaseObj.disease} />

      <Header user={user} />
      <SideMenu user={user} />

      <h1 className="test_predict_section">Predict disease {sugDoc}</h1>
      <h2>Enter the symptom in below form and they should be valid</h2>
      <form
        onSubmit={toggleForm}
        style={{ display: firstForm }}
        className="symthoms__form"
      >
        <div className="label_first_symthom" htmlFor="start_symthon">
          Enter the Disease Type?
        </div>
        <select name="" id="">
          <option value="skin">Skin</option>
          <option value="Heart">Heart</option>
          <option value="stomach">Stomach</option>
        </select>

        <input className="btn__primary" type="submit" />
      </form>
      {diseaseObj.quest !== 0 ? (
        <form
          onSubmit={handleLastSubmit}
          onChange={(e) => {
            setAnswer(e.target.value);
            console.log(Answer);
          }}
          style={{ display: secondForm }}
          className="symthoms__form"
        >
          <div className="label_first_symthom" htmlFor="start_symthon">
            Do you have {diseaseObj.quest}?
          </div>
          <div className="answer">
            <label htmlFor="Yes">Yes</label>
            <input type="radio" value="1" name="Answer" id="Yes" required />
          </div>
          <div className="answer">
            <label htmlFor="No">No</label>
            <input type="radio" value="0" name="Answer" id="No" required />
          </div>

          <input className="btn__primary" type="submit" />
        </form>
      ) : (
        <form
          onSubmit={handleLastSubmit}
          onChange={(e) => {
            setAnswer(e.target.value);
            console.log(Answer);
          }}
          style={{ display: secondForm }}
          className="symthoms__form"
        >
          <div className="label_first_symthom" htmlFor="start_symthon">
            Your Predicted Disease is <em>{diseaseObj.disease}</em>
          </div>

          <input
            className="btn__primary"
            type="submit"
            value={"Suggest me Doctor"}
          />
        </form>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(PredictDisease);
