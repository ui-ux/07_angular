# Angular learning app

Навчальний проєкт на Angular 21. Кожен розділ у навігації показує окрему можливість Angular; компоненти організовано за навчальними темами.

## Запуск

Потрібні Node.js 20.19+, 22.12+ або 24+ та npm.

У корені проєкту:

```powershell
npm ci
npm start
```

Застосунок відкривається за адресою `http://localhost:4200/`. Для production-збірки виконайте `npm run build`.

Unit-тести працюють на Vitest через вбудований Angular CLI builder. Запустіть їх командою `npm test`.

Якщо інсталяція залежностей завершується помилкою мережі, перевірте доступ до npm registry і налаштування проксі/VPN; помилка підключення не виправляється змінами Angular-коду.

## Що демонструє проєкт

| Розділ | Приклади |
|---|---|
| `elements-model-view`, `event` | Компоненти, шаблони, прив’язка даних та обробка подій |
| `input-decorator`, `output-parent`, `for-parent` | Обмін даними між батьківськими й дочірніми компонентами |
| `if-element`, `ng-class`, `ng-style`, `switch`, `pipes` | Умовний та списковий рендеринг, атрибути й pipes |
| `template-directive-forms`, `reactive-forms` | Два підходи до форм і базова валідація |
| `client`, `custom-service` | HttpClient, сервіси, типізовані Observable, стани завантаження й помилок |
| `route-parameters` | Параметри URL і вкладені маршрути |
| `ngrx`, `ngrx-periodic`, `ngrx-json`, `ngrx-entity`, `store-routing-page` | Store, reducers, actions, selectors, effects, entity та router-store |
| `concepts` | Lazy loading, resolver, `CanDeactivate`, lifecycle hooks, `ViewChild`, content projection, власна директива й pipe, Signals, `OnPush`, async/cross-field валідація та `FormArray` |
| `angular-features` | Окремий lazy-loaded блок із 10 Signals прикладами, Standalone components і поясненням Zoneless; async resource використовує RxJS і `toSignal` |

## Структура та навігація

- `src/main.ts` запускає застосунок через `AppModule` (NgModule-підхід).
- `src/app/app.routes.ts` містить єдину конфігурацію маршрутів; `AppRoutingModule` передає її в Router.
- Основні навчальні розділи завантажуються в оболонці `HomeComponent`; `concepts` підключений як lazy-loaded feature module.
- `angular-features` доступний з навігації як окремий lazy-loaded блок із власними дочірніми маршрутами; standalone-компоненти маршрутизуються без зміни запуску через `AppModule`.
- Загальні компоненти розміщені у відповідних тематичних папках. Спільні HTTP-модель і сервіси — у `src/app/models` та `src/app/services`.

У `angular-features/signals/example10` демонстрація асинхронного стану використовує `HttpClient`, `toObservable`, `switchMap` та `toSignal`. Зміна ID скасовує попередній HTTP-запит; завантаження, помилки та успішна відповідь показуються окремо. Zoneless-сторінка пояснює підхід, але не вимикає Zone.js у застосунку.

## HTTP та API

`ListService` повертає типізований `Post`, а `ApiUrlInterceptor` перетворює внутрішні URL виду `/api/...` на адресу з `environment.apiUrl`. Параметри `_page` і `_limit` використовуються для сторінкового API JSONPlaceholder.

JSONPlaceholder — демонстраційний сервіс: запити на оновлення повертають приклад відповіді, але не зберігають зміни як справжній backend. Для власного API змініть `apiUrl` у `src/app/environment.ts`.

## Автентифікація

Поточний `AuthService` — лише навчальна імітація: перевірка облікових даних виконується у браузері, а token зберігається в `localStorage`. Це не захищає реальні сторінки чи дані. У production потрібні backend-перевірка, безпечне керування сесією та відповідні серверні правила доступу. Не використовуйте демонстраційні значення як справжні облікові дані.

## Інтернаціоналізація та стилі

Переклади розміщені в `src/assets/i18n`. Загальні стилі — у `src/styles.scss`, стилі окремих прикладів — поруч із компонентами. Angular Material уже налаштований у проєкті; для нових прикладів додаткових UI-залежностей не потрібно.
