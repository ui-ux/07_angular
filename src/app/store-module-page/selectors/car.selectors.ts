import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterSelectors } from '@ngrx/router-store';
import { carAdapter, CarState } from '../reducer/car.reducer';

export const {
  selectQueryParams,
} = getRouterSelectors();

export const carsFeatureSelector = createFeatureSelector<CarState>('cars');

const { selectEntities, selectAll } = carAdapter.getSelectors();

export const selectCarEntities = createSelector(
  carsFeatureSelector,
  selectEntities
);

export const selectCars = createSelector(carsFeatureSelector, selectAll);

export const selectCar = createSelector(
  selectCarEntities,
  selectQueryParams,
  (carEntities, queryParams) => {
    const carId = queryParams['carId'];
    return carId ? carEntities[carId] : undefined;
  }
);



