import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';
import { AppState } from '../store/state/state';
import { selectAllUsers } from '../store/selectors/user.selectors';
import { loadUsers } from '../store/actions/user.actions';


@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectAllUsers).pipe(
      tap(users => {
        if (!users.length) {
          this.store.dispatch(loadUsers());
        }
      }),
      filter(users => !!users.length),
      // Waiting for the data to be loaded
      take(1),
      // Take one value and finish
      switchMap(() => of(true)),
      catchError(() => of(false))
      // If there is an error, return false
    );
  }
}
