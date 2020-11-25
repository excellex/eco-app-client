import { ADD_MATERIAL } from "../actionTypes";

export const getMatListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MATERIAL:
      return [...action.payload];

    default:
      return state;
  }
};
