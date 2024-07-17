import { RootState } from "../../types/reduxConfigTypes";

export const selectUsers = (state: RootState) => state.users.usersList;
export const selectUser = (state: RootState) => state.users.currentUser;
export const selectNextPageAvailable = (state: RootState) =>
  state.users.nextPageAvailable;
export const selectIsUSerAdded = (state: RootState) => state.users.isAdded;
export const selectLoading = (state: RootState) => state.users.isLoading;
export const selectError = (state: RootState) => state.users.error;
