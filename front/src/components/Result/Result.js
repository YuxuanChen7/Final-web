import React from "react";
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map(cat => (
          <li key={cat.id}>{cat.name} - Age: {cat.age}, Color: {cat.color}</li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
