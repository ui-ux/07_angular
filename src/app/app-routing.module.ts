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
  { path: '**', component: ElementsModelViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
