import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event-component.html',
  styleUrl: './event-component.scss',
})
export class EventComponent {
  standardName = 'Name Person';
  standardMessage = '';
  readonly signalName = signal('Name Person');
  readonly signalNameLength = computed(() => this.signalName().length);
  readonly signalNameStatus = computed(() =>
    this.signalNameLength() >= 5 ? 'Long name' : 'Short name',
  );
  readonly signalMessage = signal('');

  onStandardInput(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.standardName = event.target.value;
    }
  }

  onStandardClick(): void {
    this.standardMessage = `Clicked for ${this.standardName}`;
  }

  onStandardEnter(value: string): void {
    this.standardMessage = `Enter pressed for ${value}`;
  }

  onSignalInput(value: string): void {
    this.signalName.set(value);
  }

  onSignalClick(): void {
    this.signalMessage.set(`Clicked for ${this.signalName()}`);
  }

  onSignalEnter(value: string): void {
    this.signalMessage.set(`Enter pressed for ${value}`);
  }
}
