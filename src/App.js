import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Services from "./components/Services";
import Review from "./components/Review";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Patient from "./components/PatientHome";
import { Provider } from "react-redux";
import store from "./store";
import PatientHome from "./components/PatientHome";
import PatientRecord from "./components/PatientRecord";
import PredictDisease from "./components/patientComponents/PredictDisease";
import AccountSetting from "./components/patientComponents/AccountSetting";
function App() {
  const [display, setDisplay] = useState("flex");
  useEffect(() => {
    setTimeout(() => {
      setDisplay("none");
    }, 2000);
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              exact
              path="/login-patient"
              element={<Login role="patient" />}
            ></Route>
            <Route
              exact
              path="/login-doctor"
              element={<Login role="doctor" />}
            ></Route>
            <Route
              exact
              path="/login-admin"
              element={<Login role="admin" />}
            ></Route>
            <Route
              exact
              path="/signup-patient"
              element={<Signup role="patient" />}
            ></Route>
            <Route
              exact
              path="/signup-doctor"
              element={<Signup role="doctor" />}
            ></Route>
            <Route
              exact
              path="/signup-admin"
              element={<Signup role="admin" />}
            ></Route>
            <Route exact path="/patient/home" element={<PatientHome />}></Route>
            <Route
              exact
              path="/patient/record"
              element={<PatientRecord />}
            ></Route>
            <Route
              exact
              path="/patient/disease"
              element={<PredictDisease />}
            ></Route>
            <Route
              exact
              path="/patient/setting"
              element={<AccountSetting />}
            ></Route>
            <Route exact path="/patient" element={<Patient />}></Route>
            <Route
              exact
              path="/"
              element={
                <>
                  <div className="loading " style={{ display: display }}>
                    <div>
                      <img
                        src="https://thumbs.gfycat.com/DearestWeakBantamrooster-max-1mb.gif"
                        alt=""
                      />

                      <p>LOADING ...</p>
                    </div>
                  </div>
                  <Header />
                  <Home />
                  <Services />
                  <Review />
                  <Footer />
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
