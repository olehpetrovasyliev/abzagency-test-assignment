import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  AddUserResponse,
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
    const res = await axios.get<UsersListResponse>(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      { params }
    );
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const getUserByIdThunk = createAsyncThunk<UserResponse, string, {}>(
  "users/getById",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get<UserResponse>(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`
      );
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewUserThunk = createAsyncThunk<
  AddUserResponse,
  UserToAdd,
  { state: RootState }
>("users/addNew", async (user: UserToAdd, { getState, rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    if (user.photo) {
      formData.append("photo", user.photo);
    }
    formData.append("position_id", String(user.position_id));

    const token = getState().auth.token;

    const res = await axios.post<AddUserResponse>(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Token: token,
        },
      }
    );

    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
