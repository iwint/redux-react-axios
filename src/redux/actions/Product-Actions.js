import { ActionTypes } from "../constants/action-type";

export const setproducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedproduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeselectedproduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
