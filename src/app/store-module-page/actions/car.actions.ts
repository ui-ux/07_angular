import { createAction, props } from '@ngrx/store';
import { Car } from '../reducer/car.reducer';

// We define an action to initialize the application, which adds several cars to the state
export const appInit = createAction(
  '[App] Init', // We describe the action source for convenience during debugging
  props<{ cars: Car[] }>() // We define the property that we pass along with the action
);
