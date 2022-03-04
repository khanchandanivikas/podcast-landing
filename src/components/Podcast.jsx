import React from "react";
import logo from "../images/logo.svg";
import TextContent from "../components/TextContent";
import Form from "../components/Form";
import Logos from "../components/Logos";
import dots from "../images/bg-pattern-dots.svg";

const Podcast = () => {
  return (
    <main className="podcast-content-container">
      <div className="podcast-logo">
        <img src={logo} alt="Pod logo" />
      </div>
      <div className="podcast-content">
        <TextContent />
        <Form />
        <Logos />
      </div>
      <div className="dots-container">
        <img src={dots} alt="dots pattern" />
      </div>
    </main>
  );
};

export default Podcast;
