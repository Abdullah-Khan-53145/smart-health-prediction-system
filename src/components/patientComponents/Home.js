import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="_patient_home_main_container">
      <div className="_patient_home">
        <div className="_patient_home_module">
          <div className="_patient_upper_card">
            <h1>Welcome to Smart Health prediction!!</h1>
            <h2>
              Diagnose Your Disease At home. This is how How we predict the
              disease
            </h2>
          </div>
          <div className="_patient_home__container">
            <div className="_patient_home__card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z" />
                  <path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z" />
                </svg>
              </div>
              <h2>STEP 1</h2>
              <h3>Asking your symthoms</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                iusto, quo facilis aspernatur voluptates enim perspiciatis fuga
                dicta quod, doloremque sequi rem inventore illum commodi, vel
                aliquam amet. Tempora sequi quo in incidunt nihil?
              </p>
            </div>
            <div className="_patient_home__card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
              </div>
              <h2>STEP 2</h2>
              <h3>Processing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                iusto, quo facilis aspernatur voluptates enim perspiciatis fuga
                dicta quod, doloremque sequi rem inventore illum commodi, vel
                aliquam amet. Tempora sequi quo in incidunt nihil?
              </p>
            </div>
            <div className="_patient_home__card">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h2>STEP 3</h2>
              <h3>Showing the result</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                iusto, quo facilis aspernatur voluptates enim perspiciatis fuga
                dicta quod, doloremque sequi rem inventore illum commodi, vel
                aliquam amet. Tempora sequi quo in incidunt nihil?
              </p>
            </div>
          </div>
          <div className="_patient_home_get_started">
            <button className="btn__primary" style={{ display: "flex" }}>
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
