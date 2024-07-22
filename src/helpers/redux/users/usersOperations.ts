import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import {
  GetUsersParams,
  UserResponse,
  UsersListResponse,
  UserToAdd,
} from "../../types/usersTypes";
import { RootState } from "../../types/reduxConfigTypes";

export const getAllUsersThunk = createAsyncThunk<
  UsersListResponse,
  GetUsersParams,
  {}
>("users/getAll", async (params: GetUsersParams, { rejectWithValue }) => {
  try {
    return await api.getAllUsers(params);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const getUserByIdThunk = createAsyncThunk<UserResponse, string, {}>(
  "users/getById",
  async (id: string, { rejectWithValue }) => {
    try {
      return await api.getUserById(id);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewUserThunk = createAsyncThunk<
  any,
  UserToAdd,
  { state: RootState }
>("users/addNew", async (user: UserToAdd, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    const response = await api.addNewUser(user, token);
    return (await api.getUserById(response.user_id)).user;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
