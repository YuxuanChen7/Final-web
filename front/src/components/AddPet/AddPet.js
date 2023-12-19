import React, { useState } from "react";
import axios from "axios";

const AddPet = () => {
  const [petName, setPetName] = useState("");
  const [petSize, setPetSize] = useState("");

  const handleNameChange = (e) => {
    setPetName(e.target.value);
  };

  const handleSizeChange = (e) => {
    setPetSize(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const petResponse = await axios.post("http://localhost:5000/pets", {
        name: petName,
      });
      const petId = petResponse.data.PetID;

      let attributeResponse = await axios.get(
        `http://localhost:5000/attributes?value=${petSize}`
      );
      let attributeId =
        attributeResponse.data.length > 0
          ? attributeResponse.data[0].AttributeID
          : null;

      if (!attributeId) {
        attributeResponse = await axios.post(
          "http://localhost:5000/attributes",
          { AttributeType: "size", AttributeValue: petSize }
        );
        attributeId = attributeResponse.data.AttributeID;
      }

      await axios.post("http://localhost:5000/petAttributes", {
        PetID: petId,
        AttributeID: attributeId,
      });

      alert("Pet added successfully!");
      setPetName("");
      setPetSize("");
    } catch (error) {
      alert("An error occurred while adding the pet.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add a New Pet</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pet Name:</label>
          <input
            type="text"
            value={petName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label>Pet Size:</label>
          <select value={petSize} onChange={handleSizeChange} required>
            <option value="">Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default AddPet;
