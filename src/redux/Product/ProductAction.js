import * as types from "./productType";

export const addProductStart = (productData) => ({
type: types.ADD_PRODUCT_START,
payload: productData
})
export const fetchProductStart = (filters={}) => ({
type: types.FETCH_PRODUCT_START,
payload: filters
})
export const setProduct = product => ({
type: types.SET_PRODUCT,
payload: product
})
export const deleteProductStart = productID => ({
type: types.DELETE_PRODUCT_START,
payload: productID
})
export const fetchProductDetails = productID => ({
type: types.FETCH_PRODUCTS_DETAILS,
payload: productID
})
export const setProducts = products => ({
type: types.SET_PRODUCTS,
payload: products
})