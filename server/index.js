const sequelize = require('./database');

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//need to debug the below code
const Pet = require('./models/pet');
const Attribute = require('./models/attribute');
const PetAttribute = require('./models/petAttribute');

Pet.belongsToMany(Attribute, { through: PetAttribute, foreignKey: 'PetID' });
Attribute.belongsToMany(Pet, { through: PetAttribute, foreignKey: 'AttributeID' });

sequelize.sync({ force: true })
    .then(() => console.log('Tables have been created'))
    .catch(err => console.error('Error creating tables:', err));
