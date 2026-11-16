import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AngularConceptsComponent } from '../angular-concepts.component';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard implements CanDeactivate<AngularConceptsComponent> {
  canDeactivate(component: AngularConceptsComponent): boolean {
    if (!component.hasUnsavedChanges || typeof window === 'undefined') {
      return true;
    }

    return window.confirm('Є незбережені зміни. Залишити сторінку?');
  }
}
