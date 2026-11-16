import { Routes } from '@angular/router';
import { AngularConceptsComponent } from './angular-concepts.component';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';
import { ConceptLessonResolver } from './services/concept-lesson.resolver';

export const routes: Routes = [
  {
    path: '',
    component: AngularConceptsComponent,
    title: 'Advanced Angular concepts',
    resolve: { lesson: ConceptLessonResolver },
    canDeactivate: [UnsavedChangesGuard],
  },
];
