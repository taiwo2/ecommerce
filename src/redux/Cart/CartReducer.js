import * as types from "./CartTypes"
import {handleAddToCart,handleReduceCartItem,handleRemoveCart } from './CartUtilis'
const initiate = {
  cartItems: []
}
 const cartReducer = (state=initiate,action) => {
   switch (action.type) {
     case types.ADD_TO_CART:
       return {
         ...state,
         cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItems: action.payload
         })
       }
      case types.REMOVE_CART:
        return {
          ...state,
          cartItems: handleRemoveCart({
            prevCartItems:state.cartItems,
            removeCartItems: action.payload
          })
        }
      case types.REDUCE_CART_ITEM:
        return {
          ...state,
          cartItems: handleReduceCartItem({
            prevCartItems: state.cartItems, 
            cartItemToReduce: action.payload
          })
        }
     default:
      return state
   }
 }

 export default cartReducer