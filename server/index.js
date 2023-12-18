const sequelize = require('./database');

//need to debug this part
const Pet = require('./models/pet');
const Attribute = require('./models/attribute');
const PetAttribute = require('./models/petAttribute');

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//need to debug this part
Pet.belongsToMany(Attribute, { through: PetAttribute, foreignKey: 'PetID' });
Attribute.belongsToMany(Pet, { through: PetAttribute, foreignKey: 'AttributeID' });

sequelize.sync({ force: true })
    .then(() => console.log('Tables have been created'))
    .catch(err => {
        console.error('Error creating tables:', err);
        console.log(err); // To see the complete error object
    });
