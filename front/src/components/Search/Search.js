import React from "react";
import { useSelector, useDispatch } from 'react-redux';

function Search() {
  const attributes = useSelector(state => state.attributes.attributes);
  const dispatch = useDispatch();

  const handleAddAttribute = () => {
    dispatch({ type: 'ADD_ATTRIBUTE', payload: '' });
  };

  const handleUpdateAttribute = (index, value) => {
    dispatch({ type: 'UPDATE_ATTRIBUTE', payload: { index, value } });
  };

  const handleRemoveAttribute = (index) => {
    dispatch({ type: 'REMOVE_ATTRIBUTE', payload: index });
  };

  return (
    <div>
      <h1>Search</h1>
      {attributes.map((attribute, index) => (
        <div key={index}>
          <input
            type="text"
            value={attribute}
            onChange={(e) => handleUpdateAttribute(index, e.target.value)}
          />
          <button onClick={() => handleRemoveAttribute(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddAttribute}>Add Attribute</button>
    </div>
  );
}
export default Search;
