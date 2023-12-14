import React, { useEffect, useState } from "react";

function App() {
  const [backData, setbackData] = useState({ users: [] }); // Initialize backData with an empty array for users

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

  const addToFavorites = (catId) => {

    fetch(`/api/favorites/${userId}/${catId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    return (
      <div key={cat.id}>
        <h3>{cat.name}</h3>
        <p>Age: {cat.age}</p>
        <p>Color: {cat.color}</p>
        <button onClick={() => addToFavorites(cat.id)}>Add to Favorites</button>
        <hr />
      </div>
    );
  };

  return (
    <div>
      {backData.users.length === 0 ? (
        <p>No users available</p>
      ) : (
        backData.users.map((user, i) => renderCatInfo(user))
      )}
    </div>
  );
}

export default App;
