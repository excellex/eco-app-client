import { combineReducers } from "redux";
import { findAdressReducer } from "./findAdressReducer";
import { getMatListReducer } from "./getMatListReducer";
import { addCompanyReducer } from "./addCompanyReducer";
import { getCatListReducer } from "./getCatListReducer";
import { addBarcodeReducer } from './addBarcodeReducer';

export const rootReducer = combineReducers({
  adress: findAdressReducer,
  company: addCompanyReducer,
  categories: getCatListReducer,
  materials: getMatListReducer,
  barcode: addBarcodeReducer
});
