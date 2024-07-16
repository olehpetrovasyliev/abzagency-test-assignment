import { createAsyncThunk } from "@reduxjs/toolkit";
import { PositionsResponse } from "../../types/positionsTypes";
import axios from "axios";

export const getAllPositionsThunk = createAsyncThunk<
  PositionsResponse,
  any,
  {}
>("users/getAll", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get<PositionsResponse>(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
