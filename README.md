# Final-web

# Backend Requirements

This document outlines the backend requirements for our project, including database models and API routes.

## Database Requirements

We use PostgreSQL as our database system, with Sequelize for ORM.

### Models

We have created the following models, each with at least two fields:

1. **Attribute Model**
   - [Attribute Model Code](https://github.com/YuxuanChen7/Final-web/blob/master/server/models/attribute.js)

2. **Pet Model**
   - [Pet Model Code](https://github.com/YuxuanChen7/Final-web/blob/master/server/models/pet.js)

3. **PetAttribute Model**
   - [PetAttribute Model Code](https://github.com/YuxuanChen7/Final-web/blob/master/server/models/petAttribute.js)

### Associations

- Associations between models are defined as follows:
  - [Model Associations Code](https://github.com/YuxuanChen7/Final-web/blob/master/server/index.js) (Line 16~17)

## API Requirements

We use Express in combination with Sequelize to handle CRUD operations.

### Routes

1. **Add New Instances**
   - [Add New Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 59~70, 104~111, 164~171, 224~231)

2. **Get All Instances**
   - [Get All Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 41~52, 84~86, 113~120, 173~180, 233~240)

3. **Get Individual Instances by ID**
   - [Get Individual Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 29~39, 122~133, 182~193, 242~253)

4. **Update Instances**
   - [Update Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 135~147, 195~207, 255~267)

5. **Remove Instances by ID**
   - [Remove Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 88~99, 149~161, 209~221, 269~281)

6. **Get Associated Instances**
   - [Get Associated Instances Route](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 284~307)

## Additional Information

Please refer to the provided links for detailed code and implementation of each model and route.
