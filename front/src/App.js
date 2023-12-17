// App.js
import React, { useEffect, useState } from "react";
import FavoritesList from "./FavoritesList"; // Import the FavoritesList component

function App() {
  const [backData, setbackData] = useState({ users: [] }); // Initialize backData with an empty array for users
  const userId = navigator.userAgent; // Replace with the actual user ID

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setbackData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addToFavorites = (cat) => {
    fetch(`/api/favorites/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color: cat.color }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error("Error adding to favorites:", error);
      });
  };
  
  const renderCatInfo = (cat) => {
    console.log('Rendering cat:', cat);
    return (
      <div key={cat.id}>
        <h3>{cat.name}</h3>
        <p>Age: {cat.age}</p>
        <p>Color: {cat.color}</p>
        <button onClick={() => addToFavorites(cat)}>Add to Favorites</button>
        <hr />
      </div>
    );
  };

  return (
    <div>
      <FavoritesList userId={userId} /> {}
      {backData.users.length === 0 ? (
        <p>No users available</p>
      ) : (
        backData.users.map((user, i) => renderCatInfo(user))
      )}
    </div>
  );
}

export default App;
