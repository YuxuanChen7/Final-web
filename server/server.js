var express = require('express')
var app = express()


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

/*app.get("/api/cats", (req, res) => {
    res.json(cats);
});*/

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
    const { color, age } = req.query;

    let filteredCats = cats;

    if (color) {
        filteredCats = filteredCats.filter(cat => cat.color.toLowerCase() === color.toLowerCase());
    }

    if (age) {
        filteredCats = filteredCats.filter(cat => cat.age === parseInt(age));
    }

    res.json(filteredCats);
});


app.listen(5000)


/* */