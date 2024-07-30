import { createAction, props } from '@ngrx/store';
import { PeriodicElement } from '../models/periodic.model';

export const loadElements =
  // createAction: Function to create a new action.
  createAction(
    '[Periodic] Load Elements',
    // Function to define action properties.
    props<{ elements: PeriodicElement[] }>()
  );
export const setFilter =
  // createAction: Function to create a new action.
  createAction(
    '[Periodic] Set Filter',
    // Function to define action properties.
    props<{ filter: string }>()
  );
