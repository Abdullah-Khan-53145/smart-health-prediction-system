import React, { useEffect, useState } from "react";
import "./PredictDisease.css";
import axios from "axios";
import Header from "./Header";
import SideMenu from "./SideMenu";
import DiseaseModal from "./DiseaseModal";
import { connect } from "react-redux";
import { toggleModal } from "../../actions";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

function PredictDisease(props) {
  // states

  const [suspectedDiseases, SetSuspectedDiseases] = useState([]);
  const [finalOption, setfinalOption] = useState({});
  const [symList, setSymList] = useState([]);
  const [check, setCheck] = useState();
  const [firstSym, setFirstSym] = useState("Skin");
  const [styleForm, setStyleForm] = useState({});
  const [styleSecondForm, setStyleSecondForm] = useState({});
  const [finalRecord, setFinalRecord] = useState({});
  const [symtomsAsk, setSymtomAsk] = useState({ index: 0, ask: [] });
  const [sym, setSym] = useState("");
  const [Answer, setAnswer] = useState("1");
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
      console.log(predData);
    });
    // eslint-disable-next-line
  }, []);

  const handleLastSubmit = (e) => {
    e.preventDefault();
    if (diseaseObj.disease === 0) {
      axios
        .post(`http://127.0.0.1:5000/predictdisease`, {
          Answer: Answer,
        })
        .then((res) => {
          const predData = res.data;
          SetdiseaseObj(predData);
          if (sym === "") {
            setSym(predData.quest);
          } else if (predData.quest !== 0) {
            setSym(`${sym}, ${predData.quest}`);
          }
        });
    } else {
      console.log(diseaseObj);
      console.log(sym);
      const current = new Date();
      addToDataBase({
        dateTime: current.toLocaleString(),
        disease: diseaseObj.disease,
        email: props.user.email,
        patientName: props.user.displayName,
        syms: sym,
      });
      props.toggleModal(true);
    }
  };

  const { user } = props;
  return (
    <div className="_patient_predict_disease_section">
      <DiseaseModal
        diseaseObj={finalRecord}
        doctor="Dr. Usama"
        desease={diseaseObj.disease}
      />

      <Header user={user} />
      <SideMenu user={user} />
      <h1 className="test_predict_section">Predict disease</h1>
      <h2>Enter the symptom in below form and they should be valid</h2>
      {diseaseObj.quest !== 0 ? (
        <form
          style={styleForm}
          onSubmit={handleLastSubmit}
          onChange={(e) => {
            setAnswer(e.target.value);
            console.log(Answer);
          }}
          action=""
          className="symthoms__form"
        >
          <div className="label_first_symthom" htmlFor="start_symthon">
            Do you have {diseaseObj.quest}?
          </div>
          <div className="answer">
            <label htmlFor="Yes">Yes</label>
            <input type="radio" value="1" name="Answer" id="Yes" />
          </div>
          <div className="answer">
            <label htmlFor="No">No</label>
            <input type="radio" value="0" name="Answer" id="No" />
          </div>

          {suspectedDiseases.length !== 0 ? (
            <input
              className="btn__primary"
              type="submit"
              firstSym="Predict Disease"
            />
          ) : (
            <input className="btn__primary" type="submit" firstSym="Back" />
          )}
        </form>
      ) : (
        <form
          style={styleForm}
          onSubmit={handleLastSubmit}
          onChange={(e) => {
            setAnswer(e.target.value);
            console.log(Answer);
          }}
          action=""
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
