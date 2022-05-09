import { createSelector} from "reselect";
export const selectData = state => state.cartData;
export const selectorCartItems = createSelector(
  [selectData],
  cartData =>  cartData.cartItems
)
export const selectCartItemsCount = createSelector(
  [selectorCartItems], cartItems => cartItems.reduce(
    (quantity,cartItem) => quantity + cartItem.quantity,0)
)
 
export const selectCartTotal = createSelector(
  [selectorCartItems],
  cartItems => cartItems.reduce((quantity,cartItem) => 
    quantity + cartItem.quantity * cartItem.productPrice,0
  )
)