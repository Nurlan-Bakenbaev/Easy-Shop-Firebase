import React from "react";
import "./Banner.css";
import img from "/banner.svg";
import { Padding } from "@mui/icons-material";

const Banner = () => {
  return (
    <div className="banner-bg">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/kleinerladen-6644f.appspot.com/o/video%2FiPhone%20Xr%20Official%20Trailer.mp4?alt=media&token=f9f923ca-7fe6-467a-a50e-56a9fc5a3cac"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Banner;
