import { combineReducers } from "redux";
import {userReducer }from "./user/userReducer";
import { ProductReducer } from "./Product/ProductReducer";
export default combineReducers({
  user: userReducer,
  productData: ProductReducer
})