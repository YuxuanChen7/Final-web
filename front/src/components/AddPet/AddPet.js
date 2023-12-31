import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddPet.css";

const AddPet = () => {
  const [petName, setPetName] = useState("");
  const [attributeType, setAttributeType] = useState("");
  const [attributeValue, setAttributeValue] = useState("");
  const [pets, setPets] = useState([]);
  const [deletePetId, setDeletePetId] = useState("");
  const [updatePetId, setUpdatePetId] = useState("");
  const [newPetName, setNewPetName] = useState("");

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

    await fetchPets(); //basically refreshing
  };

  const fetchPets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pets");
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
      alert("An error occurred while fetching the pets.");
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    if (!deletePetId) {
      alert("Please enter a pet ID to delete.");
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/pets/${deletePetId}`);
      setDeletePetId("");
      fetchPets();
    } catch (error) {
      console.error("Error occurred while deleting the pet:", error);
      alert("An error occurred while deleting the pet.");
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (!updatePetId || !newPetName) {
      alert("Please enter both the Pet ID and the new name.");
      return;
    }

    try {
      await axios.put(`http://localhost:5000/pets/${updatePetId}`, {
        name: newPetName,
      });
      setUpdatePetId("");
      setNewPetName("");
      fetchPets();
    } catch (error) {
      console.error("Error occurred while updating the pet:", error);
      alert("An error occurred while updating the pet.");
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div>
      <div className="pets-list">
        <h2>Pets List</h2>
        {pets.map((pet) => (
          <div key={pet.PetID} className="pet-item">
            <span>
              ID: {pet.PetID} - Name: {pet.name}
            </span>
          </div>
        ))}
      </div>
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
      <div className="delete-pet-form">
        <h2>Delete a Pet</h2>
        <form onSubmit={handleDeleteSubmit}>
          <input
            type="text"
            value={deletePetId}
            onChange={(e) => setDeletePetId(e.target.value)}
            required
            placeholder="Pet ID"
            className="input-style"
          />
          <button type="submit" className="button-style">
            Delete Pet
          </button>
        </form>
      </div>
      <div className="update-pet-form">
        <h2>Update Pet Name</h2>
        <form onSubmit={handleUpdateSubmit}>
          <input
            type="text"
            value={updatePetId}
            onChange={(e) => setUpdatePetId(e.target.value)}
            placeholder="Pet ID"
            required
            className="input-style"
          />
          <input
            type="text"
            value={newPetName}
            onChange={(e) => setNewPetName(e.target.value)}
            placeholder="New Pet Name"
            required
            className="input-style"
          />
          <button type="submit" className="button-style">
            Update Pet
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPet;
