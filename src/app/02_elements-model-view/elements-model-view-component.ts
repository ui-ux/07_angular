import { FormsModule } from '@angular/forms';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-elements-model-view',
  templateUrl: './elements-model-view-component.html',
  imports: [FormsModule],
  styleUrl: './elements-model-view-component.scss',
})
export class ElementsModelViewComponent {
  readonly name = 'myName';
  readonly person = { name: 'your Name' };
  readonly signalPerson = signal({ name: 'Ada' });
  readonly signalPersonNameLength = computed(() => this.signalPerson().name.length);

  updateSignalPersonName(name: string): void {
    this.signalPerson.update((person) => ({ ...person, name }));
  }
}
