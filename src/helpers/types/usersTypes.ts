import { ApiError } from "./apiErrrorsTypes";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  photo: string;
  registration_timestamp?: number;
};

export type UserResponse =
  | {
      success: true;
      user: User;
    }


export type UserToAdd = {
  name: string;
  email: string;
  phone: string;
  media: File;
  position_id: number;
};

export type AddUserResponse = {
  success: true;
  user_id: number;
  message: string;
};


export type UsersList = User[];

export type UsersListResponse = {
  success: true;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: UsersList;
};


export type GetUsersParams = {
  page: number;
  offset?: number;
  count: number;
};
