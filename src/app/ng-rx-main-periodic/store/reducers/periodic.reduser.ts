import { createReducer, on } from '@ngrx/store';
import { PeriodicElementState } from '../state/state';
import { loadElements, setFilter } from '../actions/actions';


const initialState: PeriodicElementState = {
  elements: [],
  filter: 'ro'
};

export const periodicElementReducer = createReducer(
  initialState,
  on(loadElements, (state, { elements }) => ({
    ...state,
    elements
  })),
  on(setFilter, (state, { filter }) => ({
    ...state,
    filter
  }))
);
