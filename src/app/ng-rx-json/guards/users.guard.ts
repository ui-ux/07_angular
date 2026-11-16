import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { AppState } from '../store/state/state';
import { selectUserState } from '../store/selectors/user.selectors';
import { loadUsers } from '../store/actions/user.actions';


@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectUserState).pipe(
      tap(state => {
        if (!state.loaded && !state.loading) {
          this.store.dispatch(loadUsers());
        }
      }),
      filter(state => state.loaded),
      take(1),
      map(() => true),
    );
  }
}
