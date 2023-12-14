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

const userFavorites = [];

app.post("/api/favorites", (req, res) => {
    const { color } = req.body;

    const cat = cats.find((cat) => cat.color === color.toLowerCase());

    if (!cat) {
        return res.status(404).json({ message: 'Cat not found' });
    }

    if (userFavorites.find((favorite) => favorite.id === cat.id)) {
        return res.status(400).json({ message: 'Cat is already in favorites' });
    }

    userFavorites.push({
        id: cat.id,
        name: cat.name,
        age: cat.age,
        color: cat.color
    });

    console.log('Cat added to favorites successfully:', cat);

    res.json({ message: 'Cat added to favorites successfully' });
});

app.get("/api/favorites", (req, res) => {
    res.json(userFavorites);
});

app.delete("/api/favorites/:catId", (req, res) => {
    const catId = parseInt(req.params.catId);

    const catIndex = userFavorites.findIndex(cat => cat.id === catId);

    if (catIndex !== -1) {
        userFavorites.splice(catIndex, 1);
        res.json({ message: 'Cat removed from favorites successfully' });
    } else {
        res.status(404).json({ message: 'Cat not found in favorites' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});