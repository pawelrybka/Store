import { createSlice } from '@reduxjs/toolkit';

interface QuantityState {
  value: number;
}

const initialState: QuantityState = {
  value: 0,
};

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    increase: state => {
      state.value += 1;
    },
    decrease: state => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = quantitySlice.actions;

export default quantitySlice.reducer;
