import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTokenThunk } from "./authOperations";
import { AuthState, TokenResponse } from "../../types/authTypes";

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(
        getTokenThunk.fulfilled,
        (state, action: PayloadAction<TokenResponse>) => {
          state.loading = false;
          state.token = action.payload.token;
          state.error = null;
        }
      )
      .addCase(getTokenThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTokenThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.toString()
          : "Unknown error";
      });
  },
});

export default authSlice.reducer;
