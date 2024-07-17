import { RootState } from "../../types/reduxConfigTypes";

export const selectToken = (state: RootState) => state.auth.token;
export const selectTokenLoading = (state: RootState) => state.auth.loading;
export const selectTokenError = (state: RootState) => state.auth.error;
