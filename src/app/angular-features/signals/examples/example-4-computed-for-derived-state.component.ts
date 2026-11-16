import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example4',
  standalone: true,
  templateUrl: './example-4-computed-for-derived-state.component.html',
  styleUrl: '../styles/state-demo.scss',
})
export class Example4Component {
  readonly firstName = signal('Demo');
  readonly lastName = signal('User');
  readonly fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  readonly initials = computed(() => `${this.firstName()[0]}${this.lastName()[0]}`.toUpperCase());

  updateName(): void {
    this.firstName.set(this.firstName() === 'Demo' ? 'Sample' : 'Demo');
  }

  updateLastName(): void {
    this.lastName.set(this.lastName() === 'User' ? 'Developer' : 'User');
  }
}
