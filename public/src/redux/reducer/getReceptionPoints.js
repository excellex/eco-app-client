import { GET_RECEPTION_POINTS } from '../actionTypes';

export function getReceptionPoints(state = {}, action) {
  switch (action.type) {
    case GET_RECEPTION_POINTS:
      return {...action.payload}
    default:
      return state;
  }
}