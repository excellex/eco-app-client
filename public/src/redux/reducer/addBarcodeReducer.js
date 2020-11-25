import { ADD_BARCODE } from '../actionTypes';

export function addBarcodeReducer(state = [], action) {
  switch (action.type) {
    case ADD_BARCODE:
      return action.payload
    default:
      return state;
  }
}