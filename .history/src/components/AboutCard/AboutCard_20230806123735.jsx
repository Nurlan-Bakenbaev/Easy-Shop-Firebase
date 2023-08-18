import React from "react";
import "./AboutCard.css";
const AboutCard = ({ aboutImg, aboutName, price, oldPrice }) => {
  return (
    <div>
      <div className="about-card-wrapper">
        <div>
          <div>
          <img src={abaut} alt="" />
          </div>
          <div className="dFlex price">
            <h1>{aboutName}</h1>
            <div className="about__prices-old">
              <p>$ {price}</p>
              <p>{oldPrice} </p>
            </div>
          </div>
        </div>
        <div className="Brand">
          <h4
            style={{
              backgroundColor: "orange",
              padding: "15px",
              color: "white",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            BRAND-NAME
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
