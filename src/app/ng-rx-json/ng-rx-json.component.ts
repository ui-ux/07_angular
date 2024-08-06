import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/state/state';
import { selectAllUsers, selectUsersError, selectUsersLoading } from './store/selectors/user.selectors';
import { loadUsers } from './store/actions/user.actions';
import { User } from './store/models/user.model';


@Component({
  selector: 'app-ng-rx-json',
  templateUrl: './ng-rx-json.component.html',
  styleUrls: ['./ng-rx-json.component.scss']
})
export class NgRxJsonComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectUsersLoading);
    this.error$ = this.store.select(selectUsersError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
}

