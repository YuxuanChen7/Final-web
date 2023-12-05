import React from "react";
import catdogdle from "../../styles/assets/images/catdogdle.jpg";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <h3>
        this web application is intended to generate a list of pets
        recommendation based on the input attributes
      </h3>
      <img src={catdogdle} alt="Home" className="smaller-image" />
    </div>
  );
}

export default Homepage;
