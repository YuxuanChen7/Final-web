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
      const queryParams = {
        colors: attributes.map(attr => attr.toLowerCase()).join(',')
      };
  
      console.log("Query Params:", queryParams);
  
      const response = await axios.get(`http://localhost:5000/api/cats`, { params: queryParams });
  
      console.log("Search Results:", response.data);
      navigate('/result', { state: { searchResults: response.data } });
    } catch (error) {
      console.error('Error fetching cats by attributes:', error);
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
