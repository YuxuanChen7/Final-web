var express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());

//import for ZZ's model
const Pet = require("./models/pet");
const Attribute = require("./models/attribute");
const PetAttribute = require("./models/petAttribute");

//start of YX's section
let cats = [
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
    res.status(404).json({ message: "Cat not found" });
  }
});

app.get("/api/cats", (req, res) => {
  const { colors } = req.query;

  let filteredCats = cats;

  if (colors) {
    const colorArray = colors.split(",");

    filteredCats = filteredCats.filter((cat) =>
      colorArray.includes(cat.color.toLowerCase())
    );
  }

  res.json(filteredCats);
});

const userFavorites = [];

app.post("/api/favorites", (req, res) => {
  const { color } = req.body;

  const cat = cats.find((cat) => cat.color === color.toLowerCase());

  if (!cat) {
    return res.status(404).json({ message: "Cat not found" });
  }

  if (userFavorites.find((favorite) => favorite.id === cat.id)) {
    return res.status(400).json({ message: "Cat is already in favorites" });
  }

  userFavorites.push({
    id: cat.id,
    name: cat.name,
    age: cat.age,
    color: cat.color,
  });

  console.log("Cat added to favorites successfully:", cat);

  res.json({ message: "Cat added to favorites successfully" });
});

app.get("/api/favorites", (req, res) => {
  res.json(userFavorites);
});

app.delete("/api/favorites/:catId", (req, res) => {
  const catId = parseInt(req.params.catId);

  const catIndex = userFavorites.findIndex((cat) => cat.id === catId);

  if (catIndex !== -1) {
    userFavorites.splice(catIndex, 1);
    res.json({ message: "Cat removed from favorites successfully" });
  } else {
    res.status(404).json({ message: "Cat not found in favorites" });
  }
});
//end of YX's section
//start of ZZ's section
app.use(bodyParser.json());
//Pet Model/Table
app.post("/pets", async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/pets", async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/pets/:id", async (req, res) => {
  try {
    const pet = await Pet.findByPk(req.params.id);
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ error: "Pet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/pets/:id", async (req, res) => {
  try {
    const pet = await Pet.findByPk(req.params.id);
    if (pet) {
      await pet.update(req.body);
      res.json(pet);
    } else {
      res.status(404).json({ error: "Pet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/pets/:id", async (req, res) => {
  try {
    const pet = await Pet.findByPk(req.params.id);
    if (pet) {
      await pet.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Pet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Attribute Model/Table
app.post("/attributes", async (req, res) => {
  try {
    const attribute = await Attribute.create(req.body);
    res.status(201).json(attribute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/attributes", async (req, res) => {
  try {
    const attributes = await Attribute.findAll();
    res.json(attributes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/attributes/:id", async (req, res) => {
  try {
    const attribute = await Attribute.findByPk(req.params.id);
    if (attribute) {
      res.json(attribute);
    } else {
      res.status(404).json({ error: "Attribute not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/attributes/:id", async (req, res) => {
  try {
    const attribute = await Attribute.findByPk(req.params.id);
    if (attribute) {
      await attribute.update(req.body);
      res.json(attribute);
    } else {
      res.status(404).json({ error: "Attribute not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/attributes/:id", async (req, res) => {
  try {
    const attribute = await Attribute.findByPk(req.params.id);
    if (attribute) {
      await attribute.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Attribute not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Pet-Attribute Table/Model
app.post("/petAttributes", async (req, res) => {
  try {
    const petAttribute = await PetAttribute.create(req.body);
    res.status(201).json(petAttribute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/petAttributes", async (req, res) => {
  try {
    const petAttributes = await PetAttribute.findAll();
    res.json(petAttributes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/petAttributes/:id", async (req, res) => {
  try {
    const petAttribute = await PetAttribute.findByPk(req.params.id);
    if (petAttribute) {
      res.json(petAttribute);
    } else {
      res.status(404).json({ error: "PetAttribute not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/petAttributes/:id", async (req, res) => {
  try {
    const petAttribute = await PetAttribute.findByPk(req.params.id);
    if (petAttribute) {
      await petAttribute.update(req.body);
      res.json(petAttribute);
    } else {
      res.status(404).json({ error: "PetAttribute not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/petAttributes/:id", async (req, res) => {
  try {
    const petAttribute = await PetAttribute.findByPk(req.params.id);
    if (petAttribute) {
      await petAttribute.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "PetAttribute not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//end of ZZ's section

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
