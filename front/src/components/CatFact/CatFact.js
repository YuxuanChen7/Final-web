import React, { useState } from "react";

export default function CatFact() {
  const [facts, setFacts] = useState([]);

  const catfactEndpoint = "https://meowfacts.herokuapp.com/?count=3"

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
      <button onClick={fetchFacts}>Get Random Cat Facts</button>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
