import React, { useEffect, useState } from "react";
import "./PredictDisease.css";
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
  const addToDataBase = async (data) => {
    const docRef = await addDoc(collection(db, "pateintRecord"), data);
    console.log("Document written with ID: ", docRef.id);
  };
  const [symthoms, setSym] = useState([
    {
      disease: "Skin",
      symthoms: [
        ["itching", "continuous Sneezing", "Chills"],
        ["Skin rash", "Vomiting", "Patches in throat"],
        ["Nodal Skin erruption", "Ulcers on tongue", "Yellowish skin"],
        ["Dischromic Patches", "Red spots over body", "Watering from eye"],
        ["Shiverings", "Chest Pain"],
        ["Stomach Pain", "Fatigue", "Anxiety"],
        ["Burning micturition", "Weight loss"],
        ["Spotting urination", "Nausea", "Red sore"],
      ],
    },
    {
      disease: "Test type 1",
      symthoms: [
        ["Test type 1", "Test type 1", "Test type 1"],
        ["Test type 1", "Test type 1", "Test type 1"],
        ["Test type 1", "Test type 1", "Test type 1"],
        ["Test type 1", "Test type 1", "Test type 1"],
        ["Test type 1", "Test type 1"],
        ["Test type 1", "Test type 1", "Test type 1"],
        ["Test type 1", "Test type 1"],
        ["Test type 1", "Test type 1", "Test type 1"],
      ],
    },
    {
      disease: "Test type 2",
      symthoms: [
        ["Test type 2", "Test type 2", "Test type 2"],
        ["Test type 2", "Test type 2", "Test type 2"],
        ["Test type 2", "Test type 2", "Test type 2"],
        ["Test type 2", "Test type 2", "Test type 2"],
        ["Test type 2", "Test type 2"],
        ["Test type 2", "Test type 2", "Test type 2"],
        ["Test type 2", "Test type 2"],
        ["Test type 2", "Test type 2", "Test type 2"],
      ],
    },
  ]);
  //dummy Deases to make the other logic
  useEffect(() => {
    // eslint-disable-next-line
  });

  //event handlers
  const handlefirstSubmit = (e) => {
    e.preventDefault();
    console.log("it is working dummy");
    let symarr = [];
    symthoms.map((element) => {
      if (element.disease === firstSym) {
        console.log(firstSym);
        console.log(element.disease);
        symarr = element.symthoms;
      }
    });
    console.log(symarr);
    SetSuspectedDiseases(symarr);
    console.log(suspectedDiseases);
    setSymtomAsk({
      ask: symarr[0],
      index: symtomsAsk.index + 1,
    });

    e.target.style.animation = "form-off .3s ease-in";

    setTimeout(() => {
      e.target.style.display = "none";
      setStyleForm({ display: "flex", animation: "form-on 0.3s ease-in-out" });
      setTimeout(() => {
        setStyleForm({ transform: "scale(1)", opacity: "1" });
      }, 260);
    }, 260);
  };

  const handleLastSubmit = (e) => {
    e.preventDefault();
    setFirstSym("Skin");
    let symsl = symList;
    if (symtomsAsk.index < suspectedDiseases.length) {
      setSymtomAsk({
        ask: suspectedDiseases[symtomsAsk.index],
        index: symtomsAsk.index + 1,
      });
      console.log(finalOption.sym);
      if (finalOption.sym === symsl[symsl.length - 1]) {
        console.log("done", symtomsAsk.ask[finalOption.index]);
        setfinalOption({
          ...finalOption,
          sym: symtomsAsk.ask[finalOption.index],
        });
      }
      console.log(symtomsAsk);
      console.log(finalOption);
      symsl.push(finalOption.sym);
      setSymList(symsl);
    } else {
      console.log(symList);
      console.log("done");
      e.target.style.animation = "form-off .3s ease-in";
      SetSuspectedDiseases([]);
      setSymtomAsk({
        ask: [],
        index: 0,
      });
      setTimeout(() => {
        e.target.style.display = "none";
        setStyleSecondForm({
          display: "flex",
          animation: "form-on 0.3s ease-in-out",
        });
        setTimeout(() => {
          setStyleSecondForm({
            transform: "scale(1)",
            opacity: "1",
          });
        }, 260);
      }, 260);
      let finaldata = {};

      let date = new Date().toLocaleString();
      finaldata = {
        disease: "Skin Infection ",
        syms: "test",
        patientName: user.displayName,
        email: user.email,
        dateTime: date,
      };

      setFinalRecord(finaldata);
      if (suspectedDiseases.length !== 0) {
        // addToDataBase(finaldata);
        props.toggleModal(true);
      }
    }
  };

  const handleChange = (e) => {
    setFirstSym(e.target.value);
    console.log(firstSym);
  };

  const { user } = props;
  return (
    <div className="_patient_predict_disease_section">
      <DiseaseModal diseaseObj={finalRecord} />

      <Header user={user} />
      <SideMenu user={user} />
      <h1 className="test_predict_section">Predict disease</h1>
      <h2>Enter the symptom in below form and they should be valid</h2>
      <form
        onSubmit={handlefirstSubmit}
        style={styleSecondForm}
        action=""
        className="symthoms__form"
      >
        <label className="label_first_symthom" htmlFor="start_symthon">
          Enter Any one Symthom
        </label>
        <div>
          <select firstSym={firstSym} onChange={handleChange}>
            <option firstSym="Skin">Skin</option>
            <option firstSym="Test type 1">Test type 1</option>
            <option firstSym="Test type 2">Test type 2</option>
          </select>
        </div>

        <input className="btn__primary" type="submit" firstSym="Next" />
      </form>
      <form
        style={styleForm}
        onSubmit={handleLastSubmit}
        action=""
        className="symthoms__form form_selector"
      >
        <div className="label_first_symthom" htmlFor="start_symthon">
          Do you have any of these symthoms?
        </div>
        {symtomsAsk.ask.length !== 0 ? (
          symtomsAsk.ask.map((element, index) => (
            <div key={index} className="sym_selector">
              <label htmlFor={`sym_${index}`}>{element}</label>
              <input
                required
                placeholder="Enter symptom"
                id={`sym_${index}`}
                value={element}
                onChange={(e) => {
                  setfinalOption({ index: index, sym: e.target.value });
                }}
                name="finalOption"
                type="radio"
              />
            </div>
          ))
        ) : (
          <div className="sym_selector">
            <label htmlFor="asd">Sorry disease not found</label>
          </div>
        )}
        {/* This is resolved tommorow */}
        {/* {suspectedDiseases.length !== 0 && (
          <div className="sym_selector">
            <label htmlFor="None_of_above">None of above</label>
            <input
              placeholder="Enter symptom"
              id="None_of_above"
              firstSym="not present in out database try again later"
              onChange={(e) => {
                setfinalOption(e.target.firstSym);
              }}
              name="finalOption"
              type="radio"
              required
            />
          </div>
        )} */}
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
