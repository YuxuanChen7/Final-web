import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  attributes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ATTRIBUTE':
      return {
        ...state,
        attributes: [...state.attributes, action.payload]
      };
    case 'UPDATE_ATTRIBUTE':
      return {
        ...state,
        attributes: state.attributes.map((attr, index) =>
          index === action.payload.index ? action.payload.value : attr
        )
      };
    case 'REMOVE_ATTRIBUTE':
      return {
        ...state,
        attributes: state.attributes.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    attributes: reducer
  }
});

export default store;
