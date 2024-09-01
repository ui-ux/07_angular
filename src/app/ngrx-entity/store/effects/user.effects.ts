import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from '../actions/user.actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects2 {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users2) => {
            console.log('Loaded users:', users2);
            return UserActions.loadUsersSuccess({ users2 });
          }),
          // => Returns an error handling action that can be used for
          catchError(() => of(UserActions.loadUsersFailed()))
        )
      )
    )
  );
}
