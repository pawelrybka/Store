import { configureStore } from '@reduxjs/toolkit';
import quantitySlice from './QuantitySlice';

const store = configureStore({
  reducer: {
    quantity: quantitySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

