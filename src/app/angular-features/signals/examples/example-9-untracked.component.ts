import { Component, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-signals-example9',
  standalone: true,
  templateUrl: './example-9-untracked.component.html',
  styleUrl: '../styles/interactive-demo.scss',
})
export class Example9Component {
  readonly count = signal(0);
  readonly theme = signal('light');

  constructor() {
    effect(() => {
      console.info('Count changed:', this.count(), 'Current theme:', untracked(this.theme));
    });
  }

  increment(): void {
    this.count.update(value => value + 1);
  }

  toggleTheme(): void {
    this.theme.update(theme => theme === 'light' ? 'dark' : 'light');
  }
}
