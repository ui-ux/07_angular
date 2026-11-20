import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unsaved-changes',
  templateUrl: './unsaved-changes.component.html',
  imports: [FormsModule],
})
export class UnsavedChangesComponent {
  draft = 'Start editing this draft.';
  private savedDraft = this.draft;
  statusMessage = '';

  get hasUnsavedChanges(): boolean {
    return this.draft !== this.savedDraft;
  }

  saveChanges(): void {
    this.savedDraft = this.draft;
    this.statusMessage = 'Changes saved.';
  }
}
