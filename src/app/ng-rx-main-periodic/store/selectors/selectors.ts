import { createSelector } from '@ngrx/store';
import { AppState, PeriodicElementState } from '../state/state';

export const selectPeriodicElementState = (state: AppState) => state.periodicElements;

export const selectFilteredElements = createSelector(
  selectPeriodicElementState,
  (state: PeriodicElementState) => {
    const { elements, filter } = state;
    return elements.filter(element =>
      element.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFilter = createSelector(
  selectPeriodicElementState,
  (state: PeriodicElementState) => state.filter
);

