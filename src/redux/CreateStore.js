import {createStore,applyMiddleware } from "redux";
import logger from "redux-logger"
import thunk from 'redux-thunk'
import createSagaMiddleware from "@redux-saga/core";
import RootReducer from "./RootReducer";
import RootSaga from "./RootSaga";
const sagaMiddleware = createSagaMiddleware()
export const middlewares = [sagaMiddleware, thunk,logger] ;

const store = createStore(RootReducer,applyMiddleware(...middlewares))
sagaMiddleware.run(RootSaga)
export default store;