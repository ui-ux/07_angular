import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ElementsModelViewComponent } from './elements-model-view/elements-model-view.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { ChildInputDecoratorComponent } from './input-decorator/child-input-decorator/child-input-decorator.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { ChildOutputParentComponent } from './output-parent/child-output-parent/child-output-parent.component';
import { ForParentComponent } from './for-parent/for-parent.component';
import { ChildForComponent } from './for-parent/child-for/child-for.component';
import { IfElementComponent } from './if-element/if-elementcomponent';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SwitchComponent } from './switch/switch.component';
import { PipesComponent } from './pipes/pipes.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomServiceComponent } from './custom-service/custom-service.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ElementsModelViewComponent,
    ChildInputDecoratorComponent,
    InputDecoratorComponent,
    ChildInputDecoratorComponent,
    OutputParentComponent,
    ChildOutputParentComponent,
    ForParentComponent,
    ChildForComponent,
    IfElementComponent,
    NgClassComponent,
    NgStyleComponent,
    SwitchComponent,
    PipesComponent,
    ClientComponent,
    CustomServiceComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
