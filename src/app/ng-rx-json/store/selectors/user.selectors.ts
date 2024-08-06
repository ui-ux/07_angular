import { createSelector } from '@ngrx/store';
import { AppState, UserState } from '../state/state';

export const selectUserState = (state: AppState) => state.users;

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectUsersLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

export const selectUsersError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
