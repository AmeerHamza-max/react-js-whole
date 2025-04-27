import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/Cart-Slics';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
