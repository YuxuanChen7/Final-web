import React from "react";
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  const addToFavorites = (catColor) => {
    fetch("/api/favorites", {  // Update the endpoint to the new simplified one
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color: catColor }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error("Error adding to favorites:", error);
      });
  };

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map(cat => (
          <li key={cat.id}>
            {cat.name} - Age: {cat.age}, Color: {cat.color}
            <button onClick={() => addToFavorites(cat.color)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;