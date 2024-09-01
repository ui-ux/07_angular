import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../../models/user.model';

// EntityState<T> is an interface that defines a state form containing a collection of entities.

export interface State extends EntityState<User> {
// Optional property to track the selected user
  selectedUserId: number | null;
}
// The State interface extends EntityState<User>, which provides ids and entities properties.
// The optional selectedUserId property is used to track the currently selected user.

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();
// EntityAdapter<T> is an adapter that provides various methods for managing the state of entities.
// This adapter provides methods such as addOne, removeOne, updateOne, and others to manage the state of entities of type User.


export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
});

export const userReducer2 = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users2 }) => adapter.setAll(users2, state)),

  on(UserActions.addUser, (state, { user }) => adapter.addOne(user, state)),
  on(UserActions.updateUser, (state, { update }) => adapter.updateOne(update, state)),
  on(UserActions.deleteUser, (state, { id }) => adapter.removeOne(id, state)),
  on(UserActions.selectUser, (state, { id }) => ({
    ...state,
    selectedUserId: id,
  }))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
