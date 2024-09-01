import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UserActions from './store/actions/user.actions';
import * as fromUserSelectors from './store/selectors/user.selectors';
import { User } from './models/user.model';

@Component({
  selector: 'app-ngrx-entity',
  templateUrl: './ngrx-entity.component.html',
  styleUrls: ['./ngrx-entity.component.scss']
})
export class NgrxEntityComponent implements OnInit {
  users$: Observable<User[]>;
  currentUser: User = { id: 0, name: '', username: '', email: '', phone: '', website: '' };
  isEditing: boolean = false;

  constructor(private store: Store) {
    this.users$ = this.store.select(fromUserSelectors.selectAllUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

  selectUser(id: number): void {
    this.store.dispatch(UserActions.selectUser({ id }));
  }

  editUser(user: User): void {
    this.currentUser = { ...user };
    this.isEditing = true;
  }

  deleteUser(id: number): void {
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  addUser(): void {
    this.store.dispatch(UserActions.addUser({ user: this.currentUser }));
    this.clearForm();
  }

  updateUser(): void {
    this.store.dispatch(UserActions.updateUser({ update: { id: this.currentUser.id, changes: this.currentUser } }));
    this.clearForm();

    // Status logging after update
    this.store.pipe(select(fromUserSelectors.selectAllUsers)).subscribe(users => {
      console.log('Updated users - this.store', users);
    });
  }

  clearForm(): void {
    this.currentUser = { id: 0, name: '', username: '', email: '', phone: '', website: '' };
    this.isEditing = false;
  }
}
