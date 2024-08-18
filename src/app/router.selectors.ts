import { getRouterSelectors, RouterReducerState } from '@ngrx/router-store';

// Використовуємо getRouterSelectors для створення селекторів
export const {
    selectCurrentRoute,     // Вибирає поточний маршрут
    selectFragment,         // Вибирає фрагмент поточного маршруту
    selectQueryParams,      // Вибирає query параметри поточного маршруту
    selectQueryParam,       // Фабрична функція для вибору конкретного query параметра
    selectRouteParams,      // Вибирає параметри поточного маршруту
    selectRouteParam,       // Фабрична функція для вибору конкретного параметра маршруту
    selectRouteData,        // Вибирає дані поточного маршруту
    selectRouteDataParam,   // Фабрична функція для вибору конкретного параметра даних маршруту
    selectUrl,              // Вибирає поточний URL
    selectTitle,            // Вибирає заголовок (якщо він доступний)
} = getRouterSelectors();
