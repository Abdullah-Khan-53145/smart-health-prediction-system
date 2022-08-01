import React from "react";
import "./Services.css";
function Services() {
  return (
    <div className="services__main" id="services">
      <div className="services__section">
        <h1 className="main_heading">Services</h1>
        <div className="saparator">
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="services__container">
          <div className="service__card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <h2>99% Acuracy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              iusto, quo facilis aspernatur voluptates enim perspiciatis fuga
              dicta quod, doloremque sequi rem inventore illum commodi, vel
              aliquam amet. Tempora sequi quo in incidunt nihil?
            </p>
          </div>
          <div className="service__card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2>Fast Service</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              iusto, quo facilis aspernatur voluptates enim perspiciatis fuga
              dicta quod, doloremque sequi rem inventore illum commodi, vel
              aliquam amet. Tempora sequi quo in incidunt nihil?
            </p>
          </div>
          <div className="service__card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h2>At Home Diagnose</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              iusto, quo facilis aspernatur voluptates enim perspiciatis fuga
              dicta quod, doloremque sequi rem inventore illum commodi, vel
              aliquam amet. Tempora sequi quo in incidunt nihil?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
