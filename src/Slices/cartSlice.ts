import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import  {RootState}  from '../Store/rootReducer';

interface CartState {
  cart?: any; //TODO: Amend Types
}

const initialState: CartState = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart: (
      state: CartState,
      { payload }: PayloadAction<any>
    ) => {
      console.log(payload);
      state.cart = payload;
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const { cart } = cartSlice.actions;
export const cartState = (state: RootState) => state.cart;
