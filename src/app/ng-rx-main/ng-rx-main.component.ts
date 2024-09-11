import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AddArticleAction } from './store/actions/article.actions';
import { State } from './store/state.model';
import { Article } from './store/models/article.model';


@Component({
  selector: 'app-ng-rx-main',
  templateUrl: './ng-rx-main.component.html',
  styleUrl: './ng-rx-main.component.scss'
})
export class NgRxMainComponent  implements OnInit {
  articles$!: Observable<Array<Article>>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select((store) => store.article);
  }

  addArticle(form: NgForm) {
    this.store.dispatch(new AddArticleAction(form.value));
    form.reset();
  }
}
