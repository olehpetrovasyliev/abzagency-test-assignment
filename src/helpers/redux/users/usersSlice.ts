import { createSlice, PayloadAction, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllUsersThunk,
  getUserByIdThunk,
  addNewUserThunk,
} from "./usersOperations";
import {
  UsersListResponse,
  UserResponse,
  AddUserResponse,
  UsersList,
  User,
} from "../../types/usersTypes";

type UsersState = {
  usersList: UsersList | [];
  currentUser: User | {};
  isLoading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  usersList: [],
  currentUser: {},
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearCurrentUser: (state) => {
      state.currentUser = {};
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersThunk.fulfilled, (state, action) => {
        state.usersList = action.payload.users;
      })
      .addCase(getUserByIdThunk.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
      })
      .addCase(
        addNewUserThunk.fulfilled,
        (state, action: PayloadAction<AddUserResponse>) => {
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
          state.error = action.payload as string; // Ensure payload type matches
        }
      );
  },
});

export const { clearCurrentUser, clearError } = usersSlice.actions;

export default usersSlice.reducer;
