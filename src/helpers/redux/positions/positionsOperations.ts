import { createAsyncThunk } from "@reduxjs/toolkit";
import { PositionsResponse } from "../../types/positionsTypes";
import axios from "axios";
import { api } from "../../api/api";

export const getAllPositionsThunk = createAsyncThunk<
  PositionsResponse,
  void,
  {}
>("positions/getAll", async (_, { rejectWithValue }) => {
  try {
    return await api.getPositions();
  } catch (error: any) {
    return rejectWithValue(error.response?.data || error.message);
  }
});
