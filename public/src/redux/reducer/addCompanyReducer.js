import { ADD_COMPANY } from "../actionTypes";

export function addCompanyReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMPANY:
      return [...action.payload];

    default:
      return state;
  }
}
