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
import { CustomServiceComponent } from './custom-service/custom-service-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDirectiveFormsComponent } from './template-directive-forms/template-directive-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RouteParametersComponent } from './route-parameters/route-parameters.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteParametersDetailsComponent } from './route-parameters/route-parameters-details/route-parameters-details.component';
import { ChildTestTwoComponent } from './route-parameters/child-test-two/child-test-two.component';
import { ChildTestOneComponent } from './route-parameters/child-test-one/child-test-one.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { NgRxMainComponent } from './ng-rx-main/ng-rx-main.component';
import { StoreModule } from '@ngrx/store';
import { ArticleReducer } from './ng-rx-main/store/reducers/course.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgRxPeriodicComponent } from './ng-rx-main-periodic/ng-rx-periodic.component';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { periodicElementReducer } from './ng-rx-main-periodic/store/reducers/periodic.reduser';
import { NgRxJsonComponent } from './ng-rx-json/ng-rx-json.component';
import { UserEffects } from './ng-rx-json/effects/user.effects';
import { userReducer } from './ng-rx-json/store/reducer/user.reducer';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModulePageComponent } from './store-module-page/store-module-page.component';
import { reducer } from './store-module-page/reducer/car.reducer';
import { NgrxEntityComponent } from './ngrx-entity/ngrx-entity.component';
import { userReducer2 } from './ngrx-entity/store/reducers/user.reducer';
import { UserEffects2 } from './ngrx-entity/store/effects/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environment';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ElementsModelViewComponent,
    ChildInputDecoratorComponent,
    InputDecoratorComponent,
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
    TemplateDirectiveFormsComponent,
    ReactiveFormsComponent,
    PageNotFoundComponent,
    RouteParametersComponent,
    RouteParametersDetailsComponent,
    ChildTestOneComponent,
    ChildTestTwoComponent,
    AuthenticationComponent,
    HomeComponent,
    NgRxMainComponent,
    NgRxPeriodicComponent,
    NgRxJsonComponent,
    StoreModulePageComponent,
    NgrxEntityComponent,
  ],
  imports: [
    StoreModule.forRoot(
      {
        periodicElements: periodicElementReducer,
        article: ArticleReducer,
        users: userReducer,
        router: routerReducer,
        cars: reducer,
        users2: userReducer2
      }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // Saves history for 25 actions
      logOnly: environment.production,
      // Only logging in production
    }),
    EffectsModule.forRoot([
      UserEffects,
      UserEffects2
    ]),

    BrowserModule,
    CommonModule,
    RouterOutlet,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [HttpClient, provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
