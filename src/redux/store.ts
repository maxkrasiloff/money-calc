import {  applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import coursesList, { couresStateType } from "./courses-reducers";

export type stateType = {
    courses:couresStateType
}

let reducers = combineReducers({
    courses: coursesList,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store;

