import  * as types from "./productType";

 
 const Initial_State = {
  product: {},
  products:[]
 }
 export const ProductReducer = (state=Initial_State,action) => {
   switch (action.type) {
     case types.SET_PRODUCT:
       return {
        ...state,
        product: action.payload
       }

      case types.SET_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }
   
     default:
       return state;
   }
 }