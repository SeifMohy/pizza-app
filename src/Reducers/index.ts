import {combineReducers} from "redux"
import counter from "./OrderCountReducer"
import ordered from "./DashboardOrderReducer"

export const reducers = combineReducers({ordered, counter});

