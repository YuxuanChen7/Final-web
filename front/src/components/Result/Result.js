import React from "react";
import { useLocation, Link } from 'react-router-dom';
import './Result.css'

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
              <Link to={{ pathname: `/pet/${pet.PetID}`, state: { pet } }} className="result-item">
                {pet.name} - Attributes: {pet.Attributes.map(attr => `${attr.AttributeType}: ${attr.AttributeValue}`).join(', ')}
              </Link>
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

