import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { ElementsModelViewComponent } from './02_elements-model-view/elements-model-view-component';
import { EventComponent } from './03_event/event-component';
import { OutputParentComponent } from './05_output-parent/output-parent-component';
import { ForParentComponent } from './06_for-parent/for-parent-component';
import { IfElementComponent } from './07_if-element/if-element-component';
import { NgClassComponent } from './08_ng-class/ng-class-component';
import { NgStyleComponent } from './09_ng-style/ng-style-component';
import { SwitchComponent } from './10_switch/switch-component';
import { PipesComponent } from './11_pipes/pipes-component';
import { ClientComponent } from './client/client.component';
import { CustomServiceComponent } from './custom-service/custom-service-component.component';
import { TemplateDirectiveFormsComponent } from './template-directive-forms/template-directive-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteParametersComponent } from './route-parameters/route-parameters.component';
import { RouteParametersDetailsComponent } from './route-parameters/route-parameters-details/route-parameters-details.component';
import { ChildTestOneComponent } from './route-parameters/child-test-one/child-test-one.component';
import { ChildTestTwoComponent } from './route-parameters/child-test-two/child-test-two.component';
import { NgRxMainComponent } from './ng-rx-main/ng-rx-main.component';
import { NgRxPeriodicComponent } from './ng-rx-main-periodic/ng-rx-periodic.component';
import { NgRxJsonComponent } from './ng-rx-json/ng-rx-json.component';
import { UsersGuard } from './ng-rx-json/guards/users.guard';
import { StoreModulePageComponent } from './store-module-page/store-module-page.component';
import { NgrxEntityComponent } from './ngrx-entity/ngrx-entity.component';
import { InputDecoratorComponent } from './04_input-decorator/input-decorator-component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: AuthenticationComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'elements-model-view' },
      { path: 'elements-model-view', component: ElementsModelViewComponent },
      { path: 'event', component: EventComponent },
      { path: 'input-decorator', component: InputDecoratorComponent },
      { path: 'output-parent', component: OutputParentComponent },
      { path: 'for-parent', component: ForParentComponent },
      { path: 'if-element', component: IfElementComponent },
      { path: 'ng-class', component: NgClassComponent },
      { path: 'ng-style', component: NgStyleComponent },
      { path: 'switch', component: SwitchComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'client', component: ClientComponent },
      { path: 'custom-service', component: CustomServiceComponent },
      { path: 'template-directive-forms', component: TemplateDirectiveFormsComponent },
      { path: 'reactive-forms', component: ReactiveFormsComponent },
      { path: 'route-parameters', component: RouteParametersComponent, pathMatch: 'full' },
      {
        path: 'route-parameters/:id',
        component: RouteParametersDetailsComponent,
        children: [
          { path: 'test-one', component: ChildTestOneComponent },
          { path: 'test-two', component: ChildTestTwoComponent },
        ],
      },
      { path: 'ngrx', component: NgRxMainComponent },
      { path: 'ngrx-periodic', component: NgRxPeriodicComponent },
      { path: 'ngrx-json', component: NgRxJsonComponent, canActivate: [UsersGuard] },
      {
        path: 'store-routing-page/:carId',
        component: StoreModulePageComponent,
        title: 'Store Routing Page',
      },
      { path: 'ngrx-entity', component: NgrxEntityComponent },
      {
        path: 'concepts',
        loadChildren: () =>
          import('./angular-concepts/angular-concepts.module').then(
            (module) => module.AngularConceptsModule,
          ),
      },
      {
        path: 'angular-features',
        loadChildren: () =>
          import('./angular-features/angular-features.routes').then(
            (module) => module.ANGULAR_FEATURES_ROUTES,
          ),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
