import React from "react";
import catdogdle from "../../styles/assets/images/catdogdle.jpg";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <h3>
        This website application is intended to generate our user with a
        filtered choices of pets fast and accurate
      </h3>
      <p>Message to Professor: Used MUI library for better look</p>
      <img src={catdogdle} alt="Home" className="smaller-image" />
    </div>
  );
}

export default Homepage;
