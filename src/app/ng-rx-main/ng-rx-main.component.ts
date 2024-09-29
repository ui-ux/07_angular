import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { State } from './store/state.model';
import { Article } from './store/models/article.model';
import { addArticle } from './store/actions/article.actions';

@Component({
  selector: 'app-ng-rx-main',
  templateUrl: './ng-rx-main.component.html',
  styleUrl: './ng-rx-main.component.scss',
})
export class NgRxMainComponent {
  articles$: Observable<Array<Article>> = this.store.select((store) => store.article);

  constructor(private store: Store<State>) {}

  addArticle(form: NgForm) {
    this.store.dispatch(addArticle({ article: form.value }));
    form.reset();
  }
}
