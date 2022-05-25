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
  const [finalOption, setfinalOption] = useState(0);
  const [firstSym, setFirstSym] = useState("");
  const [styleForm, setStyleForm] = useState({});
  const [styleSecondForm, setStyleSecondForm] = useState({});
  const [finalRecord, setFinalRecord] = useState({});

  //event handlers
  const handlefirstSubmit = (e) => {
    e.preventDefault();
    const symarr = [];
    symthoms.forEach((element) => {
      if (element.sym.includes(firstSym)) {
        symarr.push(element);
      }
    });
    SetSuspectedDiseases(symarr);

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
    e.target.style.animation = "form-off .3s ease-in";
    setFirstSym("");
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
    console.log(finalOption);
    console.log(suspectedDiseases);
    suspectedDiseases.forEach((element) => {
      if ((element.disease = finalOption)) {
        let date = new Date().toLocaleString();
        let finaldata = {
          disease: finalOption,
          syms: element.sym,
          patientName: user.displayName,
          dateTime: date,
        };
        setFinalRecord(finaldata);
      }
    });
    console.log(finalRecord);
  };
  const { user } = props;
  return (
    <div className="_patient_predict_disease_section">
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
        <input
          required
          value={firstSym}
          onChange={(e) => setFirstSym(e.target.value)}
          placeholder="Enter symptom"
          type="text"
        />
        <input className="btn__primary" type="submit" value="Next" />
      </form>
      <form
        style={styleForm}
        onSubmit={handleLastSubmit}
        action=""
        className="symthoms__form form_selector"
      >
        <div className="label_first_symthom" htmlFor="start_symthon">
          Select One
        </div>
        {suspectedDiseases.length !== 0 ? (
          suspectedDiseases.map((element, index) => (
            <div className="sym_selector">
              <label htmlFor={`sym_${index}`}>
                {element.sym.map((syms, symI) => {
                  if (symI !== element.sym.length - 1) {
                    return `${syms}  , `;
                  } else {
                    return `${syms}`;
                  }
                })}
              </label>
              <input
                required
                placeholder="Enter symptom"
                id={`sym_${index}`}
                value={element.disease}
                onChange={(e) => {
                  setfinalOption(e.target.value);
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

        {suspectedDiseases.length !== 0 && (
          <div className="sym_selector">
            <label htmlFor="None_of_above">None of above</label>
            <input
              placeholder="Enter symptom"
              id="None_of_above"
              value="not present in out database try again later"
              onChange={(e) => {
                setfinalOption(e.target.value);
              }}
              name="finalOption"
              type="radio"
              required
            />
          </div>
        )}
        {suspectedDiseases.length !== 0 ? (
          <input
            className="btn__primary"
            type="submit"
            value="Predict Disease"
          />
        ) : (
          <input className="btn__primary" type="submit" value="Back" />
        )}
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(PredictDisease);
