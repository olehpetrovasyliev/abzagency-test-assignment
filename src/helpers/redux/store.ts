import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./auth/authSlice";
import usersReducer from "./users/usersSlice";
import positionsReducer from "./positions/positionsSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    users: usersReducer,
    positions: positionsReducer,
  },
});

export default store;
