import { ADD_CART, REMOVE_CART } from "./CartTypes"
import { handleAddToCart, handleRemoveCart } from "./CartUtilis"
const initiate = {
  cartItems: []
}
 const cartReducer = (state,action) => {
   switch (action.type) {
     case ADD_CART:
       return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItem: state.cartItems,
          nextCartItem: action.payload
        })
       }
      case REMOVE_CART:
        return {
          ...state,
          cartItems: handleRemoveCart({
            prevCartItems:state.cartItems,
            removeCartItems: action.payload
          })
        }
     default:
    return state
   }
 }

 export default cartReducer