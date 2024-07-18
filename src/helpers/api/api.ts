import axios from "axios";
import {
  AddUserResponse,
  GetUsersParams,
  UserResponse,
  UsersListResponse,
  UserToAdd,
} from "../types/usersTypes";
import { Token, TokenResponse } from "../types/authTypes";
import { PositionsResponse } from "../types/positionsTypes";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const api = {
  getAllUsers: async (params: GetUsersParams): Promise<UsersListResponse> => {
    const res = await axios.get(`${BASE_URL}/users`, { params });
    return res.data;
  },

  getUserById: async (id: string): Promise<UserResponse> => {
    const res = await axios.get(`${BASE_URL}/users/${id}`);
    return res.data;
  },

  addNewUser: async (
    user: UserToAdd,
    token: Token
  ): Promise<AddUserResponse> => {
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("phone", user.phone);
    if (user.photo) {
      formData.append("photo", user.photo);
    }
    formData.append("position_id", String(user.position_id));

    const res = await axios.post(`${BASE_URL}/users`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Token: token,
      },
    });
    return res.data;
  },

  getToken: async (): Promise<TokenResponse> => {
    const res = await axios.get(`${BASE_URL}/token`);
    return res.data;
  },

  getPositions: async (): Promise<PositionsResponse> => {
    const res = await axios.get<PositionsResponse>(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );
    return res.data;
  },
};
