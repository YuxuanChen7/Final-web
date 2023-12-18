//Sequelize Configuration

const Sequelize = require('sequelize');

const sequelize = new Sequelize('pet1', 'user1', 'apple123', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433
});

module.exports = sequelize;
