const Sequelize = require('sequelize');
const sequelize = require('../database');

const PetAttribute = sequelize.define('PetAttribute', {
    PAID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PetID: {
        type: Sequelize.INTEGER
    },
    AttributeID: {
        type: Sequelize.INTEGER
    }
});

module.exports = PetAttribute;
