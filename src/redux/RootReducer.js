import { combineReducers } from "redux";
import {userReducer }from "./user/userReducer";
import { ProductReducer } from "./Product/ProductReducer";
import cartReducer from "./Cart/CartReducer";
import {persistReducer} from "redux-persist/";
import storage from "redux-persist/lib/storage";
export const RootReducer =  combineReducers({
  user: userReducer,
  productData: ProductReducer,
  cartData: cartReducer
  })
  
  const configStorage = {
    key: 'root',
    storage,
    whiteList: ['cartData']
  }
  export default persistReducer(configStorage,RootReducer)