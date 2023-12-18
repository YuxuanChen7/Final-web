const Sequelize = require('sequelize');
const sequelize = require('../database');

const Pet = sequelize.define('Pet', {
    PetID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Type: {
        type: Sequelize.STRING
    },
    Breed: {
        type: Sequelize.STRING
    },
    Size: {
        type: Sequelize.STRING
    },
    Color: {
        type: Sequelize.STRING
    },
    PictureURL: {
        type: Sequelize.STRING
    },
    Hair: {
        type: Sequelize.INTEGER
    }
});

//await Pet.sync()

module.exports = Pet;
