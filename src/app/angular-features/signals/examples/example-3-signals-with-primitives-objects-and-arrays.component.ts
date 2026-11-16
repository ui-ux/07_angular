import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example3',
  standalone: true,
  templateUrl: './example-3-signals-with-primitives-objects-and-arrays.component.html',
  styleUrl: '../styles/state-demo.scss',
})
export class Example3Component {
  readonly count = signal(0);
  readonly name = signal('Demo user');
  readonly isActive = signal(true);
  readonly user = signal({ name: 'Demo user', age: 30 });
  readonly tags = signal(['angular', 'signals']);

  incrementCount(): void {
    this.count.update(value => value + 1);
  }

  toggleStatus(): void {
    this.isActive.update(value => !value);
  }

  renameUser(): void {
    this.name.set(this.name() === 'Demo user' ? 'Angular dev' : 'Demo user');
  }

  updateUser(): void {
    this.user.update(user => ({ ...user, age: user.age + 1 }));
  }

  addTag(): void {
    this.tags.update(tags => [...tags, 'reactive']);
  }

  reset(): void {
    this.count.set(0);
    this.name.set('Demo user');
    this.isActive.set(true);
    this.user.set({ name: 'Demo user', age: 30 });
    this.tags.set(['angular', 'signals']);
  }
}
