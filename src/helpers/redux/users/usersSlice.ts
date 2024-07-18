import { createSlice, PayloadAction, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllUsersThunk,
  getUserByIdThunk,
  addNewUserThunk,
} from "./usersOperations";
import {
  UsersListResponse,
  UserResponse,
  UsersList,
  User,
} from "../../types/usersTypes";

type UsersState = {
  usersList: UsersList;
  currentUser: User | null;
  nextPageAvailable: boolean;
  isAdded: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  usersList: [],
  currentUser: null,
  nextPageAvailable: true,
  isAdded: false,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllUsersThunk.fulfilled,
        (state, action: PayloadAction<UsersListResponse>) => {
          state.usersList = [...action.payload.users].sort(
            (a, b) => b.registration_timestamp - a.registration_timestamp
          );
          state.nextPageAvailable = action.payload.links.next_url !== null;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        getUserByIdThunk.fulfilled,
        (state, action: PayloadAction<UserResponse>) => {
          state.currentUser = action.payload.user;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        addNewUserThunk.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.usersList.unshift(action.payload);
          state.isAdded = true;
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllUsersThunk.pending,
          getUserByIdThunk.pending,
          addNewUserThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllUsersThunk.rejected,
          getUserByIdThunk.rejected,
          addNewUserThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string;
        }
      );
  },
});

export const { clearCurrentUser, clearError } = usersSlice.actions;

export default usersSlice.reducer;
