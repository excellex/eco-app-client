import { combineReducers } from "redux";
import { findAdressReducer } from "./findAdressReducer";
import { addCompanyReducer } from "./addCompanyReducer";

export const rootReducer = combineReducers({
  adress: findAdressReducer,
  company: addCompanyReducer,
});
