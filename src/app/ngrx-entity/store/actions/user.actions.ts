import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';
import { Update } from '@ngrx/entity';

// Action for loading users
export const loadUsers = createAction('[User/API] Load Users');

// Action dispatched after successful loading of users
export const loadUsersSuccess = createAction(
  '[User/API] Load Users Success',
  props<{ users2: User[] }>()
);

// Action for adding a user
export const addUser = createAction('[User/API] Add User', props<{ user: User }>());

// Action for updating a user
export const updateUser = createAction('[User/API] Update User', props<{ update: Update<User> }>());

// Action for deleting a user
export const deleteUser = createAction('[User/API] Delete User', props<{ id: number }>());

// Action for selecting a user
export const selectUser = createAction('[User] Select User', props<{ id: number }>());

// => display error message in UI
export function loadUsersFailed(): any {
  throw new Error('Function not implemented.');
}
