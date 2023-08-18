import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-bg">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/kleinerladen-6644f.appspot.com/o/video%2F%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.mp4?alt=media&token=baace168-2cb9-4693-8484-508a98bc52bc"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Banner;
