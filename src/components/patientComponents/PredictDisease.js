import React, { useState } from "react";
import "./PredictDisease.css";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { connect } from "react-redux";
function PredictDisease(props) {
  //dummy Deases to make the other logic
  const symthoms = [
    {
      sym: ["symA1", "symA2", "symC3"],
      disease: "Disease A",
    },
    {
      sym: ["symB1", "symB2", "symB3"],
      disease: "Disease B",
    },
    {
      sym: ["symC1", "symC2", "symC3"],
      disease: "Disease C",
    },
    {
      sym: ["symD1", "symD2", "symC3"],
      disease: "Disease D",
    },
  ];

  // states

  const [suspectedDiseases, SetSuspectedDiseases] = useState([]);
  const [index, setIndex] = useState(0);
  const [firstSym, setFirstSym] = useState("");
  const [styleForm, setStyleForm] = useState({});

  //functions

  //event handlers
  const handlefirstSubmit = (e) => {
    e.preventDefault();
    const symarr = [];
    symthoms.forEach((element) => {
      if (element.sym.includes(firstSym)) {
        symarr.push(element);
      }
    });
    console.log(symarr, e.target.value, firstSym);
    SetSuspectedDiseases(symarr);

    e.target.style.animation = "form-off .3s ease-in";

    setTimeout(() => {
      e.target.style.display = "none";
      setStyleForm({ animation: "form-on 0.3s ease-in-out" });
      setTimeout(() => {
        setStyleForm({ transform: "scale(1)", opacity: "1" });
      }, 260);
    }, 260);
  };
  const { user } = props;
  return (
    <div className="_patient_predict_disease_section">
      <Header user={user} />
      <SideMenu user={user} />
      <h1 className="test_predict_section">Predict disease</h1>
      <h2>Enter the symptom in below form and they should be valid</h2>
      <form onSubmit={handlefirstSubmit} action="" className="symthoms__form">
        <label className="label_first_symthom" htmlFor="start_symthon">
          Enter Any one Symthom
        </label>
        <input
          required
          value={firstSym}
          onChange={(e) => setFirstSym(e.target.value)}
          placeholder="Enter symptom"
          type="text"
          required
        />
        <input className="btn__primary" type="submit" value="Next" />
      </form>
      <form
        style={styleForm}
        action=""
        className="symthoms__form form_selector"
      >
        <div className="label_first_symthom" htmlFor="start_symthon">
          Select One
        </div>
        {suspectedDiseases ? (
          suspectedDiseases.map((element, index) => (
            <div className="sym_selector">
              <label htmlFor="sym_1">{element.sym}</label>
              <input
                required
                placeholder="Enter symptom"
                id="sym_1"
                name="sym"
                type="radio"
                required
              />
            </div>
          ))
        ) : (
          <div>Sorry this type of disease is unavailable in our db</div>
        )}
        <div className="sym_selector">
          <label htmlFor="sym_2">Symptom B</label>
          <input
            required
            placeholder="Enter symptom"
            id="sym_2"
            name="sym"
            type="radio"
            required
          />
        </div>
        <div className="sym_selector">
          <label htmlFor="sym_3">Symptom C</label>
          <input
            required
            placeholder="Enter symptom"
            id="sym_3"
            name="sym"
            type="radio"
            required
          />
        </div>
        <input className="btn__primary" type="submit" value="Next" />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(PredictDisease);
