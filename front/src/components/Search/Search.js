import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search() {
  const attributes = useSelector((state) => state.attributes.attributes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddAttribute = () => {
    dispatch({ type: "ADD_ATTRIBUTE", payload: "" });
  };

  const handleUpdateAttribute = (index, value) => {
    dispatch({ type: "UPDATE_ATTRIBUTE", payload: { index, value } });
  };

  const handleRemoveAttribute = (index) => {
    dispatch({ type: "REMOVE_ATTRIBUTE", payload: index });
  };

  const handleSearch = async () => {
    try {
      if (attributes.length > 0) {
        const attributeValue = attributes[0];

        const response = await axios.get(`http://localhost:5000/api/searchPetsByAttributeValue`, {
          params: { attributeValue }
        });

        navigate('/result', { state: { searchResults: response.data } });
      } else {
        console.error('No attributes specified for search');
      }
    } catch (error) {
      console.error('Error fetching pets by attributes:', error);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      {attributes.map((attribute, index) => (
        <div key={index}>
          <input
            type="text"
            className="input-style"
            value={attribute}
            onChange={(e) => handleUpdateAttribute(index, e.target.value)}
          />
          <button className="button-style" onClick={() => handleRemoveAttribute(index)}>Remove</button>
        </div>
      ))}
      <button className="button-style" onClick={handleAddAttribute}>Add Attribute</button>
      <button className="button-style" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
