// user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from '../store/actions/user.actions';
import { User } from '../store/models/user.model';

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map(users => loadUsersSuccess({ users })),
        catchError(error => of(loadUsersFailure({ error: error.message }))))
    )
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}
