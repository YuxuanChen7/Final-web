import React from "react";
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(pet => (
            <li key={pet.PetID}>
              {pet.name} - Attributes: {pet.Attributes.map(attr => `${attr.AttributeType}: ${attr.AttributeValue}`).join(', ')}
            </li>
          ))}
        </ul>
      ) : (
        <p>No pets found with the specified attributes.</p>
      )}
    </div>
  );
}

export default Result;
