import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from '../actions/user.actions';
import { initialUserState } from '../state/state';


export const userReducer = createReducer(
  initialUserState,
  on(loadUsers, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
