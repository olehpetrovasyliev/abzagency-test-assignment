import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TokenResponse } from "../../types/authTypes";

export const getTokenThunk = createAsyncThunk<TokenResponse, void, {}>(
  "auth/login",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get<TokenResponse>(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      );
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
