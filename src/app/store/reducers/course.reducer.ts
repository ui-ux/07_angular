import { Action } from '@ngrx/store';
import { ArticleAction, ArticleActionType } from '../actions/article.actions';
import { Article } from '../models/article.model';

const initialState: Array<Article> = [
  {
    id: '1',
    name: 'Angular State Management with NgRx',
    author: 'Author',
    publisher: 'Publisher'
  },
];

export function ArticleReducer(
  state: Array<Article> = initialState,
  action: Action
) {

  if (action.type === ArticleActionType.ADD_ITEM) {
    const articleAction = action as ArticleAction;
    return [...state, articleAction.payload];
  }
  return state;
}


