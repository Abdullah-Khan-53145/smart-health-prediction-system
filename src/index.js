import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Patient from "./components/Patient";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
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
          <Route exact path="/patient" element={<Patient />}></Route>
          <Route exact path="/" element={<App />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
