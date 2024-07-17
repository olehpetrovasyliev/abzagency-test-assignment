import { RootState } from "../../types/reduxConfigTypes";

export const selectPositions = (state: RootState) =>
  state.positions.positionsArr;
export const selectPositionsLoading = (state: RootState) =>
  state.positions.loading;
export const selectPositionsError = (state: RootState) => state.positions.error;
