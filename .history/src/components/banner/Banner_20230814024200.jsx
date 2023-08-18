import React, { useState } from "react";
import "./Banner.css";
import img from "/banner.svg";

const [banner, setBanner] = useState();
const staticBanner = ()=>
 {return(<div className="banner-bg">
    <div className="text-banner">
      <h1>Аксессуары для Iphone 13 Pro Max</h1>
    </div>
    <div className="img-banner">
      <img src={img} alt="banner" />
    </div>
  </div>)}

const videoBanner = (
  <div className="video-background">
  <video
    className="video-content"
      src="https://firebasestorage.googleapis.com/v0/b/kleinerladen-6644f.appspot.com/o/iPhone%20Xr%20Official%20Trailer.mp4?alt=media&token=ec2ba736-d375-4768-a42c-d4f2c64f68c0"
      autoPlay
      muted
      loop
    />
  </div>
);
function handleBanner() {
  setTimeout(() => {
    setBanner(videoBanner);
  }, 1000);
}
const Banner = () => {
  return { staticBanner };
};

export default Banner;
