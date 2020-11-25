
import { FIND_ADRESS } from "./actionTypes";
import { ADD_COMPANY } from "./actionTypes";
import { categoriesURL, addPlaceURL } from "../utils/fetchURL";

export const featchFindAC = (parametr) => {
  return (dispatch) => {
    fetch(categoriesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parametr),
    })
      .then((res) => res.json())
      .then((res) => dispatch(findAdressAC(res.places)));
  };
};


export const featchAddCompanyAC = (parametr) => {
  return (dispatch) => {
    fetch(addPlaceURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parametr),
    })
      .then((response) => response.json())
      // .then((data) => console.log(data))
  }
}

export const findAdressAC = (payload) => ({
  type: FIND_ADRESS,
  payload
})

export const addCompanyAC = (payload) => ({
  type: ADD_COMPANY,
  payload
})

