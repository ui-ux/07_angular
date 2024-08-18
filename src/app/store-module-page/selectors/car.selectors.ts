import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterSelectors } from '@ngrx/router-store';
import { carAdapter, CarState } from '../reducer/car.reducer';

// We use getRouterSelectors to create router selectors
const {
  selectCurrentRoute,     // Selects the current route
  selectFragment,         // Selects a fragment of the current route
  selectQueryParams,      // Selects the query parameters of the current route
  selectQueryParam,       // A factory function for selecting a specific query parameter
  selectRouteParams,      // Selects the parameters of the current route
  selectRouteParam,       // Factory function for selecting a specific route parameter
  selectRouteData,        // Selects the current route data
  selectRouteDataParam,   // A factory function to select a specific route data parameter
  selectUrl,              // Selects the current URL
  selectTitle,            // Selects a title (if available)
} = getRouterSelectors();

export const carsFeatureSelector = createFeatureSelector<CarState>('cars');

// get selectors for cars
const { selectEntities, selectAll } = carAdapter.getSelectors();

// select all cars
export const selectCars = createSelector(carsFeatureSelector, selectAll);

export const selectCarEntities = createSelector(
  carsFeatureSelector,
  selectEntities
);

// select a specific car by ID
export const selectCar = createSelector(
  selectCarEntities,
  selectRouteParams,
  (cars, routeParams) => {
    const carId = routeParams['carId'];
    return carId ? cars[carId] : undefined;
  }
);

// select the current route
export const selectCurrentRouteState = createSelector(
  selectCurrentRoute,
  (route) => route
);

// select a fragment of the current route
export const selectCurrentRouteFragment = createSelector(
  selectFragment,
  (fragment) => fragment
);

// Select the query parameters of the current route
export const selectCurrentQueryParams = createSelector(
  selectQueryParams,
  (queryParams) => queryParams
);

// select a specific query parameter
export const selectCurrentQueryParam = (param: string) => createSelector(
  selectQueryParams,
  (queryParams) => queryParams[param]
);

// select the route parameters
export const selectCurrentRouteParams = createSelector(
  selectRouteParams,
  (params) => params
);

// select a specific parameter of the route
export const selectCurrentRouteParam = (param: string) => createSelector(
  selectRouteParams,
  (params) => params[param]
);

// select the route data
export const selectCurrentRouteData = createSelector(
  selectRouteData,
  (data) => data
);

// select a specific parameter of the route data
export const selectCurrentRouteDataParam = (param: string) => createSelector(
  selectRouteData,
  (data) => data[param]
);

// select the current URL
export const selectCurrentUrl = createSelector(
  selectUrl,
  (url) => url
);

// select the route heading
export const selectCurrentTitle = createSelector(
  selectTitle,
  (title) => title
);

