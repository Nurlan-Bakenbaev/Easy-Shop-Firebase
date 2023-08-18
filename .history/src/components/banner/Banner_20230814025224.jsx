import React, { useState,useEffect } from "react";
import "./Banner.css";
import img from "/banner.svg";

const Banner = () => {
  const [staticBannerContent, setStaticBannerContent] = useState(null);
  const [videoBannerContent, setVideoBannerContent] = useState(null);

  useEffect(() => {
    const staticContent = (
      <div className="banner-bg">
        {/* ... */}
        
      </div>
    );
    setStaticBannerContent(staticContent);

    const videoContent = (
      <div className="video-background">
        <video
          className="video-content"
          src="https://firebasestorage.googleapis.com/..."
          autoPlay
          muted
          loop
        />
      </div>
    );
    setVideoBannerContent(videoContent);
  }, []);

  const [currentBannerContent, setCurrentBannerContent] = useState(staticBannerContent);

  const handleBanner = () => {
    setTimeout(() => {
      setCurrentBannerContent(videoBannerContent);
    }, 1000);
  };

  return (
    <div>
      {currentBannerContent}
      <button onClick={handleBanner}>Change Banner</button>
    </div>
  );
};


export default Banner;
