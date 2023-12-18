const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Attribute = sequelize.define('Attribute', {
    AttributeID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    AttributeName: {
        type: Sequelize.STRING
    },
    AttributeType: {
        type: Sequelize.STRING
    }
});

module.exports = Attribute;
