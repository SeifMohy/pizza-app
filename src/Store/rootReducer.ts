import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "../Slices/cartSlice";
import { dashboardReducer } from "../Slices/dashboardSlice";


export const rootReducer = combineReducers({
	cart: cartReducer,
	dashboard: dashboardReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
