import {  Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { AddArticleAction } from '../store/actions/article.actions';
import { State } from '../store/state.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';
import { Article } from '../store/models/article.model';

@Component({
  selector: 'app-ng-rx-main',
  templateUrl: './ng-rx-main.component.html',
  styleUrl: './ng-rx-main.component.scss',
})

export class NgRxMainComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
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

