import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});

export default store;

