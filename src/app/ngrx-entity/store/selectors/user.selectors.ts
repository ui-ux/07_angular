import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>('users2');

export const selectAllUsers = createSelector(selectUserState, fromUser.selectAll);

export const selectCurrentUserId = createSelector(selectUserState, (state) => state.selectedUserId);

export const selectCurrentUser = createSelector(
  selectUserState,
  selectCurrentUserId,
  (state, selectedUserId) => {
    return selectedUserId !== null ? state.entities[selectedUserId] : undefined;
  }
);

