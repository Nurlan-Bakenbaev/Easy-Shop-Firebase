import React from "react";
import "./AboutCard.css";
const AboutCard = ({ aboutImg, aboutName, price, oldPrice }) => {
  return (
    <div>
      <div className="about-card-wrapper ">
        <div>
          <div className="image-wrapper">
            {aboutImg}
          </div>
          <div className="dFlex price">
            <h1>{aboutName}</h1>
            <div className="about__prices-old">
              <p>Sale ${price}</p>
              <p>  {oldPrice ?'Old Price' :} </p>
            </div>
          </div>
        </div>
        <div className="Brand">
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
