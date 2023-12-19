const Sequelize = require('sequelize');
const sequelize = require('../database');

const Pet = sequelize.define('Pet', {
    PetID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
});

module.exports = Pet;
