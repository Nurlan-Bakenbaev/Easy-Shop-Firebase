import React, { useState } from "react";
import "./Banner.css";
import img from "/banner.svg";

const [banner, setBanner] = useState(staticBanner);
const staticBanner = (
  <div className="banner-bg">
    <div className="text-banner">
      <h1>Аксессуары для Iphone 13 Pro Max</h1>
    </div>
    <div className="img-banner">
      <img src={img} alt="banner" />
    </div>
  </div>
);
function handleBanner(){
  setTimeout(() => {
    
  }, 1000);
}
const Banner = () => {
  return { staticBanner };
};

export default Banner;
