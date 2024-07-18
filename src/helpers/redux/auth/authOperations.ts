import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { TokenResponse } from "../../types/authTypes";

export const getTokenThunk = createAsyncThunk<TokenResponse, void, {}>(
  "auth/login",
  async (_, { rejectWithValue }) => {
    try {
      return await api.getToken();
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
