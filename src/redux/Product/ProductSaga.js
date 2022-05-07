import {all,takeLatest,call, put} from 'redux-saga/effects'
import { auth } from '../../firebase/utils'
import { fetchProductStart, setProduct,setProducts } from './ProductAction';
import { handleAddProducts, handleDeleteProduct, handleFetchProduct, handleFetchProducts } from './ProductHelper'
import  * as types from './productType'


export function* addProduct({payload:
{
  productCategory,
  productName,
  productThumbnail,
  productPrice,
}}) {
  try{
    const timeStamp= new Date();
    yield handleAddProducts({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      createdDate: timeStamp,
      // productDesc,
      productAdminUserUID: auth.currentUser.uid
    })

    yield put(
      fetchProductStart()
    )
  }catch(err) {
    // console.log(err)
  }
}
export function* onAddProductStart() {
  yield takeLatest(types.ADD_PRODUCT_START, addProduct)
}

export function* fetchProduct({payload}) {
  try{
   const products  =  yield handleFetchProduct(payload);
   yield put (
     setProducts(products)
   )
  }catch(err) {
    // console.log(err)
  }
}
export function* onfetchProduct() {
  yield takeLatest(types.FETCH_PRODUCT_START,fetchProduct)
}

export function* deleteProduct({payload}) {
  try{
    yield handleDeleteProduct(payload)
    yield put (
      fetchProductStart()
    )
  }catch(err) {
    // console.log(err)
  }
}
export function* ondeleteProductStart() {
  yield takeLatest(types.DELETE_PRODUCT_START,deleteProduct)
}

export function* fetchProducts({payload}) {
  try{

    const product = yield handleFetchProducts(payload);
      put(
        setProduct(product)
      )

  }catch(err) {
    console.log(err)
  }
}

export function* onfetchProductsStart() {
  yield takeLatest(types.FETCH_PRODUCTS_START,fetchProducts)
}
export default function* ProductSaga() {
  yield all([
    call(onAddProductStart),
    call(onfetchProduct),
    call(ondeleteProductStart),
    call(onfetchProductsStart)
  
  ])
}