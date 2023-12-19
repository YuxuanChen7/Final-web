const sequelize = require("./database");

const Pet = require("./models/pet");
const Attribute = require("./models/attribute");
const PetAttribute = require("./models/petAttribute");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

Pet.belongsToMany(Attribute, { through: PetAttribute });
Attribute.belongsToMany(Pet, { through: PetAttribute });

async function populateData() {
  try {
    const sizeBig = await Attribute.create({
      AttributeType: "size",
      AttributeValue: "big",
    });
    const sizeMedium = await Attribute.create({
      AttributeType: "size",
      AttributeValue: "medium",
    });
    const ragdoll = await Pet.create({ name: "ragdoll" });
    await ragdoll.addAttribute(sizeBig);

    const maineCoon = await Pet.create({ name: "maine coon cat" });
    await maineCoon.addAttribute(sizeBig);

    const devonRex = await Pet.create({ name: "devon rex" });
    await devonRex.addAttribute(sizeMedium);

    const shortHair = await Pet.create({ name: "short hair" });
    await shortHair.addAttribute(sizeMedium);

    const persian = await Pet.create({ name: "persian" });
    await persian.addAttribute(sizeMedium);

    console.log("Data populated successfully");
  } catch (err) {
    console.error("Error populating data:", err);
  }
}

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Tables have been created");
    populateData();
  })
  .catch((err) => {
    console.error("Error creating tables:", err);
    console.log(err);
  });
