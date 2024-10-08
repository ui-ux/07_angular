import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsModelViewComponent } from './elements-model-view/elements-model-view.component';
import { EventComponent } from './event/event.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { ForParentComponent } from './for-parent/for-parent.component';
import { IfElementComponent } from './if-element/if-elementcomponent';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SwitchComponent } from './switch/switch.component';
import { PipesComponent } from './pipes/pipes.component';
import { ClientComponent } from './client/client.component';
import { CustomServiceComponent } from './custom-service/custom-service-component.component';
import { TemplateDirectiveFormsComponent } from './template-directive-forms/template-directive-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteParametersComponent } from './route-parameters/route-parameters.component';
import { RouteParametersDetailsComponent } from './route-parameters/route-parameters-details/route-parameters-details.component';
import { ChildTestTwoComponent } from './route-parameters/child-test-two/child-test-two.component';
import { ChildTestOneComponent } from './route-parameters/child-test-one/child-test-one.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { NgRxMainComponent } from './ng-rx-main/ng-rx-main.component';
import { NgRxPeriodicComponent } from './ng-rx-main-periodic/ng-rx-periodic.component';
import { NgRxJsonComponent } from './ng-rx-json/ng-rx-json.component';
import { StoreModulePageComponent } from './store-module-page/store-module-page.component';
import { NgrxEntityComponent } from './ngrx-entity/ngrx-entity.component';
import { UsersGuard } from './ng-rx-json/guards/users.guard';

const routes: Routes = [
  { path: '', component: AuthenticationComponent},
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/elements-model-view', pathMatch: 'full'},
      { path: '', component: ElementsModelViewComponent},
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
      { path: 'route-parameters', component: RouteParametersComponent },
      {
        path: 'route-parameters/:id', component: RouteParametersDetailsComponent,
        children: [
          { path: 'test-one', component: ChildTestOneComponent },
          { path: 'test-two', component: ChildTestTwoComponent },
        ]
      },
      { path: 'ngrx', component: NgRxMainComponent },
      { path: 'ngrx-periodic', component: NgRxPeriodicComponent },
      {
        path: 'ngrx-json',
        component: NgRxJsonComponent,
        canActivate: [UsersGuard],
      },
      {
        path: 'store-routing-page/:carId',
        component: StoreModulePageComponent,
        title: 'Store Routing Page',
      },
      { path: 'ngrx-entity', component: NgrxEntityComponent },

    ]
  },



  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
