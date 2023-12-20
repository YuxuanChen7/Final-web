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
  - [Model Associations Code](https://github.com/YuxuanChen7/Final-web/blob/master/server/index.js) (Line 16-17)

## API Requirements

We use Express in combination with Sequelize to handle CRUD operations.

### Routes

1. **Add New Instances**
   - [Add New Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 59-70, 104-111, 164-171, 224-231)

2. **Get All Instances**
   - [Get All Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 41-52, 84-86, 113-120, 173-180, 233-240)

3. **Get Individual Instances by ID**
   - [Get Individual Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 29-39, 122-133, 182-193, 242-253)

4. **Update Instances**
   - [Update Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 135-147, 195-207, 255-267)

5. **Remove Instances by ID**
   - [Remove Instances Routes](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 88-99, 149-161, 209-221, 269-281)

6. **Get Associated Instances**
   - [Get Associated Instances Route](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js) (Line 284-307)

# Frontend Requirements

This document outlines the frontend requirements for our project, including UI components, routing, state management, and API calls.

## UI Requirements

We use React for building our user interface.

### Components

1. **Navbar/Topbar Component**
   - [Navbar/Topbar Code](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/Navbar/Navbar.js)

2. **Additional Components**
   - [Various Additional Components](https://github.com/YuxuanChen7/Final-web/tree/master/front/src/components)

3. **Components with Text-Based User Input**
   - [Search Component](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/Search/Search.js) (Line 47-52)
   - [AddPet Component](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/AddPet/AddPet.js) (Line 129) (Multiple input fields)

4. **Components Displaying Single Model Instance**
   - [Search Result Display Component](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/Search/Search.js) (Line 24~40)
   - [Result Component](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/Result/Result.js)
   - [Detailed View Component](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/DetailedView/DetailedView.js)

5. **Components Displaying Data Based on Store State**
   - [Search Component Store Integration](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/Search/Search.js)

6. **CRUD Operation Components**
   - [AddPet Component for CRUD Operations](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/AddPet/AddPet.js) (Line 5-203)

## Client-Side Routing

We use React Router for client-side routing.

1. **Routes Accessible from Navbar/Topbar**
   - [Routes in Index.js](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/index.js)
   - [Navbar Integration](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/Navbar/Navbar.js)

2. **Dynamic Segment Routing**
   - [Dynamic Routing in Index.js](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/index.js) (Line 47)
   - [DetailedView Component for Dynamic Segments](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/DetailedView/DetailedView.js)

## State Management with Redux

1. **Store and Reducer**
   - [Redux Store and Reducer](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/store/store.js) (Line 7 -37)

2. **Action Creators**
   - [Action Creators in Store](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/store/store.js) (Line 7 -31)

3. **State Updates with Dispatch and Actions**
   - [State Updates in Search Component](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/Search/Search.js) (Line 9-22)

4. **Reflecting State Updates in UI**
   - [UI State Reflection in Search Component](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/Search/Search.js) (Line 51, 53, 56)

## API Calls

1. **Backend API Calls for CRUD Operations**
   - [Backend CRUD Operations](https://github.com/YuxuanChen7/Final-web/blob/master/server/server.js)

2. **External API Calls**
   - [Cat Fact API Integration](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/CatFact/CatFact.js)
   - [Cat Pic API Integration](https://github.com/YuxuanChen7/Final-web/blob/master/front/src/components/CatPic/CatPic.js)
