import { all,call } from "@redux-saga/core/effects";
import ProductSaga from "./Product/ProductSaga";
import userSaga from './user/userSaga';

export default function* RootSaga() {
  yield all([call(userSaga),
  call(ProductSaga)])
}