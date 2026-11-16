import { Routes } from '@angular/router';
import { AngularFeaturesComponent } from './angular-features.component';
import { SignalsPageComponent } from './signals/signals-page.component';
import { Example1Component } from './signals/examples/example-1-signal-computed-effect.component';
import { Example2Component } from './signals/examples/example-2-set-vs-update.component';
import { Example3Component } from './signals/examples/example-3-signals-with-primitives-objects-and-arrays.component';
import { Example4Component } from './signals/examples/example-4-computed-for-derived-state.component';
import { Example5Component } from './signals/examples/example-5-computed-with-multiple-dependencies.component';
import { Example6Component } from './signals/examples/example-6-effect-basics.component';
import { Example7Component } from './signals/examples/example-7-rxjs-comparison.component';
import { Example8Component } from './signals/examples/example-8-signal-inputs-outputs-model.component';
import { Example9Component } from './signals/examples/example-9-untracked.component';
import { Example10Component } from './signals/examples/example-10-resource.component';
import { StandalonePageComponent } from './standalone/standalone-page.component';
import { ZonelessPageComponent } from './zoneless/zoneless-page.component';

export const ANGULAR_FEATURES_ROUTES: Routes = [
  {
    path: '',
    component: AngularFeaturesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'signals/example1' },
      {
        path: 'signals',
        component: SignalsPageComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'example1' },
          { path: 'example1', component: Example1Component, title: 'Signal, computed, effect' },
          { path: 'example2', component: Example2Component, title: 'Signal set vs update' },
          { path: 'example3', component: Example3Component, title: 'Signals with different values' },
          { path: 'example4', component: Example4Component, title: 'Computed derived state' },
          { path: 'example5', component: Example5Component, title: 'Computed dependencies' },
          { path: 'example6', component: Example6Component, title: 'Signal effects' },
          { path: 'example7', component: Example7Component, title: 'Signals and RxJS' },
          { path: 'example8', component: Example8Component, title: 'Signal component APIs' },
          { path: 'example9', component: Example9Component, title: 'Untracked signal reads' },
          { path: 'example10', component: Example10Component, title: 'Async resource state' },
        ],
      },
      { path: 'standalone', component: StandalonePageComponent, title: 'Standalone components' },
      { path: 'zoneless', component: ZonelessPageComponent, title: 'Zoneless change detection' },
    ],
  },
];
