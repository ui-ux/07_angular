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

const routes: Routes = [
  { path: '', redirectTo: '/elements-model-view', pathMatch: 'full'},
  { path: '', component: ElementsModelViewComponent },
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
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
