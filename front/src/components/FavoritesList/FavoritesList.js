import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FavoritesList = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/favorites/`)
      .then(response => {
        const userFavorites = response.data;
        setFavorites(userFavorites);
      })
      .catch(error => {
        console.error('Error fetching user favorites:', error);
      });
  }, [userId]);

  const removeFromFavorites = (catId) => {
    axios.delete(`http://localhost:5000/api/favorites/${catId}`)
      .then(response => {
        console.log(response.data.message);
        setFavorites(prevFavorites => prevFavorites.filter(cat => cat.id !== catId));
      })
      .catch(error => {
        console.error('Error deleting from favorites:', error);
      });
  };

  return (
    <div>
      <h2>Your Favorite Cats</h2>
      <ul>
        {favorites.map(cat => (
          <li key={cat.id}>
            <strong>Name:</strong> {cat.name} <br />
            <strong>Age:</strong> {cat.age} <br />
            <strong>Color:</strong> {cat.color} <br />
            <strong>ID:</strong> {cat.id} <br />
            <button onClick={() => removeFromFavorites(cat.id)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;