import { createReducer, on } from '@ngrx/store';
import { appInit } from '../actions/car.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface Car {
  id: string;
  year: string;
  make: string;
  model: string;
}

export type CarState = EntityState<Car>;

export const carAdapter = createEntityAdapter<Car>({
  selectId: (car: Car) => car.id,
});

const initialState = carAdapter.getInitialState();

export const reducer = createReducer<CarState>(
  initialState,
  on(appInit, (state, { cars }) => carAdapter.addMany(cars, state))
);
