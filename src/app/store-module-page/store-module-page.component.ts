import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Car, CarState } from './reducer/car.reducer';
import { selectCars, selectCar, selectCurrentRouteState, selectCurrentRouteFragment, selectCurrentQueryParams, selectCurrentRouteParams, selectCurrentUrl, selectCurrentTitle } from './selectors/car.selectors';

import { appInit } from './actions/car.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-module-page',
  templateUrl: './store-module-page.component.html',
  styleUrls: ['./store-module-page.component.scss']
})
export class StoreModulePageComponent implements OnInit {
  cars$: Observable<Car[]> = this.store.select(selectCars);
  selectedCar$: Observable<Car | undefined> = this.store.select(selectCar);
  currentRoute$: Observable<any> = this.store.select(selectCurrentRouteState);
  currentRouteFragment$: Observable<string | undefined> = this.store.select(selectCurrentRouteFragment);
  currentQueryParams$: Observable<{ [key: string]: string | null }> = this.store.select(selectCurrentQueryParams);
  currentRouteParams$: Observable<{ [key: string]: string | null }> = this.store.select(selectCurrentRouteParams);
  currentUrl$: Observable<string> = this.store.select(selectCurrentUrl);
  currentTitle$: Observable<string | undefined> = this.store.select(selectCurrentTitle);

  constructor(private store: Store<CarState>) {}

  ngOnInit(): void {
    // Test data
    const cars: Car[] = [
      { id: '1', year: '2022', make: 'Toyota', model: 'Corolla' },
      { id: '2', year: '2021', make: 'Honda', model: 'Civic' },
      { id: '3', year: '2020', make: 'Ford', model: 'Mustang' },
      { id: '4', year: '2019', make: 'Chevrolet', model: 'Camaro' },
      { id: '5', year: '2018', make: 'Nissan', model: 'Altima' },
    ];

    this.store.dispatch(appInit({ cars }));

    // or
    // Get a list of all cars
    // this.cars$ = this.store.select(selectCars);

    // Get route parameters and choose the appropriate car
    // this.selectedCar$ = this.store.select(selectCar);

    // Get the current route
    // this.currentRoute$ = this.store.select(selectCurrentRouteState);

    // Get a fragment of the current route
    // this.currentRouteFragment$ = this.store.select(selectCurrentRouteFragment);

    // Get query parameters
    // this.currentQueryParams$ = this.store.select(selectCurrentQueryParams);

    // Get route parameters
    // this.currentRouteParams$ = this.store.select(selectCurrentRouteParams);

    // Get the current URL
    // this.currentUrl$ = this.store.select(selectCurrentUrl);

    // Get route heading
    // this.currentTitle$ = this.store.select(selectCurrentTitle);
  }
}

