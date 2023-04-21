import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuantitySlice {
  [productId: number]: number;
}

const initialState: QuantitySlice = {};

const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state[productId] !== undefined) {
        state[productId] += 1;
      } else {
        state[productId] = 1;
      }
    },
    decrease: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state[productId] !== undefined && state[productId] > 0) {
        state[productId] -= 1;
      }
    },
  },
});

export const { increase, decrease } = quantitySlice.actions;

export default quantitySlice;
