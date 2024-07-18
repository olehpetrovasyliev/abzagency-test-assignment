// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import {
//   AddUserResponse,
//   GetUsersParams,
//   UserResponse,
//   UsersListResponse,
//   UserToAdd,
// } from "../../types/usersTypes";
// import { AppDispatch, RootState } from "../../types/reduxConfigTypes";

// export const getAllUsersThunk = createAsyncThunk<
//   UsersListResponse,
//   GetUsersParams,
//   {}
// >("users/getAll", async (params: GetUsersParams, { rejectWithValue }) => {
//   try {
//     const res = await axios.get<UsersListResponse>(
//       "https://frontend-test-assignment-api.abz.agency/api/v1/users",
//       { params }
//     );
//     return res.data;
//   } catch (error: any) {
//     return rejectWithValue(error.message);
//   }
// });

// export const getUserByIdThunk = createAsyncThunk<UserResponse, string, {}>(
//   "users/getById",
//   async (id: string, { rejectWithValue }) => {
//     try {
//       const res = await axios.get<UserResponse>(
//         `https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`
//       );
//       return res.data;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addNewUserThunk = createAsyncThunk<
//   any,
//   UserToAdd,
//   {
//     state: RootState;
//     dispatch: AppDispatch;
//     rejectValue: string;
//   }
// >(
//   "users/addNew",
//   async (user: UserToAdd, { getState, dispatch, rejectWithValue }) => {
//     try {
//       const formData = new FormData();
//       formData.append("name", user.name);
//       formData.append("email", user.email);
//       formData.append("phone", user.phone);
//       if (user.photo) {
//         formData.append("photo", user.photo);
//       }
//       formData.append("position_id", String(user.position_id));

//       const token = getState().auth.token;

//       const res = await axios.post<AddUserResponse>(
//         "https://frontend-test-assignment-api.abz.agency/api/v1/users/",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Token: token,
//           },
//         }
//       );

//       // Fetch the newly created user
//       const newUserAction = await dispatch(getUserByIdThunk(res.data.user_id));

//       if (getUserByIdThunk.fulfilled.match(newUserAction)) {
//         return newUserAction.payload.user;
//       } else {
//         return rejectWithValue("Failed to fetch the newly created user");
//       }
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
