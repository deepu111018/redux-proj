import { combineReducers } from 'redux';
import { productReducers, selectedProductReducer } from './productReducers';

const reducers = combineReducers({
  allproducts: productReducers,
  product: selectedProductReducer,
});

export default reducers;
