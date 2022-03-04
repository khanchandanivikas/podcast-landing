import React from 'react';
import "../scss/logos.scss";
import spotify from "../images/spotify.svg";
import apple from "../images/apple-podcast.svg";
import google from "../images/google-podcasts.svg";
import pocket from "../images/pocket-casts.svg";

const Logos = () => {
  return (
    <div className="logos-container">
        <img src={spotify} alt="spotify logo" />
        <img src={apple} alt="spotify logo" />
        <img src={google} alt="google logo" />
        <img src={pocket} alt="pocket logo" />
    </div>
  )
}

export default Logos