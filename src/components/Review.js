import React from "react";
import "./Review.css";
function Review() {
  return (
    <div className="reviews__main">
      <div className="reviews__section">
        <h1 className="main_heading">Recent Feedbacks</h1>
        <div className="saparator">
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="reviews__container">
          <div className="review__card">
            <div className="icon">
              <img
                src="https://i.pinimg.com/550x/ce/d8/4a/ced84a67302c60bd1abaaf9314064433.jpg"
                alt=""
              />
            </div>
            <h2>Amily Janson</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              iusto, quo facilis aspernatur voluptates enim perspiciatis fuga
              dicta quod, doloremque sequi rem inventore illum commodi, vel
              aliquam amet. Tempora sequi quo in incidunt nihil?
            </p>
          </div>
          <div className="review__card">
            <div className="icon">
              <img
                src="https://www.retratosbarcelona.com/wp-content/uploads/2019/11/maggie-1-of-1-200x300.jpg"
                alt=""
              />
            </div>
            <h2>Emma G. Assure</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              iusto, quo facilis aspernatur voluptates enim perspiciatis fuga
              dicta quod, doloremque sequi rem inventore illum commodi, vel
              aliquam amet. Tempora sequi quo in incidunt nihil?
            </p>
          </div>
          <div className="review__card">
            <div className="icon">
              <img
                src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1377d4/_orig/pixomatic_1572877223091.png"
                alt=""
              />
            </div>
            <h2>Robert R Junior</h2>
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

export default Review;
