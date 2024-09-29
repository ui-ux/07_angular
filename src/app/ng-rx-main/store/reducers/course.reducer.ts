import { createReducer, on } from '@ngrx/store';
import { addArticle } from '../actions/article.actions';
import { Article } from '../models/article.model';

const initialState: Array<Article> = [
  {
    id: '1',
    name: 'Angular State Management with NgRx',
    author: 'Author',
    publisher: 'Publisher',
  },
];

export const ArticleReducer = createReducer(
  initialState,
  on(addArticle, (state, { article }) => [...state, article])
);
