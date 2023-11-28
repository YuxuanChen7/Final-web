var express = require('express')
var app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["user1","user2","user3","user4","user5","user6","user7","user8"]})
})

app.listen(5000)