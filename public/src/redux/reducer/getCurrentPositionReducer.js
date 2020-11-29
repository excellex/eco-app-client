import { ADD_CURRENT_POSITION } from '../actionTypes';

export const getCurrentPositionReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CURRENT_POSITION:
      return { ...action.payload };
    default:
      return state;
  }
};