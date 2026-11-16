import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from '../actions/user.actions';
import { initialUserState } from '../state/state';


export const userReducer = createReducer(
  initialUserState,
  on(loadUsers, state => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    loaded: true,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    error,
  }))
);
