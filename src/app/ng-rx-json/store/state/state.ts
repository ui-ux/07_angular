import { User } from "../models/user.model";

export interface AppState {
  users: UserState;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const initialUserState: UserState = {
  users: [],
  loading: false,
  error: null,
};
