import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./auth/authSlice";
import usersReducer from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    users: usersReducer,
  },
});

export default store;
