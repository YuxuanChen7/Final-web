import React from "react";
import { useLocation } from "react-router-dom";

function DetailedView() {
  const location = useLocation();
  const pet = location.state?.pet;

  return (
    <div>
      <p>Pet details not available.</p>
    </div>
  );
}

export default DetailedView;
