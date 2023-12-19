const Sequelize = require('sequelize');
const sequelize = require('../database');

const Attribute = sequelize.define('Attribute', {
    AttributeID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    AttributeType: {
        type: Sequelize.STRING
    },
    AttributeValue: {
        type: Sequelize.STRING
    }
});

module.exports = Attribute;
