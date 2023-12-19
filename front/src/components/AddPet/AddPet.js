import React, { useState } from "react";
import axios from "axios";
import "./AddPet.css";

const AddPet = () => {
  const [petName, setPetName] = useState("");
  const [attributeType, setAttributeType] = useState("");
  const [attributeValue, setAttributeValue] = useState("");

  const handleNameChange = (e) => setPetName(e.target.value);
  const handleTypeChange = (e) => setAttributeType(e.target.value);
  const handleValueChange = (e) => setAttributeValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const petResponse = await axios.post("http://localhost:5000/pets", {
        name: petName,
      });
      const petId = petResponse.data.PetID;

      let attributeResponse = await axios.get(
        `http://localhost:5000/attributes?type=${attributeType}&value=${attributeValue}`
      );
      let attributeId =
        attributeResponse.data.length > 0
          ? attributeResponse.data[0].AttributeID
          : null;

      if (!attributeId) {
        attributeResponse = await axios.post(
          "http://localhost:5000/attributes",
          { AttributeType: attributeType, AttributeValue: attributeValue }
        );
        attributeId = attributeResponse.data.AttributeID;
      }

      await axios.post("http://localhost:5000/petAttributes", {
        PetID: petId,
        AttributeID: attributeId,
      });

      alert("Pet added successfully!");
      setPetName("");
      setAttributeType("");
      setAttributeValue("");
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
            className="input-style"
            required
          />
        </div>
        <div>
          <label>Attribute Type:</label>
          <input
            type="text"
            value={attributeType}
            onChange={handleTypeChange}
            className="input-style"
            required
          />
        </div>
        <div>
          <label>Attribute Value:</label>
          <input
            type="text"
            value={attributeValue}
            onChange={handleValueChange}
            className="input-style"
            required
          />
        </div>
        <button type="submit" className="button-style">
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default AddPet;