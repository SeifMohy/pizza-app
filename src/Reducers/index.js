import {combineReducers} from "redux"
import counter from "./OrderCountReducer"
import ordered from "./OrderReducer"

export const reducers = combineReducers({ordered, counter});