import {createStore,applyMiddleware } from "redux";
import logger from "redux-logger"
import thunk from 'redux-thunk'
import createSagaMiddleware from "@redux-saga/core";
import RootReducer from "./RootReducer";
import RootSaga from "./RootSaga";
import {persistStore} from 'redux-persist'
const sagaMiddleware = createSagaMiddleware()
export const middlewares = [sagaMiddleware, thunk,logger] ;

export const store = createStore(RootReducer,applyMiddleware(...middlewares))
sagaMiddleware.run(RootSaga);

export const persistor = persistStore(store)

// export default {
//   store,
//   persitor
// }