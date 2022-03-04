import React from "react";
import "../scss/loadingScreen.scss";
import loadingLogo from '../images/logo.svg';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-screen_container">
        <img className="intro-logo" src={loadingLogo} alt="Pod logo" />
        <div className="divider"></div>
        <div className="mask"></div>
        <p className="intro-heading">
          Publish Your Podcasts <br /> <span>Everywhere.</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
