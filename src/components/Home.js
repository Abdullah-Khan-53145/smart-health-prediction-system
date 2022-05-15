import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="Home__container">
      <div className="home_section">
        <div className="left">
          <h1>Smart health prediction sytem</h1>
          <h2>Find medical solutions at home</h2>
          <p>
            It might have happened so many times that you or someone yours need
            doctors help immediately, but they are not available due to some
            reasons or also sometimes it happens that we could not find the
            correct doctor for the treatment,
            <br />
            So to solve this problem we will implement the online intelligent
            Smart Health prediction web based application that will facilitate
            the patient to get instant guidance on their health issues
          </p>
          <div className="btns">
            <Link to="/login" className="btn__primary">
              Signin as Patient
            </Link>
            <Link to="/login" className="btn__primary">
              Signin as Doctor
            </Link>
          </div>
        </div>
        <div className="right">
          <img src="./imgs/pngwing.com (1).png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
