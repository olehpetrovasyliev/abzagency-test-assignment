import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PositionsArray, PositionsResponse } from "../../types/positionsTypes";
import { getAllPositionsThunk } from "./positionsOperations";

type PositionsState = {
  positionsArr: PositionsArray;
  loading: boolean;
  error: string | null;
};

const initialState: PositionsState = {
  positionsArr: [],
  loading: false,
  error: null,
};

const positionsSlice = createSlice({
  name: "positions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(
        getAllPositionsThunk.fulfilled,
        (state, action: PayloadAction<PositionsResponse>) => {
          state.loading = false;
          state.positionsArr = action.payload.positions;
          state.error = null;
        }
      )
      .addCase(getAllPositionsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPositionsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.toString()
          : "Unknown error";
      });
  },
});

export default positionsSlice.reducer;
