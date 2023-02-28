import { actionTypes } from '../constants/action-types';
const initialstate = {
  products: [],
};
export const productReducers = (state = initialstate, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
