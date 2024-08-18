import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { Car, CarState } from './reducer/car.reducer';
import { selectCars, selectCar, selectCarEntities } from './selectors/car.selectors';
import { appInit } from './actions/car.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-store-module-page',
  templateUrl: './store-module-page.component.html',
  styleUrls: ['./store-module-page.component.scss']
})
export class StoreModulePageComponent implements OnInit {
  cars$: Observable<Car[]> | undefined;
  selectedCar$: Observable<Car | undefined> | undefined;

  constructor(private store: Store<CarState>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Задати дані для демонстрації
    const cars: Car[] = [
      { id: '1', year: '2022', make: 'Toyota', model: 'Corolla' },
      { id: '2', year: '2021', make: 'Honda', model: 'Civic' }
    ];
    this.store.dispatch(appInit({ cars }));

    // Отримати список всіх автомобілів
    this.cars$ = this.store.select(selectCars);

    // Отримати параметри маршруту та вибрати відповідний автомобіль
    this.selectedCar$ = combineLatest([
      this.store.select(selectCarEntities),
      this.route.paramMap.pipe(
        map(params => params.get('carId'))
      )
    ]).pipe(
      map(([carEntities, carId]) => carId ? carEntities[carId] : undefined)
    );

  }

  navigateToCar(carId: string): void {
    this.router.navigate(['/home/store-routing-page', carId]);
  }
}




