import { configureStore } from '@reduxjs/toolkit';
import quantitySlice from './QuantitySlice';
import cartSlice from './TotalPriceSlice';

const store = configureStore({
  reducer: {
    quantity: quantitySlice.reducer,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
