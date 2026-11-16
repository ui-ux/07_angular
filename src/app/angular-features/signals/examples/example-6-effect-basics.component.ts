import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example6',
  standalone: true,
  templateUrl: './example-6-effect-basics.component.html',
  styleUrl: '../styles/state-demo.scss',
})
export class Example6Component {
  readonly count = signal(0);
  readonly theme = signal<'light' | 'dark'>('light');

  constructor() {
    effect(() => {
      console.info('Count changed:', this.count());
    });

    effect(() => {
      console.info('Theme changed:', this.theme());
    });
  }

  increment(): void {
    this.count.update(value => value + 1);
  }

  toggleTheme(): void {
    this.theme.update(theme => theme === 'light' ? 'dark' : 'light');
  }
}
