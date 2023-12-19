import React, { useState } from "react";
import "./CatFact.css";

export default function CatFact() {
  const [facts, setFacts] = useState([]);

  const catfactEndpoint = "https://meowfacts.herokuapp.com/?count=3";

  const fetchFacts = () => {
    fetch(catfactEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setFacts(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching cat facts:", error);
        setFacts([]);
      });
  };

  return (
    <div>
      <h2>Random Cat Facts</h2>
      <button
        onClick={fetchFacts}
        className="button-style" 
      >
        Get Random Cat Facts
      </button>
      <ul>
        {facts.map((fact, index) => (
          <li
            key={index}
            className="input-style"
          >
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
