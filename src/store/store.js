import { createStore, combineReducers } from "redux";
import categoryReducer from './categories';
import {composeWithDevTools} from 'redux-devtools-extension';
import productsReducer from './products';

const reducers = combineReducers({ categories: categoryReducer, products: productsReducer });

function store() {
  return createStore(reducers ,composeWithDevTools());
}
export default store();