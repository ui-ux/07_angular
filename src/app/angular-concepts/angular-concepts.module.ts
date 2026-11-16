import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularConceptsComponent } from './angular-concepts.component';
import { FocusTargetComponent } from './components/focus-target.component';
import { ProjectionCardComponent } from './components/projection-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { InitialsPipe } from './pipes/initials.pipe';
import { routes } from './angular-concepts.routes';

@NgModule({
  declarations: [
    AngularConceptsComponent,
    FocusTargetComponent,
    ProjectionCardComponent,
    HighlightDirective,
    InitialsPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AngularConceptsModule {}
