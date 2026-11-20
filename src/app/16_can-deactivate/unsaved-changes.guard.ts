import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UnsavedChangesComponent } from './unsaved-changes.component';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard implements CanDeactivate<UnsavedChangesComponent> {
  canDeactivate(component: UnsavedChangesComponent): boolean {
    if (!component.hasUnsavedChanges || typeof window === 'undefined') {
      return true;
    }

    return window.confirm('You have unsaved changes. Leave this page?');
  }
}
