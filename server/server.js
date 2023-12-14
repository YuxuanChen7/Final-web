var express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

let cats  = [
    { id: 1, name: "cat1", age: 3, color: "gray" },
    { id: 2, name: "cat2", age: 2, color: "black" },
    { id: 3, name: "cat3", age: 4, color: "white" },
    { id: 4, name: "cat4", age: 1, color: "orange" },
    { id: 5, name: "cat5", age: 5, color: "brown" },
    { id: 6, name: "cat6", age: 2, color: "striped" },
    { id: 7, name: "cat7", age: 3, color: "calico" },
    { id: 8, name: "cat8", age: 4, color: "tabby" },
];

app.get("/api/cats/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const cat = cats.find((cat) => cat.id === id);
  
    if (cat) {
      res.json({ cat });
    } else {
      res.status(404).json({ message: 'Cat not found' });
    }
  });
  
  app.get("/api/cats", (req, res) => {
    const { colors } = req.query;

    let filteredCats = cats;

    if (colors) {
        const colorArray = colors.split(',');

        filteredCats = filteredCats.filter(cat => colorArray.includes(cat.color.toLowerCase()));
    }

    res.json(filteredCats);
});

const userFavorites = {};

// Add a cat to the user's favorites
app.post("/api/favorites/:userId/:catId", (req, res) => {
    const userId = req.params.userId;
    const catId = parseInt(req.params.catId);

    // Check if the user has a favorites array, if not, create one
    if (!userFavorites[userId]) {
        userFavorites[userId] = [];
    }

    // Check if the cat with the specified ID exists
    const cat = cats.find((cat) => cat.id === catId);

    if (!cat) {
        return res.status(404).json({ message: 'Cat not found' });
    }

    // Check if the cat is already in the user's favorites
    if (userFavorites[userId].find((favorite) => favorite.id === catId)) {
        return res.status(400).json({ message: 'Cat is already in favorites' });
    }

    // Add the cat to the user's favorites
    userFavorites[userId].push(cat);

    res.json({ message: 'Cat added to favorites successfully' });
});

// Get the user's favorite cats
app.get("/api/favorites/:userId", (req, res) => {
    const userId = req.params.userId;

    // Check if the user has a favorites array, if not, create one
    if (!userFavorites[userId]) {
        userFavorites[userId] = [];
    }

    res.json(userFavorites[userId]);
});

const addToFavorites = (userId, catId) => {
  axios.post(`http://localhost:5000/api/favorites/${userId}/${catId}`)
      .then(response => {
          console.log(response.data.message);
      })
      .catch(error => {
          console.error('Error adding cat to favorites:', error);
      });
};

// Get user's favorite cats
const getFavorites = (userId) => {
  axios.get(`http://localhost:5000/api/favorites/${userId}`)
      .then(response => {
          const userFavorites = response.data;
          console.log('User Favorites:', userFavorites);
      })
      .catch(error => {
          console.error('Error fetching user favorites:', error);
      });
};

// Example usage
const userId = 'uniqueUserId'; // Replace with a unique identifier for each user
const catIdToAdd = 2; // Replace with the ID of the cat to add to favorites

addToFavorites(userId, catIdToAdd);
getFavorites(userId);

app.listen(5000)


/* */