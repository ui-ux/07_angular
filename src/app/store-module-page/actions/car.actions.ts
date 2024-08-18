import { createAction, props } from '@ngrx/store';
import { Car } from '../reducer/car.reducer';

// Визначаємо дію для ініціалізації додатку, яка додає декілька автомобілів до стану
export const appInit = createAction(
  '[App] Init', // Описуємо джерело дії для зручності при налагодженні
  props<{ cars: Car[] }>() // Визначаємо властивість, яку передаємо разом з дією
);
