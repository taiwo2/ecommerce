import { ADD_CART, REMOVE_CART } from "./CartTypes";

export const addCart = nextItem => ({
  type: ADD_CART,
  payload: nextItem
})

export const removeCart = cartItem => ({
  type: REMOVE_CART,
  payload: cartItem
})
export const reduceCart = cartItem => ({
  type: REMOVE_CART,
  payload: cartItem
})