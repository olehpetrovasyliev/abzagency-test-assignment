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
  nextPageAvailable: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  usersList: [],
  currentUser: {},
  nextPageAvailable: true,
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
        state.usersList = [...action.payload.users].sort((a, b): any => {
          return a.registration_timestamp - b.registration_timestamp;
        });
        if (action.payload.links.next_url === null) {
          state.nextPageAvailable = false;
        } else {
          state.nextPageAvailable = true;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserByIdThunk.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isLoading = false;
        state.error = null;
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
          state.error = action.payload as string;
        }
      );
  },
});

export const { clearCurrentUser, clearError } = usersSlice.actions;

export default usersSlice.reducer;
