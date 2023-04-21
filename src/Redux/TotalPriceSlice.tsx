import { createSlice } from '@reduxjs/toolkit';

interface CartSlice {
  total: number;
}

const initialState: CartSlice = {
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.total -= action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;


