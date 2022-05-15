import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "./Signup.css";
function Signup() {
  return (
    <div className="Login">
      <Link to="/" className="back_to_home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>
        <span>Back</span>
      </Link>
      <div className="login__container">
        <h1>Sign up</h1>
        <form className="user__info__container">
          <div className="info__container">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              id="first_name"
            />
          </div>
          <div className="info__container">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              id="last_name"
            />
          </div>
          <div className="info__container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              name="email"
              id="email"
            />
          </div>
          <div className="info__container">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          <div className="info__container">
            <label htmlFor="confrim_password">Confrim Password</label>
            <input
              type="text"
              placeholder="Confrim Password"
              name="confrim_password"
              id="confrim_password"
            />
          </div>
          <input type="submit" value="Register" className="btn__primary" />
        </form>
        <div className="saparator">
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
        </div>

        <br />
        <div className="signup__container">
          <small>Already have an acount?</small>
          <span>
            <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
