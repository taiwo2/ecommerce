import * as types from "./CartTypes";

export const addCart = nextItem => ({
  type: types.ADD_TO_CART,
  payload: nextItem
})

export const removeCart = cartItem => ({
  type: types.REMOVE_CART,
  payload: cartItem
})
export const reduceCart = cartItem => ({
  type: types.REDUCE_CART_ITEM,
  payload: cartItem
})